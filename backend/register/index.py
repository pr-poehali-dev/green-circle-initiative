import json
import os
import psycopg2
import hashlib
import re
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Register new user with username, email, password
    Args: event - dict with httpMethod, body (username, email, password, name)
          context - object with request metadata
    Returns: HTTP response with user registration result
    '''
    
    if event.get('httpMethod') != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization'
            },
            'body': json.dumps({'error': 'Method not allowed', 'allowed': 'POST'})
        }
    
    try:
        # Parse request body
        body_data = json.loads(event.get('body', '{}'))
        
        # Validate required fields
        required_fields = ['username', 'email', 'password', 'name']
        for field in required_fields:
            if not body_data.get(field):
                return {
                    'statusCode': 400,
                    'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                    'body': json.dumps({
                        'success': False,
                        'message': f'Поле "{field}" обязательно для заполнения'
                    })
                }
        
        username = body_data['username'].strip()
        email = body_data['email'].strip().lower()
        password = body_data['password']
        name = body_data['name'].strip()
        
        # Validate email format
        email_regex = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        if not re.match(email_regex, email):
            return {
                'statusCode': 400,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({
                    'success': False,
                    'message': 'Неверный формат email'
                })
            }
        
        # Validate username
        if len(username) < 3 or len(username) > 50:
            return {
                'statusCode': 400,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({
                    'success': False,
                    'message': 'Имя пользователя должно быть от 3 до 50 символов'
                })
            }
        
        # Validate password
        if len(password) < 6:
            return {
                'statusCode': 400,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({
                    'success': False,
                    'message': 'Пароль должен быть не менее 6 символов'
                })
            }
        
        # Hash password
        password_hash = hashlib.sha256(password.encode()).hexdigest()
        
        # Get database connection
        database_url = os.environ.get('DATABASE_URL')
        if not database_url:
            return {
                'statusCode': 500,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({
                    'success': False,
                    'message': 'Ошибка конфигурации сервера'
                })
            }
        
        conn = psycopg2.connect(database_url)
        cursor = conn.cursor()
        
        # Create table if not exists (temporary solution)
        cursor.execute("""
        CREATE TABLE IF NOT EXISTS project_489d77e8.users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password_hash VARCHAR(255) NOT NULL,
            name VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            is_active BOOLEAN DEFAULT TRUE
        );
        """)
        
        # Check if user already exists
        cursor.execute(
            "SELECT id FROM project_489d77e8.users WHERE username = %s OR email = %s",
            (username, email)
        )
        
        if cursor.fetchone():
            cursor.close()
            conn.close()
            return {
                'statusCode': 409,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({
                    'success': False,
                    'message': 'Пользователь с таким именем или email уже существует'
                })
            }
        
        # Insert new user
        cursor.execute("""
            INSERT INTO project_489d77e8.users (username, email, password_hash, name)
            VALUES (%s, %s, %s, %s)
            RETURNING id, username, email, name, created_at
        """, (username, email, password_hash, name))
        
        user_data = cursor.fetchone()
        conn.commit()
        cursor.close()
        conn.close()
        
        result = {
            'success': True,
            'message': 'Пользователь успешно зарегистрирован',
            'user': {
                'id': user_data[0],
                'username': user_data[1],
                'email': user_data[2],
                'name': user_data[3],
                'created_at': user_data[4].isoformat() if user_data[4] else None
            }
        }
        
        return {
            'statusCode': 201,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization'
            },
            'body': json.dumps(result, default=str)
        }
        
    except json.JSONDecodeError:
        return {
            'statusCode': 400,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({
                'success': False,
                'message': 'Неверный формат данных'
            })
        }
        
    except psycopg2.Error as db_error:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({
                'success': False,
                'message': 'Ошибка базы данных',
                'error': str(db_error)
            })
        }
    
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({
                'success': False,
                'message': 'Внутренняя ошибка сервера',
                'error': str(e)
            })
        }