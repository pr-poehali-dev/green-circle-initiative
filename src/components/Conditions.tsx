import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Conditions = () => {
  return (
    <section id="conditions" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Условия программы
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Выгодные условия для разных типов клиентов
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* B2C */}
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Users" size={24} className="text-purple-600" />
                  <span>Для B2C клиентов</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Calendar" size={20} className="text-green-600" />
                  <span>
                    <strong>1-й год:</strong> 15% от всех пополнений
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Calendar" size={20} className="text-blue-600" />
                  <span>
                    <strong>2-й год:</strong> 10% от всех пополнений
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Zap" size={20} className="text-orange-600" />
                  <span>Автоматическая регистрация по вашей ссылке</span>
                </div>
              </CardContent>
            </Card>

            {/* B2B */}
            <Card className="hover-scale border-purple-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Building" size={24} className="text-purple-600" />
                  <span>Для B2B клиентов</span>
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-2 py-1 rounded-full text-xs">
                    Premium
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Calendar" size={20} className="text-green-600" />
                  <span>
                    <strong>1-й год:</strong> 20% от всех пополнений
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Calendar" size={20} className="text-blue-600" />
                  <span>
                    <strong>2-й год:</strong> 10% от всех пополнений
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Gift" size={20} className="text-purple-600" />
                  <span>
                    <strong>Бонус:</strong> 50% от первого пополнения
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon
                    name="HeartHandshake"
                    size={20}
                    className="text-indigo-600"
                  />
                  <span>Персональная поддержка при онбординге</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conditions;
