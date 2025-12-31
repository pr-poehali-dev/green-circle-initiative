import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/components/extensions/auth-email/useAuth";
import { LoginForm } from "@/components/extensions/auth-email/LoginForm";
import { RegisterForm } from "@/components/extensions/auth-email/RegisterForm";
import { ResetPasswordForm } from "@/components/extensions/auth-email/ResetPasswordForm";

const AUTH_URL = "https://devfunctions.poehali.dev/13e2d550-91e1-4566-9783-25711375f868";

type AuthView = "login" | "register" | "reset";

export default function Auth() {
  const [view, setView] = useState<AuthView>("login");
  const navigate = useNavigate();

  const { login, register, error, isLoading, requestPasswordReset, resetPassword } = useAuth({
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
      <div className="w-full max-w-md">
        {view === "login" && (
          <LoginForm
            onLogin={login}
            onSuccess={handleSuccess}
            onRegisterClick={() => setView("register")}
            onForgotPasswordClick={() => setView("reset")}
            error={error}
            isLoading={isLoading}
          />
        )}

        {view === "register" && (
          <RegisterForm
            onRegister={register}
            onSuccess={handleSuccess}
            onLoginClick={() => setView("login")}
            error={error}
            isLoading={isLoading}
          />
        )}

        {view === "reset" && (
          <ResetPasswordForm
            onRequestReset={requestPasswordReset}
            onResetPassword={resetPassword}
            onSuccess={handleSuccess}
            onLoginClick={() => setView("login")}
            error={error}
          />
        )}
      </div>
    </div>
  );
}
