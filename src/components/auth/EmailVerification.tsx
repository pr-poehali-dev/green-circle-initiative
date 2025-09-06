import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';
import Icon from '@/components/ui/icon';

interface EmailVerificationProps {
  email: string;
  onVerified: () => void;
  onBack?: () => void;
}

export const EmailVerification: React.FC<EmailVerificationProps> = ({ email, onVerified, onBack }) => {
  const [code, setCode] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [resendTimer, setResendTimer] = useState(60);

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (code.length !== 6) {
      toast({
        title: "Ошибка",
        description: "Код должен состоять из 6 цифр",
        variant: "destructive",
      });
      return;
    }

    setIsVerifying(true);
    try {
      const apiUrl = (window as unknown as { apiBaseUrls?: Record<string, string> }).apiBaseUrls?.['verify-email-code'] || '/api/verify-email-code';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, code }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast({
          title: "Успешно!",
          description: "Email подтверждён",
        });
        onVerified();
      } else {
        toast({
          title: "Ошибка",
          description: data.error || "Неверный код",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось проверить код",
        variant: "destructive",
      });
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResend = async () => {
    setIsResending(true);
    try {
      const apiUrl = (window as unknown as { apiBaseUrls?: Record<string, string> }).apiBaseUrls?.['send-verification-code'] || '/api/send-verification-code';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast({
          title: "Код отправлен",
          description: "Проверьте вашу почту",
        });
        setResendTimer(60);
        setCode('');
      } else {
        toast({
          title: "Ошибка",
          description: data.error || "Не удалось отправить код",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить код",
        variant: "destructive",
      });
    } finally {
      setIsResending(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">Подтвердите Email</CardTitle>
        <CardDescription>
          Мы отправили код подтверждения на {email}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleVerify} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="code">Код подтверждения</Label>
            <Input
              id="code"
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
              placeholder="123456"
              maxLength={6}
              className="text-center text-2xl font-mono"
              required
            />
            <p className="text-xs text-muted-foreground">
              Введите 6-значный код из письма
            </p>
          </div>

          <Button 
            type="submit" 
            className="w-full" 
            disabled={isVerifying}
          >
            {isVerifying ? 'Проверяем...' : 'Подтвердить'}
          </Button>

          <div className="flex flex-col gap-2">
            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={handleResend}
              disabled={isResending || resendTimer > 0}
            >
              <Icon name="Mail" size={16} />
              {resendTimer > 0 
                ? `Отправить повторно через ${resendTimer}с` 
                : isResending 
                  ? 'Отправляем...' 
                  : 'Отправить код повторно'
              }
            </Button>

            {onBack && (
              <Button
                type="button"
                variant="ghost"
                className="w-full"
                onClick={onBack}
              >
                <Icon name="ArrowLeft" size={16} />
                Назад к регистрации
              </Button>
            )}
          </div>

          <div className="text-center text-sm text-muted-foreground">
            Не получили письмо? Проверьте папку спам
          </div>
        </form>
      </CardContent>
    </Card>
  );
};