import json
import hashlib
import hmac
import time
from typing import Dict, Any, Optional
from pydantic import BaseModel, Field

class LoginRequest(BaseModel):
    username: str = Field(..., min_length=1)
    password: str = Field(..., min_length=1)

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
    
    if method == 'POST':
        try:
            body_data = json.loads(event.get('body', '{}'))
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
                    'headers': {'Content-Type': 'application/json'},
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
                'headers': {'Content-Type': 'application/json'},
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
                'headers': {'Content-Type': 'application/json'},
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