import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface TransitionDialogProps {
  targetPath: string;
  buttonText: string;
  iconName?: string;
  buttonClassName?: string;
}

export default function TransitionDialog({
  targetPath,
  buttonText,
  iconName,
  buttonClassName,
}: TransitionDialogProps) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      // Задержка перед переходом, чтобы анимация успела проиграться
      const timer = setTimeout(() => {
        navigate(targetPath);
      }, 800);

      return () => clearTimeout(timer);
    }
  }, [open, navigate, targetPath]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={buttonClassName}>
          {iconName && <Icon name={iconName} className="mr-2" />}
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-gradient-to-br from-[#1A1F2C] to-[#2B3144] border-[#9b87f5]/50 text-white">
        <div className="flex flex-col items-center justify-center py-10">
          <div className="w-16 h-16 bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA] rounded-full flex items-center justify-center animate-pulse shadow-lg shadow-[#9b87f5]/30">
            <Icon name="Wine" size={32} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold mt-6 text-[#D6BCFA]">
            Открываем генератор...
          </h2>
          <p className="text-gray-300 mt-2 text-center">
            Пожалуйста, подождите, пока мы готовим для вас уникальные напитки
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
