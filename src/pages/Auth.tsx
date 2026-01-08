import { useState } from "react";
import { useAuth } from "@/components/extensions/auth-email/useAuth";
import { LoginForm } from "@/components/extensions/auth-email/LoginForm";
import { RegisterForm } from "@/components/extensions/auth-email/RegisterForm";
import { ResetPasswordForm } from "@/components/extensions/auth-email/ResetPasswordForm";
import { UserProfile } from "@/components/extensions/auth-email/UserProfile";
import { VkLoginButton } from "@/components/extensions/vk-auth/VkLoginButton";
import { useVkAuth } from "@/components/extensions/vk-auth/useVkAuth";
import { GoogleLoginButton } from "@/components/extensions/google-auth/GoogleLoginButton";
import { useGoogleAuth } from "@/components/extensions/google-auth/useGoogleAuth";









const AUTH_URL = "https://devfunctions.poehali.dev/0bdeebbd-7dea-4bae-bcee-8865faa9e659";
const VK_AUTH_URL = "https://devfunctions.poehali.dev/67bc37cf-6daa-4819-ae08-caed18bfe87f";
const GOOGLE_AUTH_URL = "https://devfunctions.poehali.dev/adaab5b6-da3c-4890-8208-f5a5c0c889bd";







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

  const vkAuth = useVkAuth({
    apiUrls: {
      authUrl: `${VK_AUTH_URL}?action=auth-url`,
      callback: `${VK_AUTH_URL}?action=callback`,
      refresh: `${VK_AUTH_URL}?action=refresh`,
      logout: `${VK_AUTH_URL}?action=logout`,
    },
  });

  const googleAuth = useGoogleAuth({
    apiUrls: {
      authUrl: `${GOOGLE_AUTH_URL}?action=auth-url`,
      callback: `${GOOGLE_AUTH_URL}?action=callback`,
      refresh: `${GOOGLE_AUTH_URL}?action=refresh`,
      logout: `${GOOGLE_AUTH_URL}?action=logout`,
    },
  });

















  // Check all auth methods
  const isAuthenticated = auth.isAuthenticated || vkAuth.isAuthenticated || googleAuth.isAuthenticated;
  const currentUser = auth.user || vkAuth.user || googleAuth.user;
  const handleLogout = async () => {
    if (auth.isAuthenticated) await auth.logout();
    if (vkAuth.isAuthenticated) await vkAuth.logout();
    if (googleAuth.isAuthenticated) await googleAuth.logout();
  };

  if (isAuthenticated && currentUser) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
        <UserProfile
          user={currentUser}
          onLogout={handleLogout}
          isLoading={auth.isLoading || vkAuth.isLoading || googleAuth.isLoading}
          className="w-full max-w-md"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
      <div className="w-full max-w-md space-y-4">
        {view === "login" && (
          <>
            <LoginForm
              onLogin={auth.login}
              onRegisterClick={() => setView("register")}
              onForgotPasswordClick={() => setView("reset")}
              error={auth.error}
              isLoading={auth.isLoading}
            />
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Или</span>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3">
              <VkLoginButton onClick={vkAuth.login} isLoading={vkAuth.isLoading} className="w-full" />
              <GoogleLoginButton onClick={googleAuth.login} isLoading={googleAuth.isLoading} className="w-full" />
            </div>
          </>
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