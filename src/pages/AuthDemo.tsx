import { useState } from 'react';
import { useAuth } from '@/components/extensions/auth-email/useAuth';
import LoginForm from '@/components/extensions/auth-email/LoginForm';
import RegisterForm from '@/components/extensions/auth-email/RegisterForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import func2url from '@/config/func2url.json';

const AuthDemo = () => {
  const [showRegister, setShowRegister] = useState(false);
  
  const auth = useAuth({
    apiUrls: {
      login: `${func2url['auth-email-auth']}?action=login`,
      register: `${func2url['auth-email-auth']}?action=register`,
      refresh: `${func2url['auth-email-auth']}?action=refresh`,
      logout: `${func2url['auth-email-auth']}?action=logout`,
      resetPassword: `${func2url['auth-email-auth']}?action=reset-password`,
    },
  });

  if (auth.isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Загрузка...</p>
      </div>
    );
  }

  if (!auth.isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="w-full max-w-md">
          {showRegister ? (
            <>
              <RegisterForm
                onRegister={auth.register}
                error={auth.error}
                isLoading={auth.isLoading}
              />
              <p className="text-center mt-4 text-sm">
                Уже есть аккаунт?{' '}
                <button
                  onClick={() => setShowRegister(false)}
                  className="text-blue-600 hover:underline"
                >
                  Войти
                </button>
              </p>
            </>
          ) : (
            <>
              <LoginForm
                onLogin={auth.login}
                error={auth.error}
                isLoading={auth.isLoading}
              />
              <p className="text-center mt-4 text-sm">
                Нет аккаунта?{' '}
                <button
                  onClick={() => setShowRegister(true)}
                  className="text-blue-600 hover:underline"
                >
                  Зарегистрироваться
                </button>
              </p>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Добро пожаловать!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm text-gray-600">Email:</p>
            <p className="font-medium">{auth.user?.email}</p>
          </div>
          {auth.user?.name && (
            <div>
              <p className="text-sm text-gray-600">Имя:</p>
              <p className="font-medium">{auth.user.name}</p>
            </div>
          )}
          <Button onClick={auth.logout} className="w-full">
            Выйти
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthDemo;
