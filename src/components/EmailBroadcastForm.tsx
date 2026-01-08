import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface EmailBroadcastFormProps {
  apiUrl: string;
}

export function EmailBroadcastForm({ apiUrl }: EmailBroadcastFormProps) {
  const [emails, setEmails] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!emails.trim() || !subject.trim() || !message.trim()) {
      toast({
        title: "Ошибка",
        description: "Заполните все поля",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const emailList = emails
        .split(",")
        .map((e) => e.trim())
        .filter((e) => e.includes("@"));

      const response = await fetch(`${apiUrl}?action=send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to_emails: emailList,
          subject: subject,
          body_html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="white-space: pre-wrap;">${message}</div>
            </div>
          `,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Ошибка отправки");
      }

      toast({
        title: "Успешно!",
        description: `Отправлено: ${data.sent}, не удалось: ${data.failed}`,
      });

      // Очистить форму
      setEmails("");
      setSubject("");
      setMessage("");
    } catch (error) {
      toast({
        title: "Ошибка",
        description: error instanceof Error ? error.message : "Не удалось отправить письма",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Email рассылка</CardTitle>
        <CardDescription>
          Отправьте письмо нескольким получателям одновременно
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="emails">
              Email получателей (через запятую)
            </Label>
            <Textarea
              id="emails"
              placeholder="user1@example.com, user2@example.com, user3@example.com"
              value={emails}
              onChange={(e) => setEmails(e.target.value)}
              rows={3}
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Тема письма</Label>
            <Input
              id="subject"
              placeholder="Введите тему письма"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Текст письма</Label>
            <Textarea
              id="message"
              placeholder="Введите текст письма"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={8}
              disabled={isLoading}
            />
          </div>

          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? "Отправка..." : "Отправить рассылку"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
