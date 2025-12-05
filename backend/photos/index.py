"""
Бэкенд для работы с фотографиями: загрузка в S3 и получение списка
"""
import json
import os
import boto3
import uuid
import base64
from datetime import datetime
from typing import Dict, Any, List
import psycopg2
from psycopg2.extras import RealDictCursor

# S3 клиент
s3 = boto3.client(
    's3',
    endpoint_url='https://bucket.poehali.dev',
    aws_access_key_id=os.environ['AWS_ACCESS_KEY_ID'],
    aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY'],
)




def get_db_connection():
    """Подключение к базе данных"""
    dsn = os.environ['DATABASE_URL']
    return psycopg2.connect(dsn, cursor_factory=RealDictCursor)


def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    """
    Обработка загрузки и получения фотографий
    Args: event - dict с httpMethod, body, queryStringParameters
          context - объект контекста выполнения
    Returns: HTTP response dict
    """
    method: str = event.get('httpMethod', 'GET')
    
    # CORS preflight
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, DELETE',
                'Access-Control-Allow-Headers': 'Content-Type, X-Session-Token',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    # POST - загрузка новой фотографии
    if method == 'POST':
        try:
            print(f"POST request")
            body_data = json.loads(event.get('body', '{}'))
            print(f"Body parsed, keys: {body_data.keys()}")
            
            # Получаем base64 изображение
            image_base64 = body_data.get('image', '')
            filename = body_data.get('filename', f'photo_{uuid.uuid4().hex[:8]}.jpg')
            print(f"Filename: {filename}, image length: {len(image_base64)}")
            
            if not image_base64:
                return {
                    'statusCode': 400,
                    'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                    'body': json.dumps({'error': 'Image data required'}),
                    'isBase64Encoded': False
                }
            
            # Декодируем base64
            if ',' in image_base64:
                image_base64 = image_base64.split(',')[1]
            
            image_data = base64.b64decode(image_base64)
            print(f"Image decoded, size: {len(image_data)} bytes")
            
            # Генерируем уникальное имя
            photo_id = str(uuid.uuid4())
            ext = filename.split('.')[-1] if '.' in filename else 'jpg'
            s3_key = f'photos/{photo_id}.{ext}'
            print(f"S3 key: {s3_key}")
            
            # Загружаем в S3
            content_type = f'image/{ext}'
            print(f"Uploading to S3...")
            s3.put_object(
                Bucket='files',
                Key=s3_key,
                Body=image_data,
                ContentType=content_type
            )
            print(f"S3 upload complete")
            
            # URL фотографии - используем относительный путь, бакет сам подставит PROJECT_ID
            photo_url = s3_key
            print(f"Photo S3 key: {photo_url}")
            
            # Сохраняем в БД
            print(f"Saving to DB...")
            conn = get_db_connection()
            cur = conn.cursor()
            
            query = """
                INSERT INTO photos (id, filename, s3_key, url, created_at)
                VALUES (%s, %s, %s, %s, NOW())
                RETURNING id, filename, url, created_at
            """
            print(f"Executing query...")
            cur.execute(query, (photo_id, filename, s3_key, photo_url))
            result = cur.fetchone()
            print(f"Query executed, result: {result}")
            
            conn.commit()
            cur.close()
            conn.close()
            print(f"DB save complete")
            
            return {
                'statusCode': 200,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({
                    'success': True,
                    'photo': dict(result)
                }, default=str),
                'isBase64Encoded': False
            }
            
        except Exception as e:
            print(f"ERROR: {str(e)}")
            import traceback
            traceback.print_exc()
            return {
                'statusCode': 500,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': str(e)}),
                'isBase64Encoded': False
            }
    
    # GET - получение списка всех фотографий
    if method == 'GET':
        try:
            conn = get_db_connection()
            cur = conn.cursor()
            
            query = """
                SELECT id, filename, url, created_at
                FROM photos
                ORDER BY created_at DESC
            """
            cur.execute(query)
            photos = cur.fetchall()
            
            cur.close()
            conn.close()
            
            return {
                'statusCode': 200,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({
                    'photos': [dict(p) for p in photos]
                }, default=str),
                'isBase64Encoded': False
            }
            
        except Exception as e:
            return {
                'statusCode': 500,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': str(e)}),
                'isBase64Encoded': False
            }
    
    # DELETE - удаление фотографии
    if method == 'DELETE':
        try:
            params = event.get('queryStringParameters', {}) or {}
            photo_id = params.get('id')
            
            if not photo_id:
                return {
                    'statusCode': 400,
                    'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                    'body': json.dumps({'error': 'Photo ID required'}),
                    'isBase64Encoded': False
                }
            
            conn = get_db_connection()
            cur = conn.cursor()
            
            # Получаем s3_key
            cur.execute("SELECT s3_key FROM photos WHERE id = %s", (photo_id,))
            result = cur.fetchone()
            
            if not result:
                cur.close()
                conn.close()
                return {
                    'statusCode': 404,
                    'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                    'body': json.dumps({'error': 'Photo not found'}),
                    'isBase64Encoded': False
                }
            
            s3_key = result['s3_key']
            
            # Удаляем из S3
            s3.delete_object(Bucket='files', Key=s3_key)
            
            # Удаляем из БД
            cur.execute("DELETE FROM photos WHERE id = %s", (photo_id,))
            conn.commit()
            
            cur.close()
            conn.close()
            
            return {
                'statusCode': 200,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'success': True}),
                'isBase64Encoded': False
            }
            
        except Exception as e:
            return {
                'statusCode': 500,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': str(e)}),
                'isBase64Encoded': False
            }
    
    return {
        'statusCode': 405,
        'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'error': 'Method not allowed'}),
        'isBase64Encoded': False
    }