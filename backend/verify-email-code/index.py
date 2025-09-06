import json
import os
import psycopg2
from datetime import datetime
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Проверяет код подтверждения email и обновляет статус пользователя
    Args: event с email и code в body
    Returns: Результат проверки
    '''
    method = event.get('httpMethod', 'POST')
    
    # Handle CORS
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    # Parse request body
    try:
        body = json.loads(event.get('body', '{}'))
        email = body.get('email', '').strip().lower()
        code = body.get('code', '').strip()
        
        if not email or not code:
            return {
                'statusCode': 400,
                'headers': {'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': 'Email and code are required'})
            }
        
    except Exception as e:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Invalid request body'})
        }
    
    # Verify code in database
    try:
        database_url = os.getenv('DATABASE_URL')
        conn = psycopg2.connect(database_url) if database_url else None
        
        if not conn:
            return {
                'statusCode': 500,
                'headers': {'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': 'Database connection failed'})
            }
        
        cur = conn.cursor()
        
        # Check if valid code exists
        cur.execute("""
            SELECT id, expires_at 
            FROM project_489d77e8.email_verifications 
            WHERE email = %s 
            AND code = %s 
            AND is_used = FALSE 
            AND expires_at > %s
            ORDER BY created_at DESC 
            LIMIT 1
        """, (email, code, datetime.utcnow()))
        
        verification = cur.fetchone()
        
        if not verification:
            conn.close()
            return {
                'statusCode': 400,
                'headers': {'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({
                    'success': False,
                    'error': 'Неверный или истёкший код подтверждения'
                })
            }
        
        verification_id = verification[0]
        
        # Mark code as used
        cur.execute("""
            UPDATE project_489d77e8.email_verifications 
            SET is_used = TRUE 
            WHERE id = %s
        """, (verification_id,))
        
        # Update user's email_verified status
        cur.execute("""
            UPDATE project_489d77e8.users 
            SET email_verified = TRUE, updated_at = CURRENT_TIMESTAMP
            WHERE email = %s
        """, (email,))
        
        # Get updated user info
        cur.execute("""
            SELECT id, username, name, email, role, email_verified 
            FROM project_489d77e8.users 
            WHERE email = %s
        """, (email,))
        
        user = cur.fetchone()
        
        conn.commit()
        conn.close()
        
        if user:
            return {
                'statusCode': 200,
                'headers': {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                },
                'body': json.dumps({
                    'success': True,
                    'message': 'Email успешно подтверждён',
                    'user': {
                        'id': user[0],
                        'username': user[1],
                        'name': user[2],
                        'email': user[3],
                        'role': user[4],
                        'email_verified': user[5]
                    }
                })
            }
        else:
            return {
                'statusCode': 200,
                'headers': {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                },
                'body': json.dumps({
                    'success': True,
                    'message': 'Email успешно подтверждён'
                })
            }
        
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': f'Database error: {str(e)}'})
        }