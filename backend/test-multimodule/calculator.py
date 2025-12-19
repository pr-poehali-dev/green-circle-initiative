class Calculator:
    '''
    Тестовый модуль для демонстрации многомодульной архитектуры.
    Содержит простые математические операции.
    '''
    
    def add(self, a: float, b: float) -> float:
        '''Складывает два числа'''
        return a + b
    
    def multiply(self, a: float, b: float) -> float:
        '''Умножает два числа'''
        return a * b
    
    def subtract(self, a: float, b: float) -> float:
        '''Вычитает b из a'''
        return a - b
    
    def divide(self, a: float, b: float) -> float:
        '''Делит a на b'''
        if b == 0:
            raise ValueError('Деление на ноль невозможно')
        return a / b
