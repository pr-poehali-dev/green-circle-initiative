"""
Управление каталогом товаров
Args: event с httpMethod, body, queryStringParameters; context с request_id
Returns: HTTP response для работы с товарами (получение списка, добавление, удаление)
"""

import json
import os
from typing import Dict, Any, List, Optional
import psycopg2
from psycopg2.extras import RealDictCursor
from pydantic import BaseModel, Field, ValidationError

class ProductCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=255)
    description: Optional[str] = None
    price: float = Field(..., gt=0)
    image_url: Optional[str] = None

def get_db_connection():
    """Получение соединения с базой данных"""
    database_url = os.environ.get('DATABASE_URL')
    if not database_url:
        raise Exception('DATABASE_URL environment variable not found')
    
    return psycopg2.connect(database_url, cursor_factory=RealDictCursor)

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    method: str = event.get('httpMethod', 'GET')
    
    # Обработка CORS OPTIONS запроса
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    
    try:
        if method == 'GET':
            # Получение списка товаров
            conn = get_db_connection()
            cursor = conn.cursor()
            
            cursor.execute("""
                SELECT id, name, description, price, image_url, created_at
                FROM project_489d77e8.products 
                ORDER BY created_at DESC
            """)
            
            products = []
            for row in cursor.fetchall():
                products.append({
                    'id': row['id'],
                    'name': row['name'],
                    'description': row['description'],
                    'price': float(row['price']),
                    'image_url': row['image_url'],
                    'created_at': row['created_at'].isoformat() if row['created_at'] else None
                })
            
            cursor.close()
            conn.close()
            
            return {
                'statusCode': 200,
                'headers': headers,
                'body': json.dumps({'products': products})
            }
        
        elif method == 'POST':
            # Добавление нового товара
            body_data = json.loads(event.get('body', '{}'))
            product_data = ProductCreate(**body_data)
            
            conn = get_db_connection()
            cursor = conn.cursor()
            
            cursor.execute("""
                INSERT INTO project_489d77e8.products (name, description, price, image_url)
                VALUES (%s, %s, %s, %s)
                RETURNING id, name, description, price, image_url, created_at
            """, (product_data.name, product_data.description, product_data.price, product_data.image_url))
            
            new_product = cursor.fetchone()
            conn.commit()
            cursor.close()
            conn.close()
            
            result = {
                'id': new_product['id'],
                'name': new_product['name'],
                'description': new_product['description'],
                'price': float(new_product['price']),
                'image_url': new_product['image_url'],
                'created_at': new_product['created_at'].isoformat() if new_product['created_at'] else None
            }
            
            return {
                'statusCode': 201,
                'headers': headers,
                'body': json.dumps({'product': result, 'message': 'Товар успешно добавлен'})
            }
        
        elif method == 'DELETE':
            # Удаление товара
            params = event.get('queryStringParameters', {}) or {}
            product_id = params.get('id')
            
            if not product_id:
                return {
                    'statusCode': 400,
                    'headers': headers,
                    'body': json.dumps({'error': 'Не указан ID товара'})
                }
            
            conn = get_db_connection()
            cursor = conn.cursor()
            
            # Проверяем существование товара
            cursor.execute("""
                SELECT id, name FROM project_489d77e8.products WHERE id = %s
            """, (product_id,))
            
            product = cursor.fetchone()
            if not product:
                cursor.close()
                conn.close()
                return {
                    'statusCode': 404,
                    'headers': headers,
                    'body': json.dumps({'error': 'Товар не найден'})
                }
            
            # Удаляем товар
            cursor.execute("""
                DELETE FROM project_489d77e8.products WHERE id = %s
            """, (product_id,))
            
            conn.commit()
            cursor.close()
            conn.close()
            
            return {
                'statusCode': 200,
                'headers': headers,
                'body': json.dumps({'message': f'Товар "{product["name"]}" успешно удален'})
            }
        
        else:
            return {
                'statusCode': 405,
                'headers': headers,
                'body': json.dumps({'error': 'Метод не поддерживается'})
            }
    
    except ValidationError as e:
        return {
            'statusCode': 400,
            'headers': headers,
            'body': json.dumps({'error': 'Ошибка валидации данных', 'details': e.errors()})
        }
    
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': headers,
            'body': json.dumps({'error': f'Ошибка сервера: {str(e)}'})
        }