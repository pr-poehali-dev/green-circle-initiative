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

interface GradientResult {
  gradient: {
    css: string;
    colors: string[];
    direction: string;
    name: string;
    category: string;
  };
  available_categories: string[];
  total_gradients: number;
  request_id: string;
  status: number;
  success?: boolean;
  error?: string;
}

const Index = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [gradientLoading, setGradientLoading] = useState<boolean>(false);
  const [result, setResult] = useState<SpaceFactResult | null>(null);
  const [gradient, setGradient] = useState<GradientResult | null>(null);
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

  const getGradient = async () => {
    setGradientLoading(true);
    setGradient(null);

    try {
      const url = functionsData['gradient-generator' as keyof typeof functionsData];
      
      if (!url) {
        setGradient({
          gradient: {
            css: '',
            colors: [],
            direction: '',
            name: '',
            category: ''
          },
          available_categories: [],
          total_gradients: 0,
          request_id: '',
          status: 404,
          success: false,
          error: 'URL not found'
        });
        return;
      }

      const response = await fetch(url);
      const data = await response.json();
      
      setGradient({
        ...data,
        status: response.status,
        success: response.ok
      });
    } catch (error) {
      setGradient({
        gradient: {
          css: '',
          colors: [],
          direction: '',
          name: '',
          category: ''
        },
        available_categories: [],
        total_gradients: 0,
        request_id: '',
        status: 500,
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    } finally {
      setGradientLoading(false);
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
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Факты о животных & 🎨 Градиенты!</h1>
          <p className="text-xl text-gray-600 mb-8">
            {isAuthenticated 
              ? `Привет, ${user?.username}! Готов узнать факт о животных и получить красивый градиент?`
              : 'Узнай удивительные факты о животных и получи крутые CSS градиенты!'
            }
          </p>
        </div>

        {/* Кнопки для получения контента */}
        <div className="mb-8 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 justify-center">
                <Icon name="Sparkles" className="h-6 w-6 text-purple-600" />
                <span>Факты о животных</span>
              </CardTitle>
              <CardDescription className="text-center">
                Получи случайный удивительный факт о животных
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
                    <Icon name="Heart" className="mr-2 h-4 w-4" />
                    Получить факт о животном
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 justify-center">
                <Icon name="Palette" className="h-6 w-6 text-pink-600" />
                <span>Генератор градиентов</span>
              </CardTitle>
              <CardDescription className="text-center">
                Получи красивый линейный или радиальный градиент
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={getGradient}
                disabled={gradientLoading}
                className="w-full bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700"
                size="lg"
              >
                {gradientLoading ? (
                  <>
                    <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
                    Генерирую...
                  </>
                ) : (
                  <>
                    <Icon name="Brush" className="mr-2 h-4 w-4" />
                    Получить градиент
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Результаты */}
        <div className="grid gap-6 max-w-6xl mx-auto">
          {/* Результат - космический факт */}
          {result && (
            <Card>
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

          {/* Результат - градиент */}
          {gradient && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 justify-center">
                  <Icon 
                    name={gradient.success ? "Palette" : "XCircle"} 
                    className={`h-6 w-6 ${
                      gradient.success ? 'text-pink-600' : 'text-red-600'
                    }`}
                  />
                  <span>{gradient.success ? `🎨 ${gradient.gradient.name}` : 'Ошибка'}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {gradient.success ? (
                  <div className="space-y-6">
                    {/* Превью градиента */}
                    <div 
                      className="h-32 rounded-lg border-2 border-gray-200 shadow-inner relative overflow-hidden"
                      style={{ background: gradient.gradient.css }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-black/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-semibold">
                          {gradient.gradient.name}
                        </div>
                      </div>
                    </div>
                    
                    {/* CSS код и информация */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div>
                          <label className="text-sm font-semibold text-gray-700">CSS Код:</label>
                          <div className="bg-gray-900 text-green-400 p-3 rounded-lg text-sm font-mono overflow-x-auto">
                            background: {gradient.gradient.css};
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Icon name="Tag" className="h-4 w-4 text-pink-600" />
                          <span className="text-sm font-semibold text-pink-600 bg-pink-100 px-2 py-1 rounded">
                            {gradient.gradient.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <label className="text-sm font-semibold text-gray-700">Цвета:</label>
                          <div className="flex space-x-2 mt-1">
                            {gradient.gradient.colors.map((color, index) => (
                              <div key={index} className="flex flex-col items-center space-y-1">
                                <div 
                                  className="w-8 h-8 rounded-full border-2 border-gray-300"
                                  style={{ backgroundColor: color }}
                                />
                                <span className="text-xs font-mono text-gray-600">{color}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="text-sm text-gray-600">
                          <strong>Направление:</strong> {gradient.gradient.direction}
                        </div>
                      </div>
                    </div>

                    {/* Подсказка по использованию */}
                    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                      <div className="flex items-start space-x-2">
                        <Icon name="Lightbulb" className="h-5 w-5 text-blue-600 mt-0.5" />
                        <div>
                          <div className="text-sm font-semibold text-blue-900 mb-1">💡 Как использовать:</div>
                          <div className="text-sm text-blue-800">
                            Скопируй CSS код и добавь в свой файл стилей. Этот градиент отлично подойдет для фонов, кнопок и декоративных элементов!
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-red-600">
                    <p>Не удалось сгенерировать градиент</p>
                    {gradient.error && (
                      <div className="mt-2 text-sm bg-red-50 p-3 rounded">
                        {gradient.error}
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>

        {/* Информация о приложении */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Icon name="Info" className="h-6 w-6 text-blue-600" />
              <span>О приложении</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">🚀 Космические факты</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 8 удивительных фактов</li>
                  <li>• 5 различных категорий</li>
                  <li>• Подробные объяснения</li>
                  <li>• Случайная выборка</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">🎨 CSS градиенты</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 20 готовых градиентов</li>
                  <li>• Линейные и радиальные</li>
                  <li>• 6 стильных категорий</li>
                  <li>• Готовый CSS код</li>
                  <li>• Превью в реальном времени</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">⚙️ Технологии</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 2 Python Cloud Functions</li>
                  <li>• React + TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Адаптивный дизайн</li>
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