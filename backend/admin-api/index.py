import json
import os
import psycopg2
from psycopg2.extras import RealDictCursor
from typing import Dict, Any, List

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Admin API для управления пользователями и получения статистики
    Args: event - dict with httpMethod, headers, queryStringParameters
          context - object with attributes: request_id, function_name
    Returns: HTTP response dict
    '''
    method: str = event.get('httpMethod', 'GET')
    
    # Handle CORS OPTIONS request
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-Auth-Token',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    # Check authorization
    headers = event.get('headers', {})
    auth_token = headers.get('X-Auth-Token') or headers.get('x-auth-token')
    
    if not auth_token:
        return {
            'statusCode': 401,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({'error': 'Требуется токен авторизации'})
        }
    
    # Get database connection
    database_url = os.environ.get('DATABASE_URL')
    if not database_url:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({'error': 'Ошибка конфигурации базы данных'})
        }
    
    try:
        # Connect to database
        print(f"Connecting to database with URL: {database_url[:50]}...")
        conn = psycopg2.connect(database_url)
        cur = conn.cursor(cursor_factory=RealDictCursor)
        print("Successfully connected to database")
        
        if method == 'GET':
            action = event.get('queryStringParameters', {}).get('action', 'users')
            
            if action == 'users':
                # Get all users
                cur.execute("""
                    SELECT 
                        id,
                        email,
                        username,
                        name,
                        created_at,
                        last_login,
                        is_active
                    FROM t_p18279400_green_circle_initiat.users 
                    ORDER BY created_at DESC
                """)
                
                users = []
                for row in cur.fetchall():
                    user_data = dict(row)
                    # Convert datetime to string if needed
                    if user_data.get('created_at'):
                        user_data['created_at'] = user_data['created_at'].isoformat()
                    if user_data.get('last_login'):
                        user_data['last_login'] = user_data['last_login'].isoformat()
                    users.append(user_data)
                
                return {
                    'statusCode': 200,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'isBase64Encoded': False,
                    'body': json.dumps({'users': users})
                }
            
            elif action == 'stats':
                # Get basic statistics
                cur.execute("SELECT COUNT(*) as total_users FROM t_p18279400_green_circle_initiat.users")
                total_users = cur.fetchone()['total_users']
                
                cur.execute("SELECT COUNT(*) as active_users FROM t_p18279400_green_circle_initiat.users WHERE is_active = true")
                active_users = cur.fetchone()['active_users']
                
                cur.execute("SELECT COUNT(*) as recent_users FROM t_p18279400_green_circle_initiat.users WHERE created_at >= NOW() - INTERVAL '30 days'")
                recent_users = cur.fetchone()['recent_users']
                
                return {
                    'statusCode': 200,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'isBase64Encoded': False,
                    'body': json.dumps({
                        'stats': {
                            'total_users': total_users,
                            'active_users': active_users,
                            'recent_users': recent_users
                        }
                    })
                }
        
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({'error': 'Метод не поддерживается'})
        }
        
    except psycopg2.Error as e:
        print(f"Database error: {str(e)}")
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({'error': f'Ошибка базы данных: {str(e)}'})
        }
    except Exception as e:
        print(f"General error: {str(e)}")
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({'error': f'Общая ошибка: {str(e)}'})
        }
    
    finally:
        if 'conn' in locals():
            conn.close()