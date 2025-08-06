import { useState, useEffect } from 'react';

interface Creature {
  name: string;
  description: string;
  habitat: string;
  abilities: string[];
  rarity: 'common' | 'rare' | 'legendary';
  emoji: string;
}

interface CreatureResponse {
  success: boolean;
  creature: Creature;
  timestamp: string;
}

const Index = () => {
  const [creature, setCreature] = useState<Creature | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdate, setLastUpdate] = useState<string>('');

  // Заглушка для локальной генерации существ пока бекенд не работает
  const generateLocalCreature = (): Creature => {
    const prefixes = ['Крыло', 'Огне', 'Водо', 'Земле', 'Небес', 'Лунно', 'Солнеч', 'Звездо'];
    const bases = ['лев', 'тигр', 'волк', 'медведь', 'орел', 'дельфин', 'змей', 'олень'];
    const suffixes = ['ус', 'крыл', 'хвост', 'глаз', 'лап', 'рог'];
    
    const habitats = [
      'Мистические леса',
      'Подводные пещеры', 
      'Высокогорные плато',
      'Вулканические долины',
      'Кристальные пещеры',
      'Плавучие острова'
    ];

    const abilities = [
      'Телепатия',
      'Контроль погоды',
      'Невидимость',
      'Исцеление',
      'Полет',
      'Предвидение',
      'Иллюзии',
      'Дыхание под водой'
    ];

    const emojis = ['🦁', '🐅', '🐺', '🐻', '🦅', '🐬', '🐍', '🦌', '🦄', '🐉'];
    
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const base = bases[Math.floor(Math.random() * bases.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    
    const name = `${prefix}${base}${suffix}`;
    const rarity = Math.random() < 0.1 ? 'legendary' : Math.random() < 0.3 ? 'rare' : 'common';
    const numAbilities = rarity === 'legendary' ? 3 : rarity === 'rare' ? 2 : 1;
    
    const creatureAbilities = [];
    const shuffled = [...abilities].sort(() => 0.5 - Math.random());
    for (let i = 0; i < numAbilities; i++) {
      creatureAbilities.push(shuffled[i]);
    }
    
    const descriptions = {
      common: 'Удивительное создание из глубин фантазии',
      rare: 'Редкое существо с особыми способностями',
      legendary: 'Легендарное создание невиданной силы'
    };
    
    return {
      name,
      description: descriptions[rarity],
      habitat: habitats[Math.floor(Math.random() * habitats.length)],
      abilities: creatureAbilities,
      rarity,
      emoji: emojis[Math.floor(Math.random() * emojis.length)]
    };
  };

  const fetchCreature = async () => {
    setLoading(true);
    setError(null);

    try {
      // Попробуем вызвать бекенд (когда заработает)
      // const response = await fetch('BACKEND_URL');
      // const data: CreatureResponse = await response.json();
      // setCreature(data.creature);
      
      // Пока используем локальную генерацию
      await new Promise(resolve => setTimeout(resolve, 500)); // Имитация запроса
      const newCreature = generateLocalCreature();
      setCreature(newCreature);
      setLastUpdate(new Date().toLocaleTimeString());
      
    } catch (err) {
      setError('Ошибка при загрузке существа');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Загружаем первое существо сразу
    fetchCreature();
    
    // Устанавливаем интервал на 5 секунд
    const interval = setInterval(() => {
      fetchCreature();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'text-yellow-400 bg-yellow-400/20';
      case 'rare': return 'text-purple-400 bg-purple-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getRarityBorder = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'border-yellow-400/50';
      case 'rare': return 'border-purple-400/50';
      default: return 'border-gray-400/50';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            🌟 Генератор Мифических Существ
          </h1>
          <p className="text-purple-200">
            Открывай новых удивительных созданий каждые 5 секунд!
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
              <p className="text-white mt-2">Создаём новое существо...</p>
            </div>
          )}

          {error && (
            <div className="text-center text-red-400 bg-red-400/20 p-4 rounded-lg">
              {error}
            </div>
          )}

          {creature && !loading && (
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-6xl mb-4">{creature.emoji}</div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  {creature.name}
                </h2>
                <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${getRarityColor(creature.rarity)}`}>
                  {creature.rarity === 'legendary' ? 'Легендарный' : 
                   creature.rarity === 'rare' ? 'Редкий' : 'Обычный'}
                </div>
              </div>

              <div className={`border-2 rounded-xl p-6 ${getRarityBorder(creature.rarity)} bg-white/5`}>
                <p className="text-purple-100 text-lg mb-4">
                  {creature.description}
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-white font-semibold mb-2 flex items-center">
                      🏔️ Место обитания
                    </h3>
                    <p className="text-purple-200">{creature.habitat}</p>
                  </div>

                  <div>
                    <h3 className="text-white font-semibold mb-2 flex items-center">
                      ✨ Способности
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {creature.abilities.map((ability, index) => (
                        <span
                          key={index}
                          className="bg-indigo-500/30 text-indigo-200 px-3 py-1 rounded-full text-sm border border-indigo-400/30"
                        >
                          {ability}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={fetchCreature}
                  disabled={loading}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium px-6 py-3 rounded-full transition-all transform hover:scale-105"
                >
                  🎲 Создать новое существо
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-8 text-purple-300 text-sm">
          <p>🚀 Новое существо появляется автоматически каждые 5 секунд</p>
          <p className="mt-1">Или нажми кнопку, чтобы создать прямо сейчас!</p>
        </div>
      </div>
    </div>
  );
};

export default Index;