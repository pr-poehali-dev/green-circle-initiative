import json
import uuid
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Тестовая функция для проверки восстановления после ошибки деплоя
    Args: event - dict с параметрами запроса, context - объект контекста
    Returns: JSON ответ с информацией о функции
    '''
    method: str = event.get('httpMethod', 'GET')
    
    # Обработка CORS OPTIONS
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-User-Id',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    # Генерируем UUID для демонстрации
    request_uuid = str(uuid.uuid4())
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'isBase64Encoded': False,
        'body': json.dumps({
            'message': 'Функция восстановлена после ошибки!',
            'status': 'recovered',
            'generated_uuid': request_uuid,
            'request_id': context.request_id
        })
    }