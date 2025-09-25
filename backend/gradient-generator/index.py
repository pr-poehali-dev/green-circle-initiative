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
    
    if method == 'GET':
        # Коллекция готовых красивых градиентов (линейные)
        linear_gradients = [
            GradientData(
                css="linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                colors=["#667eea", "#764ba2"],
                direction="135deg",
                name="Purple Bliss",
                category="pastel"
            ),
            GradientData(
                css="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                colors=["#f093fb", "#f5576c"],
                direction="135deg",
                name="Sweet Morning",
                category="romantic"
            ),
            GradientData(
                css="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                colors=["#4facfe", "#00f2fe"],
                direction="135deg",
                name="Malibu Beach",
                category="cool"
            ),
            GradientData(
                css="linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
                colors=["#43e97b", "#38f9d7"],
                direction="135deg",
                name="Fresh Turquoise",
                category="cool"
            ),
            GradientData(
                css="linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
                colors=["#fa709a", "#fee140"],
                direction="135deg",
                name="Sunset Vibes",
                category="sunset"
            ),
            GradientData(
                css="linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
                colors=["#a8edea", "#fed6e3"],
                direction="135deg",
                name="Cotton Candy",
                category="pastel"
            ),
            GradientData(
                css="linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
                colors=["#ff9a9e", "#fecfef"],
                direction="135deg",
                name="Rose Water",
                category="romantic"
            ),
            GradientData(
                css="linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
                colors=["#ffecd2", "#fcb69f"],
                direction="135deg",
                name="Peach Fuzz",
                category="warm"
            ),
            GradientData(
                css="linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
                colors=["#89f7fe", "#66a6ff"],
                direction="135deg",
                name="Sky Blue",
                category="cool"
            ),
            GradientData(
                css="linear-gradient(135deg, #2c3e50 0%, #4a6741 100%)",
                colors=["#2c3e50", "#4a6741"],
                direction="135deg",
                name="Dark Forest",
                category="dark"
            )
        ]
        
        # Коллекция радиальных градиентов  
        radial_gradients = [
            GradientData(
                css="radial-gradient(circle at center, #ff6b6b 0%, #ee5a24 100%)",
                colors=["#ff6b6b", "#ee5a24"],
                direction="circle at center",
                name="Fire Ball",
                category="warm"
            ),
            GradientData(
                css="radial-gradient(ellipse at top, #667eea 0%, #764ba2 100%)",
                colors=["#667eea", "#764ba2"],
                direction="ellipse at top",
                name="Purple Sphere",
                category="pastel"
            ),
            GradientData(
                css="radial-gradient(circle at bottom right, #00c9ff 0%, #92fe9d 100%)",
                colors=["#00c9ff", "#92fe9d"],
                direction="circle at bottom right",
                name="Ocean Bubble",
                category="cool"
            ),
            GradientData(
                css="radial-gradient(ellipse at center, #ffeaa7 0%, #fab1a0 100%)",
                colors=["#ffeaa7", "#fab1a0"],
                direction="ellipse at center",
                name="Warm Glow",
                category="warm"
            ),
            GradientData(
                css="radial-gradient(circle at top left, #fd79a8 0%, #fdcb6e 100%)",
                colors=["#fd79a8", "#fdcb6e"],
                direction="circle at top left",
                name="Pink Sunrise",
                category="romantic"
            ),
            GradientData(
                css="radial-gradient(ellipse at bottom, #a29bfe 0%, #6c5ce7 100%)",
                colors=["#a29bfe", "#6c5ce7"],
                direction="ellipse at bottom",
                name="Violet Drop",
                category="pastel"
            ),
            GradientData(
                css="radial-gradient(circle at center, #00b894 0%, #00cec9 100%)",
                colors=["#00b894", "#00cec9"],
                direction="circle at center",
                name="Mint Circle",
                category="cool"
            ),
            GradientData(
                css="radial-gradient(ellipse at top right, #e17055 0%, #74b9ff 100%)",
                colors=["#e17055", "#74b9ff"],
                direction="ellipse at top right",
                name="Sunset Orb",
                category="sunset"
            ),
            GradientData(
                css="radial-gradient(circle at bottom left, #2d3436 0%, #636e72 100%)",
                colors=["#2d3436", "#636e72"],
                direction="circle at bottom left",
                name="Shadow Sphere",
                category="dark"
            ),
            GradientData(
                css="radial-gradient(ellipse at center, #ff7675 0%, #fd79a8 100%)",
                colors=["#ff7675", "#fd79a8"],
                direction="ellipse at center",
                name="Coral Heart",
                category="romantic"
            )
        ]
        
        # Объединяем все градиенты
        gradients = linear_gradients + radial_gradients
        
        params = event.get('queryStringParameters', {}) or {}
        category_filter = params.get('category', '').lower()
        
        # Фильтрация по категории
        if category_filter:
            filtered_gradients = [g for g in gradients if g.category == category_filter]
            if not filtered_gradients:
                filtered_gradients = gradients
        else:
            filtered_gradients = gradients
        
        # Выбираем случайный градиент
        selected = random.choice(filtered_gradients)
        
        # Возвращаем данные
        result = {
            'gradient': {
                'css': selected.css,
                'colors': selected.colors,
                'direction': selected.direction,
                'name': selected.name,
                'category': selected.category
            },
            'available_categories': list(set(g.category for g in gradients)),
            'total_gradients': len(gradients),
            'request_id': context.request_id
        }
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps(result)
        }
    
    return {
        'statusCode': 405,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'error': 'Method not allowed'})
    }