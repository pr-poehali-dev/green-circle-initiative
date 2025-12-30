import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/components/extensions/auth-email/useAuth';
import { useToast } from '@/hooks/use-toast';
import func2url from '@/config/func2url.json';

const AuthTest = () => {
  const { toast } = useToast();
  
  const auth = useAuth({
    apiUrls: {
      login: `${func2url['auth-email-auth']}?action=login`,
      register: `${func2url['auth-email-auth']}?action=register`,
      refresh: `${func2url['auth-email-auth']}?action=refresh`,
      logout: `${func2url['auth-email-auth']}?action=logout`,
      resetPassword: `${func2url['auth-email-auth']}?action=reset-password`,
    },
  });

  const [registerData, setRegisterData] = useState({ email: '', password: '', name: '' });
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [resetEmail, setResetEmail] = useState('');
  const [resetToken, setResetToken] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await auth.register(registerData);
    
    if (success) {
      toast({
        title: '✅ Регистрация успешна',
        description: `Добро пожаловать, ${auth.user?.name || auth.user?.email}!`,
      });
      setRegisterData({ email: '', password: '', name: '' });
    } else {
      toast({
        title: '❌ Ошибка регистрации',
        description: auth.error || 'Что-то пошло не так',
        variant: 'destructive',
      });
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await auth.login(loginData);
    
    if (success) {
      toast({
        title: '✅ Вход выполнен',
        description: `Привет, ${auth.user?.name || auth.user?.email}!`,
      });
      setLoginData({ email: '', password: '' });
    } else {
      toast({
        title: '❌ Ошибка входа',
        description: auth.error || 'Неверный email или пароль',
        variant: 'destructive',
      });
    }
  };

  const handleRequestReset = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await auth.requestPasswordReset(resetEmail);
    
    if (result.token) {
      setResetToken(result.token);
      toast({
        title: '✅ Токен сброса получен',
        description: 'Используйте токен для сброса пароля',
      });
    } else {
      toast({
        title: '❌ Ошибка',
        description: auth.error || 'Не удалось получить токен',
        variant: 'destructive',
      });
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await auth.resetPassword(resetToken, newPassword);
    
    if (success) {
      toast({
        title: '✅ Пароль изменен',
        description: 'Теперь можете войти с новым паролем',
      });
      setResetToken('');
      setNewPassword('');
    } else {
      toast({
        title: '❌ Ошибка',
        description: auth.error || 'Не удалось сбросить пароль',
        variant: 'destructive',
      });
    }
  };

  if (auth.isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Вы авторизованы</CardTitle>
            <CardDescription>Тест системы auth-email</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2 p-4 bg-gray-50 rounded-lg">
              <p><strong>ID:</strong> {auth.user?.id}</p>
              <p><strong>Email:</strong> {auth.user?.email}</p>
              <p><strong>Имя:</strong> {auth.user?.name || '—'}</p>
              <p className="text-xs text-gray-500 break-all mt-2">
                <strong>Access Token:</strong> {auth.accessToken?.substring(0, 50)}...
              </p>
            </div>
            <Button onClick={auth.logout} variant="destructive" className="w-full">
              Выйти
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Тест Auth Email</CardTitle>
          <CardDescription>
            Проверка JWT авторизации с localStorage
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="login">Вход</TabsTrigger>
              <TabsTrigger value="register">Регистрация</TabsTrigger>
              <TabsTrigger value="reset">Сброс</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email">Email</Label>
                  <Input
                    id="login-email"
                    type="email"
                    value={loginData.email}
                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    placeholder="user@example.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="login-password">Пароль</Label>
                  <Input
                    id="login-password"
                    type="password"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    placeholder="••••••••"
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={auth.isLoading}>
                  {auth.isLoading ? 'Вход...' : 'Войти'}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="register">
              <form onSubmit={handleRegister} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="register-email">Email</Label>
                  <Input
                    id="register-email"
                    type="email"
                    value={registerData.email}
                    onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                    placeholder="user@example.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-name">Имя (опционально)</Label>
                  <Input
                    id="register-name"
                    type="text"
                    value={registerData.name}
                    onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                    placeholder="Иван Иванов"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-password">Пароль (мин. 8 символов, буква + цифра)</Label>
                  <Input
                    id="register-password"
                    type="password"
                    value={registerData.password}
                    onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                    placeholder="••••••••"
                    required
                    minLength={8}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={auth.isLoading}>
                  {auth.isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="reset">
              <div className="space-y-4">
                <form onSubmit={handleRequestReset} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="reset-email">Email</Label>
                    <Input
                      id="reset-email"
                      type="email"
                      value={resetEmail}
                      onChange={(e) => setResetEmail(e.target.value)}
                      placeholder="user@example.com"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={auth.isLoading}>
                    Запросить сброс
                  </Button>
                </form>

                {resetToken && (
                  <form onSubmit={handleResetPassword} className="space-y-4 pt-4 border-t">
                    <div className="space-y-2">
                      <Label htmlFor="reset-token">Токен из ответа</Label>
                      <Input
                        id="reset-token"
                        type="text"
                        value={resetToken}
                        onChange={(e) => setResetToken(e.target.value)}
                        placeholder="Вставьте токен"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">Новый пароль</Label>
                      <Input
                        id="new-password"
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="••••••••"
                        required
                        minLength={8}
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={auth.isLoading}>
                      Установить новый пароль
                    </Button>
                  </form>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthTest;
