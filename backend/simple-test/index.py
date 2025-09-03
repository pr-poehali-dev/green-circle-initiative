import json
import os
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Test SIMPLE_TEST environment variable and return debug info
    Args: event - dict with HTTP request data
          context - object with request metadata  
    Returns: HTTP response with environment variable test results
    '''
    
    # Get SIMPLE_TEST from environment
    simple_test_value = os.environ.get('SIMPLE_TEST', 'Variable not found')
    
    # Collect all environment variables for debugging
    all_env_vars = dict(os.environ)
    
    result = {
        'status': 'success',
        'message': 'Backend function working!',
        'simple_test': {
            'value': simple_test_value,
            'found': simple_test_value != 'Variable not found',
            'length': len(simple_test_value)
        },
        'environment_info': {
            'total_vars': len(all_env_vars),
            'has_simple_test': 'SIMPLE_TEST' in all_env_vars,
            'available_vars': list(all_env_vars.keys())[:10]  # First 10 for debugging
        },
        'request_info': {
            'method': event.get('httpMethod', 'unknown'),
            'request_id': getattr(context, 'request_id', 'unknown'),
            'function_name': getattr(context, 'function_name', 'unknown')
        },
        'timestamp': '2025-09-03T15:00:00Z'
    }
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        },
        'isBase64Encoded': False,
        'body': json.dumps(result, indent=2, ensure_ascii=False, default=str)
    }