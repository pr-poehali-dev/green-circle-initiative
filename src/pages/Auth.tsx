import { useState } from "react";
import { useAuth } from "@/components/extensions/auth-email/useAuth";
import { LoginForm } from "@/components/extensions/auth-email/LoginForm";
import { RegisterForm } from "@/components/extensions/auth-email/RegisterForm";
import { ResetPasswordForm } from "@/components/extensions/auth-email/ResetPasswordForm";
import { UserProfile } from "@/components/extensions/auth-email/UserProfile";

const AUTH_URL = "https://devfunctions.poehali.dev/1ac6eb8d-0ba7-4a9f-9e3f-8667088e0c80";

type View = "login" | "register" | "reset";

export default function Auth() {
  const [view, setView] = useState<View>("login");

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

  if (auth.isAuthenticated && auth.user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
        <UserProfile
          user={auth.user}
          onLogout={auth.logout}
          isLoading={auth.isLoading}
          className="w-full max-w-md"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
      <div className="w-full max-w-md">
        {view === "login" && (
          <LoginForm
            onLogin={auth.login}
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