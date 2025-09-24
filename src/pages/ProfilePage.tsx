import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function ProfilePage() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                <Icon name="User" size={32} className="text-primary" />
              </div>
              <CardTitle className="text-2xl">Профиль пользователя</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">
                  Имя пользователя
                </label>
                <p className="text-lg font-semibold">{user?.username}</p>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">
                  ID пользователя
                </label>
                <p className="text-sm text-muted-foreground">#{user?.id}</p>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">
                  Дата регистрации
                </label>
                <p className="text-sm text-muted-foreground">
                  {user?.created_at ? new Date(user.created_at).toLocaleDateString('ru-RU') : 'Не указана'}
                </p>
              </div>

              <div className="pt-4 border-t">
                <Button 
                  onClick={handleLogout} 
                  variant="destructive" 
                  className="w-full"
                >
                  <Icon name="LogOut" className="mr-2 h-4 w-4" />
                  Выйти из аккаунта
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}