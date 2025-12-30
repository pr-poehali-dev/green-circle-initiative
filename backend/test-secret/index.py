"""
Тестовая функция для проверки секретов
"""
import json
import os


def handler(event: dict, context) -> dict:
    """Возвращает значение секрета MAIN_DB_SCHEMA"""
    
    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    schema_value = os.environ.get('MAIN_DB_SCHEMA', 'NOT_FOUND')
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({
            'secret_name': 'MAIN_DB_SCHEMA',
            'value': schema_value,
            'all_env_keys': list(os.environ.keys())
        }),
        'isBase64Encoded': False
    }
