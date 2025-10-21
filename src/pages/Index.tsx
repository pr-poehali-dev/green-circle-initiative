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
    { name: 'Платья', icon: 'Shirt', gradient: 'from-primary to-secondary' },
    { name: 'Куртки', icon: 'Coat', gradient: 'from-secondary to-accent' },
    { name: 'Джинсы', icon: 'PantsIcon', gradient: 'from-accent to-primary' },
  ];

  const featured = [
    {
      id: 1,
      name: 'Стильная куртка',
      price: 4990,
      image: 'https://cdn.poehali.dev/projects/489d77e8-4b0d-49f7-bd2e-a9c1ad00ee9a/files/c5ae5c07-0377-4896-8cc7-1ec1234feecf.jpg',
      colors: ['#8B5CF6', '#EC4899', '#F59E0B']
    },
    {
      id: 2,
      name: 'Элегантное платье',
      price: 5990,
      image: 'https://cdn.poehali.dev/projects/489d77e8-4b0d-49f7-bd2e-a9c1ad00ee9a/files/fac472a3-752e-4ea4-85f6-9d3e9f3af8b7.jpg',
      colors: ['#EC4899', '#8B5CF6', '#F59E0B']
    },
    {
      id: 3,
      name: 'Уличный стиль',
      price: 3990,
      image: 'https://cdn.poehali.dev/projects/489d77e8-4b0d-49f7-bd2e-a9c1ad00ee9a/files/776e2225-a116-41b4-acac-0f9cda8446a6.jpg',
      colors: ['#F59E0B', '#8B5CF6', '#EC4899']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
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
              Твой стиль начинается здесь
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
              className={`bg-gradient-to-br ${cat.gradient} p-8 rounded-3xl text-white cursor-pointer shadow-xl hover:shadow-2xl transition-all`}
            >
              <Icon name={cat.icon} size={48} className="mb-4" />
              <h3 className="text-2xl font-bold">{cat.name}</h3>
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
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group"
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
                  <button className="bg-white rounded-full p-3 shadow-lg">
                    <Icon name="Heart" size={20} className="text-secondary" />
                  </button>
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <div className="flex items-center gap-2 mb-4">
                  {product.colors.map((color, i) => (
                    <motion.div
                      key={i}
                      className="w-6 h-6 rounded-full border-2 border-white shadow-md cursor-pointer"
                      style={{ backgroundColor: color }}
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{product.price} ₽</span>
                  <Button className="rounded-full">
                    <Icon name="ShoppingCart" size={18} />
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
