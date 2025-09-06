import { useState, useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';
import DebugViewer from '@/components/DebugViewer';
import ReviewsWidget from '@/components/ReviewsWidget';
import AuthModal from '@/components/AuthModal';

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
  const [showDebug, setShowDebug] = useState(false);
  const [animal, setAnimal] = useState<HybridAnimal | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdate, setLastUpdate] = useState<string>('');
  const [displayedName, setDisplayedName] = useState<string>('');
  const [isTyping, setIsTyping] = useState(false);
  const typewriterRef = useRef<NodeJS.Timeout | null>(null);
  const [testResult, setTestResult] = useState<object | null>(null);
  const [testLoading, setTestLoading] = useState(false);
  const [dbResult, setDbResult] = useState<object | null>(null);
  const [dbLoading, setDbLoading] = useState(false);
  
  // Auth state
  const [user, setUser] = useState<{id: number, username: string, email: string, name: string} | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const typewriterEffect = (text: string) => {
    if (typewriterRef.current) {
      clearInterval(typewriterRef.current);
    }
    
    setIsTyping(true);
    
    // Сначала стираем текст
    const currentText = displayedName;
    let eraseIndex = currentText.length;
    
    const eraseTimer = setInterval(() => {
      if (eraseIndex > 0) {
        setDisplayedName(currentText.substring(0, eraseIndex - 1));
        eraseIndex--;
      } else {
        clearInterval(eraseTimer);
        
        // Пауза перед печатанием
        setTimeout(() => {
          let typeIndex = 0;
          
          // Теперь печатаем новый текст
          typewriterRef.current = setInterval(() => {
            if (typeIndex < text.length) {
              setDisplayedName(text.substring(0, typeIndex + 1));
              typeIndex++;
            } else {
              setIsTyping(false);
              if (typewriterRef.current) {
                clearInterval(typewriterRef.current);
              }
            }
          }, 80);
        }, 300);
      }
    }, 60);
  };

  const fetchAnimal = async () => {
    const isFirstLoad = !animal;
    
    if (isFirstLoad) {
      setLoading(true);
    }
    setError(null);

    try {
      // Заглушка - создаём случайное животное локально
      const mockAnimals = [
        {
          name: "Львокот",
          parents: ["Лев", "Кот"],
          appearance: "Маленький лев с домашними повадками",
          size: "Средний (40-60 см)",
          habitat: "Городские квартиры и саванны",
          abilities: ["Мурчание", "Охота на мышей", "Царственная походка"],
          personality: "Гордый, но ласковый",
          diet: "Корм премиум-класса и газель по выходным",
          lifespan: "15-20 лет",
          rarity: "редкий"
        },
        {
          name: "Дракокот",
          parents: ["Дракон", "Кот"],
          appearance: "Пушистый кот с небольшими крыльями и рожками",
          size: "Маленький (30-40 см)",
          habitat: "Башни магов и подоконники",
          abilities: ["Полёт на короткие дистанции", "Дышит паром", "Мурчание"],
          personality: "Магический и игривый",
          diet: "Рыба и драгоценные камни",
          lifespan: "50-100 лет",
          rarity: "легендарный"
        }
      ];
      
      const randomAnimal = mockAnimals[Math.floor(Math.random() * mockAnimals.length)];
      
      if (animal && animal.name !== randomAnimal.name) {
        typewriterEffect(randomAnimal.name);
      } else if (!animal) {
        typewriterEffect(randomAnimal.name);
      }
      
      setAnimal(randomAnimal);
      setLastUpdate(new Date().toLocaleTimeString());
      
    } catch (err) {
      setError('Ошибка при создании животного');
      console.error(err);
    } finally {
      if (isFirstLoad) {
        setLoading(false);
      }
    }
  };

  const testBackend = async () => {
    setTestLoading(true);
    try {
      // Используем новую simple-test функцию
      const response = await fetch('https://functions.yandexcloud.net/d4es0icfs6g9c0o2fgkd');
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      setTestResult(data);
    } catch (err) {
      setTestResult({ 
        error: 'Ошибка вызова функции',
        details: err instanceof Error ? err.message : 'Неизвестная ошибка'
      });
    } finally {
      setTestLoading(false);
    }
  };

  const testDatabase = async () => {
    setDbLoading(true);
    try {
      // Используем функцию для получения списка таблиц
      const response = await fetch('https://functions.yandexcloud.net/d4e1i9v478qu3afp947l');
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      setDbResult(data);
    } catch (err) {
      setDbResult({ 
        error: 'Ошибка подключения к базе данных',
        details: err instanceof Error ? err.message : 'Неизвестная ошибка'
      });
    } finally {
      setDbLoading(false);
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
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Добро пожаловать!</h1>
            {user && <p className="text-purple-300">Привет, {user.name}! 👋</p>}
          </div>
          <div className="flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-3">
                <div className="text-white text-sm">
                  <div className="font-medium">{user.name}</div>
                  <div className="text-white/70 text-xs">@{user.username}</div>
                </div>
                <button
                  onClick={() => setUser(null)}
                  className="flex items-center gap-2 px-3 py-2 bg-red-600/50 hover:bg-red-600/70 rounded-lg text-white text-sm transition-colors"
                >
                  <Icon name="LogOut" size={16} />
                  Выйти
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowAuthModal(true)}
                className="flex items-center gap-2 px-4 py-2 bg-purple-600/50 hover:bg-purple-600/70 rounded-lg text-white text-sm transition-colors"
              >
                <Icon name="User" size={16} />
                Войти
              </button>
            )}
            <button
              onClick={() => setShowDebug(!showDebug)}
              className="flex items-center gap-2 px-3 py-2 bg-gray-600/50 hover:bg-gray-600/70 rounded-lg text-white text-sm transition-colors"
            >
              <Icon name="Bug" size={16} />
              Debug
            </button>
          </div>
        </div>

        {/* Карточка животного */}
        <div className="mt-8 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
          {loading && (
            <div className="text-center">
              <Icon name="Loader2" size={48} className="animate-spin mx-auto text-purple-400 mb-4" />
              <p className="text-white">Создаём гибридное животное...</p>
            </div>
          )}
          
          {error && (
            <div className="text-center text-red-400">
              <Icon name="AlertCircle" size={48} className="mx-auto mb-4" />
              <p>{error}</p>
            </div>
          )}
          
          {animal && !loading && (
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-white mb-2">
                  {displayedName}
                  {isTyping && <span className="animate-pulse">|</span>}
                </h2>
                <div className="flex justify-center gap-2 mb-4">
                  {animal.parents.map((parent) => (
                    <span key={parent} className="bg-blue-500/30 text-blue-200 px-3 py-1 rounded-full text-sm border border-blue-400/30">
                      {parent}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center">
                  <span className={`px-4 py-2 rounded-full text-sm border ${getRarityColor(animal.rarity)}`}>
                    ✨ {animal.rarity}
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Eye" size={18} />
                      Внешний вид
                    </h3>
                    <p className="text-purple-200">{animal.appearance}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Ruler" size={18} />
                      Размер
                    </h3>
                    <p className="text-purple-200">{animal.size}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <Icon name="MapPin" size={18} />
                      Среда обитания
                    </h3>
                    <p className="text-purple-200">{animal.habitat}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Heart" size={18} />
                      Характер
                    </h3>
                    <p className="text-purple-200">{animal.personality}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Zap" size={18} />
                      Способности
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {animal.abilities.map((ability) => (
                        <span key={ability} className="bg-green-500/30 text-green-200 px-2 py-1 rounded text-sm border border-green-400/30">
                          {ability}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Utensils" size={18} />
                      Питание
                    </h3>
                    <p className="text-purple-200">{animal.diet}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Clock" size={18} />
                      Продолжительность жизни
                    </h3>
                    <p className="text-purple-200">{animal.lifespan}</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center pt-4 border-t border-white/20">
                <button
                  onClick={fetchAnimal}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  Создать новое животное
                </button>
                <p className="text-purple-300 text-sm mt-2">
                  Обновлено: {lastUpdate}
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-8 text-purple-300 text-sm">
          <p>🧬 Новое гибридное животное появляется автоматически каждые 5 секунд</p>
          <p className="mt-1">Или нажми кнопку, чтобы создать прямо сейчас!</p>
        </div>
        
        {/* Виджет отзывов */}
        <div className="mt-8">
          <ReviewsWidget />
        </div>
        
        <div className="mt-8 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
          <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
            <Icon name="Server" size={24} />
            Тест бэкенд-функции
          </h3>
          <div className="flex items-center gap-4 mb-4 flex-wrap">
            <button
              onClick={testBackend}
              disabled={testLoading}
              className="bg-blue-500 hover:bg-blue-600 disabled:opacity-50 text-white px-4 py-2 rounded-lg transition-colors"
            >
              {testLoading ? 'Тестируем...' : 'Протестировать SIMPLE_TEST'}
            </button>
            <button
              onClick={testDatabase}
              disabled={dbLoading}
              className="bg-green-500 hover:bg-green-600 disabled:opacity-50 text-white px-4 py-2 rounded-lg transition-colors"
            >
              {dbLoading ? 'Загружаем...' : 'Показать таблицы БД'}
            </button>
          </div>
          {testResult && (
            <div className="mb-4">
              <h4 className="text-white font-semibold mb-2">Результат SIMPLE_TEST:</h4>
              <div className="bg-gray-900/50 p-4 rounded-lg">
                <pre className="text-green-300 text-sm overflow-auto">
                  {JSON.stringify(testResult, null, 2)}
                </pre>
              </div>
            </div>
          )}
          
          {dbResult && (
            <div>
              <h4 className="text-white font-semibold mb-2">Таблицы в базе данных:</h4>
              <div className="bg-gray-900/50 p-4 rounded-lg">
                <pre className="text-blue-300 text-sm overflow-auto">
                  {JSON.stringify(dbResult, null, 2)}
                </pre>
              </div>
            </div>
          )}
        </div>

        {showDebug && (
          <div className="mt-8">
            <DebugViewer />
          </div>
        )}
      </div>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onLoginSuccess={(userData) => {
          setUser(userData);
          setShowAuthModal(false);
        }}
      />
    </div>
  );
};

export default Index;