import json

def handler(event: dict, context) -> dict:
    '''Тестовая функция для проверки маппинга заголовков (Authorization → X-Authorization, Cookie → X-Cookie)'''
    
    method = event.get('httpMethod', 'GET')
    headers = event.get('headers', {})
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, Cookie, X-Authorization, X-Cookie',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    x_authorization = headers.get('X-Authorization') or headers.get('x-authorization')
    x_cookie = headers.get('X-Cookie') or headers.get('x-cookie')
    
    response_data = {
        'received_headers': headers,
        'x_authorization': x_authorization,
        'x_cookie': x_cookie,
        'test_cookie_set': True,
        'method': method
    }
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'X-Set-Cookie': 'test_cookie=hello; Path=/; HttpOnly; Secure; SameSite=Strict'
        },
        'body': json.dumps(response_data, ensure_ascii=False),
        'isBase64Encoded': False
    }
