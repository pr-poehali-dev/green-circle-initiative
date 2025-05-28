import Icon from "@/components/ui/icon";

export default function Why() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Features Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light mb-6">
              Почему iPhone 15 Pro
            </h2>
            <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
              Три причины выбрать самый продвинутый iPhone
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto">
                <Icon name="Cpu" size={28} className="text-blue-400" />
              </div>
              <h3 className="text-2xl font-light">A17 Pro чип</h3>
              <p className="text-gray-400 font-light">
                Самый мощный чип в истории iPhone для игр консольного уровня
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto">
                <Icon name="Camera" size={28} className="text-blue-400" />
              </div>
              <h3 className="text-2xl font-light">Pro камеры</h3>
              <p className="text-gray-400 font-light">
                Система камер с 5-кратным зумом для невероятных снимков
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto">
                <Icon name="Smartphone" size={28} className="text-blue-400" />
              </div>
              <h3 className="text-2xl font-light">Титановый корпус</h3>
              <p className="text-gray-400 font-light">
                Самый прочный и лёгкий дизайн в истории iPhone
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
