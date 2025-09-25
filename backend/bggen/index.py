import json
import random
from typing import Dict, Any, List
from dataclasses import dataclass

@dataclass
class GradientData:
    """Структура данных для градиента"""
    css: str
    colors: List[str]
    direction: str
    name: str
    category: str

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Генерирует красивые CSS градиенты для фонов
    Args: event - dict с httpMethod, queryStringParameters
          context - объект с атрибутами request_id, function_name
    Returns: HTTP response с CSS градиентом и метаданными
    '''
    method: str = event.get('httpMethod', 'GET')
    
    # Handle CORS OPTIONS request
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-User-Id, X-Auth-Token, X-Session-Id',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    # Коллекция готовых красивых градиентов
    gradients = [
        GradientData(
            css="linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            colors=["#667eea", "#764ba2"],
            direction="135deg",
            name="Purple Dream",
            category="Sunset"
        ),
        GradientData(
            css="linear-gradient(120deg, #a8edea 0%, #fed6e3 100%)",
            colors=["#a8edea", "#fed6e3"],
            direction="120deg", 
            name="Mint & Pink",
            category="Pastel"
        ),
        GradientData(
            css="linear-gradient(45deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)",
            colors=["#ff9a9e", "#fecfef"],
            direction="45deg",
            name="Rose Quartz",
            category="Romantic"
        ),
        GradientData(
            css="linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
            colors=["#ffecd2", "#fcb69f"],
            direction="135deg",
            name="Peach Glow",
            category="Warm"
        ),
        GradientData(
            css="linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
            colors=["#4facfe", "#00f2fe"],
            direction="to right",
            name="Ocean Breeze",
            category="Cool"
        ),
        GradientData(
            css="linear-gradient(45deg, #fa709a 0%, #fee140 100%)",
            colors=["#fa709a", "#fee140"],
            direction="45deg",
            name="Sunset Vibes",
            category="Sunset"
        ),
        GradientData(
            css="linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            colors=["#667eea", "#764ba2"],
            direction="135deg",
            name="Deep Space",
            category="Dark"
        ),
        GradientData(
            css="linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)",
            colors=["#89f7fe", "#66a6ff"],
            direction="120deg",
            name="Sky Blue",
            category="Cool"
        ),
        GradientData(
            css="linear-gradient(135deg, #ff8a00 0%, #e52e71 100%)",
            colors=["#ff8a00", "#e52e71"],
            direction="135deg",
            name="Fire Sunset",
            category="Sunset"
        ),
        GradientData(
            css="linear-gradient(45deg, #13547a 0%, #80d0c7 100%)",
            colors=["#13547a", "#80d0c7"],
            direction="45deg",
            name="Teal Magic",
            category="Cool"
        )
    ]
    
    # Получаем параметры запроса
    params = event.get('queryStringParameters') or {}
    category_filter = params.get('category', '').lower()
    
    # Фильтруем градиенты по категории если указано
    filtered_gradients = gradients
    if category_filter:
        filtered_gradients = [g for g in gradients if g.category.lower() == category_filter]
        if not filtered_gradients:
            filtered_gradients = gradients  # Возвращаем все если категория не найдена
    
    # Выбираем случайный градиент
    selected_gradient = random.choice(filtered_gradients)
    
    # Собираем все доступные категории
    all_categories = list(set(g.category for g in gradients))
    
    # Формируем ответ
    result = {
        'success': True,
        'gradient': {
            'css': selected_gradient.css,
            'colors': selected_gradient.colors,
            'direction': selected_gradient.direction,
            'name': selected_gradient.name,
            'category': selected_gradient.category
        },
        'total_gradients': len(gradients),
        'filtered_count': len(filtered_gradients),
        'available_categories': sorted(all_categories),
        'filter_applied': category_filter or None,
        'usage_tip': f'Используй CSS: background: {selected_gradient.css};',
        'request_info': {
            'function_name': 'bggen',
            'method': method,
            'filtered_by': category_filter or 'none'
        },
        'timestamp': context.request_id  # Используем request_id как timestamp
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