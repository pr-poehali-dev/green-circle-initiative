"""
Хранение и получение изображений товаров через PostgreSQL BYTEA
Args: event с httpMethod, body (base64), pathParams; context с request_id  
Returns: HTTP response с данными изображения или ID сохраненного файла
"""

import json
import base64
import os
from typing import Dict, Any
import psycopg2
from psycopg2.extras import RealDictCursor

def get_db_connection():
    database_url = os.environ.get('DATABASE_URL')
    if not database_url:
        raise Exception('DATABASE_URL не найден в переменных окружения')
    return psycopg2.connect(database_url, cursor_factory=RealDictCursor)

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    method: str = event.get('httpMethod', 'GET')
    
    # Обработка CORS OPTIONS запроса
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    headers = {
        'Access-Control-Allow-Origin': '*'
    }
    
    if method == 'POST':
        # Сохранение изображения
        headers['Content-Type'] = 'application/json'
        
        try:
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
            
            # Декодируем base64
            try:
                if ',' in file_data:
                    file_data = file_data.split(',')[1]
                file_bytes = base64.b64decode(file_data)
            except Exception:
                return {
                    'statusCode': 400,
                    'headers': headers,
                    'body': json.dumps({'error': 'Ошибка декодирования файла'})
                }
            
            # Сохраняем в базу данных
            conn = get_db_connection()
            cursor = conn.cursor()
            
            cursor.execute("""
                INSERT INTO project_489d77e8.product_images (filename, content_type, file_data)
                VALUES (%s, %s, %s)
                RETURNING id
            """, (file_name, file_type, file_bytes))
            
            result = cursor.fetchone()
            image_id = result['id']
            
            conn.commit()
            cursor.close()
            conn.close()
            
            return {
                'statusCode': 200,
                'headers': headers,
                'body': json.dumps({
                    'image_id': image_id,
                    'url': f'/api/image-storage/{image_id}',
                    'message': 'Изображение сохранено'
                })
            }
            
        except Exception as e:
            return {
                'statusCode': 500,
                'headers': headers,
                'body': json.dumps({'error': f'Ошибка сохранения: {str(e)}'})
            }
    
    elif method == 'GET':
        # Получение изображения
        # Пробуем получить ID из разных источников
        query_params = event.get('queryStringParameters', {}) or {}
        path_params = event.get('pathParams', {}) or {}
        
        image_id = query_params.get('id') or path_params.get('id')
        
        if not image_id:
            return {
                'statusCode': 400,
                'headers': {'Content-Type': 'application/json', **headers},
                'body': json.dumps({'error': 'Не указан ID изображения'})
            }
        
        try:
            conn = get_db_connection()
            cursor = conn.cursor()
            
            cursor.execute("""
                SELECT filename, content_type, file_data
                FROM project_489d77e8.product_images 
                WHERE id = %s
            """, (image_id,))
            
            result = cursor.fetchone()
            cursor.close()
            conn.close()
            
            if not result:
                return {
                    'statusCode': 404,
                    'headers': {'Content-Type': 'application/json', **headers},
                    'body': json.dumps({'error': 'Изображение не найдено'})
                }
            
            # Возвращаем изображение
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': result['content_type'],
                    **headers
                },
                'isBase64Encoded': True,
                'body': base64.b64encode(result['file_data']).decode('utf-8')
            }
            
        except Exception as e:
            return {
                'statusCode': 500,
                'headers': {'Content-Type': 'application/json', **headers},
                'body': json.dumps({'error': f'Ошибка получения: {str(e)}'})
            }
    
    return {
        'statusCode': 405,
        'headers': {'Content-Type': 'application/json', **headers},
        'body': json.dumps({'error': 'Метод не разрешен'})
    }