'''
Business: Admin authentication API with brute-force protection
Args: event with httpMethod, body, headers; context with request_id
Returns: HTTP response with session token or error
'''

import json
import os
import secrets
import hashlib
from typing import Dict, Any, Optional
from datetime import datetime, timedelta
import psycopg2
from psycopg2.extras import RealDictCursor

DATABASE_URL = os.environ.get('DATABASE_URL', '')
ADMIN_PASSWORD_HASH = os.environ.get('ADMIN_PASSWORD_HASH', '')

MAX_ATTEMPTS = 5
ATTEMPT_WINDOW_MINUTES = 15
SESSION_DURATION_HOURS = 24


def get_db_connection():
    conn = psycopg2.connect(DATABASE_URL)
    conn.autocommit = True
    return conn


def escape_sql(value: Any) -> str:
    if value is None:
        return 'NULL'
    if isinstance(value, bool):
        return 'TRUE' if value else 'FALSE'
    if isinstance(value, (int, float)):
        return str(value)
    return f"'{str(value).replace(chr(39), chr(39)+chr(39))}'"


def get_client_ip(event: Dict[str, Any]) -> str:
    headers = event.get('headers', {})
    forwarded = headers.get('X-Forwarded-For', '')
    if forwarded:
        return forwarded.split(',')[0].strip()
    return headers.get('X-Real-IP', 'unknown')


def check_rate_limit(ip: str) -> tuple[bool, int]:
    conn = get_db_connection()
    try:
        with conn.cursor(cursor_factory=RealDictCursor) as cur:
            window_start = datetime.utcnow() - timedelta(minutes=ATTEMPT_WINDOW_MINUTES)
            
            query = f"""
                SELECT COUNT(*) as attempt_count 
                FROM auth_attempts 
                WHERE ip_address = {escape_sql(ip)} 
                AND attempt_time > {escape_sql(window_start.isoformat())}
            """
            cur.execute(query)
            result = cur.fetchone()
            
            attempts = result['attempt_count'] if result else 0
            remaining = MAX_ATTEMPTS - attempts
            
            return attempts < MAX_ATTEMPTS, max(0, remaining)
    finally:
        conn.close()


def log_attempt(ip: str, success: bool):
    conn = get_db_connection()
    try:
        with conn.cursor() as cur:
            query = f"""
                INSERT INTO auth_attempts (ip_address, success, attempt_time)
                VALUES ({escape_sql(ip)}, {escape_sql(success)}, {escape_sql(datetime.utcnow().isoformat())})
            """
            cur.execute(query)
    finally:
        conn.close()


def create_session(ip: str) -> str:
    session_token = secrets.token_urlsafe(32)
    session_hash = hashlib.sha256(session_token.encode()).hexdigest()
    expires_at = datetime.utcnow() + timedelta(hours=SESSION_DURATION_HOURS)
    
    conn = get_db_connection()
    try:
        with conn.cursor() as cur:
            query = f"""
                INSERT INTO admin_sessions (session_hash, ip_address, expires_at, created_at)
                VALUES ({escape_sql(session_hash)}, {escape_sql(ip)}, 
                        {escape_sql(expires_at.isoformat())}, {escape_sql(datetime.utcnow().isoformat())})
            """
            cur.execute(query)
    finally:
        conn.close()
    
    return session_token


def verify_session(session_token: str, ip: str) -> bool:
    session_hash = hashlib.sha256(session_token.encode()).hexdigest()
    
    conn = get_db_connection()
    try:
        with conn.cursor(cursor_factory=RealDictCursor) as cur:
            query = f"""
                SELECT * FROM admin_sessions 
                WHERE session_hash = {escape_sql(session_hash)}
                AND ip_address = {escape_sql(ip)}
                AND expires_at > {escape_sql(datetime.utcnow().isoformat())}
            """
            cur.execute(query)
            result = cur.fetchone()
            return result is not None
    finally:
        conn.close()


def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-Session-Token',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    client_ip = get_client_ip(event)
    
    if method == 'POST':
        body_data = json.loads(event.get('body', '{}'))
        action = body_data.get('action', 'login')
        
        if action == 'login':
            allowed, remaining = check_rate_limit(client_ip)
            
            if not allowed:
                return {
                    'statusCode': 429,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'isBase64Encoded': False,
                    'body': json.dumps({
                        'error': 'Слишком много попыток входа',
                        'retry_after_minutes': ATTEMPT_WINDOW_MINUTES
                    }, ensure_ascii=False)
                }
            
            password = body_data.get('password', '')
            password_hash = hashlib.sha256(password.encode()).hexdigest()
            
            if password_hash == ADMIN_PASSWORD_HASH:
                log_attempt(client_ip, True)
                session_token = create_session(client_ip)
                
                return {
                    'statusCode': 200,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'isBase64Encoded': False,
                    'body': json.dumps({
                        'success': True,
                        'session_token': session_token,
                        'expires_in_hours': SESSION_DURATION_HOURS
                    }, ensure_ascii=False)
                }
            else:
                log_attempt(client_ip, False)
                
                return {
                    'statusCode': 401,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'isBase64Encoded': False,
                    'body': json.dumps({
                        'error': 'Неверный пароль',
                        'attempts_remaining': remaining - 1
                    }, ensure_ascii=False)
                }
        
        if action == 'verify':
            session_token = body_data.get('session_token', '')
            
            if verify_session(session_token, client_ip):
                return {
                    'statusCode': 200,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'isBase64Encoded': False,
                    'body': json.dumps({
                        'valid': True
                    }, ensure_ascii=False)
                }
            else:
                return {
                    'statusCode': 401,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'isBase64Encoded': False,
                    'body': json.dumps({
                        'valid': False
                    }, ensure_ascii=False)
                }
    
    return {
        'statusCode': 405,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'isBase64Encoded': False,
        'body': json.dumps({'error': 'Метод не поддерживается'}, ensure_ascii=False)
    }
