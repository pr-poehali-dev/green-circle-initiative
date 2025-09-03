import json
import os
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Test API_KEY_1 environment variable access
    Args: event - dict with HTTP request data
          context - object with request metadata  
    Returns: HTTP response with API key status
    '''
    
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'GET':
        # Get API_KEY_1 from environment
        api_key = os.environ.get('API_KEY_1', 'Not found')
        
        result = {
            'message': 'API key test successful!',
            'api_key_status': 'Found' if api_key != 'Not found' else 'Not found',
            'api_key_preview': api_key[:5] + '...' if len(api_key) > 5 else api_key,
            'key_length': len(api_key),
            'status': 'success',
            'request_id': context.request_id
        }
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps(result)
        }
    
    return {
        'statusCode': 405,
        'headers': {'Content-Type': 'application/json'},
        'body': json.dumps({'error': 'Method not allowed'})
    }