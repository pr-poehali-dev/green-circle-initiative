import React from "react";
import Icon from "@/components/ui/icon";

interface InstructionStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const steps: InstructionStep[] = [
  {
    id: 1,
    title: "Выберите номинал",
    description:
      "Выберите подходящий номинал подарочной карты из доступных вариантов.",
    icon: "CreditCard",
  },
  {
    id: 2,
    title: "Оформите заказ",
    description: "Укажите данные получателя и выберите способ доставки карты.",
    icon: "ShoppingBag",
  },
  {
    id: 3,
    title: "Активируйте карту",
    description:
      "Получатель может активировать карту в App Store или iTunes Store.",
    icon: "Gift",
  },
];

const InstructionsSection: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-[#F5F5F7]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-4">
          Как это работает
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Всего три простых шага для того, чтобы подарить близким возможность
          выбрать то, что они действительно хотят.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-[#0071E3] rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name={step.icon} size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructionsSection;
