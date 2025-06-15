import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Verification = () => {
  const [giftCardCode, setGiftCardCode] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult] = useState<{
    isValid: boolean;
    balance?: string;
    message: string;
  } | null>(null);

  const handleVerification = async () => {
    if (!giftCardCode.trim()) return;

    setIsChecking(true);

    // Имитация проверки
    setTimeout(() => {
      if (giftCardCode.length >= 12) {
        setResult({
          isValid: true,
          balance: "2,500₽",
          message: "Карта действительна и готова к использованию",
        });
      } else {
        setResult({
          isValid: false,
          message: "Недействительный код карты",
        });
      }
      setIsChecking(false);
    }, 2000);
  };

  return (
    <section id="verification" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-r from-gray-800 to-gray-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Icon name="Shield" size={32} className="text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Проверка подлинности
            </h2>
            <p className="text-xl text-gray-600">
              Убедитесь в подлинности вашей подарочной карты Apple
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-center">
                Введите код подарочной карты
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Input
                  placeholder="Например: AXXXXXXXXXXXXX"
                  value={giftCardCode}
                  onChange={(e) => setGiftCardCode(e.target.value)}
                  className="text-lg text-center"
                  maxLength={20}
                />
                <p className="text-sm text-gray-500 mt-2 text-center">
                  Код состоит из 16 символов и начинается с буквы
                </p>
              </div>

              <Button
                onClick={handleVerification}
                className="w-full bg-gray-800 hover:bg-gray-700"
                size="lg"
                disabled={isChecking || !giftCardCode.trim()}
              >
                {isChecking ? (
                  <>
                    <Icon
                      name="Loader2"
                      className="mr-2 animate-spin"
                      size={20}
                    />
                    Проверяем...
                  </>
                ) : (
                  <>
                    <Icon name="Search" className="mr-2" size={20} />
                    Проверить карту
                  </>
                )}
              </Button>

              {result && (
                <div
                  className={`p-4 rounded-lg border ${
                    result.isValid
                      ? "bg-green-50 border-green-200"
                      : "bg-red-50 border-red-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      name={result.isValid ? "CheckCircle" : "XCircle"}
                      size={24}
                      className={
                        result.isValid ? "text-green-600" : "text-red-600"
                      }
                    />
                    <div>
                      <p
                        className={`font-medium ${
                          result.isValid ? "text-green-800" : "text-red-800"
                        }`}
                      >
                        {result.message}
                      </p>
                      {result.balance && (
                        <p className="text-green-600 text-sm mt-1">
                          Баланс карты: {result.balance}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Icon name="Database" size={20} className="text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                База данных Apple
              </h3>
              <p className="text-sm text-gray-600">
                Проверка через официальную систему Apple
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Icon name="Zap" size={20} className="text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Мгновенно</h3>
              <p className="text-sm text-gray-600">
                Результат проверки за несколько секунд
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Icon name="Lock" size={20} className="text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Безопасно</h3>
              <p className="text-sm text-gray-600">
                Мы не сохраняем данные ваших карт
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Verification;
