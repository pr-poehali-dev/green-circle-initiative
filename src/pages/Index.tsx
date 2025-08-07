import { useState, useEffect, useRef } from 'react';

interface HybridAnimal {
  name: string;
  parents: string[];
  appearance: string;
  size: string;
  habitat: string;
  abilities: string[];
  personality: string;
  diet: string;
  lifespan: string;
  rarity: string;
}

interface AnimalResponse {
  success: boolean;
  animal: HybridAnimal;
  generated_at: string;
}

const Index = () => {
  const [animal, setAnimal] = useState<HybridAnimal | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdate, setLastUpdate] = useState<string>('');
  const [displayedName, setDisplayedName] = useState<string>('');
  const [isTyping, setIsTyping] = useState(false);
  const typewriterRef = useRef<NodeJS.Timeout | null>(null);

  const typewriterEffect = (text: string) => {
    if (typewriterRef.current) {
      clearInterval(typewriterRef.current);
    }
    
    setIsTyping(true);
    setDisplayedName('');
    
    let index = 0;
    typewriterRef.current = setInterval(() => {
      if (index < text.length) {
        setDisplayedName(prev => prev + text[index]);
        index++;
      } else {
        setIsTyping(false);
        if (typewriterRef.current) {
          clearInterval(typewriterRef.current);
        }
      }
    }, 100);
  };

  const fetchAnimal = async () => {
    const isFirstLoad = !animal;
    
    if (isFirstLoad) {
      setLoading(true);
    }
    setError(null);

    try {
      const response = await fetch('https://functions.yandexcloud.net/d4euu16ickp3kdj88c5c');
      const data: AnimalResponse = await response.json();
      
      if (data.success) {
        const newAnimal = data.animal;
        
        if (animal && animal.name !== newAnimal.name) {
          // Если животное уже есть и имя изменилось, запускаем печатающую машинку
          typewriterEffect(newAnimal.name);
        } else if (!animal) {
          // Первая загрузка - сразу показываем имя
          setDisplayedName(newAnimal.name);
        }
        
        setAnimal(newAnimal);
        setLastUpdate(new Date().toLocaleTimeString());
      } else {
        setError('Ошибка при создании животного');
      }
      
    } catch (err) {
      setError('Ошибка при загрузке животного');
      console.error(err);
    } finally {
      if (isFirstLoad) {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    // Загружаем первое животное сразу
    fetchAnimal();
    
    // Устанавливаем интервал на 5 секунд
    const interval = setInterval(() => {
      fetchAnimal();
    }, 5000);

    return () => {
      clearInterval(interval);
      if (typewriterRef.current) {
        clearInterval(typewriterRef.current);
      }
    };
  }, []);

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'легендарный': return 'bg-yellow-500/30 text-yellow-200 border-yellow-400/30';
      case 'мифический': return 'bg-purple-500/30 text-purple-200 border-purple-400/30';
      case 'очень редкий': return 'bg-red-500/30 text-red-200 border-red-400/30';
      case 'редкий': return 'bg-orange-500/30 text-orange-200 border-orange-400/30';
      case 'исчезающий': return 'bg-pink-500/30 text-pink-200 border-pink-400/30';
      default: return 'bg-green-500/30 text-green-200 border-green-400/30';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            🧬 Генератор Гибридных Животных
          </h1>
          <p className="text-purple-200">
            Открывай удивительных гибридов реальных животных каждые 5 секунд!
          </p>
          {lastUpdate && (
            <p className="text-purple-300 text-sm mt-2">
              Последнее обновление: {lastUpdate}
            </p>
          )}
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl min-h-[600px]">
          {loading && (
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
              <p className="text-white mt-2">Создаём нового гибридного животного...</p>
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
                <div className="h-12 mb-2">
                  <h2 className="text-3xl font-bold text-white inline-block">
                    {displayedName}
                    {isTyping && <span className="animate-pulse border-r-2 border-white ml-1">|</span>}
                  </h2>
                </div>
                <div className="transition-opacity duration-300" style={{ opacity: isTyping ? 0.5 : 1 }}>
                  <div className="flex justify-center gap-2 mb-4">
                    <div className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-500/30 text-blue-200">
                      {animal.parents[0]}
                    </div>
                    <span className="text-white self-center">+</span>
                    <div className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-green-500/30 text-green-200">
                      {animal.parents[1]}
                    </div>
                  </div>
                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium border ${getRarityColor(animal.rarity)}`}>
                    {animal.rarity}
                  </div>
                </div>
              </div>

              <div className="border-2 rounded-xl p-6 border-purple-400/50 bg-white/5 transition-opacity duration-300" style={{ opacity: isTyping ? 0.5 : 1 }}>
                <div className="mb-4">
                  <h3 className="text-white font-semibold mb-2 flex items-center">
                    🎨 Внешность
                  </h3>
                  <p className="text-purple-200 text-lg italic">{animal.appearance}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-white font-semibold mb-2 flex items-center">
                        📏 Размер
                      </h3>
                      <p className="text-purple-200 text-sm">{animal.size}</p>
                    </div>

                    <div>
                      <h3 className="text-white font-semibold mb-2 flex items-center">
                        🏔️ Среда обитания
                      </h3>
                      <p className="text-purple-200 text-sm">{animal.habitat}</p>
                    </div>

                    <div>
                      <h3 className="text-white font-semibold mb-2 flex items-center">
                        🍃 Рацион
                      </h3>
                      <p className="text-purple-200 text-sm">{animal.diet}</p>
                    </div>

                    <div>
                      <h3 className="text-white font-semibold mb-2 flex items-center">
                        ⏱️ Продолжительность жизни
                      </h3>
                      <p className="text-purple-200 text-sm">{animal.lifespan}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-white font-semibold mb-2 flex items-center">
                        ✨ Способности
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {animal.abilities.map((ability, index) => (
                          <span 
                            key={index}
                            className="bg-indigo-500/30 text-indigo-200 px-2 py-1 rounded-lg text-xs border border-indigo-400/30"
                          >
                            {ability}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-white font-semibold mb-2 flex items-center">
                        😊 Характер
                      </h3>
                      <div className="bg-pink-500/30 text-pink-200 p-3 rounded-lg text-sm border border-pink-400/30">
                        {animal.personality}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={fetchAnimal}
                  disabled={loading || isTyping}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium px-6 py-3 rounded-full transition-all transform hover:scale-105"
                >
                  🎲 Создать нового гибрида
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-8 text-purple-300 text-sm">
          <p>🧬 Новое гибридное животное появляется автоматически каждые 5 секунд</p>
          <p className="mt-1">Или нажми кнопку, чтобы создать прямо сейчас!</p>
        </div>
      </div>
    </div>
  );
};

export default Index;