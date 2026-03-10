import time
import json


def handler(event: dict, context) -> dict:
    """Быстрая функция — ждёт 200мс и возвращает результат"""
    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type'}, 'body': ''}

    start = time.time()
    time.sleep(0.2)
    elapsed = round((time.time() - start) * 1000)

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'label': 'fast', 'target_ms': 200, 'actual_ms': elapsed})
    }
