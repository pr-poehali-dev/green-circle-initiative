import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  image_url?: string;
  created_at?: string;
}

interface NewProduct {
  name: string;
  description: string;
  price: number;
  image_url: string;
}

interface UploadResponse {
  url: string;
  filename: string;
  size: number;
  type: string;
  message: string;
}

const AdminProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string>('');
  const { toast } = useToast();

  const [newProduct, setNewProduct] = useState<NewProduct>({
    name: '',
    description: '',
    price: 0,
    image_url: ''
  });

  const API_URL = 'https://functions.yandexcloud.net/d4eaolo274np1jugbof9';
  const UPLOAD_URL = 'https://functions.yandexcloud.net/d4e9duo6cogp3cvb7ead';

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(API_URL);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setProducts(data.products || []);
    } catch (err) {
      console.error('Error fetching products:', err);
      setError('Не удалось загрузить товары');
      toast({
        title: "Ошибка",
        description: "Не удалось загрузить список товаров",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Проверяем тип файла
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Ошибка",
        description: "Выберите файл изображения",
        variant: "destructive",
      });
      return;
    }

    // Проверяем размер файла (5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "Ошибка",
        description: "Размер файла не должен превышать 5MB",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);

    try {
      // Конвертируем файл в base64 для локального использования
      const reader = new FileReader();
      const base64Promise = new Promise<string>((resolve, reject) => {
        reader.onload = () => {
          if (typeof reader.result === 'string') {
            resolve(reader.result);
          } else {
            reject(new Error('Ошибка чтения файла'));
          }
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });

      const base64Data = await base64Promise;
      
      // Используем data URL как изображение (временное решение)
      setUploadedImageUrl(base64Data);
      setNewProduct(prev => ({ ...prev, image_url: base64Data }));

      toast({
        title: "Успешно!",
        description: "Изображение загружено",
      });

    } catch (error) {
      console.error('Upload error:', error);
      toast({
        title: "Ошибка загрузки",
        description: error instanceof Error ? error.message : "Не удалось загрузить изображение",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newProduct.name.trim() || newProduct.price <= 0) {
      toast({
        title: "Ошибка валидации",
        description: "Укажите название товара и корректную цену",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const productData = {
        ...newProduct,
        image_url: uploadedImageUrl || newProduct.image_url
      };

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      toast({
        title: "Успешно!",
        description: data.message || "Товар добавлен в каталог",
      });

      setProducts(prev => [data.product, ...prev]);
      setNewProduct({ name: '', description: '', price: 0, image_url: '' });
      setUploadedImageUrl('');
      setIsAddDialogOpen(false);

    } catch (err) {
      console.error('Error adding product:', err);
      toast({
        title: "Ошибка",
        description: err instanceof Error ? err.message : "Не удалось добавить товар",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteProduct = async (productId: number, productName: string) => {
    if (!confirm(`Вы уверены, что хотите удалить товар "${productName}"?`)) {
      return;
    }

    try {
      const response = await fetch(`${API_URL}?id=${productId}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      toast({
        title: "Успешно!",
        description: data.message || "Товар удален из каталога",
      });

      setProducts(prev => prev.filter(product => product.id !== productId));

    } catch (err) {
      console.error('Error deleting product:', err);
      toast({
        title: "Ошибка",
        description: err instanceof Error ? err.message : "Не удалось удалить товар",
        variant: "destructive",
      });
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB'
    }).format(price);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Управление товарами</h1>
            <p className="text-gray-600">Добавляйте, редактируйте и удаляйте товары</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <Card key={index}>
                <CardHeader>
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-1/2 mb-4" />
                  <div className="flex gap-2">
                    <Skeleton className="h-9 flex-1" />
                    <Skeleton className="h-9 w-20" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Управление товарами</h1>
            <p className="text-gray-600">Добавляйте, редактируйте и удаляйте товары</p>
            <Badge variant="outline" className="mt-2">
              {products.length} {products.length === 1 ? 'товар' : products.length < 5 ? 'товара' : 'товаров'}
            </Badge>
          </div>

          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Icon name="Plus" size={16} className="mr-2" />
                Добавить товар
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <form onSubmit={handleAddProduct}>
                <DialogHeader>
                  <DialogTitle>Добавить новый товар</DialogTitle>
                  <DialogDescription>
                    Заполните информацию о товаре для добавления в каталог
                  </DialogDescription>
                </DialogHeader>
                
                <div className="grid gap-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Название товара *</Label>
                    <Input
                      id="name"
                      value={newProduct.name}
                      onChange={(e) => setNewProduct(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="iPhone 15 Pro"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description">Описание</Label>
                    <Textarea
                      id="description"
                      value={newProduct.description}
                      onChange={(e) => setNewProduct(prev => ({ ...prev, description: e.target.value }))}
                      placeholder="Описание товара..."
                      rows={3}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="price">Цена *</Label>
                    <Input
                      id="price"
                      type="number"
                      step="0.01"
                      min="0"
                      value={newProduct.price || ''}
                      onChange={(e) => setNewProduct(prev => ({ ...prev, price: parseFloat(e.target.value) || 0 }))}
                      placeholder="0.00"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Изображение товара</Label>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Label htmlFor="image_file" className="cursor-pointer">
                          <div className="flex items-center gap-2 px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg hover:border-gray-400 transition-colors">
                            <Icon name={isUploading ? "Loader2" : "Upload"} size={16} className={isUploading ? "animate-spin" : ""} />
                            <span className="text-sm">
                              {isUploading ? "Загрузка..." : "Загрузить с компьютера"}
                            </span>
                          </div>
                        </Label>
                        <input
                          id="image_file"
                          type="file"
                          accept="image/*"
                          onChange={handleFileUpload}
                          className="hidden"
                          disabled={isUploading}
                        />
                      </div>
                      
                      {uploadedImageUrl && (
                        <div className="relative w-20 h-20">
                          <img 
                            src={uploadedImageUrl} 
                            alt="Превью"
                            className="w-full h-full object-cover rounded-lg"
                          />
                          <Button
                            type="button"
                            variant="destructive"
                            size="sm"
                            className="absolute -top-2 -right-2 h-6 w-6 p-0"
                            onClick={() => {
                              setUploadedImageUrl('');
                              setNewProduct(prev => ({ ...prev, image_url: '' }));
                            }}
                          >
                            <Icon name="X" size={12} />
                          </Button>
                        </div>
                      )}
                      
                      <div className="text-xs text-gray-500">
                        или введите URL изображения:
                      </div>
                      
                      <Input
                        type="url"
                        value={newProduct.image_url}
                        onChange={(e) => setNewProduct(prev => ({ ...prev, image_url: e.target.value }))}
                        placeholder="https://example.com/image.jpg"
                        disabled={!!uploadedImageUrl}
                      />
                    </div>
                  </div>
                </div>
                
                <DialogFooter>
                  <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                    Отмена
                  </Button>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Icon name="Loader2" size={16} className="mr-2 animate-spin" />
                        Добавление...
                      </>
                    ) : (
                      <>
                        <Icon name="Plus" size={16} className="mr-2" />
                        Добавить
                      </>
                    )}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {error && (
          <Alert className="mb-6">
            <Icon name="AlertCircle" size={16} />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {products.length === 0 ? (
          <div className="text-center py-12">
            <Icon name="Package" size={64} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Товары не найдены</h3>
            <p className="text-gray-500 mb-6">Добавьте первый товар в каталог</p>
            <Button onClick={() => setIsAddDialogOpen(true)}>
              <Icon name="Plus" size={16} className="mr-2" />
              Добавить товар
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                {product.image_url && (
                  <div className="aspect-video overflow-hidden bg-gray-100">
                    <img 
                      src={product.image_url} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                )}
                
                <CardHeader>
                  <CardTitle className="text-lg line-clamp-2">{product.name}</CardTitle>
                  {product.description && (
                    <CardDescription className="line-clamp-3">
                      {product.description}
                    </CardDescription>
                  )}
                  <div className="text-lg font-semibold text-primary">
                    {formatPrice(product.price)}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => {
                        toast({
                          title: "В разработке",
                          description: "Функция редактирования будет добавлена позже",
                        });
                      }}
                    >
                      <Icon name="Edit" size={14} className="mr-1" />
                      Изменить
                    </Button>
                    <Button 
                      variant="destructive" 
                      size="sm"
                      onClick={() => handleDeleteProduct(product.id, product.name)}
                    >
                      <Icon name="Trash2" size={14} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="flex justify-center mt-8">
          <Button variant="outline" onClick={fetchProducts}>
            <Icon name="RefreshCw" size={16} className="mr-2" />
            Обновить список
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;