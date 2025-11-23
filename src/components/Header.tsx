import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from '@/components/ui/icon';

const navItems = [
  { label: 'Главная', href: '/' },
  { label: 'Каталог', href: '/catalog' },
  { label: 'Lookbook', href: '/lookbook' }
];

export default function Header() {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-2 text-gray-900">
          <Icon name="ShoppingBag" size={26} />
          <span className="text-lg font-semibold tracking-tight">StyleShop</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-gray-600 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `transition hover:text-gray-900 ${isActive ? 'text-gray-900' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-gray-600 transition hover:border-gray-900 hover:text-gray-900">
            <Icon name="Search" size={18} />
          </button>
          <button className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-gray-600 transition hover:border-gray-900 hover:text-gray-900">
            <Icon name="Heart" size={18} />
            <span className="absolute -top-1 -right-1 inline-flex h-4 min-w-[16px] items-center justify-center rounded-full bg-gray-900 px-1 text-[10px] font-semibold text-white">
              2
            </span>
          </button>
          <button className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-gray-600 transition hover:border-gray-900 hover:text-gray-900">
            <Icon name="ShoppingCart" size={18} />
            <span className="absolute -top-1 -right-1 inline-flex h-4 min-w-[16px] items-center justify-center rounded-full bg-gray-900 px-1 text-[10px] font-semibold text-white">
              1
            </span>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
