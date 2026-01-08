import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useCart } from '@/contexts/CartContext';
import { useCompare } from '@/contexts/CompareContext';
import { useAuth } from '@/components/extensions/auth-email/useAuth';

const AUTH_URL = "https://devfunctions.poehali.dev/0bdeebbd-7dea-4bae-bcee-8865faa9e659";

const Header = () => {
  const location = useLocation();
  const { items } = useCart();
  const { products } = useCompare();

  const auth = useAuth({
    apiUrls: {
      login: `${AUTH_URL}?action=login`,
      register: `${AUTH_URL}?action=register`,
      verifyEmail: `${AUTH_URL}?action=verify-email`,
      refresh: `${AUTH_URL}?action=refresh`,
      logout: `${AUTH_URL}?action=logout`,
      resetPassword: `${AUTH_URL}?action=reset-password`,
    },
  });

  const cartItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const getInitials = (name: string | null, email: string) => {
    if (name) {
      return name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
    }
    return email[0].toUpperCase();
  };

  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 bg-neutral-900">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-light tracking-wider">
            STORE
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm tracking-wide transition-colors ${
                location.pathname === '/' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Главная
            </Link>
            <Link
              to="/catalog"
              className={`text-sm tracking-wide transition-colors ${
                location.pathname === '/catalog' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Каталог
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            {auth.isAuthenticated && auth.user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="text-xs bg-primary text-primary-foreground">
                        {getInitials(auth.user.name, auth.user.email)}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <div className="px-2 py-1.5 text-sm">
                    <p className="font-medium">{auth.user.name || 'Пользователь'}</p>
                    <p className="text-xs text-muted-foreground truncate">{auth.user.email}</p>
                  </div>
                  <DropdownMenuItem asChild>
                    <Link to="/auth" className="cursor-pointer">
                      <Icon name="User" size={16} className="mr-2" />
                      Профиль
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => auth.logout()} className="cursor-pointer text-destructive">
                    <Icon name="LogOut" size={16} className="mr-2" />
                    Выйти
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/auth">
                <Button variant="ghost" size="icon">
                  <Icon name="User" size={20} />
                </Button>
              </Link>
            )}

            <Link to="/compare">
              <Button variant="ghost" size="icon" className="relative">
                <Icon name="Scale" size={20} />
                {products.length > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                    {products.length}
                  </Badge>
                )}
              </Button>
            </Link>

            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <Icon name="ShoppingCart" size={20} />
                {cartItemsCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                    {cartItemsCount}
                  </Badge>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;