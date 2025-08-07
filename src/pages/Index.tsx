import { useState, useEffect } from 'react';

interface Animal {
  name: string;
  description: string;
  habitat: string;
  diet: string;
  size: string;
  special_ability: string;
  appearance: string;
  sound: string;
}

interface AnimalResponse {
  success: boolean;
  animal: Animal;
  generated_at: string;
}

const Index = () => {
  const [animal, setAnimal] = useState<Animal | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdate, setLastUpdate] = useState<string>('');

  const fetchAnimal = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://functions.yandexcloud.net/d4eam5tjsgqakvc5n7p6');
      const data: AnimalResponse = await response.json();
      
      if (data.success) {
        setAnimal(data.animal);
        setLastUpdate(new Date().toLocaleTimeString());
      } else {
        setError('Ошибка при создании животного');
      }
      
    } catch (err) {
      setError('Ошибка при загрузке животного');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Загружаем первое животное сразу
    fetchAnimal();
    
    // Устанавливаем интервал на 5 секунд
    const interval = setInterval(() => {
      fetchAnimal();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            🐾 Генератор Выдуманных Животных
          </h1>
          <p className="text-green-200">
            Открывай уникальных гибридных существ каждые 5 секунд!
          </p>
          {lastUpdate && (
            <p className="text-green-300 text-sm mt-2">
              Последнее обновление: {lastUpdate}
            </p>
          )}
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
          {loading && (
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
              <p className="text-white mt-2">Создаём новое магическое существо...</p>
            </div>
          )}

          {error && (
            <div className="text-center text-red-400 bg-red-400/20 p-4 rounded-lg">
              {error}
            </div>
          )}

          {animal && !loading && (
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-6xl mb-4">🦄</div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  {animal.name}
                </h2>
                <div className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-green-500/30 text-green-200">
                  Гибридное существо
                </div>
              </div>

              <div className="border-2 rounded-xl p-6 border-green-400/50 bg-white/5">
                <p className="text-green-100 text-lg mb-6 text-center font-medium">
                  {animal.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-white font-semibold mb-2 flex items-center">
                        🏔️ Место обитания
                      </h3>
                      <p className="text-green-200 text-sm">{animal.habitat}</p>
                    </div>

                    <div>
                      <h3 className="text-white font-semibold mb-2 flex items-center">
                        🍃 Питание
                      </h3>
                      <p className="text-green-200 text-sm">{animal.diet}</p>
                    </div>

                    <div>
                      <h3 className="text-white font-semibold mb-2 flex items-center">
                        📏 Размер
                      </h3>
                      <p className="text-green-200 text-sm">{animal.size}</p>
                    </div>

                    <div>
                      <h3 className="text-white font-semibold mb-2 flex items-center">
                        🎵 Звуки
                      </h3>
                      <p className="text-green-200 text-sm">{animal.sound}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-white font-semibold mb-2 flex items-center">
                        ✨ Особая способность
                      </h3>
                      <div className="bg-teal-500/30 text-teal-200 p-3 rounded-lg text-sm border border-teal-400/30">
                        {animal.special_ability}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-white font-semibold mb-2 flex items-center">
                        🌈 Внешность
                      </h3>
                      <div className="bg-blue-500/30 text-blue-200 p-3 rounded-lg text-sm border border-blue-400/30">
                        {animal.appearance}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={fetchAnimal}
                  disabled={loading}
                  className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium px-6 py-3 rounded-full transition-all transform hover:scale-105"
                >
                  🎲 Создать новое существо
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-8 text-green-300 text-sm">
          <p>🚀 Новое существо появляется автоматически каждые 5 секунд</p>
          <p className="mt-1">Или нажми кнопку, чтобы создать прямо сейчас!</p>
        </div>
      </div>
    </div>
  );
};

export default Index;