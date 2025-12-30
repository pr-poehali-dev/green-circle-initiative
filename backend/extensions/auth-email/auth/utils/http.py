"""HTTP response utilities."""
import os
import json
from typing import Optional


def get_cors_origin(request_origin: str = None) -> str:
    """Get allowed CORS origin from env or request."""
    configured = os.environ.get('CORS_ORIGIN', '*')
    
    # If wildcard and request has origin, use request origin for credentials support
    if configured == '*' and request_origin:
        return request_origin
    
    return configured


def make_headers(set_cookie: Optional[str] = None, request_origin: str = None) -> dict:
    """Create response headers with CORS."""
    origin = get_cors_origin(request_origin)
    headers = {
        'Access-Control-Allow-Origin': origin,
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Authorization, X-Cookie',
        'Access-Control-Allow-Credentials': 'true',
        'Content-Type': 'application/json'
    }
    if set_cookie:
        # Use X-Set-Cookie - proxy will convert to Set-Cookie
        headers['X-Set-Cookie'] = set_cookie
    return headers


def response(status_code: int, body: dict, set_cookie: Optional[str] = None, request_origin: str = None) -> dict:
    """Create HTTP response."""
    return {
        'statusCode': status_code,
        'headers': make_headers(set_cookie, request_origin),
        'body': json.dumps(body),
        'isBase64Encoded': False
    }


def options_response(request_origin: str = None) -> dict:
    """Create OPTIONS preflight response."""
    return {
        'statusCode': 200,
        'headers': make_headers(None, request_origin),
        'body': '',
        'isBase64Encoded': False
    }


def error(status_code: int, message: str, request_origin: str = None) -> dict:
    """Create error response."""
    return response(status_code, {'error': message}, None, request_origin)