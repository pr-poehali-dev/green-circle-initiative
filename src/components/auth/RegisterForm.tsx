
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import Icon from "@/components/ui/icon";

export function RegisterForm() {
  return (
    <div className="text-center py-6">
      <Icon name="Mail" size={48} className="text-[#9b87f5]/60 mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-[#D6BCFA] mb-2">
        Функция регистрации скоро появится!
      </h3>
      <p className="text-gray-400 mb-6">
        Оставьте свой email, чтобы получить уведомление, когда регистрация станет доступна.
      </p>
      
      <div className="flex mb-4">
        <Input 
          type="email" 
          placeholder="Ваш email" 
          className="bg-white/5 border-[#9b87f5]/30 text-white"
        />
        <Button 
          className="ml-2 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all shadow-lg"
          onClick={() => toast({
            title: "Спасибо!",
            description: "Мы уведомим вас, когда регистрация станет доступна.",
          })}
        >
          Подписаться
        </Button>
      </div>
      
      <p className="text-xs text-gray-500">
        Мы никогда не передадим вашу электронную почту кому-либо еще.
      </p>
    </div>
  );
}
