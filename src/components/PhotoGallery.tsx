import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const PHOTOS_API = 'https://devfunctions.poehali.dev/38660a13-dd74-48b5-af1d-3ec287fad924';

interface Photo {
  id: string;
  filename: string;
  url: string;
  created_at: string;
}

export default function PhotoGallery() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const loadPhotos = async () => {
    try {
      const response = await fetch(PHOTOS_API);
      const data = await response.json();
      setPhotos(data.photos || []);
    } catch (error) {
      setPhotos([]);
      toast({
        title: 'Ошибка',
        description: 'Не удалось загрузить фотографии',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const deletePhoto = async (id: string) => {
    try {
      const response = await fetch(`${PHOTOS_API}?id=${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Ошибка удаления');

      toast({
        title: 'Удалено',
        description: 'Фотография удалена',
      });

      loadPhotos();
    } catch (error) {
      toast({
        title: 'Ошибка',
        description: 'Не удалось удалить фото',
        variant: 'destructive',
      });
    }
  };

  useEffect(() => {
    loadPhotos();

    const handlePhotoUploaded = () => {
      loadPhotos();
    };

    window.addEventListener('photoUploaded', handlePhotoUploaded);

    return () => {
      window.removeEventListener('photoUploaded', handlePhotoUploaded);
    };
  }, []);

  if (loading) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Загрузка...</p>
      </div>
    );
  }

  if (photos.length === 0) {
    return (
      <div className="text-center py-12">
        <Icon name="Image" size={48} className="mx-auto mb-4 text-muted-foreground" />
        <p className="text-muted-foreground">Пока нет фотографий</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {photos.map((photo) => (
        <Card key={photo.id} className="overflow-hidden group">
          <div className="relative aspect-square">
            <img
              src={photo.url}
              alt={photo.filename}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
              <Button
                size="sm"
                variant="destructive"
                onClick={() => deletePhoto(photo.id)}
              >
                <Icon name="Trash2" size={16} />
              </Button>
            </div>
          </div>
          <div className="p-3">
            <p className="text-xs text-muted-foreground truncate">
              {photo.filename}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
}