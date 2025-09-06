import json
import os
import psycopg2
import random
import string
from datetime import datetime, timedelta
from typing import Dict, Any
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def generate_code() -> str:
    """Генерирует 6-значный код подтверждения"""
    return ''.join(random.choices(string.digits, k=6))

def send_email(to_email: str, code: str) -> bool:
    """Отправляет код подтверждения на email"""
    smtp_host = os.getenv('SMTP_HOST')
    smtp_port = int(os.getenv('SMTP_PORT', '587'))
    smtp_user = os.getenv('SMTP_USER')
    smtp_pass = os.getenv('SMTP_PASSWORD')
    from_email = os.getenv('SMTP_FROM_EMAIL', smtp_user)
    
    if not all([smtp_host, smtp_user, smtp_pass]):
        # Если SMTP не настроен, просто логируем код
        print(f"Email verification code for {to_email}: {code}")
        return True
    
    try:
        msg = MIMEMultipart()
        msg['From'] = from_email
        msg['To'] = to_email
        msg['Subject'] = 'Код подтверждения email'
        
        body = f"""
        Ваш код подтверждения: {code}
        
        Код действителен в течение 15 минут.
        
        Если вы не запрашивали код, просто проигнорируйте это письмо.
        """
        
        msg.attach(MIMEText(body, 'plain'))
        
        server = smtplib.SMTP(smtp_host, smtp_port)
        server.starttls()
        server.login(smtp_user, smtp_pass)
        server.send_message(msg)
        server.quit()
        
        return True
    except Exception as e:
        print(f"Failed to send email: {e}")
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
        
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            'body': json.dumps({
                'success': True,
                'message': 'Код подтверждения отправлен на вашу почту'
            })
        }
        
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': f'Database error: {str(e)}'})
        }