import { useState } from "react";
import { useAuth } from "@/components/extensions/auth-email/useAuth";
import { LoginForm } from "@/components/extensions/auth-email/LoginForm";
import { RegisterForm } from "@/components/extensions/auth-email/RegisterForm";
import { ResetPasswordForm } from "@/components/extensions/auth-email/ResetPasswordForm";
import { useNavigate } from "react-router-dom";

const AUTH_URL = "https://devfunctions.poehali.dev/a234d777-2eb8-490f-9bf3-24f48158f1e8";

type AuthView = "login" | "register" | "reset";

export default function Auth() {
  const [view, setView] = useState<AuthView>("login");
  const navigate = useNavigate();

  const auth = useAuth({
    apiUrls: {
      login: `${AUTH_URL}?action=login`,
      register: `${AUTH_URL}?action=register`,
      refresh: `${AUTH_URL}?action=refresh`,
      logout: `${AUTH_URL}?action=logout`,
      resetPassword: `${AUTH_URL}?action=reset-password`,
    },
  });

  const handleSuccess = () => {
    navigate("/");
  };

  if (auth.isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">
            Добро пожаловать, {auth.user?.name || auth.user?.email}!
          </h1>
          <div className="space-x-4">
            <button
              onClick={() => navigate("/")}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
            >
              На главную
            </button>
            <button
              onClick={auth.logout}
              className="px-6 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80"
            >
              Выйти
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
      <div className="w-full max-w-md">
        {view === "login" && (
          <LoginForm
            onLogin={auth.login}
            onSuccess={handleSuccess}
            onRegisterClick={() => setView("register")}
            onForgotPasswordClick={() => setView("reset")}
            error={auth.error}
            isLoading={auth.isLoading}
          />
        )}

        {view === "register" && (
          <RegisterForm
            onRegister={auth.register}
            onSuccess={handleSuccess}
            onLoginClick={() => setView("login")}
            error={auth.error}
            isLoading={auth.isLoading}
          />
        )}

        {view === "reset" && (
          <ResetPasswordForm
            onRequestReset={auth.requestPasswordReset}
            onResetPassword={auth.resetPassword}
            onBackToLogin={() => setView("login")}
            error={auth.error}
            isLoading={auth.isLoading}
          />
        )}
      </div>
    </div>
  );
}
