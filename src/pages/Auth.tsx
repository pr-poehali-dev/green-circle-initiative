import { useState } from "react";
import { useAuth } from "@/components/extensions/auth-email/useAuth";
import { LoginForm } from "@/components/extensions/auth-email/LoginForm";
import { RegisterForm } from "@/components/extensions/auth-email/RegisterForm";
import { ResetPasswordForm } from "@/components/extensions/auth-email/ResetPasswordForm";
import { useNavigate } from "react-router-dom";

const AUTH_URL = "https://devfunctions.poehali.dev/3ed9fa41-ed22-4511-9479-3064101bc434";

type ViewMode = "login" | "register" | "reset";

export default function Auth() {
  const navigate = useNavigate();
  const [view, setView] = useState<ViewMode>("login");

  const { login, register, requestPasswordReset, resetPassword, error, isLoading } = useAuth({
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
      {view === "login" && (
        <LoginForm
          onLogin={login}
          onSuccess={handleSuccess}
          onRegisterClick={() => setView("register")}
          onForgotPasswordClick={() => setView("reset")}
          error={error}
          isLoading={isLoading}
          className="w-full max-w-md"
        />
      )}

      {view === "register" && (
        <RegisterForm
          onRegister={register}
          onSuccess={handleSuccess}
          onLoginClick={() => setView("login")}
          error={error}
          isLoading={isLoading}
          className="w-full max-w-md"
        />
      )}

      {view === "reset" && (
        <ResetPasswordForm
          onRequestReset={requestPasswordReset}
          onResetPassword={resetPassword}
          onBackToLogin={() => setView("login")}
          error={error}
          isLoading={isLoading}
          className="w-full max-w-md"
        />
      )}
    </div>
  );
}
