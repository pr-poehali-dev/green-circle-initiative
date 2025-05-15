
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import Icon from "@/components/ui/icon";

interface SocialAuthProps {
  className?: string;
}

export function SocialAuth({ className }: SocialAuthProps) {
  const handleSocialLogin = (provider: string) => {
    toast({
      title: "Функция в разработке",
      description: `Вход через ${provider} временно недоступен.`,
    });
  };

  return (
    <div className={className}>
      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#9b87f5]/20"></div>
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-[#2B3144] px-2 text-gray-400">или войдите через</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mt-4">
        <Button
          variant="outline"
          className="bg-white/5 hover:bg-white/10 border-[#9b87f5]/30 text-white"
          onClick={() => handleSocialLogin("Google")}
        >
          <Icon name="Mail" className="mr-2 h-4 w-4" />
          Google
        </Button>
        <Button
          variant="outline"
          className="bg-white/5 hover:bg-white/10 border-[#9b87f5]/30 text-white"
          onClick={() => handleSocialLogin("VK")}
        >
          <span className="mr-2 font-semibold text-sm">VK</span>
          ВКонтакте
        </Button>
      </div>
    </div>
  );
}
