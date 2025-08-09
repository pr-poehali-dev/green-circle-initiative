import json
import random
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Генерирует случайное приветствие для формы входа
    Args: event - dict с HTTP запросом, context - объект с request_id
    Returns: JSON с случайным приветствием
    '''
    
    greetings = [
        "Добро пожаловать! 🚀",
        "Рады видеть вас снова! ✨", 
        "Привет, космонавт! 🌟",
        "Готовы к новым открытиям? 🌙",
        "Добро пожаловать на борт! 🛸",
        "Время покорять новые высоты! ⭐",
        "Приветствуем в нашей галактике! 🌌",
        "Готовы к космическому приключению? 🪐",
        "Добро пожаловать в будущее! 🔮",
        "Поехали в мир возможностей! 🚀"
    ]
    
    random_greeting = random.choice(greetings)
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'isBase64Encoded': False,
        'body': json.dumps({
            'greeting': random_greeting,
            'timestamp': context.request_id
        })
    }