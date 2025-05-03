
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

const PriceCalculator = () => {
  const [model, setModel] = useState("911");
  const [engine, setEngine] = useState("standard");
  const [options, setOptions] = useState<string[]>([]);

  const basePrice = model === "911" ? 11200000 : model === "taycan" ? 7890000 : 6700000;
  const enginePrice = engine === "standard" ? 0 : engine === "s" ? 1200000 : 2500000;
  
  const optionPrices: Record<string, number> = {
    "sport_chrono": 320000,
    "panoramic_roof": 280000,
    "leather": 450000,
    "assist": 390000
  };

  const totalOptions = options.reduce((acc, option) => acc + optionPrices[option], 0);
  const totalPrice = basePrice + enginePrice + totalOptions;

  const handleOptionChange = (option: string, checked: boolean) => {
    if (checked) {
      setOptions([...options, option]);
    } else {
      setOptions(options.filter(o => o !== option));
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-6">Рассчитайте стоимость вашего Porsche</h3>

      <div className="space-y-6">
        <div>
          <Label className="text-base font-medium mb-3 block">Выберите модель</Label>
          <RadioGroup value={model} onValueChange={setModel} className="flex gap-4 flex-wrap">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="911" id="model-911" />
              <Label htmlFor="model-911">Porsche 911</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="taycan" id="model-taycan" />
              <Label htmlFor="model-taycan">Porsche Taycan</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="cayenne" id="model-cayenne" />
              <Label htmlFor="model-cayenne">Porsche Cayenne</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label className="text-base font-medium mb-3 block">Модификация двигателя</Label>
          <RadioGroup value={engine} onValueChange={setEngine} className="flex gap-4 flex-wrap">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="standard" id="engine-standard" />
              <Label htmlFor="engine-standard">Стандарт</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="s" id="engine-s" />
              <Label htmlFor="engine-s">S (+1 200 000 ₽)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="turbo" id="engine-turbo" />
              <Label htmlFor="engine-turbo">Turbo (+2 500 000 ₽)</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label className="text-base font-medium mb-3 block">Дополнительные опции</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-start space-x-2">
              <Checkbox 
                id="option-sport" 
                checked={options.includes("sport_chrono")}
                onCheckedChange={(checked) => handleOptionChange("sport_chrono", checked as boolean)}
              />
              <div>
                <Label htmlFor="option-sport" className="block">Sport Chrono Package</Label>
                <p className="text-sm text-gray-500">+320 000 ₽</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox 
                id="option-roof" 
                checked={options.includes("panoramic_roof")}
                onCheckedChange={(checked) => handleOptionChange("panoramic_roof", checked as boolean)}
              />
              <div>
                <Label htmlFor="option-roof" className="block">Панорамная крыша</Label>
                <p className="text-sm text-gray-500">+280 000 ₽</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox 
                id="option-leather" 
                checked={options.includes("leather")}
                onCheckedChange={(checked) => handleOptionChange("leather", checked as boolean)}
              />
              <div>
                <Label htmlFor="option-leather" className="block">Кожаный салон премиум</Label>
                <p className="text-sm text-gray-500">+450 000 ₽</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox 
                id="option-assist" 
                checked={options.includes("assist")}
                onCheckedChange={(checked) => handleOptionChange("assist", checked as boolean)}
              />
              <div>
                <Label htmlFor="option-assist" className="block">Пакет помощи водителю</Label>
                <p className="text-sm text-gray-500">+390 000 ₽</p>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        <div className="space-y-3">
          <div className="flex justify-between">
            <span>Базовая стоимость:</span>
            <span>{new Intl.NumberFormat('ru-RU').format(basePrice)} ₽</span>
          </div>
          {enginePrice > 0 && (
            <div className="flex justify-between">
              <span>Модификация двигателя:</span>
              <span>+{new Intl.NumberFormat('ru-RU').format(enginePrice)} ₽</span>
            </div>
          )}
          {totalOptions > 0 && (
            <div className="flex justify-between">
              <span>Дополнительные опции:</span>
              <span>+{new Intl.NumberFormat('ru-RU').format(totalOptions)} ₽</span>
            </div>
          )}
          <Separator />
          <div className="flex justify-between font-bold text-lg">
            <span>Итоговая стоимость:</span>
            <span className="text-primary">{new Intl.NumberFormat('ru-RU').format(totalPrice)} ₽</span>
          </div>
        </div>

        <Button className="w-full">Получить персональное предложение</Button>
      </div>
    </div>
  );
};

export default PriceCalculator;
