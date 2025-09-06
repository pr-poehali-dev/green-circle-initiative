import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import Icon from '@/components/ui/icon';

const Index = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Добро пожаловать в систему!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Управляйте пользователями через админ панель
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Icon name="Shield" className="h-8 w-8 text-blue-600" />
                <div>
                  <CardTitle>Админ панель</CardTitle>
                  <CardDescription>
                    Просмотр всех пользователей и дат их регистрации
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <Icon name="Users" size={16} className="text-blue-500" />
                    <span>Список всех пользователей</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Calendar" size={16} className="text-blue-500" />
                    <span>Даты регистрации и последнего входа</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Activity" size={16} className="text-blue-500" />
                    <span>Статус активности пользователей</span>
                  </li>
                </ul>
                
                {user ? (
                  <Button 
                    onClick={() => navigate('/admin')}
                    className="w-full"
                  >
                    <Icon name="ArrowRight" size={16} className="mr-2" />
                    Открыть админ панель
                  </Button>
                ) : (
                  <Button 
                    onClick={() => navigate('/auth')}
                    variant="outline"
                    className="w-full"
                  >
                    <Icon name="LogIn" size={16} className="mr-2" />
                    Войти в админ панель
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Icon name="UserPlus" className="h-8 w-8 text-green-600" />
                <div>
                  <CardTitle>Регистрация</CardTitle>
                  <CardDescription>
                    Создайте аккаунт для доступа к системе
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <Icon name="Mail" size={16} className="text-green-500" />
                    <span>Быстрая регистрация по email</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Lock" size={16} className="text-green-500" />
                    <span>Защищенная авторизация</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Zap" size={16} className="text-green-500" />
                    <span>Мгновенный доступ к панели</span>
                  </li>
                </ul>
                
                <Button 
                  onClick={() => navigate('/auth')}
                  variant="outline"
                  className="w-full"
                >
                  <Icon name="UserPlus" size={16} className="mr-2" />
                  Зарегистрироваться
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {user && (
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-100 text-green-800 rounded-full">
              <Icon name="CheckCircle" size={16} />
              <span>Вы вошли как <strong>{user.name}</strong></span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;