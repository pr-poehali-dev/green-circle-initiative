import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/components/extensions/auth-email/useAuth";
import { LoginForm } from "@/components/extensions/auth-email/LoginForm";
import { RegisterForm } from "@/components/extensions/auth-email/RegisterForm";
import { ResetPasswordForm } from "@/components/extensions/auth-email/ResetPasswordForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const AUTH_URL = "https://devfunctions.poehali.dev/e47c0c14-0580-4fdd-b5a2-00a86958d209";

type AuthView = "login" | "register" | "reset" | "verify";

export default function Auth() {
  const [view, setView] = useState<AuthView>("login");
  const [verificationEmail, setVerificationEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationError, setVerificationError] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [registerError, setRegisterError] = useState<string | null>(null);
  const navigate = useNavigate();

  const { login, error, isLoading, requestPasswordReset, resetPassword } = useAuth({
    apiUrls: {
      login: `${AUTH_URL}?action=login`,
      register: `${AUTH_URL}?action=register`,
      refresh: `${AUTH_URL}?action=refresh`,
      logout: `${AUTH_URL}?action=logout`,
      resetPassword: `${AUTH_URL}?action=reset-password`,
    },
  });

  const handleRegisterSuccess = async (email: string) => {
    setVerificationEmail(email);
    setView("verify");
  };

  const handleVerifyEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setVerificationError("");
    setIsVerifying(true);

    try {
      const response = await fetch(`${AUTH_URL}?action=verify-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: verificationEmail, code: verificationCode }),
      });

      const data = await response.json();

      if (!response.ok) {
        setVerificationError(data.error || "Неверный код");
        setIsVerifying(false);
        return;
      }

      setView("login");
    } catch {
      setVerificationError("Ошибка сети");
    } finally {
      setIsVerifying(false);
    }
  };

  const handleLoginSuccess = () => {
    navigate("/");
  };

  const handleCustomRegister = async (payload: { email: string; password: string; name?: string }) => {
    setRegisterError(null);
    
    try {
      const response = await fetch(`${AUTH_URL}?action=register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        setRegisterError(data.error || "Ошибка регистрации");
        return false;
      }

      if (data.email_verification_required) {
        handleRegisterSuccess(payload.email);
        return true;
      }

      return await login({ email: payload.email, password: payload.password });
    } catch {
      setRegisterError("Ошибка сети");
      return false;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
      <div className="w-full max-w-md">
        {view === "login" && (
          <LoginForm
            onLogin={login}
            onSuccess={handleLoginSuccess}
            onRegisterClick={() => setView("register")}
            onForgotPasswordClick={() => setView("reset")}
            error={error}
            isLoading={isLoading}
          />
        )}

        {view === "register" && (
          <RegisterForm
            onRegister={handleCustomRegister}
            onSuccess={() => {}}
            onLoginClick={() => setView("login")}
            error={registerError}
            isLoading={isLoading}
          />
        )}

        {view === "verify" && (
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Подтверждение email</CardTitle>
              <CardDescription>
                Мы отправили код на {verificationEmail}. Введите его ниже.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleVerifyEmail}>
              <CardContent className="space-y-4">
                {verificationError && (
                  <div className="text-sm text-destructive bg-destructive/10 p-3 rounded-md">
                    {verificationError}
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="code">Код подтверждения</Label>
                  <Input
                    id="code"
                    type="text"
                    placeholder="123456"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    disabled={isVerifying}
                    maxLength={6}
                  />
                </div>
              </CardContent>

              <CardFooter className="flex flex-col space-y-4">
                <Button type="submit" className="w-full" disabled={isVerifying}>
                  {isVerifying ? "Проверка..." : "Подтвердить"}
                </Button>

                <button
                  type="button"
                  onClick={() => setView("login")}
                  className="text-sm text-muted-foreground hover:text-primary underline-offset-4 hover:underline"
                >
                  Вернуться ко входу
                </button>
              </CardFooter>
            </form>
          </Card>
        )}

        {view === "reset" && (
          <ResetPasswordForm
            onRequestReset={requestPasswordReset}
            onResetPassword={resetPassword}
            onSuccess={handleLoginSuccess}
            onLoginClick={() => setView("login")}
            error={error}
          />
        )}
      </div>
    </div>
  );
}
