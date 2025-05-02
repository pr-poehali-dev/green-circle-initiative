
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";
import PaymentSystem from "./PaymentSystem";

const HeroSection = () => {
  const [model, setModel] = useState("911");
  const [downPayment, setDownPayment] = useState(30);
  const [extraPackage, setExtraPackage] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  
  // Базовые цены моделей
  const modelPrices = {
    "911": 9200000,
    "Taycan": 8700000,
    "Cayenne": 7500000,
    "Macan": 5600000,
    "Panamera": 8900000
  };
  
  const modelNames = {
    "911": "Porsche 911",
    "Taycan": "Porsche Taycan",
    "Cayenne": "Porsche Cayenne",
    "Macan": "Porsche Macan",
    "Panamera": "Porsche Panamera"
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

  const handleContactTelegram = () => {
    window.open('https://t.me/porsche', '_blank');
  };
  
  const handleStartPayment = () => {
    setIsPaymentOpen(true);
  };
  
  const handlePaymentSuccess = () => {
    setIsPaymentOpen(false);
    // Можно добавить дополнительное действие после успешной оплаты
    setTimeout(() => {
      handleContactTelegram();
    }, 500);
  };
  
  const handlePaymentCancel = () => {
    setIsPaymentOpen(false);
  };

  const handleScrollDown = () => {
    // Плавная прокрутка к следующему разделу
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&h=1300&q=80')",
          backgroundPosition: "center 40%"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">PORSCHE</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-xl">Воплощение совершенства в каждой детали. Испытайте непревзойденные характеристики и элегантный дизайн.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6">Тест-драйв</Button>
              <Button 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black text-lg px-8 py-6"
              >
                Каталог моделей
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full max-w-md">
            <Card className="backdrop-blur-md bg-black/30 border-0 shadow-xl text-white">
              <CardHeader className="border-b border-white/10">
                <CardTitle className="text-xl">Рассчитайте стоимость Porsche</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                {/* Выбор модели */}
                <div className="space-y-2">
                  <Label htmlFor="model" className="text-white">Модель Porsche</Label>
                  <Select value={model} onValueChange={setModel}>
                    <SelectTrigger id="model" className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Выберите модель" />
                    </SelectTrigger>
                    <SelectContent className="bg-black/90 text-white border-white/20">
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
                    <Label htmlFor="downPayment" className="text-white">Первоначальный взнос</Label>
                    <span className="text-sm font-medium text-white">{downPayment}%</span>
                  </div>
                  <Slider
                    id="downPayment"
                    min={10}
                    max={90}
                    step={5}
                    value={[downPayment]}
                    onValueChange={(values) => setDownPayment(values[0])}
                    className="py-1"
                  />
                  <p className="text-sm text-white/70">{formatPrice(downPaymentAmount)}</p>
                </div>
                
                {/* Дополнительный пакет */}
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="extraPackage" className="text-white">Спортивный пакет</Label>
                    <p className="text-sm text-white/70">Доп. оборудование + 1.5 млн ₽</p>
                  </div>
                  <Switch
                    id="extraPackage"
                    checked={extraPackage}
                    onCheckedChange={setExtraPackage}
                  />
                </div>
                
                {/* Результаты расчета */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Полная стоимость:</span>
                    <span className="font-bold">{formatPrice(totalPrice)}</span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span className="font-medium">Ежемесячный платеж:</span>
                    <span className="font-bold">{formatPrice(monthlyPayment)}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <Button 
                      className="bg-white text-black hover:bg-gray-200"
                      onClick={handleContactTelegram}
                    >
                      Связаться
                    </Button>
                    <Button 
                      className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black"
                      onClick={handleStartPayment}
                    >
                      Оплатить взнос
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Шеврон для прокрутки вниз */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <button 
          onClick={handleScrollDown}
          className="bg-white/10 hover:bg-white/20 transition-colors p-3 rounded-full backdrop-blur-sm"
          aria-label="Прокрутить вниз"
        >
          <Icon name="ChevronDown" size={32} className="text-white" />
        </button>
      </div>
      
      {/* Диалог с платежной системой */}
      <Dialog open={isPaymentOpen} onOpenChange={setIsPaymentOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Оплата</DialogTitle>
            <DialogDescription>
              Внесение предоплаты за {modelNames[model as keyof typeof modelNames]}
            </DialogDescription>
          </DialogHeader>
          <PaymentSystem 
            amount={downPaymentAmount} 
            modelName={modelNames[model as keyof typeof modelNames]}
            onSuccess={handlePaymentSuccess}
            onCancel={handlePaymentCancel}
          />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;
