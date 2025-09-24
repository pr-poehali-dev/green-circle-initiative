import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useAuth } from '@/contexts/AuthContext';
import Icon from '@/components/ui/icon';

interface RegisterFormProps {
  onToggleMode: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onToggleMode }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const { register, isLoading } = useAuth();



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!username.trim() || !password.trim() || !confirmPassword.trim()) {
      setError('Заполните все поля');
      return;
    }

    if (username.trim().length < 3) {
      setError('Username должен содержать минимум 3 символа');
      return;
    }

    if (password.length < 6) {
      setError('Пароль должен содержать минимум 6 символов');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Пароли не совпадают');
      return;
    }

    const result = await register(username.trim(), password);
    
    if (!result.success) {
      setError(result.error || 'Ошибка регистрации');
    }
  };



  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">Регистрация</CardTitle>
        <CardDescription>
          Создайте новый аккаунт для продолжения
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <Icon name="AlertCircle" size={16} />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-2">
            <Label htmlFor="username">Имя пользователя</Label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Введите имя пользователя (мин. 3 символа)"
              disabled={isLoading}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Пароль</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Введите пароль (мин. 6 символов)"
              disabled={isLoading}
              minLength={6}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Подтвердите пароль</Label>
            <Input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Повторите пароль"
              disabled={isLoading}
              required
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full" 
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
                Регистрация...
              </>
            ) : (
              'Зарегистрироваться'
            )}
          </Button>
          
          <div className="text-center text-sm text-muted-foreground">
            Есть аккаунт?{' '}
            <button
              type="button"
              onClick={onToggleMode}
              className="text-primary hover:underline font-medium"
              disabled={isLoading}
            >
              Войти
            </button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};