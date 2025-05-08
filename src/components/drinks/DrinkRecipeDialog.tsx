
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";
import { DrinksData } from "@/data/drinksData";

interface DrinkRecipeDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  selectedDrink: string | null;
  drinksData: DrinksData;
}

export function DrinkRecipeDialog({ 
  isOpen, 
  onOpenChange, 
  selectedDrink, 
  drinksData 
}: DrinkRecipeDialogProps) {
  if (!selectedDrink) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#2B3144] border-[#9b87f5]/20 text-white max-w-md max-h-[90vh] overflow-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#D6BCFA] flex items-center">
            <Icon name="GlassWater" size={24} className="mr-2 text-[#9b87f5]" />
            {selectedDrink}
          </DialogTitle>
        </DialogHeader>
        
        <div className="mt-4">
          <h4 className="text-lg font-semibold text-[#9b87f5] mb-2">Ингредиенты:</h4>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            {drinksData[selectedDrink]?.ingredients.map((ingredient, idx) => (
              <li key={idx} className="text-gray-200">{ingredient}</li>
            ))}
          </ul>
          
          <h4 className="text-lg font-semibold text-[#9b87f5] mb-2">Приготовление:</h4>
          <p className="text-gray-200">{drinksData[selectedDrink]?.preparation}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
