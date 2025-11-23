import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Index() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const categories = [
    { name: 'Сапожки', icon: 'Footprints', gradient: 'from-primary to-secondary' },
    { name: 'Куртки', icon: 'Snowflake', gradient: 'from-secondary to-accent' },
    { name: 'Джинсы', icon: 'Sparkles', gradient: 'from-accent to-primary' },
  ];

  const featured = [
    {
      id: 1,
      name: 'Стильная куртка',
      price: 4990,
      image: 'https://cdn.poehali.dev/projects/489d77e8-4b0d-49f7-bd2e-a9c1ad00ee9a/files/60fe2443-2b94-488d-a2e4-b3b7dace5ab2.jpg',
      colors: ['#8B5CF6', '#EC4899', '#F59E0B']
    },
    {
      id: 2,
      name: 'Элегантное платье',
      price: 5990,
      image: 'https://cdn.poehali.dev/projects/489d77e8-4b0d-49f7-bd2e-a9c1ad00ee9a/files/f1a62f27-c0d0-482a-b5ed-b9e3b93c1376.jpg',
      colors: ['#EC4899', '#8B5CF6', '#F59E0B']
    },
    {
      id: 3,
      name: 'Уличный стиль',
      price: 3990,
      image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=900&q=80',
      colors: ['#F59E0B', '#8B5CF6', '#EC4899']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <Header />

      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeIn}>
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              НАШ!
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Открой для себя яркую коллекцию модной одежды. 
              Создавай уникальные образы каждый день.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Link to="/catalog">
                <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-primary/50 transition-all">
                  Смотреть коллекцию
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="absolute -top-10 -left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute -bottom-10 -right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"
              animate={{ 
                scale: [1.2, 1, 1.2],
                rotate: [0, -90, 0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="relative grid grid-cols-2 gap-4">
              {featured.slice(0, 2).map((item, idx) => (
                <motion.div
                  key={item.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-xl"
                  whileHover={{ scale: 1.05, rotate: idx === 0 ? -2 : 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          {...fadeIn}
        >
          Категории
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl text-white cursor-pointer shadow-xl hover:shadow-2xl transition-all"
            >
              <Icon name={cat.icon} size={48} className="mb-4 text-white" />
              <h3 className="text-2xl font-bold text-white">{cat.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent"
          {...fadeIn}
        >
          Хиты продаж
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <motion.img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-80 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div 
                  className="absolute top-4 right-4"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <button className="bg-white/80 backdrop-blur-sm rounded-full p-2.5 shadow-sm hover:bg-white hover:shadow-md transition-all duration-300">
                    <Icon name="Heart" size={16} className="text-gray-400 hover:text-red-400 transition-colors duration-300" />
                  </button>
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{product.name}</h3>
                <div className="flex items-center gap-1.5 mb-4">
                  {product.colors.map((color, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 rounded-full border border-gray-200 shadow-sm cursor-pointer hover:scale-110 transition-transform duration-200"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-semibold text-gray-900">{product.price.toLocaleString()} ₽</span>
                  <Button className="rounded-xl bg-black hover:bg-gray-800 text-white transition-colors duration-300 px-4 h-9 text-sm font-medium">
                    В корзину
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <motion.div 
          className="bg-gradient-to-r from-primary via-secondary to-accent p-12 rounded-3xl text-white text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">Скидка 20% на первый заказ</h2>
          <p className="text-xl mb-8 opacity-90">Подпишись на рассылку и получи промокод</p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Твой email" 
              className="flex-1 px-6 py-3 rounded-full text-foreground"
            />
            <Button variant="secondary" size="lg" className="rounded-full px-8">
              Подписаться
            </Button>
          </div>
        </motion.div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="ShoppingBag" size={32} className="text-primary" />
                <span className="text-2xl font-bold">StyleShop</span>
              </div>
              <p className="text-white/70">Твой стиль, твой выбор</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Покупателям</h4>
              <ul className="space-y-2 text-white/70">
                <li>Доставка</li>
                <li>Возврат</li>
                <li>Оплата</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-white/70">
                <li>О нас</li>
                <li>Контакты</li>
                <li>Вакансии</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Соцсети</h4>
              <div className="flex gap-4">
                <Icon name="Instagram" size={24} className="text-white/70 hover:text-primary cursor-pointer transition-colors" />
                <Icon name="Facebook" size={24} className="text-white/70 hover:text-primary cursor-pointer transition-colors" />
                <Icon name="Twitter" size={24} className="text-white/70 hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/70">
            © 2025 StyleShop. Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
}