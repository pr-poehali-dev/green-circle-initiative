"""Unisender Go integration for auth emails."""
import os
import requests
from datetime import datetime


def _get_unisender_config():
    """Get Unisender configuration."""
    return {
        'api_url': os.environ.get('UNISENDER_API_URL', 'https://go2.unisender.ru/ru/transactional/api/v1'),
        'api_key': os.environ.get('UNISENDER_API_KEY', ''),
        'sender_email': os.environ.get('UNISENDER_SENDER_EMAIL', ''),
        'sender_name': os.environ.get('UNISENDER_SENDER_NAME', ''),
    }


def _send_email(to_email: str, subject: str, body_html: str) -> bool:
    """Send email via Unisender Go API."""
    config = _get_unisender_config()
    
    print(f"[Unisender] Attempting to send email to {to_email}")
    print(f"[Unisender] Config: api_url={config['api_url']}, sender_email={config['sender_email']}, api_key={'set' if config['api_key'] else 'MISSING'}")
    
    if not config['api_key'] or not config['sender_email']:
        print(f"[Unisender] ERROR: Missing config - api_key={bool(config['api_key'])}, sender_email={bool(config['sender_email'])}")
        return False
    
    try:
        message = {
            'recipients': [{'email': to_email}],
            'from_email': config['sender_email'],
            'from_name': config['sender_name'],
            'subject': subject,
            'body': {'html': body_html},
            'track_links': 0,
            'track_read': 0,
        }
        
        response = requests.post(
            f"{config['api_url']}/email/send.json",
            headers={
                'Content-Type': 'application/json',
                'X-API-KEY': config['api_key'],
            },
            json={'message': message},
            timeout=10
        )
        
        print(f"[Unisender] Response status: {response.status_code}")
        print(f"[Unisender] Response body: {response.text}")
        
        return response.status_code == 200
    except Exception as e:
        print(f"[Unisender] ERROR: Exception occurred: {str(e)}")
        return False


def send_welcome_email(email: str, name: str) -> bool:
    """Send welcome email after registration."""
    subject = "Добро пожаловать!"
    body = f"""
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #333;">Добро пожаловать, {name}!</h1>
        <p>Спасибо за регистрацию на нашем сайте.</p>
        <p>Теперь вы можете пользоваться всеми возможностями нашего сервиса.</p>
        <p style="color: #666; font-size: 14px; margin-top: 30px;">
            Дата регистрации: {datetime.now().strftime("%d.%m.%Y %H:%M")}
        </p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
        <p style="color: #999; font-size: 12px;">
            Если вы не регистрировались на нашем сайте, просто проигнорируйте это письмо.
        </p>
    </div>
    """
    return _send_email(email, subject, body)


def send_login_notification(email: str, name: str) -> bool:
    """Send notification after successful login."""
    subject = "Вход в аккаунт"
    body = f"""
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #333;">Здравствуйте, {name}!</h1>
        <p>Был выполнен вход в ваш аккаунт.</p>
        <p style="color: #666; font-size: 14px;">
            Время входа: {datetime.now().strftime("%d.%m.%Y %H:%M")}
        </p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
        <p style="color: #999; font-size: 12px;">
            Если это были не вы, немедленно смените пароль.
        </p>
    </div>
    """
    return _send_email(email, subject, body)