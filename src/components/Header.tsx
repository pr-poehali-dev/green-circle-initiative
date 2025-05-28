import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 md:px-8">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Icon
              name="Apple"
              size={24}
              className="text-gray-900 hidden md:block"
            />
            <Icon name="Apple" size={20} className="text-gray-900 md:hidden" />
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              Маки!
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              iPad
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              iPhone
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              Watch
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              Support
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Icon
              name="Menu"
              size={24}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
