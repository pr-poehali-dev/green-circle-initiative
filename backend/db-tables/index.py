import json
import os
import psycopg2
from typing import Dict, Any, List

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Get list of all database tables with basic information
    Args: event - dict with HTTP request data
          context - object with request metadata
    Returns: HTTP response with database tables list
    '''
    
    try:
        # Get database connection from environment
        database_url = os.environ.get('DATABASE_URL')
        if not database_url:
            return {
                'statusCode': 500,
                'headers': {'Content-Type': 'application/json'},
                'body': json.dumps({
                    'error': 'DATABASE_URL not found in environment',
                    'status': 'error'
                })
            }
        
        # Connect to database
        conn = psycopg2.connect(database_url)
        cursor = conn.cursor()
        
        # Query to get all tables with basic info
        query = """
        SELECT 
            schemaname as schema_name,
            tablename as table_name,
            tableowner as table_owner,
            hasindexes as has_indexes,
            hasrules as has_rules,
            hastriggers as has_triggers
        FROM pg_tables 
        WHERE schemaname NOT IN ('information_schema', 'pg_catalog')
        ORDER BY schemaname, tablename;
        """
        
        cursor.execute(query)
        tables_data = cursor.fetchall()
        
        # Get column names
        column_names = [desc[0] for desc in cursor.description]
        
        # Convert to list of dictionaries
        tables_list = []
        for row in tables_data:
            table_info = dict(zip(column_names, row))
            tables_list.append(table_info)
        
        # Get total count
        cursor.execute("SELECT COUNT(*) FROM pg_tables WHERE schemaname NOT IN ('information_schema', 'pg_catalog')")
        total_count = cursor.fetchone()[0]
        
        # Close connection
        cursor.close()
        conn.close()
        
        result = {
            'status': 'success',
            'message': 'Database tables retrieved successfully',
            'total_tables': total_count,
            'tables': tables_list,
            'request_info': {
                'method': event.get('httpMethod', 'unknown'),
                'request_id': getattr(context, 'request_id', 'unknown')
            }
        }
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization'
            },
            'isBase64Encoded': False,
            'body': json.dumps(result, indent=2, ensure_ascii=False, default=str)
        }
        
    except psycopg2.Error as db_error:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json'},
            'body': json.dumps({
                'error': f'Database error: {str(db_error)}',
                'status': 'error',
                'error_type': 'database'
            })
        }
    
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json'},
            'body': json.dumps({
                'error': f'Unexpected error: {str(e)}',
                'status': 'error',
                'error_type': 'general'
            })
        }