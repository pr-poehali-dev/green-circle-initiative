import time
import json


def handler(event: dict, context) -> dict:
    """Медленная функция — ждёт 10 секунд и возвращает результат"""
    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type'}, 'body': ''}

    start = time.time()
    time.sleep(10)
    elapsed = round((time.time() - start) * 1000)

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'label': 'slow', 'target_ms': 10000, 'actual_ms': elapsed})
    }
