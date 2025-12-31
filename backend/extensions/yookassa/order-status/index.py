"""Get order status and sync with YooKassa."""
import json
import os
import base64
from datetime import datetime
from urllib.request import Request, urlopen
from urllib.error import HTTPError

import psycopg2


# =============================================================================
# CONSTANTS
# =============================================================================

YOOKASSA_API_URL = "https://api.yookassa.ru/v3/payments"

HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
}


# =============================================================================
# DATABASE
# =============================================================================

def get_connection():
    """Get database connection."""
    return psycopg2.connect(os.environ['DATABASE_URL'])


def get_schema() -> str:
    """Get database schema prefix."""
    schema = os.environ.get('MAIN_DB_SCHEMA', 'public')
    return f"{schema}." if schema else ""


# =============================================================================
# YOOKASSA API
# =============================================================================

def get_payment_status(payment_id: str, shop_id: str, secret_key: str) -> dict | None:
    """Get payment status from YooKassa API."""
    auth_string = f"{shop_id}:{secret_key}"
    auth_bytes = base64.b64encode(auth_string.encode()).decode()

    request = Request(
        f"{YOOKASSA_API_URL}/{payment_id}",
        headers={
            'Authorization': f'Basic {auth_bytes}',
            'Content-Type': 'application/json'
        },
        method='GET'
    )

    try:
        with urlopen(request, timeout=10) as response:
            return json.loads(response.read().decode())
    except (HTTPError, Exception):
        return None


# =============================================================================
# HANDLER
# =============================================================================

def handler(event, context):
    """
    Получить статус заказа и синхронизировать с YooKassa.
    
    GET /order-status?order_number=YK-20251231-XXXXX
    """
    # CORS preflight
    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': HEADERS, 'body': ''}

    if event.get('httpMethod') != 'GET':
        return {
            'statusCode': 405,
            'headers': HEADERS,
            'body': json.dumps({'error': 'Method not allowed'})
        }

    # Get order_number from query params
    query_params = event.get('queryStringParameters', {})
    order_number = query_params.get('order_number', '').strip()

    if not order_number:
        return {
            'statusCode': 400,
            'headers': HEADERS,
            'body': json.dumps({'error': 'order_number is required'})
        }

    S = get_schema()
    conn = get_connection()

    try:
        cur = conn.cursor()

        # Get order from DB
        cur.execute(f"""
            SELECT id, order_number, user_name, user_email, user_phone, amount, status, 
                   yookassa_payment_id, payment_url, created_at, updated_at, paid_at
            FROM {S}orders
            WHERE order_number = %s
        """, (order_number,))

        row = cur.fetchone()

        if not row:
            return {
                'statusCode': 404,
                'headers': HEADERS,
                'body': json.dumps({'error': 'Order not found'})
            }

        order_id, order_number, user_name, user_email, user_phone, amount, status, \
            payment_id, payment_url, created_at, updated_at, paid_at = row

        # If order is pending and has payment_id, check YooKassa status
        if status == 'pending' and payment_id:
            shop_id = os.environ.get('YOOKASSA_SHOP_ID', '')
            secret_key = os.environ.get('YOOKASSA_SECRET_KEY', '')

            if shop_id and secret_key:
                payment_info = get_payment_status(payment_id, shop_id, secret_key)

                if payment_info:
                    yookassa_status = payment_info.get('status', '')
                    now = datetime.utcnow().isoformat()

                    # Update order if payment succeeded
                    if yookassa_status == 'succeeded' and status != 'paid':
                        cur.execute(f"""
                            UPDATE {S}orders
                            SET status = 'paid', paid_at = %s, updated_at = %s
                            WHERE id = %s
                        """, (now, now, order_id))
                        conn.commit()
                        status = 'paid'
                        paid_at = now

                    # Update order if payment canceled
                    elif yookassa_status == 'canceled' and status not in ('paid', 'canceled'):
                        cur.execute(f"""
                            UPDATE {S}orders
                            SET status = 'canceled', updated_at = %s
                            WHERE id = %s
                        """, (now, order_id))
                        conn.commit()
                        status = 'canceled'

        # Return order data
        return {
            'statusCode': 200,
            'headers': HEADERS,
            'body': json.dumps({
                'order_number': order_number,
                'user_name': user_name,
                'user_email': user_email,
                'user_phone': user_phone or '',
                'amount': float(amount),
                'status': status,
                'payment_url': payment_url or '',
                'created_at': created_at.isoformat() if created_at else None,
                'paid_at': paid_at.isoformat() if paid_at else None
            })
        }

    except Exception as e:
        return {
            'statusCode': 500,
            'headers': HEADERS,
            'body': json.dumps({'error': f'Internal error: {str(e)}'})
        }
    finally:
        conn.close()
