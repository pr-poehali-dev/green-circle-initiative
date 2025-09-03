import { useState, useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';
import DebugViewer from '@/components/DebugViewer';
import ReviewsWidget from '@/components/ReviewsWidget';

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
      const response = await fetch('https://functions.yandexcloud.net/d4euu16ickp3kdj88c5c');
      const data: AnimalResponse = await response.json();
      
      if (data.success) {
        const newAnimal = data.animal;
        
        if (animal && animal.name !== newAnimal.name) {
          // Если животное уже есть и имя изменилось, запускаем печатающую машинку
          typewriterEffect(newAnimal.name);
        } else if (!animal) {
          // Первая загрузка - тоже запускаем печатающую машинку
          typewriterEffect(newAnimal.name);
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
          <div></div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowDebug(!showDebug)}
              className="flex items-center gap-2 px-3 py-2 bg-gray-600/50 hover:bg-gray-600/70 rounded-lg text-white text-sm transition-colors"
            >
              <Icon name="Bug" size={16} />
              Debug
            </button>
            <span className="text-white/70">Тест бэкенд-систем</span>
          </div>
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
    </div>
  );
};

export default Index;