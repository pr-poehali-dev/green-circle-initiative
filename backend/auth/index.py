import json
import hashlib
import secrets
import jwt
from datetime import datetime, timedelta
from typing import Dict, Any, Optional
import psycopg2
import os

def add_cors_headers(response: Dict[str, Any]) -> Dict[str, Any]:
    '''Добавляет CORS заголовки к ответу'''
    cors_headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Auth-Token',
        'Content-Type': 'application/json'
    }
    
    if 'headers' in response:
        response['headers'].update(cors_headers)
    else:
        response['headers'] = cors_headers
    
    return response

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Authentication API - login, register, validate tokens
    Args: event with httpMethod, body, queryStringParameters, headers
          context with request_id, function_name
    Returns: HTTP response with JWT tokens or user data
    '''
    
    method = event.get('httpMethod', 'GET')
    path = event.get('queryStringParameters', {}).get('action', '')
    headers = event.get('headers', {})
    
    # Debug logging (минимальный)
    print(f"Method: {method}, Action: {path}")
    
    # Handle OPTIONS request for CORS
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Auth-Token',
                'Access-Control-Max-Age': '86400'  # 24 hours
            },
            'body': ''
        }
    
    try:
        if method == 'POST':
            body = json.loads(event.get('body', '{}'))
            
            if path == 'register':
                return add_cors_headers(handle_register(body))
            elif path == 'login':
                return add_cors_headers(handle_login(body))
            else:
                return add_cors_headers({'statusCode': 400, 'body': json.dumps({'error': 'Invalid action'})})
        
        elif method == 'GET' and path == 'verify':
            # Получаем токен из кастомного заголовка (безопаснее чем URL)
            token = headers.get('X-Auth-Token', '') or headers.get('x-auth-token', '')
            if not token:
                token = headers.get('Authorization', '') or headers.get('authorization', '')
                if token.startswith('Bearer '):
                    token = token.replace('Bearer ', '')
            return add_cors_headers(handle_verify(token))
        
        elif method == 'GET' and path == 'users':
            # Получаем токен из кастомного заголовка (безопаснее чем URL)
            token = headers.get('X-Auth-Token', '') or headers.get('x-auth-token', '')
            if not token:
                token = headers.get('Authorization', '') or headers.get('authorization', '')
                if token.startswith('Bearer '):
                    token = token.replace('Bearer ', '')
            return add_cors_headers(handle_get_users(token))
        
        else:
            return add_cors_headers({'statusCode': 404, 'body': json.dumps({'error': 'Endpoint not found'})})
    
    except Exception as e:
        return add_cors_headers({
            'statusCode': 500,
            'body': json.dumps({'error': str(e)})
        })

def get_db_connection():
    '''Создает подключение к базе данных'''
    database_url = os.getenv('DATABASE_URL')
    if database_url:
        return psycopg2.connect(database_url)
    else:
        return psycopg2.connect(
            host=os.getenv('DB_HOST', 'localhost'),
            database=os.getenv('DB_NAME', 'poehali'),
            user=os.getenv('DB_USER', 'postgres'),
            password=os.getenv('DB_PASSWORD', ''),
            port=os.getenv('DB_PORT', '5432')
        )

def hash_password(password: str) -> str:
    '''Хеширует пароль с солью'''
    salt = secrets.token_hex(16)
    pwd_hash = hashlib.sha256((password + salt).encode()).hexdigest()
    return f"{salt}:{pwd_hash}"

def verify_password(password: str, hashed: str) -> bool:
    '''Проверяет пароль против хеша'''
    if ':' not in hashed:
        # Старый формат без соли (для совместимости)
        return hashlib.sha256(password.encode()).hexdigest() == hashed
    
    salt, pwd_hash = hashed.split(':')
    return hashlib.sha256((password + salt).encode()).hexdigest() == pwd_hash

def generate_jwt(user_data: Dict[str, Any]) -> str:
    '''Генерирует JWT токен'''
    secret = os.getenv('JWT_SECRET', 'default-secret-key')
    payload = {
        'user_id': user_data['id'],
        'email': user_data['email'],
        'role': user_data.get('role', 'user'),
        'exp': datetime.utcnow() + timedelta(days=7)
    }
    return jwt.encode(payload, secret, algorithm='HS256')

def verify_jwt(token: str) -> Optional[Dict[str, Any]]:
    '''Проверяет и декодирует JWT токен'''
    try:
        secret = os.getenv('JWT_SECRET', 'default-secret-key')
        return jwt.decode(token, secret, algorithms=['HS256'])
    except jwt.ExpiredSignatureError:
        return None
    except jwt.InvalidTokenError:
        return None

def handle_register(body: Dict[str, Any]) -> Dict[str, Any]:
    '''Регистрация нового пользователя'''
    email = body.get('email', '').strip().lower()
    password = body.get('password', '')
    name = body.get('name', '').strip()
    username = body.get('username', '').strip()
    
    if not email or not password or not name or not username:
        return {
            'statusCode': 400, 
            'body': json.dumps({'error': 'Все поля обязательны'})
        }
    
    if len(password) < 6:
        return {
            'statusCode': 400,
            'body': json.dumps({'error': 'Пароль должен быть минимум 6 символов'})
        }
    
    conn = get_db_connection()
    try:
        cur = conn.cursor()
        
        # Проверяем существование пользователя
        cur.execute("SELECT id FROM project_489d77e8.users WHERE email = %s OR username = %s", (email, username))
        if cur.fetchone():
            return {
                'statusCode': 409,
                'body': json.dumps({'error': 'Пользователь с таким email или username уже существует'})
            }
        
        # Создаем пользователя
        password_hash = hash_password(password)
        cur.execute("""
            INSERT INTO project_489d77e8.users (email, username, password_hash, name, role, created_at) 
            VALUES (%s, %s, %s, %s, %s, %s) RETURNING id
        """, (email, username, password_hash, name, 'user', datetime.utcnow()))
        
        user_id = cur.fetchone()[0]
        conn.commit()
        
        # Получаем данные пользователя
        cur.execute("SELECT id, email, username, name, role FROM project_489d77e8.users WHERE id = %s", (user_id,))
        user = cur.fetchone()
        
        user_data = {
            'id': user[0],
            'email': user[1], 
            'username': user[2],
            'name': user[3],
            'role': user[4]
        }
        
        token = generate_jwt(user_data)
        
        return {
            'statusCode': 201,
            'body': json.dumps({
                'message': 'Регистрация успешна',
                'user': user_data,
                'token': token
            })
        }
    
    finally:
        conn.close()

def handle_login(body: Dict[str, Any]) -> Dict[str, Any]:
    '''Вход пользователя'''
    email = body.get('email', '').strip().lower()
    password = body.get('password', '')
    
    if not email or not password:
        return {
            'statusCode': 400,
            'body': json.dumps({'error': 'Email и пароль обязательны'})
        }
    
    conn = get_db_connection()
    try:
        cur = conn.cursor()
        cur.execute("""
            SELECT id, email, username, password_hash, name 
            FROM project_489d77e8.users WHERE email = %s AND is_active = true
        """, (email,))
        
        user = cur.fetchone()
        if not user or not verify_password(password, user[3]):
            return {
                'statusCode': 401,
                'body': json.dumps({'error': 'Неверный email или пароль'})
            }
        
        # Обновляем время последнего входа (если поле существует)
        try:
            cur.execute("UPDATE project_489d77e8.users SET updated_at = %s WHERE id = %s", 
                       (datetime.utcnow(), user[0]))
            conn.commit()
        except:
            pass  # Игнорируем если поле не существует
        
        user_data = {
            'id': user[0],
            'email': user[1],
            'username': user[2], 
            'name': user[4],
            'role': 'user'  # По умолчанию, можно расширить
        }
        
        token = generate_jwt(user_data)
        
        return {
            'statusCode': 200,
            'body': json.dumps({
                'message': 'Вход выполнен успешно',
                'user': user_data,
                'token': token
            })
        }
    
    finally:
        conn.close()

def handle_verify(token: str) -> Dict[str, Any]:
    '''Проверка валидности токена'''
    if not token:
        return {
            'statusCode': 401,
            'body': json.dumps({'error': 'Токен не предоставлен'})
        }
    
    payload = verify_jwt(token)
    if not payload:
        return {
            'statusCode': 401, 
            'body': json.dumps({'error': 'Недействительный токен'})
        }
    
    return {
        'statusCode': 200,
        'body': json.dumps({
            'valid': True,
            'user': {
                'id': payload['user_id'],
                'email': payload['email'],
                'role': payload.get('role', 'user')
            }
        })
    }

def handle_get_users(token: str) -> Dict[str, Any]:
    '''Получение списка пользователей (только для админов)'''
    if not token:
        return {
            'statusCode': 401,
            'body': json.dumps({'error': 'Требуется авторизация'})
        }
    
    payload = verify_jwt(token)
    if not payload:
        return {
            'statusCode': 401,
            'body': json.dumps({'error': 'Недействительный токен'})
        }
    
    # Для MVP разрешаем любому авторизованному пользователю
    # В будущем можно добавить проверку роли admin
    # if payload.get('role') != 'admin':
    #     return {'statusCode': 403, 'body': json.dumps({'error': 'Недостаточно прав'})}
    
    conn = get_db_connection()
    try:
        cur = conn.cursor()
        cur.execute("""
            SELECT id, email, username, name, created_at, is_active, updated_at
            FROM project_489d77e8.users 
            ORDER BY created_at DESC
        """)
        
        users = []
        for row in cur.fetchall():
            users.append({
                'id': row[0],
                'email': row[1],
                'username': row[2],
                'name': row[3],
                'created_at': row[4].isoformat() if row[4] else None,
                'is_active': row[5],
                'last_login': row[6].isoformat() if row[6] else None
            })
        
        return {
            'statusCode': 200,
            'body': json.dumps({
                'users': users,
                'total': len(users)
            })
        }
    
    finally:
        conn.close()