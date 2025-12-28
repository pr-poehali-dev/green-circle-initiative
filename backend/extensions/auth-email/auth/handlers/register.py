"""Registration handler."""
import json
from datetime import datetime

from utils.db import get_connection, escape_string
from utils.password import hash_password, validate_password, validate_email
from utils.http import response, error


def handle(event: dict) -> dict:
    """Register new user with email and password."""
    body_str = event.get('body', '{}')
    payload = json.loads(body_str)

    email = str(payload.get('email', '')).lower().strip()
    password = str(payload.get('password', ''))
    name = str(payload.get('name', '')).strip()[:255]

    if not email or not validate_email(email):
        return error(400, 'Некорректный email')

    is_valid, error_msg = validate_password(password)
    if not is_valid:
        return error(400, error_msg)

    conn = get_connection()
    cur = conn.cursor()

    # Simple Query Protocol - search_path is set in get_connection()
    check_query = f"SELECT id FROM users WHERE email = {escape_string(email)}"
    cur.execute(check_query)
    if cur.fetchone():
        cur.close()
        conn.close()
        return error(409, 'Пользователь с таким email уже существует')

    password_hash = hash_password(password)
    now = datetime.utcnow()

    # Simple Query Protocol
    insert_query = f"""
        INSERT INTO users (email, password_hash, name, created_at, updated_at)
        VALUES ({escape_string(email)}, {escape_string(password_hash)}, {escape_string(name) if name else 'NULL'}, {escape_string(now)}, {escape_string(now)})
        RETURNING id
    """
    cur.execute(insert_query)

    user_id = cur.fetchone()[0]
    conn.commit()
    cur.close()
    conn.close()

    return response(201, {'user_id': user_id, 'message': 'Регистрация успешна'})