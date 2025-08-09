import json
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Отладочная функция для вывода полного содержимого event и context
    Args: event - dict с полным содержимым HTTP запроса
          context - объект с атрибутами Yandex Cloud Function
    Returns: HTTP response с детальной информацией для отладки
    '''
    
    # Собираем информацию о context
    context_info = {}
    
    # Получаем все атрибуты context через dir()
    context_attributes = [attr for attr in dir(context) if not attr.startswith('_')]
    
    for attr in context_attributes:
        try:
            value = getattr(context, attr)
            # Пробуем сериализовать, если не получается - преобразуем в строку
            try:
                json.dumps(value)
                context_info[attr] = value
            except (TypeError, ValueError):
                context_info[attr] = str(value)
        except Exception as e:
            context_info[attr] = f"Error getting attribute: {str(e)}"
    
    # Также пытаемся получить специальные методы context
    special_methods = ['get_remaining_time_in_millis']
    for method_name in special_methods:
        if hasattr(context, method_name):
            try:
                method = getattr(context, method_name)
                if callable(method):
                    context_info[method_name + '_result'] = method()
            except Exception as e:
                context_info[method_name + '_error'] = str(e)
    
    # Формируем полный отчет
    debug_info = {
        'timestamp': '2025-08-09T12:00:00Z',
        'event': event,
        'context_info': context_info,
        'event_keys': list(event.keys()) if isinstance(event, dict) else 'event is not dict',
        'event_type': type(event).__name__,
        'context_type': type(context).__name__,
        'context_str': str(context)
    }
    
    # Красивый HTML для браузера
    html_content = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <title>Debug Output</title>
        <style>
            body {{ font-family: 'Courier New', monospace; padding: 20px; background: #1a1a1a; color: #00ff00; }}
            .section {{ border: 1px solid #00ff00; margin: 20px 0; padding: 15px; }}
            .title {{ color: #ffff00; font-size: 18px; font-weight: bold; }}
            pre {{ background: #000; padding: 10px; overflow: auto; border: 1px solid #333; }}
            .key {{ color: #ff6b6b; }}
            .value {{ color: #4ecdc4; }}
        </style>
    </head>
    <body>
        <h1>🐛 Debug Output - Event & Context</h1>
        
        <div class="section">
            <div class="title">📋 EVENT OBJECT</div>
            <pre>{json.dumps(event, indent=2, ensure_ascii=False, default=str)}</pre>
        </div>
        
        <div class="section">
            <div class="title">⚙️ CONTEXT INFO</div>
            <pre>{json.dumps(context_info, indent=2, ensure_ascii=False, default=str)}</pre>
        </div>
        
        <div class="section">
            <div class="title">📊 SUMMARY</div>
            <p><span class="key">Event type:</span> <span class="value">{type(event).__name__}</span></p>
            <p><span class="key">Context type:</span> <span class="value">{type(context).__name__}</span></p>
            <p><span class="key">Event keys:</span> <span class="value">{list(event.keys()) if isinstance(event, dict) else 'N/A'}</span></p>
        </div>
    </body>
    </html>
    """
    
    # Если это GET запрос из браузера, возвращаем HTML
    if event.get('httpMethod') == 'GET':
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'text/html; charset=utf-8'
            },
            'isBase64Encoded': False,
            'body': html_content
        }
    
    # Для остальных запросов возвращаем JSON
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'isBase64Encoded': False,
        'body': json.dumps(debug_info, indent=2, ensure_ascii=False, default=str)
    }