
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LikedCounterProps {
  count: number;
  showOnlyLiked: boolean;
  onToggleLikedFilter: () => void;
}

const LikedCounter = ({ count, showOnlyLiked, onToggleLikedFilter }: LikedCounterProps) => {
  return (
    <Button
      variant={showOnlyLiked ? "default" : "outline"}
      size="sm"
      className={cn(
        "relative group",
        showOnlyLiked && "bg-red-500 hover:bg-red-600 text-white"
      )}
      onClick={onToggleLikedFilter}
    >
      <Icon 
        name="Heart" 
        size={16} 
        className={cn(
          "mr-1.5 transition-transform group-hover:scale-110",
          showOnlyLiked ? "text-white" : "text-red-500"
        )} 
      />
      <span>Избранное</span>
      {count > 0 && (
        <Badge 
          variant="secondary" 
          className={cn(
            "ml-1.5 min-w-5 h-5 px-1 text-xs flex items-center justify-center",
            showOnlyLiked ? "bg-white text-red-500" : "bg-red-100 text-red-500"
          )}
        >
          {count}
        </Badge>
      )}
    </Button>
  );
};

export default LikedCounter;
