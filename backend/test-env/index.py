import json
import os
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Get TEST_VAR environment variable for testing backend systems
    Args: event - dict with HTTP request data
          context - object with request metadata  
    Returns: HTTP response with TEST_VAR value
    '''
    
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'GET':
        # Get API_KEY_1 from environment
        api_key_value = os.environ.get('API_KEY_1', 'Variable not found')
        
        result = {
            'api_key': api_key_value[:10] + '...' if len(api_key_value) > 10 else api_key_value,
            'key_length': len(api_key_value),
            'status': 'success',
            'message': 'API key retrieved successfully'
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