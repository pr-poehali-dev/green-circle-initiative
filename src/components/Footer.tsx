import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-8">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-3">
            <Icon name="Send" size={24} className="text-blue-400" />
            <a
              href="https://t.me/jopanehlp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-medium hover:text-blue-400 transition-colors"
            >
              @jopanehlp
            </a>
          </div>
          <p className="text-gray-400 font-light">
            Свяжитесь со мной в Telegram
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
