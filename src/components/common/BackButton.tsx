
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export function BackButton() {
  const goBack = () => window.history.back();
  
  return (
    <Button 
      variant="ghost" 
      onClick={goBack}
      className="flex items-center gap-1"
    >
      <Icon name="ArrowLeft" size={16} />
      Назад
    </Button>
  );
}
