
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Icon from "@/components/ui/icon";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";

interface PaymentProps {
  amount: number;
  modelName: string;
  onSuccess: () => void;
  onCancel: () => void;
}

const PaymentSystem = ({ amount, modelName, onSuccess, onCancel }: PaymentProps) => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }).format(price);
  };
  
  const handlePayment = () => {
    setIsProcessing(true);
    
    // Имитация обработки платежа
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      
      // Закрыть диалог после успешной оплаты
      setTimeout(() => {
        onSuccess();
      }, 2000);
    }, 2000);
  };
  
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">Оформление платежа</CardTitle>
        <CardDescription>
          Предоплата за {modelName} {formatPrice(amount)}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <Tabs defaultValue="card" onValueChange={setPaymentMethod}>
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="card">Картой</TabsTrigger>
            <TabsTrigger value="sbp">СБП</TabsTrigger>
            <TabsTrigger value="crypto">Криптовалюта</TabsTrigger>
          </TabsList>
          
          <TabsContent value="card" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="cardNumber">Номер карты</Label>
              <Input 
                id="cardNumber" 
                placeholder="0000 0000 0000 0000" 
                maxLength={19}
                onChange={(e) => {
                  // Форматирование номера карты с пробелами
                  let value = e.target.value.replace(/\s+/g, '');
                  value = value.replace(/[^0-9]/gi, '');
                  const parts = [];
                  for (let i = 0; i < value.length; i += 4) {
                    parts.push(value.substring(i, i + 4));
                  }
                  e.target.value = parts.join(' ');
                }}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiry">Срок действия</Label>
                <Input 
                  id="expiry" 
                  placeholder="ММ/ГГ" 
                  maxLength={5}
                  onChange={(e) => {
                    // Форматирование срока действия карты
                    let value = e.target.value.replace(/\//g, '');
                    value = value.replace(/[^0-9]/gi, '');
                    if (value.length > 2) {
                      value = value.substring(0, 2) + '/' + value.substring(2);
                    }
                    e.target.value = value;
                  }}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvv">CVV</Label>
                <Input id="cvv" type="password" placeholder="***" maxLength={3} />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="cardHolder">Имя владельца</Label>
              <Input id="cardHolder" placeholder="IVAN IVANOV" />
            </div>
          </TabsContent>
          
          <TabsContent value="sbp" className="space-y-4">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                <span className="text-gray-400">QR-код СБП</span>
              </div>
              <p className="text-center text-sm text-gray-600">
                Отсканируйте QR-код с помощью приложения банка для оплаты через Систему Быстрых Платежей
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="crypto" className="space-y-4">
            <RadioGroup defaultValue="btc">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="btc" id="btc" />
                <Label htmlFor="btc">Bitcoin (BTC)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="eth" id="eth" />
                <Label htmlFor="eth">Ethereum (ETH)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="usdt" id="usdt" />
                <Label htmlFor="usdt">Tether (USDT)</Label>
              </div>
            </RadioGroup>
            
            <div className="mt-4 p-3 bg-gray-100 rounded-md break-all">
              <p className="text-xs font-mono">bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh</p>
            </div>
            <p className="text-center text-sm text-gray-600">
              Отправьте эквивалент {formatPrice(amount)} на указанный адрес
            </p>
          </TabsContent>
        </Tabs>
      </CardContent>
      
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={onCancel}>Отмена</Button>
        <Button 
          onClick={handlePayment} 
          disabled={isProcessing}
        >
          {isProcessing ? (
            <>
              <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
              Обработка
            </>
          ) : "Оплатить"}
        </Button>
      </CardFooter>
      
      {/* Диалог успешной оплаты */}
      <Dialog open={isSuccess} onOpenChange={setIsSuccess}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Icon name="CheckCircle" className="text-green-500" />
              Оплата успешно выполнена
            </DialogTitle>
            <DialogDescription>
              Ваш платеж за {modelName} успешно обработан. Наш менеджер свяжется с вами в ближайшее время для уточнения деталей.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={onSuccess} className="w-full">Готово</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default PaymentSystem;
