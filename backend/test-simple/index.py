import json
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Simple test endpoint that returns current timestamp and status
    Args: event - dict with HTTP request data
          context - object with request metadata  
    Returns: HTTP response with test data
    '''
    
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'GET':
        import datetime
        
        result = {
            'message': 'Backend function is working!',
            'timestamp': datetime.datetime.now().isoformat(),
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