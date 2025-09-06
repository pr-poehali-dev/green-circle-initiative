import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/components/ui/use-toast';
import Icon from '@/components/ui/icon';
import { format, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';

interface User {
  id: number;
  email: string;
  username: string;
  name: string;
  created_at: string;
  is_active: boolean;
  last_login?: string;
}

const API_BASE_URL = 'https://functions.yandexcloud.net/d4eb0qlo5gigl6ca6cnr';

export const AdminDashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const { user, token, logout } = useAuth();

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/?action=users`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Ошибка загрузки пользователей');
      }

      setUsers(data.users || []);
    } catch (error) {
      console.error('Failed to fetch users:', error);
      toast({
        title: "Ошибка",
        description: error instanceof Error ? error.message : "Не удалось загрузить список пользователей",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchUsers();
    }
  }, [token]);

  const formatDate = (dateString: string) => {
    try {
      return format(parseISO(dateString), 'dd MMM yyyy, HH:mm', { locale: ru });
    } catch {
      return 'Неизвестно';
    }
  };

  const handleLogout = () => {
    logout();
    toast({
      title: "Выход выполнен",
      description: "Вы вышли из админ панели",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <Icon name="Loader2" className="h-6 w-6 animate-spin" />
          <span>Загрузка...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Icon name="Shield" className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">Админ Панель</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Icon name="User" className="h-5 w-5 text-gray-500" />
                <span className="text-sm text-gray-700">{user?.name}</span>
                <Badge variant="secondary">{user?.role}</Badge>
              </div>
              
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleLogout}
                className="flex items-center space-x-2"
              >
                <Icon name="LogOut" size={16} />
                <span>Выйти</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Пользователи</h2>
          <Button 
            onClick={fetchUsers}
            className="flex items-center space-x-2"
          >
            <Icon name="RefreshCw" size={16} />
            <span>Обновить</span>
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Icon name="Users" size={20} />
              <span>Список пользователей ({users.length})</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {users.length === 0 ? (
              <div className="text-center py-8">
                <Icon name="Users" className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Пользователи не найдены</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Имя</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Username</TableHead>
                      <TableHead>Дата регистрации</TableHead>
                      <TableHead>Последний вход</TableHead>
                      <TableHead>Статус</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-mono text-sm">
                          #{user.id}
                        </TableCell>
                        <TableCell className="font-medium">
                          {user.name}
                        </TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell className="font-mono text-sm">
                          @{user.username}
                        </TableCell>
                        <TableCell className="text-sm text-gray-600">
                          {formatDate(user.created_at)}
                        </TableCell>
                        <TableCell className="text-sm text-gray-600">
                          {user.last_login ? formatDate(user.last_login) : 'Никогда'}
                        </TableCell>
                        <TableCell>
                          <Badge 
                            variant={user.is_active ? 'default' : 'secondary'}
                            className="flex items-center space-x-1 w-fit"
                          >
                            <Icon 
                              name={user.is_active ? 'CheckCircle' : 'XCircle'} 
                              size={14} 
                            />
                            <span>{user.is_active ? 'Активен' : 'Неактивен'}</span>
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminDashboard;