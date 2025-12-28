"""
Auth Email Extension - Single Function Router

Routes:
  POST /auth/register       - Register new user
  POST /auth/login          - Login and get tokens
  POST /auth/refresh        - Refresh access token
  POST /auth/logout         - Logout and revoke tokens
  POST /auth/reset-password - Request/complete password reset
"""
from handlers import register, login, logout, refresh, reset_password
from utils.http import options_response, error


ROUTES = {
    'register': register.handle,
    'login': login.handle,
    'refresh': refresh.handle,
    'logout': logout.handle,
    'reset-password': reset_password.handle,
}


def handler(event: dict, context) -> dict:
    """Main router for auth endpoints."""
    method = event.get('httpMethod', 'GET').upper()

    if method == 'OPTIONS':
        return options_response()

    if method != 'POST':
        return error(405, 'Method not allowed')

    # Extract route from query parameter ?action=register or from URL path
    query_params = event.get('queryStringParameters', {}) or {}
    route = query_params.get('action')
    
    # Fallback: try to extract from path
    if not route:
        request_context = event.get('requestContext', {})
        http_context = request_context.get('http', {})
        path = http_context.get('path', '') or event.get('url', '')
        
        parts = [p for p in path.strip('/').split('/') if p]
        if len(parts) >= 1:
            route = parts[-1]  # Take last part

    if not route or route not in ROUTES:
        return error(404, f'Unknown route: {route}. Available: {list(ROUTES.keys())}')

    return ROUTES[route](event)