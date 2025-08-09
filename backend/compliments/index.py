import json
import random
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Возвращает случайные комплименты для пользователей
    Args: event - dict с HTTP запросом; context - объект с request_id и другими атрибутами  
    Returns: JSON с комплиментом
    '''
    
    compliments = [
        "Вы выглядите потрясающе сегодня! ✨",
        "У вас невероятно хороший вкус! 🌟", 
        "Вы излучаете позитивную энергию! ☀️",
        "Ваша улыбка может озарить любую комнату! 😊",
        "Вы просто великолепны! 💫",
        "У вас удивительная харизма! ⭐",
        "Вы вдохновляете окружающих! 🚀",
        "Ваше присутствие делает день лучше! 🌈",
        "Вы излучаете уверенность! 💪",
        "У вас замечательное чувство стиля! 👑",
        "Вы просто восхитительны! 🌸",
        "Ваша позитивность заразительна! 🎉"
    ]
    
    compliment = random.choice(compliments)
    
    return {
        'statusCode': 200,
        'headers': {'Content-Type': 'application/json'},
        'isBase64Encoded': False,
        'body': json.dumps({
            'compliment': compliment,
            'request_id': context.request_id
        })
    }