"""
Flux Image Generation Function

Text-to-image generation via Flux 2 Pro through Polza.ai provider.

Actions:
- generate: Start image generation (returns requestId)
- status: Check generation status and get result URL
- models: List available image models
"""

import json
import os
from dataclasses import dataclass
from typing import Optional

import requests


# =============================================================================
# CONFIGURATION
# =============================================================================

PROVIDER_BASE_URL = "https://api.polza.ai/api/v1"
DEFAULT_MODEL = "flux-2-pro"
DEFAULT_TIMEOUT = 60


@dataclass
class GenerateRequest:
    prompt: str
    model: str = DEFAULT_MODEL
    aspect_ratio: str = "1:1"
    resolution: str = "1K"


# =============================================================================
# CORS HELPERS
# =============================================================================

def get_cors_headers() -> dict:
    allowed_origins = os.environ.get("ALLOWED_ORIGINS", "*")
    return {
        "Access-Control-Allow-Origin": allowed_origins,
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }


def cors_response(status: int, body: dict) -> dict:
    return {
        "statusCode": status,
        "headers": {**get_cors_headers(), "Content-Type": "application/json"},
        "body": json.dumps(body, ensure_ascii=False),
        "isBase64Encoded": False,
    }


def options_response() -> dict:
    return {
        "statusCode": 200,
        "headers": get_cors_headers(),
        "body": "",
        "isBase64Encoded": False,
    }


# =============================================================================
# API HELPERS
# =============================================================================

def get_api_key() -> str:
    api_key = os.environ.get("POLZA_AI_API_KEY", "")
    if not api_key:
        raise ValueError("POLZA_AI_API_KEY not configured")
    return api_key


def make_request(endpoint: str, method: str = "POST", data: Optional[dict] = None) -> dict:
    """Make request to provider API."""
    api_key = get_api_key()
    url = f"{PROVIDER_BASE_URL}/{endpoint}"

    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {api_key}",
    }

    if method == "GET":
        response = requests.get(url, headers=headers, timeout=DEFAULT_TIMEOUT)
    else:
        response = requests.post(url, headers=headers, json=data, timeout=DEFAULT_TIMEOUT)

    if response.status_code == 201:
        return response.json()

    response.raise_for_status()
    return response.json()


# =============================================================================
# ACTION HANDLERS
# =============================================================================

def handle_generate(body: dict) -> dict:
    """
    POST ?action=generate
    Start image generation.

    Body:
    - prompt: string - required
    - model: string - optional (default: flux-2-pro)
    - aspect_ratio: string - optional (default: 1:1)
    - resolution: string - optional (default: 1K)

    Returns requestId for status polling.
    """
    prompt = body.get("prompt", "").strip()
    if not prompt:
        return cors_response(400, {"error": "prompt is required"})

    model = body.get("model", DEFAULT_MODEL)
    aspect_ratio = body.get("aspect_ratio", "1:1")
    resolution = body.get("resolution", "1K")

    # Validate aspect_ratio
    valid_ratios = ["1:1", "2:3", "3:2", "3:4", "4:3", "4:5", "5:4", "9:16", "16:9", "21:9"]
    if aspect_ratio not in valid_ratios:
        return cors_response(400, {"error": f"Invalid aspect_ratio. Valid: {', '.join(valid_ratios)}"})

    # Validate resolution
    valid_resolutions = ["1K", "2K", "4K"]
    if resolution not in valid_resolutions:
        return cors_response(400, {"error": f"Invalid resolution. Valid: {', '.join(valid_resolutions)}"})

    request_data = {
        "model": model,
        "prompt": prompt,
        "aspect_ratio": aspect_ratio,
        "resolution": resolution,
    }

    try:
        result = make_request("images/generations", data=request_data)

        request_id = result.get("requestId")
        if not request_id:
            return cors_response(500, {"error": "No requestId in response"})

        return cors_response(201, {
            "success": True,
            "requestId": request_id,
            "message": "Generation started",
        })
    except requests.exceptions.Timeout:
        return cors_response(503, {"error": "API timeout"})
    except requests.exceptions.ConnectionError:
        return cors_response(503, {"error": "API unavailable"})
    except requests.exceptions.HTTPError as e:
        error_body = {}
        try:
            error_body = e.response.json()
        except Exception:
            pass
        error_msg = error_body.get("error", {}).get("message", str(e))
        return cors_response(e.response.status_code, {"error": error_msg})
    except Exception as e:
        return cors_response(500, {"error": str(e)})


def handle_status(body: dict) -> dict:
    """
    GET/POST ?action=status
    Check generation status and get result URL.

    Body/Params:
    - requestId: string - required
    """
    request_id = body.get("requestId", "")
    if not request_id:
        return cors_response(400, {"error": "requestId is required"})

    try:
        result = make_request(f"images/{request_id}", method="GET")
        
        # Debug: log the raw result
        print(f"[DEBUG] Status API response: {json.dumps(result)}")

        # Try different field names for image URL
        image_url = result.get("imageUrl") or result.get("image_url") or result.get("url") or result.get("result")

        return cors_response(200, {
            "success": True,
            "status": result.get("status", "unknown"),
            "imageUrl": image_url,
            "error": result.get("error"),
        })
    except requests.exceptions.Timeout:
        return cors_response(503, {"error": "API timeout"})
    except requests.exceptions.ConnectionError:
        return cors_response(503, {"error": "API unavailable"})
    except requests.exceptions.HTTPError as e:
        if e.response.status_code == 404:
            return cors_response(404, {"error": "Request not found"})
        error_body = {}
        try:
            error_body = e.response.json()
        except Exception:
            pass
        error_msg = error_body.get("error", {}).get("message", str(e))
        return cors_response(e.response.status_code, {"error": error_msg})
    except Exception as e:
        return cors_response(500, {"error": str(e)})


def handle_models(body: dict) -> dict:
    """
    GET/POST ?action=models
    List available image generation models.
    """
    # Static list for now - Polza.ai image models
    models = [
        {"id": "flux-2-pro", "name": "Flux 2 Pro", "description": "High quality image generation"},
        {"id": "flux-pro", "name": "Flux Pro", "description": "Fast image generation"},
        {"id": "gemini-3-pro-image-preview", "name": "Gemini 3 Pro Image", "description": "Google image generation"},
    ]

    return cors_response(200, {
        "success": True,
        "models": models,
        "provider": "polza.ai",
    })


# =============================================================================
# MAIN HANDLER
# =============================================================================

def handler(event: dict, context) -> dict:
    """Main entry point."""
    method = event.get("httpMethod", "POST")

    if method == "OPTIONS":
        return options_response()

    params = event.get("queryStringParameters") or {}
    action = params.get("action", "")

    if not action:
        return cors_response(400, {"error": "action parameter is required"})

    body = {}
    if method == "POST":
        raw_body = event.get("body", "{}")
        try:
            body = json.loads(raw_body) if raw_body else {}
        except json.JSONDecodeError:
            return cors_response(400, {"error": "Invalid JSON"})
    elif method == "GET":
        # For GET requests, use query params as body
        body = params

    if action == "generate":
        return handle_generate(body)
    elif action == "status":
        return handle_status(body)
    elif action == "models":
        return handle_models(body)
    else:
        return cors_response(400, {"error": f"Unknown action: {action}"})