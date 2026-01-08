import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: number;
  username: string;
  created_at: string;
}

interface AuthContextType {
  user: User | null;
  sessionToken: string | null;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<{success: boolean, error?: string}>;
  register: (username: string, password: string) => Promise<{success: boolean, error?: string}>;
  logout: () => void;
  isAuthenticated: boolean;
}



const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

const AUTH_API_URLS = {
  login: 'https://devfunctions.poehali.dev/9263aa21-bad4-4a97-a610-6d5d7405193f',
  register: 'https://devfunctions.poehali.dev/a6f869f0-0f25-46df-b5b6-9a35622754ab'
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [sessionToken, setSessionToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    const savedToken = localStorage.getItem('sessionToken');
    
    if (savedUser && savedToken) {
      try {
        setUser(JSON.parse(savedUser));
        setSessionToken(savedToken);
      } catch (error) {
        localStorage.removeItem('user');
        localStorage.removeItem('sessionToken');
      }
    }
    
    setIsLoading(false);
  }, []);



  const login = async (username: string, password: string): Promise<{success: boolean, error?: string}> => {
    setIsLoading(true);
    
    try {
      const response = await fetch(AUTH_API_URLS.login, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setUser(data.user);
        setSessionToken(data.session_token);
        
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('sessionToken', data.session_token);
        
        return { success: true };
      } else {
        return { success: false, error: data.error || 'Ошибка авторизации' };
      }
    } catch (error) {
      return { success: false, error: 'Ошибка сети. Проверьте подключение к интернету.' };
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (username: string, password: string): Promise<{success: boolean, error?: string}> => {
    setIsLoading(true);
    
    try {
      const response = await fetch(AUTH_API_URLS.register, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        const loginResult = await login(username, password);
        return loginResult;
      } else {
        return { success: false, error: data.error || 'Ошибка регистрации' };
      }
    } catch (error) {
      return { success: false, error: 'Ошибка сети. Проверьте подключение к интернету.' };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setSessionToken(null);
    localStorage.removeItem('user');
    localStorage.removeItem('sessionToken');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        sessionToken,
        isLoading,
        login,
        register,
        logout,
        isAuthenticated: !!user && !!sessionToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};