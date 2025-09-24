import json
import os
import hashlib
import uuid
import psycopg2
from psycopg2.extras import RealDictCursor
from typing import Dict, Any

def hash_password(password: str) -> str:
    """Хеширование пароля с использованием SHA-256"""
    return hashlib.sha256(password.encode()).hexdigest()

def generate_session_token() -> str:
    """Генерация уникального токена сессии"""
    return str(uuid.uuid4())

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Авторизация пользователя по username и password
    Args: event - dict с httpMethod, body для POST запроса с username и password
          context - объект с атрибутами: request_id, function_name
    Returns: HTTP ответ с токеном сессии или ошибкой
    '''
    method: str = event.get('httpMethod', 'GET')
    
    # Обработка CORS OPTIONS запроса
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-User-Id, X-Auth-Token',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    # Только POST запросы разрешены
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Только POST запросы разрешены'}, ensure_ascii=False)
        }
    
    try:
        # Парсинг тела запроса
        body_data = json.loads(event.get('body', '{}'))
        username = body_data.get('username', '').strip()
        password = body_data.get('password', '').strip()
        
        # Валидация входных данных
        if not username or not password:
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Username и password обязательны'}, ensure_ascii=False)
            }
        
        # Подключение к базе данных
        conn = psycopg2.connect(os.environ['DATABASE_URL'])
        cur = conn.cursor(cursor_factory=RealDictCursor)
        
        # Поиск пользователя по username
        password_hash = hash_password(password)
        cur.execute(
            "SELECT id, username, created_at FROM users WHERE username = %s AND password_hash = %s",
            (username, password_hash)
        )
        user = cur.fetchone()
        
        cur.close()
        conn.close()
        
        if not user:
            return {
                'statusCode': 401,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Неверный username или password'}, ensure_ascii=False)
            }
        
        # Генерация токена сессии
        session_token = generate_session_token()
        
        response_data = {
            'message': 'Авторизация успешна',
            'user': {
                'id': user['id'],
                'username': user['username'],
                'created_at': user['created_at'].isoformat()
            },
            'session_token': session_token,
            'success': True
        }
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps(response_data, ensure_ascii=False, default=str)
        }
        
    except json.JSONDecodeError:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Неверный формат JSON'}, ensure_ascii=False)
        }
    
    except psycopg2.Error as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Ошибка базы данных'}, ensure_ascii=False)
        }
    
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Внутренняя ошибка сервера'}, ensure_ascii=False)
        }