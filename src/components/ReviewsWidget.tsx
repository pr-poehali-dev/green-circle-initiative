import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

interface Review {
  id: number;
  rating: string;
  review_text: string;
  customer_name: string;
  created_at: string;
}

interface ReviewsResponse {
  status: string;
  reviews: Review[];
  total_reviews: number;
}

const ReviewsWidget = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchReviews = async () => {
    try {
      const response = await fetch('https://functions.yandexcloud.net/d4ejatogf4t0gf7dl6b8');
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const data: ReviewsResponse = await response.json();
      
      if (data.status === 'success' && data.reviews.length > 0) {
        setReviews(data.reviews);
        setError(null);
      } else {
        setError('Отзывы не найдены');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ошибка загрузки отзывов');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  useEffect(() => {
    if (reviews.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Смена каждые 4 секунды

    return () => clearInterval(interval);
  }, [reviews.length]);

  const getRatingStars = (rating: string) => {
    const num = parseInt(rating);
    const stars = [];
    
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Icon 
          key={i}
          name={i <= num ? "Star" : "Star"} 
          size={16} 
          className={i <= num ? "text-yellow-400 fill-current" : "text-gray-300"} 
        />
      );
    }
    
    return stars;
  };

  if (loading) {
    return (
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
        <div className="flex items-center justify-center">
          <Icon name="Loader" size={24} className="text-white animate-spin" />
          <span className="ml-2 text-white">Загружаем отзывы...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-500/10 backdrop-blur-lg rounded-2xl p-6 border border-red-500/20">
        <div className="flex items-center justify-center text-red-400">
          <Icon name="AlertCircle" size={24} />
          <span className="ml-2">{error}</span>
        </div>
      </div>
    );
  }

  if (reviews.length === 0) {
    return (
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
        <div className="text-center text-white/70">
          <Icon name="MessageCircle" size={32} className="mx-auto mb-2" />
          <p>Пока нет отзывов</p>
        </div>
      </div>
    );
  }

  const currentReview = reviews[currentIndex];

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 min-h-[200px] relative overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white text-lg font-bold flex items-center gap-2">
          <Icon name="MessageCircle" size={20} />
          Отзывы клиентов
        </h3>
        <div className="text-white/70 text-sm">
          {currentIndex + 1} из {reviews.length}
        </div>
      </div>

      <div className="space-y-4 transition-all duration-500">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            {getRatingStars(currentReview.rating)}
          </div>
          <span className="text-white/80 text-sm">
            ({currentReview.rating}/5)
          </span>
        </div>

        <blockquote className="text-white text-base leading-relaxed min-h-[60px] flex items-center">
          "{currentReview.review_text}"
        </blockquote>

        <div className="flex items-center justify-between pt-2 border-t border-white/20">
          <cite className="text-purple-300 font-medium not-italic">
            — {currentReview.customer_name}
          </cite>
          <time className="text-white/50 text-sm">
            {new Date(currentReview.created_at).toLocaleDateString('ru-RU', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            })}
          </time>
        </div>
      </div>

      {/* Индикаторы прогресса */}
      <div className="flex gap-2 mt-4 justify-center">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-purple-400 w-8' 
                : 'bg-white/30 w-1.5 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Кнопки навигации */}
      <div className="absolute top-1/2 -translate-y-1/2 left-2 right-2 flex justify-between pointer-events-none">
        <button
          onClick={() => setCurrentIndex(currentIndex === 0 ? reviews.length - 1 : currentIndex - 1)}
          className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors pointer-events-auto"
        >
          <Icon name="ChevronLeft" size={16} />
        </button>
        <button
          onClick={() => setCurrentIndex(currentIndex === reviews.length - 1 ? 0 : currentIndex + 1)}
          className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors pointer-events-auto"
        >
          <Icon name="ChevronRight" size={16} />
        </button>
      </div>
    </div>
  );
};

export default ReviewsWidget;