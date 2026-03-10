import time
import json


def handler(event: dict, context) -> dict:
    """Средняя функция — ждёт 5 секунд и возвращает результат"""
    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type'}, 'body': ''}

    start = time.time()
    time.sleep(5)
    elapsed = round((time.time() - start) * 1000)

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'label': 'medium', 'target_ms': 5000, 'actual_ms': elapsed})
    }