import json
import os
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Test SIMPLE_TEST environment variable access
    Args: event - dict with HTTP request data
          context - object with request metadata  
    Returns: HTTP response with API key status
    '''
    
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'GET':
        # Get SIMPLE_TEST from environment
        test_var = os.environ.get('SIMPLE_TEST', 'Not found')
        
        result = {
            'message': 'Simple test successful!',
            'test_var_status': 'Found' if test_var != 'Not found' else 'Not found',
            'test_var_value': test_var,
            'var_length': len(test_var),
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