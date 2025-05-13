import { useState } from "react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { toast } from "@/components/ui/use-toast";

export default function ProfilePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Имитируем процесс входа
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Авторизация недоступна",
        description:
          "Функционал авторизации находится в разработке. Пожалуйста, попробуйте позже.",
        variant: "destructive",
      });
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-[#D6BCFA] mb-8">Личный кабинет</h1>

      <div className="max-w-md mx-auto">
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-[#2B3144]">
            <TabsTrigger
              value="login"
              className="text-[#D6BCFA] data-[state=active]:bg-[#3A4058]"
            >
              Вход
            </TabsTrigger>
            <TabsTrigger
              value="register"
              className="text-[#D6BCFA] data-[state=active]:bg-[#3A4058]"
            >
              Регистрация
            </TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card className="bg-[#2B3144] border-[#9b87f5]/20 text-white">
              <CardHeader>
                <CardTitle className="text-[#D6BCFA]">Вход в аккаунт</CardTitle>
                <CardDescription className="text-gray-400">
                  Введите свои данные для входа в личный кабинет
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#D6BCFA]">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-[#1A1F2C] border-[#9b87f5]/30 focus-visible:ring-[#9b87f5]"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="password" className="text-[#D6BCFA]">
                        Пароль
                      </Label>
                      <a
                        href="#"
                        className="text-xs text-[#9b87f5] hover:text-[#D6BCFA] transition-colors"
                        onClick={(e) => {
                          e.preventDefault();
                          toast({
                            title: "Восстановление пароля",
                            description: "Эта функция пока недоступна",
                          });
                        }}
                      >
                        Забыли пароль?
                      </a>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="bg-[#1A1F2C] border-[#9b87f5]/30 focus-visible:ring-[#9b87f5]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#9b87f5] hover:bg-[#7E69AB]"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Icon
                          name="Loader2"
                          className="mr-2 h-4 w-4 animate-spin"
                        />
                        Загрузка...
                      </>
                    ) : (
                      "Войти"
                    )}
                  </Button>
                </form>
              </CardContent>

              <CardFooter className="flex-col space-y-4">
                <div className="relative w-full">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-[#9b87f5]/20"></span>
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="bg-[#2B3144] px-2 text-gray-400">
                      или войдите через
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="border-[#9b87f5]/30 hover:bg-[#9b87f5]/10 hover:text-white"
                    onClick={() => {
                      toast({
                        title: "Google авторизация",
                        description: "Эта функция пока недоступна",
                      });
                    }}
                  >
                    <Icon name="Mail" className="mr-2 h-4 w-4" />
                    Google
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#9b87f5]/30 hover:bg-[#9b87f5]/10 hover:text-white"
                    onClick={() => {
                      toast({
                        title: "VK авторизация",
                        description: "Эта функция пока недоступна",
                      });
                    }}
                  >
                    <Icon name="MessageSquare" className="mr-2 h-4 w-4" />
                    VK
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="register" className="space-y-4">
            <div className="text-center py-8">
              <Icon
                name="Mail"
                size={48}
                className="text-[#9b87f5]/60 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-[#D6BCFA] mb-2">
                Функция регистрации скоро появится!
              </h3>
              <p className="text-gray-400 mb-6">
                Оставьте свой email, чтобы получить уведомление, когда
                регистрация станет доступна.
              </p>

              <div className="flex mb-4">
                <Input
                  type="email"
                  placeholder="Ваш email"
                  className="bg-white/5 border-[#9b87f5]/30 text-white"
                />
                <Button
                  className="ml-2 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all shadow-lg"
                  onClick={() =>
                    toast({
                      title: "Спасибо!",
                      description:
                        "Мы уведомим вас, когда регистрация станет доступна.",
                    })
                  }
                >
                  Подписаться
                </Button>
              </div>

              <p className="text-xs text-gray-500">
                Мы никогда не передадим вашу электронную почту кому-либо еще.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
