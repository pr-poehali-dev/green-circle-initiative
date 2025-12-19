import json
from typing import Dict, Any
from calculator import Calculator

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Тестовая функция для проверки многомодульной архитектуры.
    Использует отдельный модуль calculator для вычислений.
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method == 'GET':
        calc = Calculator()
        result = calc.add(5, 3)
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'message': 'Multimodule test',
                'calculation': '5 + 3',
                'result': result,
                'module': 'calculator'
            }),
            'isBase64Encoded': False
        }
    
    if method == 'POST':
        body_data = json.loads(event.get('body', '{}'))
        a = body_data.get('a', 0)
        b = body_data.get('b', 0)
        operation = body_data.get('operation', 'add')
        
        calc = Calculator()
        
        if operation == 'add':
            result = calc.add(a, b)
        elif operation == 'multiply':
            result = calc.multiply(a, b)
        else:
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Unknown operation'}),
                'isBase64Encoded': False
            }
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'a': a,
                'b': b,
                'operation': operation,
                'result': result
            }),
            'isBase64Encoded': False
        }
    
    return {
        'statusCode': 405,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({'error': 'Method not allowed'}),
        'isBase64Encoded': False
    }
