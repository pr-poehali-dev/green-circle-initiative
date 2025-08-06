import { useState, useEffect } from 'react';

interface Planet {
  name: string;
  description: string;
  atmosphere: string;
  surface: string;
  temperature: string;
  gravity: string;
  magical_property: string;
  inhabitants: string;
}

interface PlanetResponse {
  success: boolean;
  planet: Planet;
  generated_at: string;
}

const Index = () => {
  const [planet, setPlanet] = useState<Planet | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdate, setLastUpdate] = useState<string>('');

  const fetchPlanet = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://functions.yandexcloud.net/d4efclr9kbhbp2kefno2');
      const data: PlanetResponse = await response.json();
      
      if (data.success) {
        setPlanet(data.planet);
        setLastUpdate(new Date().toLocaleTimeString());
      } else {
        setError('Ошибка при создании планеты');
      }
      
    } catch (err) {
      setError('Ошибка при загрузке планеты');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Загружаем первую планету сразу
    fetchPlanet();
    
    // Устанавливаем интервал на 5 секунд
    const interval = setInterval(() => {
      fetchPlanet();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            🌌 Генератор Магических Планет
          </h1>
          <p className="text-purple-200">
            Открывай новые удивительные миры каждые 5 секунд!
          </p>
          {lastUpdate && (
            <p className="text-purple-300 text-sm mt-2">
              Последнее обновление: {lastUpdate}
            </p>
          )}
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
          {loading && (
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
              <p className="text-white mt-2">Создаём новую магическую планету...</p>
            </div>
          )}

          {error && (
            <div className="text-center text-red-400 bg-red-400/20 p-4 rounded-lg">
              {error}
            </div>
          )}

          {planet && !loading && (
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-6xl mb-4">🪐</div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  {planet.name}
                </h2>
                <div className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-purple-500/30 text-purple-200">
                  Магическая планета
                </div>
              </div>

              <div className="border-2 rounded-xl p-6 border-purple-400/50 bg-white/5">
                <p className="text-purple-100 text-lg mb-6 text-center font-medium">
                  {planet.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-white font-semibold mb-2 flex items-center">
                        🌬️ Атмосфера
                      </h3>
                      <p className="text-purple-200 text-sm">{planet.atmosphere}</p>
                    </div>

                    <div>
                      <h3 className="text-white font-semibold mb-2 flex items-center">
                        🏔️ Поверхность
                      </h3>
                      <p className="text-purple-200 text-sm">{planet.surface}</p>
                    </div>

                    <div>
                      <h3 className="text-white font-semibold mb-2 flex items-center">
                        🌡️ Температура
                      </h3>
                      <p className="text-purple-200 text-sm">{planet.temperature}</p>
                    </div>

                    <div>
                      <h3 className="text-white font-semibold mb-2 flex items-center">
                        🌍 Гравитация
                      </h3>
                      <p className="text-purple-200 text-sm">{planet.gravity}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-white font-semibold mb-2 flex items-center">
                        ✨ Магическое свойство
                      </h3>
                      <div className="bg-indigo-500/30 text-indigo-200 p-3 rounded-lg text-sm border border-indigo-400/30">
                        {planet.magical_property}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-white font-semibold mb-2 flex items-center">
                        👥 Обитатели
                      </h3>
                      <div className="bg-pink-500/30 text-pink-200 p-3 rounded-lg text-sm border border-pink-400/30">
                        {planet.inhabitants}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={fetchPlanet}
                  disabled={loading}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium px-6 py-3 rounded-full transition-all transform hover:scale-105"
                >
                  🎲 Создать новую планету
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-8 text-purple-300 text-sm">
          <p>🚀 Новая планета появляется автоматически каждые 5 секунд</p>
          <p className="mt-1">Или нажми кнопку, чтобы создать прямо сейчас!</p>
        </div>
      </div>
    </div>
  );
};

export default Index;