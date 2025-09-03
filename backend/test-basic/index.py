import json
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Basic test endpoint without environment variables
    Args: event - dict with HTTP request data
          context - object with request metadata  
    Returns: HTTP response with test data
    '''
    
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'GET':
        result = {
            'message': 'Backend function working!',
            'status': 'success',
            'function_name': context.function_name,
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