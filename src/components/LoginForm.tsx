import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Icon from '@/components/ui/icon';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [motivationalPhrase, setMotivationalPhrase] = useState('Вы прекрасны! ✨');
  const [isPhraseLoaded, setIsPhraseLoaded] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { login, isLoading } = useAuth();

  useEffect(() => {
    const fetchMotivationalPhrase = async () => {
      try {
        const response = await fetch('/backend/func2url.json');
        const urls = await response.json();
        const motivateUrl = urls.motivate;
        
        if (motivateUrl) {
          const phraseResponse = await fetch(motivateUrl);
          const result = await phraseResponse.json();
          setMotivationalPhrase(result.phrase);
        }
      } catch (error) {
        console.log('Не удалось загрузить мотивирующую фразу, используем стандартную');
      } finally {
        // Даём немного времени для плавного появления
        setTimeout(() => {
          setIsPhraseLoaded(true);
        }, 100);
      }
    };
    
    fetchMotivationalPhrase();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Заполните все поля');
      return;
    }

    const success = await login(username, password);
    if (!success) {
      setError('Неверный логин или пароль');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-6">
      {!isPhraseLoaded ? (
        // Лоадер
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-white/20 border-t-white"></div>
          <p className="text-white/70 text-sm">Загружаем...</p>
        </div>
      ) : (
        <div className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl max-w-md w-full transition-all duration-700 ${
          isPhraseLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Lock" size={32} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">
            {motivationalPhrase}
          </h1>
          <p className="text-purple-200">
            Введите ваши учетные данные
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 flex items-center gap-2">
              <Icon name="AlertCircle" size={20} className="text-red-400" />
              <span className="text-red-200 text-sm">{error}</span>
            </div>
          )}

          <div>
            <label htmlFor="username" className="block text-sm font-medium text-white mb-2">
              Логин
            </label>
            <div className="relative">
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Введите логин"
              />
              <Icon 
                name="User" 
                size={20} 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50" 
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
              Пароль
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent pr-12"
                placeholder="Введите пароль"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-colors"
              >
                <Icon name={showPassword ? 'EyeOff' : 'Eye'} size={20} />
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Вход...
              </>
            ) : (
              <>
                <Icon name="LogIn" size={20} />
                Войти
              </>
            )}
          </button>
        </form>

        <div className="mt-6 text-center space-y-3">
          <p className="text-purple-200 text-sm">
            Тестовые данные: admin / 1234
          </p>
          
          <button
            onClick={async () => {
              const response = await fetch('/backend/func2url.json');
              const urls = await response.json();
              if (urls.debug) window.open(urls.debug, '_blank');
            }}
            className="flex items-center gap-2 mx-auto px-3 py-2 bg-gray-600/30 hover:bg-gray-600/50 rounded-lg text-white/70 hover:text-white text-sm transition-colors"
          >
            <Icon name="Bug" size={16} />
            Открыть Debug
          </button>
        </div>
        </div>
      )}
    </div>
  );
}