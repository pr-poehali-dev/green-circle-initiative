"""Test auth registration endpoint."""
import json
import os
import psycopg2


def handler(event: dict, context) -> dict:
    """Test database connection and query."""
    
    # CORS headers
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
    }
    
    method = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': headers,
            'body': '',
            'isBase64Encoded': False
        }
    
    try:
        # Connect to database
        dsn = os.environ.get('DATABASE_URL')
        conn = psycopg2.connect(dsn)
        cur = conn.cursor()
        
        # Test query with full schema name
        cur.execute('SELECT COUNT(*) FROM "t_p18279400_green_circle_initiat"."users"')
        count = cur.fetchone()[0]
        
        cur.close()
        conn.close()
        
        return {
            'statusCode': 200,
            'headers': headers,
            'body': json.dumps({
                'success': True,
                'message': 'Database connected',
                'users_count': count
            }),
            'isBase64Encoded': False
        }
        
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': headers,
            'body': json.dumps({
                'success': False,
                'error': str(e),
                'error_type': type(e).__name__
            }),
            'isBase64Encoded': False
        }
