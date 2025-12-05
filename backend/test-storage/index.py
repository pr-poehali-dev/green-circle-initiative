import json
import os
import boto3
import base64
import uuid
from typing import Dict, Any
import psycopg2

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Тестовая функция для проверки S3 и базы данных
    GET: получить список записей из БД
    POST: создать тестовую запись в БД и загрузить маленький файл в S3
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
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
    
    # Подключение к БД
    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()
    
    try:
        if method == 'GET':
            # Читаем данные из БД
            cur.execute('''
                SELECT id, filename, url, created_at 
                FROM t_p18279400_green_circle_initiat.photos 
                ORDER BY created_at DESC
                LIMIT 5
            ''')
            rows = cur.fetchall()
            
            items = []
            for row in rows:
                items.append({
                    'id': str(row[0]),
                    'filename': row[1],
                    'url': row[2],
                    'created_at': row[3].isoformat() if row[3] else None
                })
            
            return {
                'statusCode': 200,
                'headers': headers,
                'isBase64Encoded': False,
                'body': json.dumps({
                    'success': True,
                    'message': 'Данные из БД успешно получены',
                    'items': items
                })
            }
        
        elif method == 'POST':
            # Подключение к S3
            s3 = boto3.client(
                's3',
                endpoint_url='https://devbucket.poehali.dev',
                aws_access_key_id=os.environ['AWS_ACCESS_KEY_ID'],
                aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY'],
            )
            
            # Создаём маленький тестовый текстовый файл
            test_id = str(uuid.uuid4())
            test_content = f"Test file {test_id}"
            s3_key = f'test/{test_id}.txt'
            
            # Загружаем в S3
            s3.put_object(
                Bucket='files',
                Key=s3_key,
                Body=test_content.encode('utf-8'),
                ContentType='text/plain'
            )
            
            # Формируем URL
            project_id = os.environ.get('AWS_ACCESS_KEY_ID', '')
            cdn_url = f'https://cdn.poehali.dev/projects/{project_id}/bucket/{s3_key}'
            
            # Сохраняем в БД
            from datetime import datetime
            cur.execute('''
                INSERT INTO t_p18279400_green_circle_initiat.photos 
                (id, filename, s3_key, url, created_at)
                VALUES (%s, %s, %s, %s, %s)
            ''', (test_id, f'test-{test_id}.txt', s3_key, cdn_url, datetime.now()))
            
            conn.commit()
            
            return {
                'statusCode': 200,
                'headers': headers,
                'isBase64Encoded': False,
                'body': json.dumps({
                    'success': True,
                    'message': 'Тестовый файл загружен в S3 и запись создана в БД',
                    'id': test_id,
                    'url': cdn_url,
                    's3_key': s3_key
                })
            }
        
        else:
            return {
                'statusCode': 405,
                'headers': headers,
                'isBase64Encoded': False,
                'body': json.dumps({'error': 'Method not allowed'})
            }
    
    except Exception as e:
        conn.rollback()
        return {
            'statusCode': 500,
            'headers': headers,
            'isBase64Encoded': False,
            'body': json.dumps({
                'success': False,
                'error': str(e),
                'error_type': type(e).__name__
            })
        }
    
    finally:
        cur.close()
        conn.close()
