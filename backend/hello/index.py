import json
from typing import Dict, Any
from datetime import datetime
import random


def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Advanced cosmic API with planets, missions, and space exploration stats
    Args: event - dict with httpMethod, queryStringParameters, body
          context - object with request_id attribute
    Returns: HTTP response with cosmic data, planets, missions, and user stats
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-User-Id, X-Mission-Id',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method == 'GET':
        params = event.get('queryStringParameters') or {}
        name: str = params.get('name', 'космонавт')
        mode: str = params.get('mode', 'full')
        
        space_facts = [
            'В космосе нет звука, потому что там нет воздуха для передачи звуковых волн',
            'День на Венере длиннее года на Венере',
            'На Марсе закаты голубого цвета',
            'В Млечном Пути около 100 миллиардов звезд',
            'Один день на Меркурии равен 59 земным дням',
            'МКС облетает Землю каждые 90 минут',
            'Температура в открытом космосе около -270°C',
            'Свет от Солнца достигает Земли за 8 минут 20 секунд',
            'На Нептуне ветры достигают 2100 км/ч',
            'Один год на Плутоне равен 248 земным годам'
        ]
        
        planets_data = [
            {'name': 'Меркурий', 'emoji': '☿️', 'distance': '57.9 млн км', 'type': 'Каменная'},
            {'name': 'Венера', 'emoji': '♀️', 'distance': '108.2 млн км', 'type': 'Каменная'},
            {'name': 'Земля', 'emoji': '🌍', 'distance': '149.6 млн км', 'type': 'Каменная'},
            {'name': 'Марс', 'emoji': '♂️', 'distance': '227.9 млн км', 'type': 'Каменная'},
            {'name': 'Юпитер', 'emoji': '♃', 'distance': '778.5 млн км', 'type': 'Газовый гигант'},
            {'name': 'Сатурн', 'emoji': '♄', 'distance': '1.4 млрд км', 'type': 'Газовый гигант'},
            {'name': 'Уран', 'emoji': '♅', 'distance': '2.9 млрд км', 'type': 'Ледяной гигант'},
            {'name': 'Нептун', 'emoji': '♆', 'distance': '4.5 млрд км', 'type': 'Ледяной гигант'}
        ]
        
        cosmic_emojis = ['🌟', '✨', '🌠', '💫', '⭐', '🌌', '🚀', '🛸']
        emoji = random.choice(cosmic_emojis)
        fact = random.choice(space_facts)
        planet = random.choice(planets_data)
        mission_id = f'KOSMO-{random.randint(1000, 9999)}'
        
        response_data = {
            'message': f'{emoji} Привет, {name}! Добро пожаловать в КОСМО-МАГАЗИН!',
            'spaceFact': fact,
            'planetOfTheDay': planet,
            'missionId': mission_id,
            'timestamp': datetime.utcnow().isoformat(),
            'status': 'success',
            'mission': 'Твой путь к звездам начинается здесь!',
            'stats': {
                'totalVisitors': random.randint(10000, 99999),
                'activeMissions': random.randint(15, 99),
                'planetsDiscovered': random.randint(8, 20),
                'galaxiesExplored': random.randint(1, 12)
            }
        }
        
        if mode == 'quick':
            response_data = {
                'message': response_data['message'],
                'missionId': mission_id,
                'status': 'success'
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
    
    if method == 'POST':
        body_data = json.loads(event.get('body', '{}'))
        action = body_data.get('action', 'explore')
        user_name = body_data.get('name', 'космонавт')
        
        actions_responses = {
            'explore': f'🌌 {user_name}, начинаем исследование далеких галактик!',
            'mission': f'🚀 {user_name}, миссия запущена! Курс на Марс!',
            'discover': f'🔭 {user_name}, обнаружена новая планета!',
            'trade': f'💫 {user_name}, торговля с космическими станциями активирована!'
        }
        
        message = actions_responses.get(action, f'⭐ {user_name}, действие {action} выполнено!')
        
        response_data = {
            'status': 'success',
            'action': action,
            'message': message,
            'timestamp': datetime.utcnow().isoformat(),
            'result': {
                'points': random.randint(10, 100),
                'reward': random.choice(['🌟 Звездная медаль', '💎 Космический кристалл', '🏆 Награда исследователя'])
            }
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
        'body': json.dumps({'error': 'Метод не поддерживается'}, ensure_ascii=False)
    }
