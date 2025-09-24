import json
from datetime import datetime
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Тестовая API функция для проверки работоспособности
    Args: event - dict с httpMethod, body, queryStringParameters
          context - объект с атрибутами: request_id, function_name, function_version
    Returns: HTTP ответ с базовой информацией
    '''
    method: str = event.get('httpMethod', 'GET')
    
    # Обработка CORS OPTIONS запроса
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-User-Id, X-Auth-Token',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    # GET запрос - базовая информация
    if method == 'GET':
        params = event.get('queryStringParameters', {}) or {}
        name: str = params.get('name', 'Мир')
        
        response_data = {
            'message': f'Привет, {name}!',
            'timestamp': datetime.now().isoformat(),
            'status': 'success',
            'request_id': context.request_id,
            'function_name': context.function_name,
            'version': '1.0.0'
        }
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps(response_data, ensure_ascii=False)
        }
    
    # POST запрос - обработка данных
    if method == 'POST':
        try:
            body_data = json.loads(event.get('body', '{}'))
            
            response_data = {
                'message': 'Данные получены успешно',
                'received_data': body_data,
                'timestamp': datetime.now().isoformat(),
                'status': 'processed',
                'request_id': context.request_id
            }
            
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'isBase64Encoded': False,
                'body': json.dumps(response_data, ensure_ascii=False)
            }
        except json.JSONDecodeError:
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Неверный формат JSON'}, ensure_ascii=False)
            }
    
    # Неподдерживаемый метод
    return {
        'statusCode': 405,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({'error': 'Метод не поддерживается'}, ensure_ascii=False)
    }