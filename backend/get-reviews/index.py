import json
import os
import psycopg2
from typing import Dict, Any, List

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Get customer reviews from database for reviews widget
    Args: event - dict with HTTP request data
          context - object with request metadata
    Returns: HTTP response with reviews list
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
        
        # Query to get reviews 
        query = """
        SELECT 
            r.id,
            r.rating,
            r.review_text,
            r.customer_name,
            r.created_at
        FROM project_489d77e8.reviews r
        ORDER BY r.created_at DESC
        LIMIT 50;
        """
        
        cursor.execute(query)
        reviews_data = cursor.fetchall()
        
        # Convert to list of dictionaries
        reviews_list = []
        for row in reviews_data:
            review = {
                'id': row[0],
                'rating': row[1],
                'review_text': row[2],
                'customer_name': row[3],
                'created_at': row[4].isoformat() if row[4] else None
            }
            reviews_list.append(review)
        
        # Close connection
        cursor.close()
        conn.close()
        
        result = {
            'status': 'success',
            'message': 'Reviews retrieved successfully',
            'total_reviews': len(reviews_list),
            'reviews': reviews_list,
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