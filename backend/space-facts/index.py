import json
import random
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Генератор случайных фактов о животных
    Args: event - HTTP запрос, context - контекст выполнения
    Returns: Случайный факт о животных с дополнительной информацией
    '''
    method: str = event.get('httpMethod', 'GET')
    
    # Handle CORS OPTIONS request
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    # Факты о животных
    animal_facts = [
        {
            "fact": "Осьминоги имеют три сердца и голубую кровь",
            "explanation": "Два сердца качают кровь через жабры, третье - по всему телу. Голубая кровь из-за гемоцианина вместо гемоглобина",
            "category": "морские"
        },
        {
            "fact": "Слоны боятся пчёл и умеют плавать",
            "explanation": "Слоны избегают пчелиных ульев и могут плыть часами, используя хобот как трубку для дыхания",
            "category": "млекопитающие"
        },
        {
            "fact": "Акулы существуют дольше деревьев",
            "explanation": "Акулы появились 400 млн лет назад, а деревья - только 350 млн лет назад",
            "category": "морские"
        },
        {
            "fact": "Коты мурлыкают на частоте, которая лечит кости",
            "explanation": "Частота 20-50 Гц стимулирует заживление костей и мышц - поэтому коты быстро восстанавливаются",
            "category": "млекопитающие"
        },
        {
            "fact": "Дельфины дают друг другу имена",
            "explanation": "У каждого дельфина есть уникальный свист-подпись, по которому его узнают сородичи",
            "category": "морские"
        },
        {
            "fact": "Пингвины делают предложения камешками",
            "explanation": "Самец пингвина ищет самый красивый камешек и подносит самке как символ любви",
            "category": "птицы"
        },
        {
            "fact": "Медведи могут бегать со скоростью 60 км/ч",
            "explanation": "Несмотря на крупные размеры, медведи развивают скорость быстрее большинства велосипедистов",
            "category": "млекопитающие"
        },
        {
            "fact": "Совы не могут двигать глазами",
            "explanation": "Глаза совы зафиксированы в черепе, но она поворачивает голову на 270 градусов",
            "category": "птицы"
        }
    ]
    
    # Выбираем случайный факт
    selected_fact = random.choice(animal_facts)
    
    # Получаем параметры запроса
    query_params = event.get('queryStringParameters', {}) or {}
    category_filter = query_params.get('category')
    
    # Фильтруем по категории если указана
    if category_filter:
        filtered_facts = [f for f in animal_facts if f['category'] == category_filter]
        if filtered_facts:
            selected_fact = random.choice(filtered_facts)
    
    # Формируем ответ
    result = {
        'success': True,
        'timestamp': context.request_id,  # Используем request_id как timestamp
        'total_facts': len(animal_facts),
        'categories': list(set(f['category'] for f in animal_facts)),
        'fact_data': selected_fact,
        'fun_bonus': f"🐾 Факт #{random.randint(1, 1000)}",
        'request_info': {
            'function_name': 'animal-facts',
            'method': method,
            'filtered_by': category_filter or 'none'
        }
    }
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'isBase64Encoded': False,
        'body': json.dumps(result, ensure_ascii=False)
    }