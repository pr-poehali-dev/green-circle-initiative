import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from '@/components/ui/icon';

const navItems = [
  { label: 'Главная', href: '/' },
  { label: 'Каталог', href: '/catalog' },
  { label: 'Lookbook', href: '/lookbook' }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-2 text-gray-900" onClick={closeMenu}>
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

        <div className="flex items-center gap-2 md:gap-3">
          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-gray-600 transition hover:border-gray-900 hover:text-gray-900"
            >
              <Icon name="Search" size={18} />
            </button>
            <button
              type="button"
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-gray-600 transition hover:border-gray-900 hover:text-gray-900"
            >
              <Icon name="Heart" size={18} />
              <span className="absolute -top-1 -right-1 inline-flex h-4 min-w-[16px] items-center justify-center rounded-full bg-gray-900 px-1 text-[10px] font-semibold text-white">
                2
              </span>
            </button>
          </div>
          <button
            type="button"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-gray-600 transition hover:border-gray-900 hover:text-gray-900"
          >
            <Icon name="ShoppingCart" size={18} />
            <span className="absolute -top-1 -right-1 inline-flex h-4 min-w-[16px] items-center justify-center rounded-full bg-gray-900 px-1 text-[10px] font-semibold text-white">
              1
            </span>
          </button>
          <button
            type="button"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-gray-600 transition hover:border-gray-900 hover:text-gray-900 md:hidden"
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={18} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="border-t border-slate-200 bg-white md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6">
              <div className="flex flex-col gap-2 text-sm font-medium text-gray-800">
                {navItems.map((item) => (
                  <NavLink
                    key={item.href}
                    to={item.href}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `rounded-full border border-transparent px-4 py-2 transition hover:border-slate-200 ${
                        isActive ? 'bg-gray-100 text-gray-900' : ''
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  className="flex h-11 flex-1 items-center justify-center gap-2 rounded-full border border-slate-200 text-sm font-medium text-gray-700"
                >
                  <Icon name="Search" size={18} />
                  Поиск
                </button>
                <button
                  type="button"
                  className="flex h-11 flex-1 items-center justify-center gap-2 rounded-full border border-slate-200 text-sm font-medium text-gray-700"
                >
                  <Icon name="Heart" size={18} />
                  Избранное
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
