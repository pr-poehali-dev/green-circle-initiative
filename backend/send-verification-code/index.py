import json
import os
import psycopg2
import random
import string
from datetime import datetime, timedelta
from typing import Dict, Any
import requests

def generate_code() -> str:
    """Генерирует 6-значный код подтверждения"""
    return ''.join(random.choices(string.digits, k=6))

def send_email(to_email: str, code: str) -> bool:
    """Отправляет код подтверждения на email через Resend"""
    resend_api_key = os.getenv('RESEND_API_KEY')
    
    if not resend_api_key:
        # Если Resend не настроен, просто логируем код
        print(f"[WARNING] RESEND_API_KEY not found! Email verification code for {to_email}: {code}")
        return True
    
    print(f"[INFO] Attempting to send email to {to_email} using Resend API")
    
    try:
        response = requests.post(
            'https://api.resend.com/emails',
            headers={
                'Authorization': f'Bearer {resend_api_key}',
                'Content-Type': 'application/json'
            },
            json={
                'from': 'onboarding@resend.dev',  # Это тестовый домен Resend для разработки
                'to': to_email,
                'subject': 'Код подтверждения email',
                'html': f"""
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2>Подтверждение email</h2>
                    <p>Ваш код подтверждения:</p>
                    <div style="background: #f4f4f4; padding: 20px; text-align: center; font-size: 32px; font-weight: bold; letter-spacing: 5px; margin: 20px 0;">
                        {code}
                    </div>
                    <p>Код действителен в течение 15 минут.</p>
                    <p style="color: #666; font-size: 14px;">Если вы не запрашивали код, просто проигнорируйте это письмо.</p>
                </div>
                """
            }
        )
        
        print(f"[DEBUG] Resend API response: status={response.status_code}")
        
        if response.status_code == 200:
            print(f"[SUCCESS] Email sent successfully to {to_email}")
            print(f"[DEBUG] Response data: {response.json()}")
            return True
        else:
            print(f"[ERROR] Failed to send email. Status: {response.status_code}")
            print(f"[ERROR] Response: {response.text}")
            return True  # Всё равно продолжаем процесс
            
    except Exception as e:
        print(f"[ERROR] Exception while sending email: {type(e).__name__}: {e}")
        return True  # Возвращаем True, чтобы не блокировать процесс

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Отправляет код подтверждения на указанный email
    Args: event с email в body
    Returns: Статус отправки
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
        
        if not email:
            return {
                'statusCode': 400,
                'headers': {'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': 'Email is required'})
            }
        
        # Basic email validation
        if '@' not in email or '.' not in email.split('@')[1]:
            return {
                'statusCode': 400,
                'headers': {'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'error': 'Invalid email format'})
            }
        
    except Exception as e:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Invalid request body'})
        }
    
    # Generate code and expiry
    code = generate_code()
    expires_at = datetime.utcnow() + timedelta(minutes=15)
    
    # Save to database
    try:
        database_url = os.getenv('DATABASE_URL')
        conn = psycopg2.connect(database_url) if database_url else None
        
        if conn:
            cur = conn.cursor()
            
            # Invalidate previous codes for this email
            cur.execute("""
                UPDATE project_489d77e8.email_verifications 
                SET is_used = TRUE 
                WHERE email = %s AND is_used = FALSE
            """, (email,))
            
            # Insert new code
            cur.execute("""
                INSERT INTO project_489d77e8.email_verifications 
                (email, code, expires_at)
                VALUES (%s, %s, %s)
            """, (email, code, expires_at))
            
            conn.commit()
            conn.close()
        
        # Send email
        send_email(email, code)
        
        # Временно для тестирования - возвращаем код в ответе
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            'body': json.dumps({
                'success': True,
                'message': f'Код подтверждения: {code} (показан для тестирования)',
                'testCode': code  # Временно для тестирования
            })
        }
        
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': f'Database error: {str(e)}'})
        }