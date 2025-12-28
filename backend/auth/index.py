"""
Simple auth system with email/password registration and login.
"""
import json
import os
import psycopg2
import bcrypt
from datetime import datetime


SCHEMA = "t_p18279400_green_circle_initiat"


def cors_headers():
    """CORS headers for all responses."""
    return {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
    }


def response_json(status: int, data: dict):
    """JSON response."""
    return {
        'statusCode': status,
        'headers': cors_headers(),
        'body': json.dumps(data),
        'isBase64Encoded': False
    }


def get_db():
    """Get database connection."""
    dsn = os.environ.get('DATABASE_URL')
    return psycopg2.connect(dsn)


def escape(val):
    """Escape value for SQL."""
    if val is None:
        return 'NULL'
    if isinstance(val, (int, float)):
        return str(val)
    s = str(val).replace("'", "''")
    return f"'{s}'"


def register_user(email: str, password: str, name: str = None):
    """Register new user."""
    conn = get_db()
    cur = conn.cursor()
    
    # Check if exists - use schema.table WITHOUT quotes
    query = f"SELECT id FROM {SCHEMA}.users WHERE email = {escape(email)}"
    cur.execute(query)
    
    if cur.fetchone():
        cur.close()
        conn.close()
        return None, "Email уже используется"
    
    # Hash password
    pwd_hash = bcrypt.hashpw(password.encode(), bcrypt.gensalt(12)).decode()
    now = datetime.utcnow().isoformat()
    
    # Insert user - use schema.table WITHOUT quotes
    query = f"""
        INSERT INTO {SCHEMA}.users (email, password_hash, name, created_at, updated_at)
        VALUES ({escape(email)}, {escape(pwd_hash)}, {escape(name)}, {escape(now)}, {escape(now)})
        RETURNING id
    """
    cur.execute(query)
    user_id = cur.fetchone()[0]
    conn.commit()
    cur.close()
    conn.close()
    
    return user_id, None


def handler(event: dict, context) -> dict:
    """Main handler."""
    method = event.get('httpMethod', 'GET')
    
    # OPTIONS
    if method == 'OPTIONS':
        return response_json(200, {})
    
    if method != 'POST':
        return response_json(405, {'error': 'Method not allowed'})
    
    try:
        body = json.loads(event.get('body', '{}'))
        action = event.get('queryStringParameters', {}).get('action', '')
        
        if action == 'register':
            email = body.get('email', '').strip().lower()
            password = body.get('password', '')
            name = body.get('name', '').strip()
            
            if not email or not password:
                return response_json(400, {'error': 'Email и пароль обязательны'})
            
            if len(password) < 8:
                return response_json(400, {'error': 'Пароль должен быть минимум 8 символов'})
            
            user_id, error = register_user(email, password, name)
            
            if error:
                return response_json(409, {'error': error})
            
            return response_json(201, {
                'user_id': user_id,
                'message': 'Регистрация успешна'
            })
        
        return response_json(404, {'error': f'Unknown action: {action}'})
    
    except Exception as e:
        return response_json(500, {'error': str(e)})
