"""
Загрузка изображений для товаров
Args: event с httpMethod, body (base64), headers; context с request_id
Returns: HTTP response с URL загруженного изображения
"""

import json
import base64
import os
import uuid
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    method: str = event.get('httpMethod', 'GET')
    
    # Обработка CORS OPTIONS запроса
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': headers,
            'body': json.dumps({'error': 'Разрешен только POST метод'})
        }
    
    try:
        # Получаем данные файла
        body_data = json.loads(event.get('body', '{}'))
        
        file_data = body_data.get('file')
        file_name = body_data.get('fileName', 'image.jpg')
        file_type = body_data.get('fileType', 'image/jpeg')
        
        if not file_data:
            return {
                'statusCode': 400,
                'headers': headers,
                'body': json.dumps({'error': 'Не передан файл'})
            }
        
        # Проверяем тип файла
        allowed_types = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif']
        if file_type not in allowed_types:
            return {
                'statusCode': 400,
                'headers': headers,
                'body': json.dumps({'error': 'Неподдерживаемый тип файла. Разрешены: JPG, PNG, WebP, GIF'})
            }
        
        # Проверяем размер файла (максимум 5MB в base64)
        if len(file_data) > 7 * 1024 * 1024:  # ~5MB после декодирования base64
            return {
                'statusCode': 400,
                'headers': headers,
                'body': json.dumps({'error': 'Файл слишком большой. Максимум 5MB'})
            }
        
        # Декодируем base64
        try:
            # Убираем префикс data:image/...;base64,
            if ',' in file_data:
                file_data = file_data.split(',')[1]
            
            file_bytes = base64.b64decode(file_data)
        except Exception as e:
            return {
                'statusCode': 400,
                'headers': headers,
                'body': json.dumps({'error': 'Ошибка декодирования файла'})
            }
        
        # Генерируем уникальное имя файла
        file_extension = file_name.split('.')[-1].lower() if '.' in file_name else 'jpg'
        unique_filename = f"{uuid.uuid4().hex}.{file_extension}"
        
        # Для демонстрации возвращаем URL-заглушку
        # В реальном приложении здесь был бы код загрузки в облачное хранилище
        placeholder_url = f"https://via.placeholder.com/400x400/6366f1/ffffff?text={file_name[:10]}"
        
        return {
            'statusCode': 200,
            'headers': headers,
            'body': json.dumps({
                'url': placeholder_url,
                'filename': unique_filename,
                'size': len(file_bytes),
                'type': file_type,
                'message': 'Изображение успешно загружено'
            })
        }
        
    except json.JSONDecodeError:
        return {
            'statusCode': 400,
            'headers': headers,
            'body': json.dumps({'error': 'Некорректный JSON'})
        }
    
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': headers,
            'body': json.dumps({'error': f'Ошибка сервера: {str(e)}'})
        }