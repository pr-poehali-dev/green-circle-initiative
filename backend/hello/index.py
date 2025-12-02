import json
from typing import Dict, Any
from datetime import datetime


def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Cosmic greeting endpoint with space facts
    Args: event - dict with httpMethod, queryStringParameters
          context - object with request_id attribute
    Returns: HTTP response dict with cosmic greeting and random space fact
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
    
    if method == 'GET':
        params = event.get('queryStringParameters') or {}
        name: str = params.get('name', 'космонавт')
        
        space_facts = [
            'В космосе нет звука, потому что там нет воздуха для передачи звуковых волн',
            'День на Венере длиннее года на Венере',
            'На Марсе закаты голубого цвета',
            'В Млечном Пути около 100 миллиардов звезд',
            'Один день на Меркурии равен 59 земным дням'
        ]
        
        import random
        fact = random.choice(space_facts)
        
        response_data = {
            'message': f'🚀 Привет, {name}! Добро пожаловать в КОСМО-МАГАЗИН!',
            'spaceFact': fact,
            'timestamp': datetime.utcnow().isoformat(),
            'status': 'success',
            'mission': 'Твой путь к звездам начинается здесь!'
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
    
    return {
        'statusCode': 405,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'isBase64Encoded': False,
        'body': json.dumps({'error': 'Method not allowed'})
    }