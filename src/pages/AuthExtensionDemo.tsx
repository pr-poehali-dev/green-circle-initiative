import { useState } from 'react';
import { useAuth } from '@/components/extensions/auth-email/useAuth';
import { LoginForm } from '@/components/extensions/auth-email/LoginForm';
import { RegisterForm } from '@/components/extensions/auth-email/RegisterForm';
import { ResetPasswordForm } from '@/components/extensions/auth-email/ResetPasswordForm';
import func2url from '@/config/func2url.json';

type AuthView = 'login' | 'register' | 'reset';

export default function AuthExtensionDemo() {
  const [view, setView] = useState<AuthView>('login');

  const AUTH_BASE = func2url.auth;

  const auth = useAuth({
    apiUrls: {
      login: `${AUTH_BASE}?action=login`,
      register: `${AUTH_BASE}?action=register`,
      refresh: `${AUTH_BASE}?action=refresh`,
      logout: `${AUTH_BASE}?action=logout`,
      resetPassword: `${AUTH_BASE}?action=reset-password`,
    },
  });

  if (auth.isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20">
        <div className="text-center space-y-6 p-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold">Добро пожаловать!</h1>
            <p className="text-muted-foreground text-lg">
              {auth.user?.name || auth.user?.email}
            </p>
          </div>
          
          <div className="pt-4">
            <button
              onClick={auth.logout}
              className="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
            >
              Выйти
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20 p-4">
      {view === 'login' && (
        <LoginForm
          onLogin={auth.login}
          onSuccess={() => {}}
          onRegisterClick={() => setView('register')}
          onForgotPasswordClick={() => setView('reset')}
          error={auth.error}
          isLoading={auth.isLoading}
          className="w-full max-w-md"
        />
      )}

      {view === 'register' && (
        <RegisterForm
          onRegister={auth.register}
          onSuccess={() => {}}
          onLoginClick={() => setView('login')}
          error={auth.error}
          isLoading={auth.isLoading}
          className="w-full max-w-md"
        />
      )}

      {view === 'reset' && (
        <ResetPasswordForm
          onRequestReset={auth.requestPasswordReset}
          onResetPassword={auth.resetPassword}
          onBackToLogin={() => setView('login')}
          error={auth.error}
          className="w-full max-w-md"
        />
      )}
    </div>
  );
}
