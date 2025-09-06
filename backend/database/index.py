import json
import psycopg2
import os
from typing import Dict, Any
from datetime import datetime, date, time
from decimal import Decimal

def add_cors_headers(response: Dict[str, Any]) -> Dict[str, Any]:
    '''Добавляет CORS заголовки к ответу'''
    cors_headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Content-Type': 'application/json'
    }
    
    if 'headers' in response:
        response['headers'].update(cors_headers)
    else:
        response['headers'] = cors_headers
    
    return response

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Database Query API - execute SQL queries
    Args: event with httpMethod, body containing SQL query
    Returns: HTTP response with query results
    '''
    
    method = event.get('httpMethod', 'GET')
    
    # Handle OPTIONS request for CORS
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    try:
        if method == 'POST':
            body = json.loads(event.get('body', '{}'))
            query = body.get('query', '')
            
            if not query:
                return add_cors_headers({
                    'statusCode': 400,
                    'body': json.dumps({'error': 'SQL query is required'})
                })
            
            return add_cors_headers(execute_query(query))
        else:
            return add_cors_headers({
                'statusCode': 405,
                'body': json.dumps({'error': 'Method not allowed'})
            })
    
    except Exception as e:
        return add_cors_headers({
            'statusCode': 500,
            'body': json.dumps({'error': str(e)})
        })

def get_db_connection():
    '''Создает подключение к базе данных'''
    database_url = os.getenv('DATABASE_URL')
    if database_url:
        return psycopg2.connect(database_url)
    else:
        return psycopg2.connect(
            host=os.getenv('DB_HOST', 'localhost'),
            database=os.getenv('DB_NAME', 'poehali'),
            user=os.getenv('DB_USER', 'postgres'),
            password=os.getenv('DB_PASSWORD', ''),
            port=os.getenv('DB_PORT', '5432')
        )

def serialize_value(value):
    '''Сериализует значение для JSON'''
    if isinstance(value, (datetime, date, time)):
        return value.isoformat()
    elif isinstance(value, Decimal):
        return float(value)
    elif isinstance(value, bytes):
        return value.decode('utf-8', errors='ignore')
    elif value is None:
        return None
    else:
        return str(value)

def execute_query(query: str) -> Dict[str, Any]:
    '''Выполняет SQL запрос и возвращает результаты'''
    conn = get_db_connection()
    try:
        cur = conn.cursor()
        
        # Выполняем запрос
        cur.execute(query)
        
        # Определяем тип запроса
        query_type = query.strip().upper().split()[0]
        
        if query_type in ['SELECT', 'SHOW', 'DESCRIBE', 'EXPLAIN']:
            # Получаем названия колонок
            columns = [desc[0] for desc in cur.description] if cur.description else []
            
            # Получаем данные
            rows = cur.fetchall()
            
            # Конвертируем в список словарей
            data = []
            for row in rows:
                row_dict = {}
                for i, col in enumerate(columns):
                    row_dict[col] = serialize_value(row[i])
                data.append(row_dict)
            
            # Получаем информацию о типах колонок
            column_info = []
            if cur.description:
                for desc in cur.description:
                    column_info.append({
                        'name': desc[0],
                        'type_code': desc[1],
                        'display_size': desc[2],
                        'internal_size': desc[3],
                        'precision': desc[4],
                        'scale': desc[5],
                        'null_ok': desc[6]
                    })
            
            return {
                'statusCode': 200,
                'body': json.dumps({
                    'success': True,
                    'columns': columns,
                    'column_info': column_info,
                    'data': data,
                    'row_count': len(data)
                })
            }
        else:
            # Для INSERT, UPDATE, DELETE и других операций
            row_count = cur.rowcount
            conn.commit()
            
            return {
                'statusCode': 200,
                'body': json.dumps({
                    'success': True,
                    'message': f'Query executed successfully',
                    'rows_affected': row_count
                })
            }
    
    except Exception as e:
        conn.rollback()
        return {
            'statusCode': 500,
            'body': json.dumps({
                'success': False,
                'error': str(e),
                'query': query
            })
        }
    
    finally:
        conn.close()