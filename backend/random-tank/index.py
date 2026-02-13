import json
import random


TURRETS = [
    "Смоки", "Огнемёт", "Твинс", "Рельса", "Изида", "Молот",
    "Гром", "Фриз", "Рикошет", "Шафт", "Страйкер", "Магнум",
    "Гаусс", "Вулкан", "Скорпион"
]

HULLS = [
    "Оса", "Хорнет", "Викинг", "Диктатор", "Титан", "Мамонт",
    "Хантер", "Буран"
]

PAINTS = [
    "Зимний камуфляж", "Пустынный камуфляж", "Лесной камуфляж",
    "Тайдалл", "Протей", "Гранит", "Искра", "Металлик",
    "Спектр", "Инферно", "Зелёнка", "Вирус", "Берри",
    "Цифра", "Закат", "Северное сияние", "Пламя дракона"
]


def handler(event, context):
    """Возвращает рандомную комбинацию пушка + корпус + краска для Танков Онлайн"""
    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    turret = random.choice(TURRETS)
    hull = random.choice(HULLS)
    paint = random.choice(PAINTS)

    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({
            'turret': turret,
            'hull': hull,
            'paint': paint
        }, ensure_ascii=False)
    }
