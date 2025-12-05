import json
import os
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Отладочная функция для проверки переменных окружения
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    # Получаем переменные
    database_url = os.environ.get('DATABASE_URL', 'NOT_SET')
    aws_key = os.environ.get('AWS_ACCESS_KEY_ID', 'NOT_SET')
    aws_secret = os.environ.get('AWS_SECRET_ACCESS_KEY', 'NOT_SET')
    
    # Печатаем в логи
    print(f"DATABASE_URL: {database_url}")
    print(f"AWS_ACCESS_KEY_ID: {aws_key}")
    print(f"AWS_SECRET_ACCESS_KEY: {'SET' if aws_secret != 'NOT_SET' else 'NOT_SET'} (length: {len(aws_secret)})")
    
    # Возвращаем маскированные значения
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'isBase64Encoded': False,
        'body': json.dumps({
            'database_url_set': database_url != 'NOT_SET',
            'database_url_length': len(database_url),
            'aws_key_set': aws_key != 'NOT_SET',
            'aws_key_length': len(aws_key),
            'aws_secret_set': aws_secret != 'NOT_SET',
            'aws_secret_length': len(aws_secret),
            'message': 'Check backend/debug-env logs for full values'
        })
    }
