import Icon from "@/components/ui/icon";

const Contacts = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-white">
            <h1 className="text-4xl font-bold mb-8 text-center">Контакты</h1>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Icon name="Mail" size={24} className="text-blue-300" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-300">support@poehali.dev</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Icon name="Phone" size={24} className="text-blue-300" />
                <div>
                  <h3 className="font-semibold">Телефон</h3>
                  <p className="text-gray-300">+7 (999) 123-45-67</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Icon name="MapPin" size={24} className="text-blue-300" />
                <div>
                  <h3 className="font-semibold">Адрес</h3>
                  <p className="text-gray-300">Владикавказ, Россия</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Icon name="Clock" size={24} className="text-blue-300" />
                <div>
                  <h3 className="font-semibold">Время работы</h3>
                  <p className="text-gray-300">Круглосуточно 24/7</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <h3 className="text-xl font-semibold mb-4">Социальные сети</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-blue-300 hover:text-blue-200 transition-colors"
                >
                  <Icon name="Github" size={28} />
                </a>
                <a
                  href="#"
                  className="text-blue-300 hover:text-blue-200 transition-colors"
                >
                  <Icon name="Twitter" size={28} />
                </a>
                <a
                  href="#"
                  className="text-blue-300 hover:text-blue-200 transition-colors"
                >
                  <Icon name="Linkedin" size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
