import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const API_URL = "https://devfunctions.poehali.dev/658e642e-be01-439c-958a-980fa29eaf9d";

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const generateImage = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setError('');
    setImageUrl('');

    try {
      // Запускаем генерацию
      const generateResponse = await fetch(`${API_URL}?action=generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: prompt,
          model: 'flux-2-pro',
          aspect_ratio: '1:1',
          resolution: '1K',
        }),
      });

      const generateData = await generateResponse.json();

      if (!generateData.success || !generateData.requestId) {
        setError(generateData.error || 'Ошибка запуска генерации');
        setLoading(false);
        return;
      }

      const requestId = generateData.requestId;

      // Polling статуса
      const checkStatus = async () => {
        const statusResponse = await fetch(`${API_URL}?action=status`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ requestId }),
        });

        const statusData = await statusResponse.json();

        if (!statusData.success) {
          setError(statusData.error || 'Ошибка проверки статуса');
          setLoading(false);
          return;
        }

        if (statusData.status === 'completed' && statusData.imageUrl) {
          setImageUrl(statusData.imageUrl);
          setLoading(false);
        } else if (statusData.status === 'failed') {
          setError('Генерация не удалась');
          setLoading(false);
        } else {
          // Продолжаем polling
          setTimeout(checkStatus, 2000);
        }
      };

      checkStatus();
    } catch (err) {
      setError('Ошибка соединения');
      setLoading(false);
    }
  };

  return (
    <Card className="p-8 max-w-2xl mx-auto">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 mb-2">
          <Icon name="Sparkles" size={24} className="text-primary" />
          <h2 className="text-2xl font-light tracking-wide">Генератор изображений</h2>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4">
          Опишите изображение, которое хотите создать
        </p>

        <div className="flex gap-2">
          <Input
            placeholder="Космический корабль среди звезд..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && generateImage()}
            disabled={loading}
            className="flex-1"
          />
          <Button onClick={generateImage} disabled={loading || !prompt.trim()}>
            {loading ? (
              <>
                <Icon name="Loader2" size={18} className="animate-spin mr-2" />
                Генерирую...
              </>
            ) : (
              <>
                <Icon name="Wand2" size={18} className="mr-2" />
                Создать
              </>
            )}
          </Button>
        </div>

        {error && (
          <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
            <p className="text-sm text-destructive flex items-center gap-2">
              <Icon name="AlertCircle" size={16} />
              {error}
            </p>
          </div>
        )}

        {imageUrl && (
          <div className="mt-4">
            <img
              src={imageUrl}
              alt={prompt}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>
    </Card>
  );
}