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
    
    print(f"[LOG] Function get-reviews started. Request ID: {getattr(context, 'request_id', 'unknown')}")
    print(f"[LOG] HTTP Method: {event.get('httpMethod', 'unknown')}")
    
    try:
        # Get database connection from environment
        database_url = os.environ.get('DATABASE_URL')
        print(f"[LOG] DATABASE_URL exists: {'Yes' if database_url else 'No'}")
        
        if not database_url:
            print("[LOG] ERROR: DATABASE_URL not found in environment")
            return {
                'statusCode': 500,
                'headers': {'Content-Type': 'application/json'},
                'body': json.dumps({
                    'error': 'DATABASE_URL not found in environment',
                    'status': 'error'
                })
            }
        
        # Connect to database
        print("[LOG] Attempting to connect to database...")
        conn = psycopg2.connect(database_url)
        cursor = conn.cursor()
        print("[LOG] Database connection established successfully")
        
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
        
        print("[LOG] Executing SQL query to fetch reviews...")
        print(f"[LOG] Query: {query.strip()}")
        cursor.execute(query)
        reviews_data = cursor.fetchall()
        print(f"[LOG] Query executed successfully. Found {len(reviews_data)} reviews")
        
        # Convert to list of dictionaries
        print("[LOG] Converting reviews data to JSON format...")
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
        
        print(f"[LOG] Successfully converted {len(reviews_list)} reviews to JSON format")
        
        # Close connection
        print("[LOG] Closing database connection...")
        cursor.close()
        conn.close()
        print("[LOG] Database connection closed")
        
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
        
        print(f"[LOG] Preparing successful response with {len(reviews_list)} reviews")
        print(f"[LOG] Function get-reviews completed successfully")
        
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
        print(f"[LOG] ERROR: Database error occurred: {str(db_error)}")
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
        print(f"[LOG] ERROR: Unexpected error occurred: {str(e)}")
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json'},
            'body': json.dumps({
                'error': f'Unexpected error: {str(e)}',
                'status': 'error',
                'error_type': 'general'
            })
        }