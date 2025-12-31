import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/components/extensions/auth-email/useAuth";
import { LoginForm } from "@/components/extensions/auth-email/LoginForm";
import { RegisterForm } from "@/components/extensions/auth-email/RegisterForm";
import { ResetPasswordForm } from "@/components/extensions/auth-email/ResetPasswordForm";

const AUTH_URL = "https://devfunctions.poehali.dev/25867f2e-837d-4e05-8630-41cd3b81865d";

type View = "login" | "register" | "reset";

export default function Auth() {
  const [view, setView] = useState<View>("login");
  const navigate = useNavigate();

  const auth = useAuth({
    apiUrls: {
      login: `${AUTH_URL}?action=login`,
      register: `${AUTH_URL}?action=register`,
      verifyEmail: `${AUTH_URL}?action=verify-email`,
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
            onVerifyEmail={auth.verifyEmail}
            onLogin={auth.login}
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
            onSuccess={() => setView("login")}
            onBackToLogin={() => setView("login")}
            error={auth.error}
            isLoading={auth.isLoading}
          />
        )}
      </div>
    </div>
  );
}
