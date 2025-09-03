import json
import os
import psycopg2
import hashlib
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Authenticate user with username/email and password
    Args: event - dict with httpMethod, body (username, password)
          context - object with request metadata
    Returns: HTTP response with authentication result and user data
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
        if not body_data.get('username') or not body_data.get('password'):
            return {
                'statusCode': 400,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({
                    'success': False,
                    'message': 'Имя пользователя и пароль обязательны'
                })
            }
        
        username_or_email = body_data['username'].strip().lower()
        password = body_data['password']
        
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
        
        # Find user by username or email
        cursor.execute("""
            SELECT id, username, email, password_hash, name, is_active, created_at
            FROM project_489d77e8.users 
            WHERE (LOWER(username) = %s OR LOWER(email) = %s) AND is_active = TRUE
        """, (username_or_email, username_or_email))
        
        user_data = cursor.fetchone()
        cursor.close()
        conn.close()
        
        if not user_data:
            return {
                'statusCode': 401,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({
                    'success': False,
                    'message': 'Неверное имя пользователя или пароль'
                })
            }
        
        # Check password
        if user_data[3] != password_hash:
            return {
                'statusCode': 401,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({
                    'success': False,
                    'message': 'Неверное имя пользователя или пароль'
                })
            }
        
        # Return user data (without password)
        result = {
            'success': True,
            'message': 'Авторизация успешна',
            'user': {
                'id': user_data[0],
                'username': user_data[1],
                'email': user_data[2],
                'name': user_data[4],
                'created_at': user_data[6].isoformat() if user_data[6] else None
            }
        }
        
        return {
            'statusCode': 200,
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