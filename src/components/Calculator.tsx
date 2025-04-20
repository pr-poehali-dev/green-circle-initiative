
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Calculator as CalcIcon } from "lucide-react";

export const Calculator = () => {
  const [length, setLength] = useState<string>("0");
  const [width, setWidth] = useState<string>("0");
  const [height, setHeight] = useState<string>("0");
  const [concreteType, setConcreteType] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);

  const calculateConcrete = () => {
    if (!length || !width || !height || !concreteType) return;
    
    const volume = parseFloat(length) * parseFloat(width) * parseFloat(height);
    
    let pricePerCubic = 0;
    switch (concreteType) {
      case "m100": pricePerCubic = 3200; break;
      case "m200": pricePerCubic = 3700; break;
      case "m300": pricePerCubic = 4100; break;
      case "m350": pricePerCubic = 4500; break;
      default: pricePerCubic = 0;
    }
    
    setResult(Math.round(volume * pricePerCubic));
  };

  return (
    <section id="calculator" className="py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">Калькулятор стоимости</h2>
      
      <Card className="backdrop-blur-lg bg-zinc-800/40 border border-zinc-700/50 overflow-hidden">
        <div className="p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white">Рассчитайте необходимый объем бетона</h3>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="concreteType" className="text-zinc-300">Марка бетона</Label>
                  <Select onValueChange={setConcreteType} value={concreteType}>
                    <SelectTrigger className="w-full bg-zinc-700/50 border-zinc-600/50 text-zinc-200">
                      <SelectValue placeholder="Выберите марку бетона" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-800 border-zinc-700">
                      <SelectItem value="m100" className="text-zinc-200">М100 B7.5</SelectItem>
                      <SelectItem value="m200" className="text-zinc-200">М200 B15</SelectItem>
                      <SelectItem value="m300" className="text-zinc-200">М300 B22.5</SelectItem>
                      <SelectItem value="m350" className="text-zinc-200">М350 B25</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="length" className="text-zinc-300">Длина (м)</Label>
                  <Input 
                    id="length"
                    type="number"
                    min="0"
                    step="0.1"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    className="bg-zinc-700/50 border-zinc-600/50 text-zinc-200"
                  />
                </div>
                
                <div>
                  <Label htmlFor="width" className="text-zinc-300">Ширина (м)</Label>
                  <Input 
                    id="width"
                    type="number"
                    min="0"
                    step="0.1"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    className="bg-zinc-700/50 border-zinc-600/50 text-zinc-200"
                  />
                </div>
                
                <div>
                  <Label htmlFor="height" className="text-zinc-300">Высота (м)</Label>
                  <Input 
                    id="height"
                    type="number"
                    min="0"
                    step="0.1"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="bg-zinc-700/50 border-zinc-600/50 text-zinc-200"
                  />
                </div>
                
                <Button 
                  onClick={calculateConcrete}
                  className="w-full backdrop-blur-sm bg-blue-500/80 hover:bg-blue-600/80 text-white border border-blue-400/50"
                >
                  <CalcIcon className="mr-2 h-4 w-4" />
                  Рассчитать стоимость
                </Button>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="backdrop-blur-sm bg-blue-500/10 border border-blue-400/30 rounded-xl p-8 text-center w-full">
                <h4 className="text-lg text-zinc-300 mb-2">Итоговая стоимость:</h4>
                <div className="text-4xl font-bold text-white mb-2">
                  {result ? `${result.toLocaleString()} ₽` : "—"}
                </div>
                <p className="text-zinc-400 text-sm">
                  {result ? `Объем: ${(parseFloat(length) * parseFloat(width) * parseFloat(height)).toFixed(2)} м³` : "Укажите параметры для расчета"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};
