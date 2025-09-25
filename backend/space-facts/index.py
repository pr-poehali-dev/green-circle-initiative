import json
import random
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Генератор случайных фактов о космосе
    Args: event - HTTP запрос, context - контекст выполнения
    Returns: Случайный факт о космосе с дополнительной информацией
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
    
    # Космические факты
    space_facts = [
        {
            "fact": "Один день на Венере длится дольше, чем год на Венере",
            "explanation": "Венера вращается вокруг своей оси за 243 земных дня, но облетает Солнце за 225 дней",
            "category": "планеты"
        },
        {
            "fact": "В космосе нельзя плакать как на Земле",
            "explanation": "Без гравитации слёзы не стекают по щекам, а остаются в виде пузырей на глазах",
            "category": "физика"
        },
        {
            "fact": "Нейтронная звезда размером с город может весить больше Солнца",
            "explanation": "Плотность нейтронной звезды настолько велика, что чайная ложка её вещества весила бы миллиарды тонн",
            "category": "звёзды"
        },
        {
            "fact": "На Марсе закаты голубые, а небо красное",
            "explanation": "Из-за состава атмосферы и пыли в воздухе цвета неба на Марсе противоположны земным",
            "category": "планеты"
        },
        {
            "fact": "Галактика Млечный Путь движется со скоростью 600 км/с",
            "explanation": "Наша галактика несётся через космос к созвездию Гидры с невероятной скоростью",
            "category": "галактики"
        },
        {
            "fact": "На МКС астронавты встречают рассвет и закат каждые 90 минут",
            "explanation": "Станция облетает Землю за 90 минут, поэтому экипаж видит 16 рассветов и закатов в сутки",
            "category": "космонавтика"
        },
        {
            "fact": "Юпитер защищает Землю от астероидов",
            "explanation": "Мощная гравитация Юпитера притягивает к себе большинство опасных объектов из космоса",
            "category": "планеты"
        },
        {
            "fact": "Время в космосе идёт быстрее, чем на Земле",
            "explanation": "Согласно теории относительности, гравитация замедляет время. В космосе гравитация слабее",
            "category": "физика"
        }
    ]
    
    # Выбираем случайный факт
    selected_fact = random.choice(space_facts)
    
    # Получаем параметры запроса
    query_params = event.get('queryStringParameters', {}) or {}
    category_filter = query_params.get('category')
    
    # Фильтруем по категории если указана
    if category_filter:
        filtered_facts = [f for f in space_facts if f['category'] == category_filter]
        if filtered_facts:
            selected_fact = random.choice(filtered_facts)
    
    # Формируем ответ
    result = {
        'success': True,
        'timestamp': context.request_id,  # Используем request_id как timestamp
        'total_facts': len(space_facts),
        'categories': list(set(f['category'] for f in space_facts)),
        'fact_data': selected_fact,
        'fun_bonus': f"🚀 Факт #{random.randint(1, 1000)}",
        'request_info': {
            'function_name': 'space-facts',
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