import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const featured = [
  {
    id: 1,
    name: 'Стёганая куртка BASE',
    subtitle: 'Водонепроницаемый нейлон',
    price: 4990,
    image:
      'https://cdn.poehali.dev/projects/489d77e8-4b0d-49f7-bd2e-a9c1ad00ee9a/files/60fe2443-2b94-488d-a2e4-b3b7dace5ab2.jpg'
  },
  {
    id: 2,
    name: 'Платье NAШ! Statement',
    subtitle: 'Вискоза и хлопок',
    price: 5990,
    image:
      'https://cdn.poehali.dev/projects/489d77e8-4b0d-49f7-bd2e-a9c1ad00ee9a/files/f1a62f27-c0d0-482a-b5ed-b9e3b93c1376.jpg'
  },
  {
    id: 3,
    name: 'Capsule джинсы',
    subtitle: 'Прямой крой, средняя посадка',
    price: 3990,
    image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 4,
    name: 'Лоферы Soft Step',
    subtitle: 'Натуральная кожа',
    price: 4590,
    image: 'https://images.unsplash.com/photo-1475180098004-ca77a66827be?auto=format&fit=crop&w=900&q=80'
  }
];

const categories = [
  { name: 'Верхняя одежда', icon: 'Snowflake', description: 'Пальто, пуховики, парки' },
  { name: 'Обновлённый деним', icon: 'Sparkles', description: 'Прямой, wide-leg, mom fit' },
  { name: 'Трикотаж и свитеры', icon: 'Layers', description: 'Базовые и фактурные модели' },
  { name: 'Обувь на каждый день', icon: 'Footprints', description: 'Кроссовки, лоферы, сапоги' },
  { name: 'Аксессуары', icon: 'Star', description: 'Сумки, ремни, шапки' },
  { name: 'Спортивная линейка', icon: 'Activity', description: 'Техничные ткани и крои' }
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function Index() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] text-gray-900">
      <Header />

      <main className="px-4 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-16">
          <section className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <motion.div
              {...fadeIn}
              className="space-y-8 rounded-[32px] border border-white/40 bg-white/80 p-8 shadow-[0_40px_80px_rgba(15,23,42,0.12)] backdrop-blur"
            >
              <div className="flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.4em] text-gray-500">
                <span className="h-px flex-1 bg-gray-300" />
                drop 11/24
                <span className="h-px flex-1 bg-gray-300" />
              </div>
              <h1 className="text-3xl font-light leading-snug text-gray-900 md:text-[2.75rem]">
                Capsule 18
                <span className="block text-xl text-gray-500">Звук тишины и мягкий свет</span>
              </h1>
              <p className="max-w-xl text-base text-gray-600 md:text-lg">
                Структурный трикотаж, пластичные жакеты и объёмные аксессуары формируют единый тон. Мы оставили только то, что ощущается бесшовно.
              </p>
              <div className="grid gap-4 text-sm text-gray-700 sm:grid-cols-2">
                <div className="rounded-2xl border border-gray-200/80 bg-white/60 p-4">
                  <p className="text-[0.6rem] uppercase tracking-[0.4em] text-gray-500">тактильность</p>
                  <p className="mt-2 text-base text-gray-900">Итальянская шерсть · кашемир · recycled нейлон</p>
                </div>
                <div className="rounded-2xl border border-gray-200/80 bg-white/60 p-4">
                  <p className="text-[0.6rem] uppercase tracking-[0.4em] text-gray-500">силуэты</p>
                  <p className="mt-2 text-base text-gray-900">Монолитные линии и скрытые застёжки</p>
                </div>
              </div>
              <div className="rounded-[24px] border border-white/60 bg-white/70 px-5 py-4 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur">
                <div className="flex flex-col gap-4 text-gray-900 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
                  {[
                    { value: '48', label: 'лимитированных позиций' },
                    { value: '72ч', label: 'приоритетный доступ' },
                    { value: '3', label: 'новые оттенки' }
                  ].map((metric, index) => (
                    <div
                      key={metric.label}
                      className="flex flex-1 flex-col text-left sm:border-l sm:border-white/40 sm:px-4 sm:first:border-l-0 sm:first:pl-0 sm:text-center"
                    >
                      <span className="text-[0.5rem] uppercase tracking-[0.4em] text-gray-400">capsule</span>
                      <p className="mt-1 text-4xl font-light leading-none">{metric.value}</p>
                      <p className="mt-2 text-[0.65rem] uppercase tracking-[0.25em] text-gray-500">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <Link to="/catalog">
                  <Button className="h-12 rounded-full bg-[#ff6b2c] px-8 text-sm font-medium text-white transition hover:bg-[#e85b1f]">
                    Забронировать примерку
                  </Button>
                </Link>
                <Link to="/catalog" className="text-sm font-medium text-gray-500 underline-offset-4 transition hover:text-gray-900">
                  Смотреть коллекцию
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-600 p-6 text-white">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-white/60">
                  <span>capsule edit</span>
                  <span>limited</span>
                </div>
                <div className="mt-6 space-y-4">
                  {featured.slice(0, 2).map((item) => (
                    <motion.div
                      key={item.id}
                      className="relative overflow-hidden rounded-2xl bg-white/10"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img src={item.image} alt={item.name} className="h-64 w-full object-cover" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-sm">
                        <p className="text-lg font-semibold">{item.name}</p>
                        <p className="text-white/70">{item.subtitle}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/60">доставка</p>
                    <p className="text-base font-semibold text-white">в день заказа по москве</p>
                  </div>
                  <Icon name="ArrowUpRight" size={24} />
                </div>
              </div>
            </motion.div>
          </section>

          <section className="space-y-6">
            <div className="flex items-baseline justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Категории</h2>
              <Link to="/catalog" className="text-xs font-medium text-gray-500 hover:text-gray-900">
                Смотреть все
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-4 text-left transition hover:border-gray-900"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500">
                    <Icon name={category.icon} size={20} />
                  </div>
                  <span className="text-sm font-semibold text-gray-900">{category.name}</span>
                  <span className="mt-1 text-xs text-gray-500">{category.description}</span>
                </button>
              ))}
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-baseline justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Хиты продаж</h2>
              <Link to="/catalog" className="text-xs font-medium text-gray-500 hover:text-gray-900">
                Больше товаров
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {featured.map((product) => (
                <motion.div
                  key={product.id}
                  className="flex flex-col rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:shadow-sm"
                  whileHover={{ y: -2 }}
                >
                  <div className="aspect-[3/4] w-full overflow-hidden bg-gray-100">
                    <img src={product.image} alt={product.name} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                  <div className="flex flex-1 flex-col px-4 py-4">
                    <p className="text-sm font-semibold text-gray-900">{product.name}</p>
                    <p className="mt-1 text-xs text-gray-500">{product.subtitle}</p>
                    <div className="mt-auto flex items-center justify-between pt-4">
                      <span className="text-sm font-semibold text-gray-900">{product.price.toLocaleString()} ₽</span>
                      <button className="text-xs font-medium text-gray-900 hover:underline">В корзину</button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-slate-200 bg-white px-6 py-10 text-center md:px-12"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gray-500">
                welcome бонус
              </p>
              <h3 className="mx-auto mt-4 max-w-2xl text-2xl font-semibold text-gray-900 md:text-3xl">
                -20% на первый заказ по подписке на рассылку
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-sm text-gray-600">
                Только реальные подборки и ранний доступ к лимитированным дропам. Никакого спама.
              </p>
              <div className="mx-auto mt-8 flex flex-col gap-3 md:w-3/4 md:flex-row">
                <input
                  type="email"
                  placeholder="Введите email"
                  className="h-11 flex-1 rounded-full border border-slate-200 px-5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none"
                />
                <Button className="h-11 rounded-full bg-gray-900 px-6 text-sm font-medium text-white hover:bg-black">
                  Подписаться
                </Button>
              </div>
            </motion.div>
          </section>
        </div>
      </main>

      <footer className="border-t border-slate-200 bg-white py-12 text-sm text-gray-500">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-gray-900">
              <Icon name="ShoppingBag" size={28} />
              <span className="text-lg font-semibold">StyleShop</span>
            </div>
            <p>Твой стиль, твой выбор. Служба поддержки 24/7.</p>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-gray-900">Покупателям</h4>
            <ul className="space-y-1">
              <li>Доставка</li>
              <li>Возврат</li>
              <li>Оплата</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-gray-900">Компания</h4>
            <ul className="space-y-1">
              <li>О нас</li>
              <li>Контакты</li>
              <li>Вакансии</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-gray-900">Соцсети</h4>
            <div className="flex gap-4 text-gray-600">
              <Icon name="Instagram" size={20} className="hover:text-gray-900" />
              <Icon name="Facebook" size={20} className="hover:text-gray-900" />
              <Icon name="Twitter" size={20} className="hover:text-gray-900" />
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-100 pt-6 text-center text-xs text-gray-400">
          © 2025 StyleShop. Все права защищены
        </div>
      </footer>
    </div>
  );
}