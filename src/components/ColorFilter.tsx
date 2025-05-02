
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface ColorOption {
  value: string;
  label: string;
  color: string;
}

interface ColorFilterProps {
  selectedColor: string;
  onColorChange: (color: string) => void;
}

const ColorFilter = ({ selectedColor, onColorChange }: ColorFilterProps) => {
  const colorOptions: ColorOption[] = [
    { value: "all", label: "Все цвета", color: "transparent" },
    { value: "red", label: "Красный", color: "#ef4444" },
    { value: "blue", label: "Синий", color: "#3b82f6" },
    { value: "green", label: "Зеленый", color: "#22c55e" },
    { value: "yellow", label: "Желтый", color: "#eab308" },
    { value: "black", label: "Черный", color: "#1c1917" },
    { value: "white", label: "Белый", color: "#f9fafb" },
    { value: "gray", label: "Серый", color: "#71717a" },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h3 className="font-medium mb-4">Цвет</h3>
      
      <RadioGroup 
        value={selectedColor} 
        onValueChange={onColorChange}
        className="flex flex-col space-y-2"
      >
        {colorOptions.map((option) => (
          <div key={option.value} className="flex items-center space-x-2">
            <RadioGroupItem value={option.value} id={`color-${option.value}`} />
            <Label htmlFor={`color-${option.value}`} className="flex items-center cursor-pointer">
              <div 
                className={`w-5 h-5 rounded-full mr-3 ${option.value === 'white' ? 'border border-gray-200' : ''}`} 
                style={{ backgroundColor: option.color }}
              />
              {option.label}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default ColorFilter;
