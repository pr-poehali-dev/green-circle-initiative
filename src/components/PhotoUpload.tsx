import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const PHOTOS_API = 'https://devfunctions.poehali.dev/38660a13-dd74-48b5-af1d-3ec287fad924';

export default function PhotoUpload() {
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast({
        title: 'Ошибка',
        description: 'Можно загружать только изображения',
        variant: 'destructive',
      });
      return;
    }

    setUploading(true);

    try {
      const reader = new FileReader();
      reader.onload = async () => {
        const base64 = reader.result as string;

        const response = await fetch(PHOTOS_API, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            image: base64,
            filename: file.name,
          }),
        });

        if (!response.ok) throw new Error('Ошибка загрузки');

        toast({
          title: 'Успешно',
          description: 'Фотография загружена',
        });

        window.dispatchEvent(new CustomEvent('photoUploaded'));
      };

      reader.readAsDataURL(file);
    } catch (error) {
      toast({
        title: 'Ошибка',
        description: 'Не удалось загрузить фото',
        variant: 'destructive',
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <Card className="p-6">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
          <Icon name="Upload" size={28} className="text-primary" />
        </div>
        <h3 className="text-lg font-light">Загрузить фотографию</h3>
        <label htmlFor="photo-upload">
          <input
            id="photo-upload"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
            disabled={uploading}
          />
          <Button asChild disabled={uploading}>
            <span className="cursor-pointer">
              {uploading ? 'Загрузка...' : 'Выбрать фото'}
            </span>
          </Button>
        </label>
      </div>
    </Card>
  );
}
