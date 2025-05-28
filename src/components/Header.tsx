import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Icon
              name="Apple"
              size={24}
              className="text-white hidden md:block"
            />
            <span className="text-white font-semibold text-lg md:hidden">
              Logo
            </span>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              Mac
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              iPad
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              iPhone
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              Watch
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              Support
            </a>
          </div>

          {/* Mobile Menu and Desktop Actions */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu Icon */}
            <Icon
              name="Menu"
              size={24}
              className="text-gray-300 hover:text-white cursor-pointer transition-colors md:hidden"
            />

            {/* Desktop Icons */}
            <Icon
              name="Search"
              size={18}
              className="text-gray-300 hover:text-white cursor-pointer transition-colors hidden md:block"
            />
            <Icon
              name="ShoppingBag"
              size={18}
              className="text-gray-300 hover:text-white cursor-pointer transition-colors hidden md:block"
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
