import { useState } from "react";
import { useAuth } from "@/components/extensions/auth-email/useAuth";
import { LoginForm } from "@/components/extensions/auth-email/LoginForm";
import { RegisterForm } from "@/components/extensions/auth-email/RegisterForm";
import { ResetPasswordForm } from "@/components/extensions/auth-email/ResetPasswordForm";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const AUTH_URL = "https://devfunctions.poehali.dev/3ed9fa41-ed22-4511-9479-3064101bc434";

type ViewMode = "login" | "register" | "reset" | "email-sent";

export default function Auth() {
  const navigate = useNavigate();
  const [view, setView] = useState<ViewMode>("login");
  const [registeredEmail, setRegisteredEmail] = useState<string>("");

  const { login, error, isLoading } = useAuth({
    apiUrls: {
      login: `${AUTH_URL}?action=login`,
      register: `${AUTH_URL}?action=register`,
      refresh: `${AUTH_URL}?action=refresh`,
      logout: `${AUTH_URL}?action=logout`,
      resetPassword: `${AUTH_URL}?action=reset-password`,
    },
  });

  const handleLoginSuccess = () => {
    navigate("/");
  };

  const handleRegister = async (payload: { email: string; password: string; name?: string }) => {
    const response = await fetch(`${AUTH_URL}?action=register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Ошибка регистрации");
    }

    setRegisteredEmail(payload.email);
    setView("email-sent");
    return true;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
      {view === "login" && (
        <LoginForm
          onLogin={login}
          onSuccess={handleLoginSuccess}
          onRegisterClick={() => setView("register")}
          onForgotPasswordClick={() => setView("reset")}
          error={error}
          isLoading={isLoading}
          className="w-full max-w-md"
        />
      )}

      {view === "register" && (
        <RegisterForm
          onRegister={handleRegister}
          onLoginClick={() => setView("login")}
          error={error}
          isLoading={isLoading}
          className="w-full max-w-md"
        />
      )}

      {view === "email-sent" && (
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1 text-center">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Icon name="Mail" size={24} className="text-primary" />
            </div>
            <CardTitle className="text-2xl">Проверьте почту</CardTitle>
            <CardDescription>
              Письмо с подтверждением отправлено на <strong>{registeredEmail}</strong>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground text-center">
              Перейдите по ссылке из письма для подтверждения email. После этого вы сможете войти в систему.
            </p>
            <Button onClick={() => setView("login")} className="w-full">
              Вернуться ко входу
            </Button>
          </CardContent>
        </Card>
      )}

      {view === "reset" && (
        <ResetPasswordForm
          onRequestReset={async (email: string) => {
            const response = await fetch(`${AUTH_URL}?action=reset-password`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email }),
            });
            const data = await response.json();
            return data;
          }}
          onResetPassword={async (token: string, newPassword: string) => {
            const response = await fetch(`${AUTH_URL}?action=reset-password`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ token, new_password: newPassword }),
            });
            return response.ok;
          }}
          onBackToLogin={() => setView("login")}
          error={error}
          isLoading={isLoading}
          className="w-full max-w-md"
        />
      )}
    </div>
  );
}
