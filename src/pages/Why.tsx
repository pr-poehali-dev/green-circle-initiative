import { useState } from "react";
import Icon from "@/components/ui/icon";

export default function Why() {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(0);

  const features = [
    {
      id: 0,
      icon: "Cpu",
      title: "A17 Pro чип",
      description:
        "Самый мощный чип в истории iPhone для игр консольного уровня",
    },
    {
      id: 1,
      icon: "Camera",
      title: "Pro камеры",
      description: "Система камер с 5-кратным зумом для невероятных снимков",
    },
    {
      id: 2,
      icon: "Smartphone",
      title: "Титановый корпус",
      description: "Самый прочный и лёгкий дизайн в истории iPhone",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="py-24 bg-black">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light mb-6 text-left">
              Почему iPhone 15
            </h2>
            <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto text-left">
              Три причины выбрать самый продвинуты
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {features.map((feature) => (
              <div
                key={feature.id}
                onClick={() => setSelectedFeature(feature.id)}
                className={`text-center space-y-6 cursor-pointer transition-all duration-300 p-6 rounded-2xl ${
                  selectedFeature === feature.id
                    ? "bg-blue-500/10 border border-blue-400/30"
                    : "hover:bg-gray-900/50"
                }`}
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto transition-colors ${
                    selectedFeature === feature.id
                      ? "bg-blue-500/20"
                      : "bg-gray-800"
                  }`}
                >
                  <Icon
                    name={feature.icon}
                    size={28}
                    className={
                      selectedFeature === feature.id
                        ? "text-blue-300"
                        : "text-blue-400"
                    }
                  />
                </div>
                <h3
                  className={`text-2xl font-light ${
                    selectedFeature === feature.id ? "text-blue-300" : ""
                  }`}
                >
                  {feature.title}
                </h3>
                <p className="text-gray-400 font-light text-left">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
