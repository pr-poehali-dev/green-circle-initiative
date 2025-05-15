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
          <div className="w-full border-t border-red-500/20"></div>
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-red-900 px-2 text-red-300">
            или войдите через
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <Button
          variant="outline"
          className="bg-red-900/50 hover:bg-red-800 border-red-500/30 text-white"
          onClick={() => handleSocialLogin("Google")}
        >
          <Icon name="Mail" className="mr-2 h-4 w-4" />
          Google
        </Button>
        <Button
          variant="outline"
          className="bg-red-900/50 hover:bg-red-800 border-red-500/30 text-white"
          onClick={() => handleSocialLogin("VK")}
        >
          <span className="mr-2 font-semibold text-sm">VK</span>
          ВКонтакте
        </Button>
      </div>
    </div>
  );
}
