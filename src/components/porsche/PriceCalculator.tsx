
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";

const PriceCalculator = () => {
  const [model, setModel] = useState("911");
  const [downPayment, setDownPayment] = useState(30);
  const [extraPackage, setExtraPackage] = useState(false);
  
  // Базовые цены моделей
  const modelPrices = {
    "911": 9200000,
    "Taycan": 8700000,
    "Cayenne": 7500000,
    "Macan": 5600000,
    "Panamera": 8900000
  };
  
  // Расчет итоговой цены
  const calculatePrice = () => {
    const basePrice = modelPrices[model as keyof typeof modelPrices];
    const extraPackagePrice = extraPackage ? 1500000 : 0;
    const totalPrice = basePrice + extraPackagePrice;
    const downPaymentAmount = totalPrice * (downPayment / 100);
    const monthlyPayment = ((totalPrice - downPaymentAmount) / 36) * 1.08; // 36 месяцев с 8% годовых
    
    return {
      totalPrice,
      downPaymentAmount,
      monthlyPayment
    };
  };
  
  const { totalPrice, downPaymentAmount, monthlyPayment } = calculatePrice();
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }).format(price);
  };
  
  return (
    <section className="py-16 bg-white" id="calculator">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Рассчитайте стоимость вашего Porsche</h2>
        
        <Card className="max-w-2xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl">Калькулятор стоимости</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Выбор модели */}
            <div className="space-y-2">
              <Label htmlFor="model">Модель Porsche</Label>
              <Select value={model} onValueChange={setModel}>
                <SelectTrigger id="model">
                  <SelectValue placeholder="Выберите модель" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="911">Porsche 911</SelectItem>
                  <SelectItem value="Taycan">Porsche Taycan</SelectItem>
                  <SelectItem value="Cayenne">Porsche Cayenne</SelectItem>
                  <SelectItem value="Macan">Porsche Macan</SelectItem>
                  <SelectItem value="Panamera">Porsche Panamera</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* Первоначальный взнос */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="downPayment">Первоначальный взнос</Label>
                <span className="text-sm font-medium">{downPayment}%</span>
              </div>
              <Slider
                id="downPayment"
                min={10}
                max={90}
                step={5}
                value={[downPayment]}
                onValueChange={(values) => setDownPayment(values[0])}
              />
              <p className="text-sm text-gray-500">{formatPrice(downPaymentAmount)}</p>
            </div>
            
            {/* Дополнительный пакет */}
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="extraPackage">Спортивный пакет</Label>
                <p className="text-sm text-gray-500">Доп. оборудование + 1.5 млн ₽</p>
              </div>
              <Switch
                id="extraPackage"
                checked={extraPackage}
                onCheckedChange={setExtraPackage}
              />
            </div>
            
            {/* Результаты расчета */}
            <div className="mt-8 pt-6 border-t">
              <div className="flex justify-between mb-2">
                <span className="font-medium">Полная стоимость:</span>
                <span className="font-bold">{formatPrice(totalPrice)}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="font-medium">Ежемесячный платеж:</span>
                <span className="font-bold">{formatPrice(monthlyPayment)}</span>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                * Расчет приблизительный. Итоговые условия уточняйте у менеджера.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PriceCalculator;
