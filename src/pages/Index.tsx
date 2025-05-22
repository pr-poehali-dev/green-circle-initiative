import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-montserrat">
            МОСКВА
          </h1>
          <p className="text-xl md:text-2xl text-amber-300 mb-4 font-medium">
            Три века истории столицы
          </p>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            От пожара 1812 года до цифровой столицы — история величайших
            трансформаций города
          </p>
        </div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1520637836862-4d197d17c38a?q=80&w=2000')] bg-cover bg-center opacity-20"></div>
      </section>

      {/* Timeline Navigation */}
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-16">
            <div className="flex space-x-8 text-amber-300 font-semibold text-lg">
              <span className="border-b-2 border-amber-300 pb-2">XIX век</span>
              <span className="text-slate-400 pb-2">XX век</span>
              <span className="text-slate-400 pb-2">XXI век</span>
            </div>
          </div>

          {/* XIX Century */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white text-center mb-12 font-montserrat">
              XIX век: Возрождение из пепла
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-amber-300 text-xl">
                    1812 год
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    Великий пожар Москвы
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-slate-200">
                  <p className="mb-4">
                    Наполеоновские войны привели к разрушению 75% городских
                    построек.
                  </p>
                  <div className="w-full h-32 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white font-bold">🔥 Разрушение</span>
                  </div>
                  <p className="text-sm text-slate-400">
                    Потери: ~270,000 жителей эвакуированы
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-amber-300 text-xl">
                    1813-1850
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    Восстановление и рост
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-slate-200">
                  <p className="mb-4">
                    Масштабная реконструкция под руководством архитектора Бове.
                  </p>
                  <div className="w-full h-32 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white font-bold">
                      🏗️ Строительство
                    </span>
                  </div>
                  <p className="text-sm text-slate-400">
                    Построено: Красная площадь, Большой театр
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-amber-300 text-xl">
                    1851-1900
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    Индустриализация
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-slate-200">
                  <p className="mb-4">
                    Железные дороги соединили Москву с империей. Рост торговли и
                    промышленности.
                  </p>
                  <div className="w-full h-32 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white font-bold">🚂 Прогресс</span>
                  </div>
                  <p className="text-sm text-slate-400">
                    Население: 350,000 → 1,100,000 человек
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* XX Century */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white text-center mb-12 font-montserrat">
              XX век: Советская модернизация
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-red-400 text-xl">
                    1917-1950
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    Революция и становление столицы СССР
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-slate-200">
                  <p className="mb-4">
                    Москва становится столицей советского государства.
                    Грандиозные планы реконструкции.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span>Метрополитен</span>
                      <span className="text-red-400">1935</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Высотки</span>
                      <span className="text-red-400">1940-50е</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Генплан</span>
                      <span className="text-red-400">1935</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400">
                    Население к 1950: ~5 млн человек
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-red-400 text-xl">
                    1950-1991
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    Расширение и массовое строительство
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-slate-200">
                  <p className="mb-4">
                    Массовое жилищное строительство, развитие промышленности и
                    науки.
                  </p>
                  <div className="w-full h-32 bg-gradient-to-r from-red-500 to-rose-600 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white font-bold">🏭 Индустрия</span>
                  </div>
                  <p className="text-sm text-slate-400">
                    МКАД, спутники, хрущевки, олимпиада-80
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* XXI Century */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white text-center mb-12 font-montserrat">
              XXI век: Цифровая трансформация
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-cyan-400 text-xl">
                    2000-2010
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    Экономический подъем
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-slate-200">
                  <p className="mb-4">
                    Москва-Сити, реновация центра, рост благосостояния.
                  </p>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400">
                      12 млн
                    </div>
                    <div className="text-sm text-slate-400">
                      жителей агломерации
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-cyan-400 text-xl">
                    2010-2020
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    Цифровизация города
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-slate-200">
                  <p className="mb-4">
                    Электронные услуги, умная транспортная система, парки.
                  </p>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400">300+</div>
                    <div className="text-sm text-slate-400">
                      цифровых сервисов
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-cyan-400 text-xl">
                    2020-2025
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    Умный мегаполис
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-slate-200">
                  <p className="mb-4">
                    ИИ в управлении, экология, устойчивое развитие.
                  </p>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400">
                      TOP-5
                    </div>
                    <div className="text-sm text-slate-400">
                      в мире по технологиям
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Conclusion */}
          <div className="text-center bg-gradient-to-r from-amber-500/10 to-amber-300/10 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-white mb-6 font-montserrat">
              Москва сегодня
            </h3>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              От деревянного города XV века до цифрового мегаполиса XXI века —
              Москва прошла путь непрерывных трансформаций, сохранив
              историческое наследие и став одним из ведущих городов мира.
            </p>
            <div className="flex justify-center space-x-12 mt-8 text-amber-300">
              <div className="text-center">
                <div className="text-2xl font-bold">800+</div>
                <div className="text-sm">лет истории</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">13 млн</div>
                <div className="text-sm">жителей</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">№1</div>
                <div className="text-sm">город России</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
