import json
import os
import boto3
import base64
import uuid
from typing import Dict, Any
import psycopg2
from datetime import datetime

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Управление фотографиями: загрузка в S3, хранение в БД, просмотр и удаление
    GET: получить список всех фотографий
    POST: загрузить новую фотографию (принимает base64 изображение)
    DELETE: удалить фотографию по ID (параметр ?id=...)
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    
    s3 = boto3.client(
        's3',
        endpoint_url='https://devbucket.poehali.dev',
        aws_access_key_id=os.environ['AWS_ACCESS_KEY_ID'],
        aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY'],
    )
    
    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()
    
    try:
        if method == 'GET':
            cur.execute('''
                SELECT id, filename, url, created_at 
                FROM t_p18279400_green_circle_initiat.photos 
                ORDER BY created_at DESC
            ''')
            rows = cur.fetchall()
            
            photos = []
            for row in rows:
                photos.append({
                    'id': str(row[0]),
                    'filename': row[1],
                    'url': row[2],
                    'created_at': row[3].isoformat() if row[3] else None
                })
            
            return {
                'statusCode': 200,
                'headers': headers,
                'isBase64Encoded': False,
                'body': json.dumps({'photos': photos})
            }
        
        elif method == 'POST':
            body_data = json.loads(event.get('body', '{}'))
            image_base64 = body_data.get('image', '')
            filename = body_data.get('filename', 'photo.jpg')
            
            if not image_base64:
                return {
                    'statusCode': 400,
                    'headers': headers,
                    'isBase64Encoded': False,
                    'body': json.dumps({'error': 'No image provided'})
                }
            
            if ',' in image_base64:
                image_base64 = image_base64.split(',')[1]
            
            image_data = base64.b64decode(image_base64)
            
            photo_id = str(uuid.uuid4())
            ext = filename.split('.')[-1] if '.' in filename else 'jpg'
            s3_key = f'photos/{photo_id}.{ext}'
            
            content_type = 'image/jpeg'
            if ext.lower() == 'png':
                content_type = 'image/png'
            elif ext.lower() == 'gif':
                content_type = 'image/gif'
            elif ext.lower() == 'webp':
                content_type = 'image/webp'
            
            s3.put_object(
                Bucket='files',
                Key=s3_key,
                Body=image_data,
                ContentType=content_type
            )
            
            project_id = os.environ.get('AWS_ACCESS_KEY_ID', '').split('-')[0] if '-' in os.environ.get('AWS_ACCESS_KEY_ID', '') else 'unknown'
            cdn_url = f'https://devcdn.poehali.dev/projects/{project_id}/bucket/{s3_key}'
            
            cur.execute('''
                INSERT INTO t_p18279400_green_circle_initiat.photos 
                (id, filename, s3_key, url, created_at)
                VALUES (%s, %s, %s, %s, %s)
            ''', (photo_id, filename, s3_key, cdn_url, datetime.now()))
            
            conn.commit()
            
            return {
                'statusCode': 200,
                'headers': headers,
                'isBase64Encoded': False,
                'body': json.dumps({
                    'success': True,
                    'id': photo_id,
                    'url': cdn_url
                })
            }
        
        elif method == 'DELETE':
            query_params = event.get('queryStringParameters', {})
            photo_id = query_params.get('id', '') if query_params else ''
            
            if not photo_id:
                return {
                    'statusCode': 400,
                    'headers': headers,
                    'isBase64Encoded': False,
                    'body': json.dumps({'error': 'No photo ID provided'})
                }
            
            cur.execute('''
                SELECT s3_key FROM t_p18279400_green_circle_initiat.photos 
                WHERE id = %s
            ''', (photo_id,))
            
            row = cur.fetchone()
            if not row:
                return {
                    'statusCode': 404,
                    'headers': headers,
                    'isBase64Encoded': False,
                    'body': json.dumps({'error': 'Photo not found'})
                }
            
            s3_key = row[0]
            
            s3.delete_object(Bucket='files', Key=s3_key)
            
            cur.execute('''
                DELETE FROM t_p18279400_green_circle_initiat.photos 
                WHERE id = %s
            ''', (photo_id,))
            
            conn.commit()
            
            return {
                'statusCode': 200,
                'headers': headers,
                'isBase64Encoded': False,
                'body': json.dumps({'success': True})
            }
        
        else:
            return {
                'statusCode': 405,
                'headers': headers,
                'isBase64Encoded': False,
                'body': json.dumps({'error': 'Method not allowed'})
            }
    
    finally:
        cur.close()
        conn.close()