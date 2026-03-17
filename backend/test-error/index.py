def handler(event: dict, context) -> dict:
    """Тестовая функция с ошибкой"""
    result = 1 / 0
    return {"statusCode": 200, "body": result}
