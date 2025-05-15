
/**
 * Простая функция для форматирования даты в читаемый формат
 */
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
};
