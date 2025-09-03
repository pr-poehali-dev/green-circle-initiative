import json
import hashlib
import hmac
import time
from typing import Dict, Any, Optional
from pydantic import BaseModel, Field

class LoginRequest(BaseModel):
    username: str = Field(..., min_length=1)
    password: str = Field(..., min_length=1)
    action: Optional[str] = None

class AuthResponse(BaseModel):
    success: bool
    message: str
    token: Optional[str] = None
    user: Optional[Dict[str, str]] = None

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Аутентифицирует пользователей и выдает JWT токены
    Args: event - dict с httpMethod, body для POST запросов логина
          context - объект с атрибутами request_id, function_name
    Returns: HTTP response с результатом аутентификации
    '''
    
    # Handle CORS preflight
    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization'
            },
            'body': ''
        }
    
    method = event.get('httpMethod', 'GET')
    
    # Простая база пользователей (в реальном проекте - база данных)
    USERS_DB = {
        'admin': {
            'password': '1234',  # Используем простые пароли для тестирования
            'role': 'admin',
            'name': 'Администратор'
        },
        'user': {
            'password': 'password',
            'role': 'user', 
            'name': 'Пользователь'
        }
    }
    
    SECRET_KEY = "poehali_secret_2024"
    
    def verify_token(token: str) -> Optional[str]:
        """Проверяет валидность токена и возвращает username или None"""
        try:
            parts = token.split(':')
            if len(parts) != 3:
                return None
            
            username, timestamp, signature = parts
            token_payload = f"{username}:{timestamp}"
            
            # Проверяем подпись
            expected_signature = hmac.new(
                SECRET_KEY.encode(),
                token_payload.encode(),
                hashlib.sha256
            ).hexdigest()
            
            if signature != expected_signature:
                return None
                
            # Проверяем время жизни токена (24 часа)
            token_time = int(timestamp)
            current_time = int(time.time())
            if current_time - token_time > 86400:  # 24 часа
                return None
                
            return username
            
        except Exception:
            return None
    
    if method == 'POST':
        try:
            body_data = json.loads(event.get('body', '{}'))
            
            # Если это проверка токена
            if body_data.get('action') == 'verify_token':
                headers = event.get('headers', {})
                # Ищем заголовок Authorization в разных регистрах
                auth_header = headers.get('Authorization') or headers.get('authorization') or ''
                if not auth_header.startswith('Bearer '):
                    return {
                        'statusCode': 401,
                        'headers': {
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': '*'
                        },
                        'body': json.dumps({
                            'success': False,
                            'message': 'Токен не предоставлен'
                        })
                    }
                
                token = auth_header[7:]  # Убираем "Bearer "
                username = verify_token(token)
                
                if not username or username not in USERS_DB:
                    return {
                        'statusCode': 401,
                        'headers': {
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': '*'
                        },
                        'body': json.dumps({
                            'success': False,
                            'message': 'Недействительный токен'
                        })
                    }
                
                user = USERS_DB[username]
                return {
                    'statusCode': 200,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'body': json.dumps({
                        'success': True,
                        'message': 'Токен действителен',
                        'user': {
                            'username': username,
                            'name': user['name'],
                            'role': user['role']
                        }
                    })
                }
            
            login_req = LoginRequest(**body_data)
            
            # Проверяем пользователя
            user = USERS_DB.get(login_req.username)
            if not user:
                return {
                    'statusCode': 401,
                    'headers': {'Content-Type': 'application/json'},
                    'body': json.dumps({
                        'success': False,
                        'message': 'Неверный логин или пароль'
                    })
                }
            
            # Проверяем пароль (простая проверка для демо)
            if login_req.password != user['password']:
                return {
                    'statusCode': 401,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'body': json.dumps({
                        'success': False,
                        'message': 'Неверный логин или пароль'
                    })
                }
            
            # Создаем простой токен (в реальном проекте - JWT)
            timestamp = str(int(time.time()))
            token_payload = f"{login_req.username}:{timestamp}"
            signature = hmac.new(
                SECRET_KEY.encode(),
                token_payload.encode(),
                hashlib.sha256
            ).hexdigest()
            token = f"{token_payload}:{signature}"
            
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({
                    'success': True,
                    'message': 'Успешный вход',
                    'token': token,
                    'user': {
                        'username': login_req.username,
                        'name': user['name'],
                        'role': user['role']
                    }
                })
            }
            
        except Exception as e:
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({
                    'success': False,
                    'message': 'Ошибка обработки запроса'
                })
            }
    
    # GET запрос - возвращаем информацию о доступных пользователях
    return {
        'statusCode': 200,
        'headers': {'Content-Type': 'application/json'},
        'body': json.dumps({
            'available_users': [
                {'username': 'admin', 'password': '1234', 'name': 'Администратор'},
                {'username': 'user', 'password': 'password', 'name': 'Пользователь'}
            ],
            'usage': 'POST /auth with {"username": "admin", "password": "1234"}'
        })
    }