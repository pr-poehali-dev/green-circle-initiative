import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  username: string;
  name: string;
  role: string;
  isAuthenticated: boolean;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (username: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      // Получаем URL функции аутентификации
      const response = await fetch('/backend/func2url.json');
      const urls = await response.json();
      const authUrl = urls.auth;
      
      if (!authUrl) {
        setIsLoading(false);
        return false;
      }
      
      // Отправляем запрос на аутентификацию
      const authResponse = await fetch(authUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password
        })
      });
      
      const result = await authResponse.json();
      
      if (result.success) {
        setUser({
          username: result.user.username,
          name: result.user.name,
          role: result.user.role,
          isAuthenticated: true
        });
        
        // Сохраняем токен в localStorage для будущих запросов
        localStorage.setItem('auth_token', result.token);
        
        setIsLoading(false);
        return true;
      } else {
        setIsLoading(false);
        return false;
      }
      
    } catch (error) {
      console.error('Ошибка аутентификации:', error);
      setIsLoading(false);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('auth_token');
  };

  const isAuthenticated = !!user?.isAuthenticated;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}