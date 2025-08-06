import { useState, useEffect } from 'react';

interface Animal {
  name: string;
  description: string;
  habitat: string;
  diet: string;
  size: string;
  special_ability: string;
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
      const response = await fetch('https://functions.yandexcloud.net/d4e3po272jq9jh1cuk4s');
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            🦄 Генератор Магических Животных
          </h1>
          <p className="text-purple-200">
            Открывай новых удивительных животных каждые 5 секунд!
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
              <p className="text-white mt-2">Создаём новое магическое животное...</p>
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
                <div className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-purple-500/30 text-purple-200">
                  Магическое животное
                </div>
              </div>

              <div className="border-2 rounded-xl p-6 border-purple-400/50 bg-white/5">
                <p className="text-purple-100 text-lg mb-4">
                  {animal.description}
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-white font-semibold mb-2 flex items-center">
                      🏔️ Место обитания
                    </h3>
                    <p className="text-purple-200">{animal.habitat}</p>
                  </div>

                  <div>
                    <h3 className="text-white font-semibold mb-2 flex items-center">
                      🍃 Питание
                    </h3>
                    <p className="text-purple-200">{animal.diet}</p>
                  </div>

                  <div>
                    <h3 className="text-white font-semibold mb-2 flex items-center">
                      📏 Размер
                    </h3>
                    <p className="text-purple-200">{animal.size}</p>
                  </div>

                  <div>
                    <h3 className="text-white font-semibold mb-2 flex items-center">
                      ✨ Особая способность
                    </h3>
                    <span className="bg-indigo-500/30 text-indigo-200 px-3 py-1 rounded-full text-sm border border-indigo-400/30">
                      {animal.special_ability}
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={fetchAnimal}
                  disabled={loading}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium px-6 py-3 rounded-full transition-all transform hover:scale-105"
                >
                  🎲 Создать новое животное
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-8 text-purple-300 text-sm">
          <p>🚀 Новое животное появляется автоматически каждые 5 секунд</p>
          <p className="mt-1">Или нажми кнопку, чтобы создать прямо сейчас!</p>
        </div>
      </div>
    </div>
  );
};

export default Index;