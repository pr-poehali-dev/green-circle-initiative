import json
import os
import hashlib
import psycopg2
from psycopg2.extras import RealDictCursor
from typing import Dict, Any

def hash_password(password: str) -> str:
    """Хеширование пароля с использованием SHA-256"""
    return hashlib.sha256(password.encode()).hexdigest()

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Регистрация нового пользователя
    Args: event - dict с httpMethod, body для POST запроса с username и password
          context - объект с атрибутами: request_id, function_name
    Returns: HTTP ответ с результатом регистрации
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
        if not username or len(username) < 3:
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Username должен содержать минимум 3 символа'}, ensure_ascii=False)
            }
        
        if not password or len(password) < 6:
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Пароль должен содержать минимум 6 символов'}, ensure_ascii=False)
            }
        
        # Подключение к базе данных
        conn = psycopg2.connect(os.environ['DATABASE_URL'])
        cur = conn.cursor(cursor_factory=RealDictCursor)
        
        # Проверка существования пользователя
        cur.execute("SELECT id FROM users WHERE username = %s", (username,))
        existing_user = cur.fetchone()
        
        if existing_user:
            cur.close()
            conn.close()
            return {
                'statusCode': 409,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Пользователь с таким username уже существует'}, ensure_ascii=False)
            }
        
        # Создание нового пользователя
        password_hash = hash_password(password)
        cur.execute(
            "INSERT INTO users (username, password_hash) VALUES (%s, %s) RETURNING id, username, created_at",
            (username, password_hash)
        )
        new_user = cur.fetchone()
        conn.commit()
        
        cur.close()
        conn.close()
        
        response_data = {
            'message': 'Пользователь успешно зарегистрирован',
            'user': {
                'id': new_user['id'],
                'username': new_user['username'],
                'created_at': new_user['created_at'].isoformat()
            },
            'success': True
        }
        
        return {
            'statusCode': 201,
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