import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
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
  const [loading, setLoading] = useState<string | null>(null);
  const [results, setResults] = useState<TestResult[]>([]);

  // Группируем функции
  const group1 = Array.from({ length: 10 }, (_, i) => i + 1); // 1-10
  const group2 = Array.from({ length: 10 }, (_, i) => i + 11); // 11-20  
  const group3 = Array.from({ length: 10 }, (_, i) => i + 21); // 21-30

  const callFunction = async (funcNum: number) => {
    const funcKey = `test-func-${String(funcNum).padStart(2, '0')}`;
    const url = functionsData[funcKey as keyof typeof functionsData];
    
    if (!url) {
      return {
        functionNumber: funcNum,
        message: 'Function not found',
        requestId: '',
        timestamp: new Date().toISOString(),
        status: 404,
        error: 'URL not found'
      };
    }

    try {
      const response = await fetch(url);
      const data = await response.json();
      
      return {
        ...data,
        status: response.status
      };
    } catch (error) {
      return {
        functionNumber: funcNum,
        message: 'Network error',
        requestId: '',
        timestamp: new Date().toISOString(),
        status: 500,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  };

  const callSingleFunction = async (funcNum: number) => {
    setLoading(`single-${funcNum}`);
    
    try {
      const result = await callFunction(funcNum);
      setResults([result]);
    } catch (error) {
      console.error('Error calling function:', error);
    } finally {
      setLoading(null);
    }
  };

  const callFunctions = async (group: number[], groupName: string) => {
    setLoading(groupName);
    setResults([]);

    try {
      // Вызываем все функции группы параллельно
      const promises = group.map(funcNum => callFunction(funcNum));
      const groupResults = await Promise.all(promises);
      setResults(groupResults);
    } catch (error) {
      console.error('Error calling functions:', error);
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            🚀 Тестирование Backend Функций
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            30 тестовых функций разделены на 3 группы по 10 штук
          </p>
        </div>

        {/* Кнопки для тестирования групп */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="Zap" className="h-6 w-6 text-yellow-600" />
                <span>Группа 1</span>
              </CardTitle>
              <CardDescription>Функции 1-10</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                onClick={() => callFunctions(group1, 'group1')}
                disabled={loading !== null}
                className="w-full"
                size="lg"
              >
                {loading === 'group1' ? (
                  <>
                    <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
                    Тестирую...
                  </>
                ) : (
                  <>
                    <Icon name="Play" className="mr-2 h-4 w-4" />
                    Тестировать группу 1
                  </>
                )}
              </Button>
              
              <div className="flex space-x-2">
                <Button 
                  onClick={() => callSingleFunction(1)}
                  disabled={loading !== null}
                  variant="outline"
                  size="sm"
                  className="flex-1"
                >
                  {loading === 'single-1' ? (
                    <Icon name="Loader2" className="h-3 w-3 animate-spin" />
                  ) : (
                    'Функция 1'
                  )}
                </Button>
                <Button 
                  onClick={() => callSingleFunction(2)}
                  disabled={loading !== null}
                  variant="outline"
                  size="sm"
                  className="flex-1"
                >
                  {loading === 'single-2' ? (
                    <Icon name="Loader2" className="h-3 w-3 animate-spin" />
                  ) : (
                    'Функция 2'
                  )}
                </Button>
                <Button 
                  onClick={() => callSingleFunction(3)}
                  disabled={loading !== null}
                  variant="outline"
                  size="sm"
                  className="flex-1"
                >
                  {loading === 'single-3' ? (
                    <Icon name="Loader2" className="h-3 w-3 animate-spin" />
                  ) : (
                    'Функция 3'
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="Rocket" className="h-6 w-6 text-blue-600" />
                <span>Группа 2</span>
              </CardTitle>
              <CardDescription>Функции 11-20</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                onClick={() => callFunctions(group2, 'group2')}
                disabled={loading !== null}
                className="w-full"
                size="lg"
              >
                {loading === 'group2' ? (
                  <>
                    <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
                    Тестирую...
                  </>
                ) : (
                  <>
                    <Icon name="Play" className="mr-2 h-4 w-4" />
                    Тестировать группу 2
                  </>
                )}
              </Button>
              
              <div className="flex space-x-2">
                <Button 
                  onClick={() => callSingleFunction(11)}
                  disabled={loading !== null}
                  variant="outline"
                  size="sm"
                  className="flex-1"
                >
                  {loading === 'single-11' ? (
                    <Icon name="Loader2" className="h-3 w-3 animate-spin" />
                  ) : (
                    'Функция 11'
                  )}
                </Button>
                <Button 
                  onClick={() => callSingleFunction(12)}
                  disabled={loading !== null}
                  variant="outline"
                  size="sm"
                  className="flex-1"
                >
                  {loading === 'single-12' ? (
                    <Icon name="Loader2" className="h-3 w-3 animate-spin" />
                  ) : (
                    'Функция 12'
                  )}
                </Button>
                <Button 
                  onClick={() => callSingleFunction(13)}
                  disabled={loading !== null}
                  variant="outline"
                  size="sm"
                  className="flex-1"
                >
                  {loading === 'single-13' ? (
                    <Icon name="Loader2" className="h-3 w-3 animate-spin" />
                  ) : (
                    'Функция 13'
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="Flame" className="h-6 w-6 text-red-600" />
                <span>Группа 3</span>
              </CardTitle>
              <CardDescription>Функции 21-30</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                onClick={() => callFunctions(group3, 'group3')}
                disabled={loading !== null}
                className="w-full"
                size="lg"
              >
                {loading === 'group3' ? (
                  <>
                    <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
                    Тестирую...
                  </>
                ) : (
                  <>
                    <Icon name="Play" className="mr-2 h-4 w-4" />
                    Тестировать группу 3
                  </>
                )}
              </Button>
              
              <div className="flex space-x-2">
                <Button 
                  onClick={() => callSingleFunction(21)}
                  disabled={loading !== null}
                  variant="outline"
                  size="sm"
                  className="flex-1"
                >
                  {loading === 'single-21' ? (
                    <Icon name="Loader2" className="h-3 w-3 animate-spin" />
                  ) : (
                    'Функция 21'
                  )}
                </Button>
                <Button 
                  onClick={() => callSingleFunction(22)}
                  disabled={loading !== null}
                  variant="outline"
                  size="sm"
                  className="flex-1"
                >
                  {loading === 'single-22' ? (
                    <Icon name="Loader2" className="h-3 w-3 animate-spin" />
                  ) : (
                    'Функция 22'
                  )}
                </Button>
                <Button 
                  onClick={() => callSingleFunction(23)}
                  disabled={loading !== null}
                  variant="outline"
                  size="sm"
                  className="flex-1"
                >
                  {loading === 'single-23' ? (
                    <Icon name="Loader2" className="h-3 w-3 animate-spin" />
                  ) : (
                    'Функция 23'
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Результаты тестирования */}
        {results.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="BarChart3" className="h-6 w-6 text-green-600" />
                <span>Результаты тестирования</span>
              </CardTitle>
              <CardDescription>
                Успешно: {results.filter(r => r.status === 200).length} / {results.length}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-h-96 overflow-y-auto">
                {results.map((result) => (
                  <div 
                    key={result.functionNumber}
                    className={`p-4 rounded-lg border-2 ${
                      result.status === 200 
                        ? 'border-green-200 bg-green-50' 
                        : 'border-red-200 bg-red-50'
                    }`}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon 
                        name={result.status === 200 ? "CheckCircle" : "XCircle"} 
                        className={`h-4 w-4 ${
                          result.status === 200 ? 'text-green-600' : 'text-red-600'
                        }`}
                      />
                      <span className="font-bold">#{result.functionNumber}</span>
                    </div>
                    
                    <div className="text-sm space-y-1">
                      <div className="text-gray-600">
                        Статус: <span className={result.status === 200 ? 'text-green-600' : 'text-red-600'}>
                          {result.status}
                        </span>
                      </div>
                      <div className="text-gray-600">
                        ID: {result.requestId.slice(0, 8)}...
                      </div>
                      {result.error && (
                        <div className="text-red-600 text-xs">
                          {result.error}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Информация о функциях */}
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
                  <li>• 30 backend функций</li>
                  <li>• Параллельные вызовы</li>
                  <li>• Время ответа</li>
                  <li>• Статус коды</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">Группы функций:</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Группа 1: функции 1-10</li>
                  <li>• Группа 2: функции 11-20</li>
                  <li>• Группа 3: функции 21-30</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">Метрики:</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Успешность вызовов</li>
                  <li>• Request ID</li>
                  <li>• Время выполнения</li>
                  <li>• Ошибки сети</li>
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