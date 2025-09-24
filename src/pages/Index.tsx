import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';
import functionsData from '../../backend/func2url.json';

interface TestResult {
  functionNumber: number;
  message: string;
  requestId: string;
  timestamp: string;
  status: number;
  error?: string;
}

const Index = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<TestResult | null>(null);
  const { isAuthenticated, user } = useAuth();

  const callFunction = async () => {
    setLoading(true);
    setResult(null);

    try {
      const url = functionsData['test-func-01' as keyof typeof functionsData];
      
      if (!url) {
        setResult({
          functionNumber: 1,
          message: 'Function not found',
          requestId: '',
          timestamp: new Date().toISOString(),
          status: 404,
          error: 'URL not found'
        });
        return;
      }

      const response = await fetch(url);
      const data = await response.json();
      
      setResult({
        ...data,
        status: response.status
      });
    } catch (error) {
      setResult({
        functionNumber: 1,
        message: 'Network error',
        requestId: '',
        timestamp: new Date().toISOString(),
        status: 500,
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Навигация */}
        <div className="flex justify-between items-center mb-8 bg-white/70 backdrop-blur-sm rounded-lg p-4 shadow-sm">
          <h2 className="text-lg font-semibold">Главная</h2>
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <span className="text-sm text-muted-foreground">
                  Привет, {user?.username}!
                </span>
                <Button asChild variant="outline" size="sm">
                  <Link to="/profile">
                    <Icon name="User" className="mr-2 h-4 w-4" />
                    Профиль
                  </Link>
                </Button>
              </>
            ) : (
              <Button asChild size="sm">
                <Link to="/auth">
                  <Icon name="LogIn" className="mr-2 h-4 w-4" />
                  Войти
                </Link>
              </Button>
            )}
          </div>
        </div>
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            🚀 Добро пожаловать!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {isAuthenticated 
              ? `Привет, ${user?.username}! Система авторизации работает.`
              : 'Система с авторизацией готова к использованию'
            }
          </p>
        </div>

        {/* Кнопка для тестирования функции */}
        <div className="mb-8">
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 justify-center">
                <Icon name="Zap" className="h-6 w-6 text-yellow-600" />
                <span>Тестовая функция #1</span>
              </CardTitle>
              <CardDescription className="text-center">
                Вызов единственной backend функции
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={callFunction}
                disabled={loading}
                className="w-full"
                size="lg"
              >
                {loading ? (
                  <>
                    <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
                    Тестирую...
                  </>
                ) : (
                  <>
                    <Icon name="Play" className="mr-2 h-4 w-4" />
                    Тестировать функцию
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Результат тестирования */}
        {result && (
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 justify-center">
                <Icon 
                  name={result.status === 200 ? "CheckCircle" : "XCircle"} 
                  className={`h-6 w-6 ${
                    result.status === 200 ? 'text-green-600' : 'text-red-600'
                  }`}
                />
                <span>Результат теста</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Функция:</span>
                    <div className="font-semibold">#{result.functionNumber}</div>
                  </div>
                  
                  <div>
                    <span className="text-gray-600">Статус:</span>
                    <div className={`font-semibold ${
                      result.status === 200 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {result.status}
                    </div>
                  </div>
                  
                  <div className="col-span-2">
                    <span className="text-gray-600">Сообщение:</span>
                    <div className="font-semibold">{result.message}</div>
                  </div>
                  
                  <div className="col-span-2">
                    <span className="text-gray-600">Request ID:</span>
                    <div className="font-mono text-xs bg-gray-100 p-2 rounded">
                      {result.requestId || 'Не получен'}
                    </div>
                  </div>
                  
                  <div className="col-span-2">
                    <span className="text-gray-600">Время:</span>
                    <div className="text-xs">
                      {new Date(result.timestamp).toLocaleString('ru-RU')}
                    </div>
                  </div>
                  
                  {result.error && (
                    <div className="col-span-2">
                      <span className="text-gray-600">Ошибка:</span>
                      <div className="text-red-600 text-xs bg-red-50 p-2 rounded">
                        {result.error}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Информация о функции */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Icon name="Info" className="h-6 w-6 text-blue-600" />
              <span>Информация о тестировании</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Что тестируем?</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 1 backend функция</li>
                  <li>• HTTP запрос</li>
                  <li>• Время ответа</li>
                  <li>• Статус код</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">Функция:</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• test-func-01</li>
                  <li>• TypeScript Node.js</li>
                  <li>• Yandex Cloud Functions</li>
                  <li>• Возвращает номер функции</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">Метрики:</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Успешность вызова</li>
                  <li>• Request ID</li>
                  <li>• Timestamp</li>
                  <li>• Обработка ошибок</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;