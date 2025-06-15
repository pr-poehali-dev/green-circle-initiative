import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer id="contacts" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Связаться со мной</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-4">
                <Icon name="Mail" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a
                href="mailto:yura@dev.example"
                className="text-gray-300 hover:text-white transition-colors"
              >
                yura@dev.example
              </a>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-4">
                <Icon name="MessageCircle" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Telegram</h3>
              <a
                href="https://t.me/yura_dev"
                className="text-gray-300 hover:text-white transition-colors"
              >
                @yura_dev
              </a>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-4">
                <Icon name="Github" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">GitHub</h3>
              <a
                href="https://github.com/yura-dev"
                className="text-gray-300 hover:text-white transition-colors"
              >
                github.com/yura-dev
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">💻</span>
              </div>
              <span className="text-xl font-bold">Юра.dev</span>
            </div>
            <p className="text-gray-400">
              &copy; 2024 Юра. Создаю цифровые решения с любовью к коду.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
