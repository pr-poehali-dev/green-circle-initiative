import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import Icon from "@/components/ui/icon";

const Calculator = () => {
  const [b2cClients, setB2cClients] = useState([10]);
  const [b2bClients, setB2bClients] = useState([2]);
  const [avgCheck, setAvgCheck] = useState([5000]);

  const calculateIncome = () => {
    const b2cMonthly = b2cClients[0] * avgCheck[0] * 0.15;
    const b2bMonthly = b2bClients[0] * avgCheck[0] * 0.2;
    const totalMonthly = b2cMonthly + b2bMonthly;
    const totalYearly = totalMonthly * 12;

    return { monthly: totalMonthly, yearly: totalYearly };
  };

  const income = calculateIncome();

  return (
    <section
      id="calculator"
      className="py-16 bg-gradient-to-br from-purple-50 to-blue-50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Калькулятор дохода
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Рассчитайте свой потенциальный доход
          </p>

          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="Calculator" size={24} className="text-purple-600" />
                <span>Ваш потенциальный доход</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700">
                    B2C клиенты: {b2cClients[0]}
                  </label>
                  <Slider
                    value={b2cClients}
                    onValueChange={setB2cClients}
                    max={100}
                    min={0}
                    step={1}
                    className="w-full"
                  />
                </div>

                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700">
                    B2B клиенты: {b2bClients[0]}
                  </label>
                  <Slider
                    value={b2bClients}
                    onValueChange={setB2bClients}
                    max={20}
                    min={0}
                    step={1}
                    className="w-full"
                  />
                </div>

                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Средний чек: {avgCheck[0].toLocaleString()}₽
                  </label>
                  <Slider
                    value={avgCheck}
                    onValueChange={setAvgCheck}
                    max={50000}
                    min={500}
                    step={500}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 text-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                  <div>
                    <p className="text-purple-100 mb-2">Доход в месяц</p>
                    <p className="text-3xl font-bold">
                      {income.monthly.toLocaleString()}₽
                    </p>
                  </div>
                  <div>
                    <p className="text-purple-100 mb-2">Доход в год</p>
                    <p className="text-3xl font-bold">
                      {income.yearly.toLocaleString()}₽
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
