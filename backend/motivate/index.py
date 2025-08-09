import json
import random
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Генерирует случайную мотивирующую фразу для поднятия настроения
    Args: event - dict с httpMethod и другими параметрами HTTP запроса
          context - объект с атрибутами request_id, function_name и другими
    Returns: HTTP response с мотивирующей фразой в JSON формате
    '''
    
    motivational_phrases = [
        "Сегодня ваш день удачи! 🌟",
        "Вы способны на великие дела! 💪",
        "Каждый новый день — новая возможность! ✨",
        "Верьте в себя и всё получится! 🚀",
        "Ваша энергия может изменить мир! ⚡",
        "Мечты становятся реальностью! 🌈",
        "Вы — источник вдохновения! 🎯",
        "Успех начинается с первого шага! 👣",
        "Ваша улыбка делает день ярче! ☀️",
        "Время творить чудеса! ✨",
        "Вы уникальны и неповторимы! 🦋",
        "Позитивные мысли притягивают удачу! 🍀",
        "Каждая минута — шанс стать лучше! ⏰",
        "Ваши идеи могут изменить всё! 💡",
        "Радость живёт в мелочах! 🌸",
        "Вы создаёте свою реальность! 🎨",
        "Дорогу осилит идущий! 🛤️",
        "Ваш потенциал безграничен! 🌌"
    ]
    
    selected_phrase = random.choice(motivational_phrases)
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'isBase64Encoded': False,
        'body': json.dumps({
            'phrase': selected_phrase,
            'request_id': context.request_id
        })
    }