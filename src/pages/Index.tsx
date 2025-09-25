import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';
import functionsData from '../../backend/func2url.json';

interface SpaceFactResult {
  success: boolean;
  timestamp: string;
  total_facts: number;
  categories: string[];
  fact_data: {
    fact: string;
    explanation: string;
    category: string;
  };
  fun_bonus: string;
  request_info: {
    function_name: string;
    method: string;
    filtered_by: string;
  };
  status: number;
  error?: string;
}

const Index = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<SpaceFactResult | null>(null);
  const { isAuthenticated, user } = useAuth();

  const getSpaceFact = async () => {
    setLoading(true);
    setResult(null);

    try {
      const url = functionsData['space-facts' as keyof typeof functionsData];
      
      if (!url) {
        setResult({
          success: false,
          timestamp: new Date().toISOString(),
          total_facts: 0,
          categories: [],
          fact_data: { fact: '', explanation: '', category: '' },
          fun_bonus: '',
          request_info: { function_name: '', method: '', filtered_by: '' },
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
        success: false,
        timestamp: new Date().toISOString(),
        total_facts: 0,
        categories: [],
        fact_data: { fact: '', explanation: '', category: '' },
        fun_bonus: '',
        request_info: { function_name: '', method: '', filtered_by: '' },
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
            🚀 Космические факты!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {isAuthenticated 
              ? `Привет, ${user?.username}! Готов узнать что-то удивительное о космосе?`
              : 'Узнай удивительные факты о космосе из нашей базы знаний'
            }
          </p>
        </div>

        {/* Кнопка для получения факта */}
        <div className="mb-8">
          <Card className="max-w-lg mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 justify-center">
                <Icon name="Sparkles" className="h-6 w-6 text-purple-600" />
                <span>Генератор космических фактов</span>
              </CardTitle>
              <CardDescription className="text-center">
                Получи случайный удивительный факт о космосе
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={getSpaceFact}
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                size="lg"
              >
                {loading ? (
                  <>
                    <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
                    Ищу факт...
                  </>
                ) : (
                  <>
                    <Icon name="Rocket" className="mr-2 h-4 w-4" />
                    Получить космический факт
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Результат - космический факт */}
        {result && (
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 justify-center">
                <Icon 
                  name={result.success ? "Stars" : "XCircle"} 
                  className={`h-6 w-6 ${
                    result.success ? 'text-yellow-600' : 'text-red-600'
                  }`}
                />
                <span>{result.success ? result.fun_bonus : 'Ошибка'}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {result.success ? (
                <div className="space-y-6">
                  {/* Главный факт */}
                  <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-lg border">
                    <h3 className="font-bold text-lg mb-3 text-purple-900">
                      💫 {result.fact_data.fact}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {result.fact_data.explanation}
                    </p>
                    <div className="mt-4 flex items-center space-x-2">
                      <Icon name="Tag" className="h-4 w-4 text-purple-600" />
                      <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-2 py-1 rounded">
                        {result.fact_data.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Метаинформация */}
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="font-semibold text-gray-700 mb-2">📊 Статистика</div>
                      <div>Всего фактов: {result.total_facts}</div>
                      <div>Категорий: {result.categories.length}</div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="font-semibold text-gray-700 mb-2">🔗 Доступные категории</div>
                      <div className="flex flex-wrap gap-1">
                        {result.categories.map((cat, index) => (
                          <span key={index} className="text-xs bg-gray-200 px-2 py-1 rounded">
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center text-red-600">
                  <p>Не удалось получить космический факт</p>
                  {result.error && (
                    <div className="mt-2 text-sm bg-red-50 p-3 rounded">
                      {result.error}
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Информация о приложении */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Icon name="Info" className="h-6 w-6 text-blue-600" />
              <span>О приложении космических фактов</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">🔬 Что это?</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Генератор космических фактов</li>
                  <li>• 8 уникальных фактов</li>
                  <li>• 5 различных категорий</li>
                  <li>• Подробные объяснения</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">⚙️ Технологии:</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Python backend функция</li>
                  <li>• React frontend</li>
                  <li>• Cloud Functions</li>
                  <li>• JSON API</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">🌌 Категории фактов:</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Планеты</li>
                  <li>• Звёзды</li>
                  <li>• Физика космоса</li>
                  <li>• Космонавтика</li>
                  <li>• Галактики</li>
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