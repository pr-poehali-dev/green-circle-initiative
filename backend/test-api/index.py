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
    
    # Get SIMPLE_TEST from environment
    test_var = os.environ.get('SIMPLE_TEST', 'Not found')
    
    result = {
        'message': 'Simple test successful!',
        'test_var_status': 'Found' if test_var != 'Not found' else 'Not found',
        'test_var_value': test_var,
        'var_length': len(test_var),
        'status': 'success',
        'timestamp': '2025-09-03T12:00:00Z',
        'request_id': getattr(context, 'request_id', 'unknown'),
        'function_name': getattr(context, 'function_name', 'unknown')
    }
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
        },
        'isBase64Encoded': False,
        'body': json.dumps(result, indent=2, ensure_ascii=False, default=str)
    }