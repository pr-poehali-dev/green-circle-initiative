
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Имитация отправки запроса
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Функция в разработке",
        description: "Вход временно недоступен. Пожалуйста, попробуйте позже.",
      });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email" className="text-[#D6BCFA]">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="email@example.com"
          className="bg-white/5 border-[#9b87f5]/30 text-white"
          required
        />
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Label htmlFor="password" className="text-[#D6BCFA]">Пароль</Label>
          <Button 
            variant="link" 
            className="text-[#9b87f5] p-0 h-auto text-xs"
            onClick={() => toast({
              title: "Функция в разработке",
              description: "Восстановление пароля временно недоступно.",
            })}
          >
            Забыли пароль?
          </Button>
        </div>
        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          className="bg-white/5 border-[#9b87f5]/30 text-white"
          required
        />
      </div>
      
      <div className="flex items-center space-x-2 my-4">
        <Checkbox id="remember" className="border-[#9b87f5] data-[state=checked]:bg-[#9b87f5]" />
        <label
          htmlFor="remember"
          className="text-sm text-gray-300 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Запомнить меня
        </label>
      </div>
      
      <Button 
        className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] text-white" 
        disabled={isLoading}
        type="submit"
      >
        {isLoading ? (
          <>
            <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
            Вход...
          </>
        ) : (
          "Войти"
        )}
      </Button>
    </form>
  );
}
