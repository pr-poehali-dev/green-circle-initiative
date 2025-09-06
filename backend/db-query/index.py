import json
import os
import psycopg2
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Execute read-only SQL queries
    Args: event with httpMethod and query parameter
    Returns: Query results as JSON
    '''
    method = event.get('httpMethod', 'GET')
    
    # Handle CORS
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'GET':
        return {
            'statusCode': 405,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    # Get database connection
    try:
        database_url = os.getenv('DATABASE_URL')
        if database_url:
            conn = psycopg2.connect(database_url)
        else:
            conn = psycopg2.connect(
                host=os.getenv('DB_HOST', 'localhost'),
                database=os.getenv('DB_NAME', 'poehali'),
                user=os.getenv('DB_USER', 'postgres'),
                password=os.getenv('DB_PASSWORD', ''),
                port=os.getenv('DB_PORT', '5432')
            )
        
        cur = conn.cursor()
        
        # Execute query to get users table data
        cur.execute("""
            SELECT 
                id,
                email,
                username,
                name,
                role,
                is_active,
                "order",
                metadata::text,
                created_at,
                updated_at
            FROM project_489d77e8.users
            ORDER BY "order", id
        """)
        
        # Get column names
        columns = [desc[0] for desc in cur.description]
        
        # Fetch all rows
        rows = cur.fetchall()
        
        # Convert to list of dicts
        users = []
        for row in rows:
            user = {}
            for i, col in enumerate(columns):
                value = row[i]
                if col in ['created_at', 'updated_at'] and value:
                    value = value.isoformat()
                elif col == 'metadata' and value:
                    value = json.loads(value)
                user[col] = value
            users.append(user)
        
        conn.close()
        
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            'body': json.dumps({
                'users': users,
                'total': len(users),
                'columns': columns
            })
        }
        
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': str(e)})
        }