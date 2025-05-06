import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Car } from '@/types/admin';
import { carsApi } from '@/lib/api';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/components/ui/use-toast';
import Icon from '@/components/ui/icon';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

// Интерфейс для расширенных фильтров
interface AdvancedFilters {
  priceRange: [number, number];
  yearRange: [number, number];
  transmissions: string[];
  fuelTypes: string[];
  features: string[];
  availabilityStatus: string[];
}

const AdminCars: React.FC = () => {
  // Состояние для автомобилей и пагинации
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalCars, setTotalCars] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit] = useState(10); // Количество автомобилей на странице
  
  // Состояние для поиска и фильтрации
  const [searchQuery, setSearchQuery] = useState('');
  const [brand, setBrand] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('');
  const [isAdvancedFiltersOpen, setIsAdvancedFiltersOpen] = useState(false);
  const [activeFiltersCount, setActiveFiltersCount] = useState(0);

  // Новое состояние для расширенных фильтров
  const [advancedFilters, setAdvancedFilters] = useState<AdvancedFilters>({
    priceRange: [500, 5000],
    yearRange: [2015, new Date().getFullYear()],
    transmissions: [],
    fuelTypes: [],
    features: [],
    availabilityStatus: []
  });
  
  // Новое состояние для массового выбора
  const [selectedCars, setSelectedCars] = useState<string[]>([]);
  const [isAllSelected, setIsAllSelected] = useState(false);
  const [isBulkActionDialogOpen, setIsBulkActionDialogOpen] = useState(false);
  const [bulkAction, setBulkAction] = useState<'status' | 'delete' | null>(null);
  const [bulkActionStatus, setBulkActionStatus] = useState<string>('available');
  
  // Состояние для модальных окон
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  
  // Доступные значения для расширенных фильтров
  const availableBrands = ['BMW', 'Mercedes', 'Audi', 'Toyota', 'Kia', 'Hyundai', 'Volkswagen', 'Tesla'];
  const availableTransmissions = ['Автомат', 'Механика', 'Робот', 'Вариатор'];
  const availableFuelTypes = ['Бензин', 'Дизель', 'Электро', 'Гибрид', 'Газ'];
  const availableFeatures = ['Кондиционер', 'Кожаный салон', 'Навигация', 'Подогрев сидений', 'Парктроник', 'Камера заднего вида', 'Панорамная крыша', 'Премиум аудио', 'Автозапуск', 'Круиз-контроль'];
  
  const { toast } = useToast();
  
  // Подсчет активных фильтров
  useEffect(() => {
    let count = 0;
    
    if (searchQuery) count++;
    if (brand) count++;
    if (status) count++;
    
    // Подсчёт активных расширенных фильтров
    if (advancedFilters.priceRange[0] > 500 || advancedFilters.priceRange[1] < 5000) count++;
    if (advancedFilters.yearRange[0] > 2015 || advancedFilters.yearRange[1] < new Date().getFullYear()) count++;
    if (advancedFilters.transmissions.length > 0) count++;
    if (advancedFilters.fuelTypes.length > 0) count++;
    if (advancedFilters.features.length > 0) count++;
    if (advancedFilters.availabilityStatus.length > 0) count++;
    
    setActiveFiltersCount(count);
  }, [searchQuery, brand, status, advancedFilters]);
  
  // Получение списка автомобилей с учетом фильтров
  const fetchCars = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Формирование параметров запроса
      const params: Record<string, any> = {
        page: currentPage,
        limit,
      };
      
      // Добавление параметров фильтрации и сортировки
      if (searchQuery) params.search = searchQuery;
      if (brand) params.brand = brand;
      if (status) params.status = status;
      if (sortBy) params.sort = sortBy;
      
      // Добавление параметров расширенных фильтров
      if (advancedFilters.priceRange[0] > 500) params.minPrice = advancedFilters.priceRange[0];
      if (advancedFilters.priceRange[1] < 5000) params.maxPrice = advancedFilters.priceRange[1];
      
      if (advancedFilters.yearRange[0] > 2015) params.minYear = advancedFilters.yearRange[0];
      if (advancedFilters.yearRange[1] < new Date().getFullYear()) params.maxYear = advancedFilters.yearRange[1];
      
      if (advancedFilters.transmissions.length > 0) params.transmissions = advancedFilters.transmissions.join(',');
      if (advancedFilters.fuelTypes.length > 0) params.fuelTypes = advancedFilters.fuelTypes.join(',');
      if (advancedFilters.features.length > 0) params.features = advancedFilters.features.join(',');
      if (advancedFilters.availabilityStatus.length > 0) params.availabilityStatus = advancedFilters.availabilityStatus.join(',');
      
      // Запрос к API
      const response = await carsApi.getAll(params);
      
      // Обновление состояния
      setCars(response.data);
      setTotalCars(response.total);
      setTotalPages(response.totalPages);
    } catch (err) {
      console.error('Failed to fetch cars:', err);
      setError('Не удалось загрузить список автомобилей. Пожалуйста, попробуйте позже.');
    } finally {
      setLoading(false);
    }
  };
  
  // Загрузка данных при изменении параметров
  useEffect(() => {
    fetchCars();
  }, [currentPage, limit, sortBy]);
  
  // Функция для применения фильтров
  const applyFilters = () => {
    setCurrentPage(1); // Сброс на первую страницу
    fetchCars();
  };
  
  // Сброс всех фильтров
  const resetFilters = () => {
    setSearchQuery('');
    setBrand('');
    setStatus('');
    setSortBy('');
    setAdvancedFilters({
      priceRange: [500, 5000],
      yearRange: [2015, new Date().getFullYear()],
      transmissions: [],
      fuelTypes: [],
      features: [],
      availabilityStatus: []
    });
    setCurrentPage(1);
  };
  
  // Обработчики изменения расширенных фильтров
  const handlePriceRangeChange = (value: number[]) => {
    setAdvancedFilters({
      ...advancedFilters,
      priceRange: [value[0], value[1]]
    });
  };
  
  const handleYearRangeChange = (value: number[]) => {
    setAdvancedFilters({
      ...advancedFilters,
      yearRange: [value[0], value[1]]
    });
  };
  
  const handleCheckboxFilterChange = (
    filterName: 'transmissions' | 'fuelTypes' | 'features' | 'availabilityStatus',
    value: string,
    checked: boolean
  ) => {
    if (checked) {
      setAdvancedFilters({
        ...advancedFilters,
        [filterName]: [...advancedFilters[filterName], value]
      });
    } else {
      setAdvancedFilters({
        ...advancedFilters,
        [filterName]: advancedFilters[filterName].filter(item => item !== value)
      });
    }
  };
  
  // Изменение статуса автомобиля
  const toggleStatus = async (car: Car) => {
    try {
      const newStatus = car.status === 'available' ? 'unavailable' : 'available';
      await carsApi.update(car.id, { status: newStatus });
      
      // Обновление локального состояния
      setCars(cars.map(c => 
        c.id === car.id ? { ...c, status: newStatus } : c
      ));
      
      toast({
        title: newStatus === 'available' ? "Автомобиль опубликован" : "Автомобиль снят с публикации",
        description: `${car.brand} ${car.model} ${newStatus === 'available' ? 'теперь доступен для бронирования' : 'снят с публикации'}`,
      });
    } catch (err) {
      console.error('Failed to update car status:', err);
      toast({
        title: "Ошибка",
        description: "Не удалось изменить статус автомобиля",
        variant: "destructive",
      });
    }
  };
  
  // Открытие диалога подтверждения удаления
  const openDeleteDialog = (car: Car) => {
    setSelectedCar(car);
    setIsDeleteDialogOpen(true);
  };
  
  // Удаление автомобиля
  const handleDeleteCar = async () => {
    if (selectedCar) {
      try {
        await carsApi.delete(selectedCar.id);
        
        // Обновление локального состояния
        setCars(cars.filter(car => car.id !== selectedCar.id));
        setTotalCars(prev => prev - 1);
        
        toast({
          title: "Автомобиль удален",
          description: `${selectedCar.brand} ${selectedCar.model} был успешно удален.`,
        });
      } catch (err) {
        console.error('Failed to delete car:', err);
        toast({
          title: "Ошибка",
          description: "Не удалось удалить автомобиль",
          variant: "destructive",
        });
      } finally {
        setIsDeleteDialogOpen(false);
      }
    }
  };
  
  // Получение цвета для бейджа статуса
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'available':
        return <Badge variant="success">Активен</Badge>;
      case 'unavailable':
        return <Badge variant="secondary">Скрыт</Badge>;
      case 'maintenance':
        return <Badge variant="warning">Техобслуживание</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };
  
  // Рендер скелетона загрузки
  const renderLoading = () => (
    <div className="space-y-4">
      {Array(5).fill(0).map((_, i) => (
        <div key={i} className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-md" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      ))}
    </div>
  );
  
  // Рендер сообщения об ошибке
  const renderError = () => (
    <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg border">
      <Icon name="AlertCircle" className="w-12 h-12 mb-4 text-red-500" />
      <h3 className="mb-2 text-xl font-medium">Ошибка загрузки данных</h3>
      <p className="text-center text-gray-500 mb-4">{error}</p>
      <Button onClick={fetchCars}>Попробовать снова</Button>
    </div>
  );
  
  // Компонент для расширенных фильтров
  const AdvancedFiltersContent = () => (
    <div className="p-4 space-y-4">
      <h3 className="text-lg font-medium">Расширенные фильтры</h3>
      
      <Accordion type="single" collapsible defaultValue="price">
        <AccordionItem value="price">
          <AccordionTrigger>Цена за день</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 px-2">
              <Slider
                value={advancedFilters.priceRange}
                min={500}
                max={5000}
                step={100}
                onValueChange={handlePriceRangeChange}
                className="pt-6"
              />
              <div className="flex justify-between">
                <div>
                  <span className="text-sm text-gray-500">От:</span>
                  <div className="font-medium">{advancedFilters.priceRange[0]} ₽</div>
                </div>
                <div>
                  <span className="text-sm text-gray-500">До:</span>
                  <div className="font-medium">{advancedFilters.priceRange[1]} ₽</div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="year">
          <AccordionTrigger>Год выпуска</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 px-2">
              <Slider
                value={advancedFilters.yearRange}
                min={2000}
                max={new Date().getFullYear()}
                step={1}
                onValueChange={handleYearRangeChange}
                className="pt-6"
              />
              <div className="flex justify-between">
                <div>
                  <span className="text-sm text-gray-500">От:</span>
                  <div className="font-medium">{advancedFilters.yearRange[0]}</div>
                </div>
                <div>
                  <span className="text-sm text-gray-500">До:</span>
                  <div className="font-medium">{advancedFilters.yearRange[1]}</div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="transmission">
          <AccordionTrigger>Трансмиссия</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-2 gap-2">
              {availableTransmissions.map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox
                    id={`transmission-${type}`}
                    checked={advancedFilters.transmissions.includes(type)}
                    onCheckedChange={(checked) => 
                      handleCheckboxFilterChange('transmissions', type, checked === true)
                    }
                  />
                  <Label htmlFor={`transmission-${type}`}>{type}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="fuel">
          <AccordionTrigger>Тип топлива</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-2 gap-2">
              {availableFuelTypes.map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox
                    id={`fuel-${type}`}
                    checked={advancedFilters.fuelTypes.includes(type)}
                    onCheckedChange={(checked) => 
                      handleCheckboxFilterChange('fuelTypes', type, checked === true)
                    }
                  />
                  <Label htmlFor={`fuel-${type}`}>{type}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="features">
          <AccordionTrigger>Опции и характеристики</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-2 gap-2">
              {availableFeatures.map((feature) => (
                <div key={feature} className="flex items-center space-x-2">
                  <Checkbox
                    id={`feature-${feature}`}
                    checked={advancedFilters.features.includes(feature)}
                    onCheckedChange={(checked) => 
                      handleCheckboxFilterChange('features', feature, checked === true)
                    }
                  />
                  <Label htmlFor={`feature-${feature}`}>{feature}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="status">
          <AccordionTrigger>Доступность</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="status-available"
                  checked={advancedFilters.availabilityStatus.includes('available')}
                  onCheckedChange={(checked) => 
                    handleCheckboxFilterChange('availabilityStatus', 'available', checked === true)
                  }
                />
                <Label htmlFor="status-available">Доступны для бронирования</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="status-unavailable"
                  checked={advancedFilters.availabilityStatus.includes('unavailable')}
                  onCheckedChange={(checked) => 
                    handleCheckboxFilterChange('availabilityStatus', 'unavailable', checked === true)
                  }
                />
                <Label htmlFor="status-unavailable">Недоступны для бронирования</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="status-maintenance"
                  checked={advancedFilters.availabilityStatus.includes('maintenance')}
                  onCheckedChange={(checked) => 
                    handleCheckboxFilterChange('availabilityStatus', 'maintenance', checked === true)
                  }
                />
                <Label htmlFor="status-maintenance">На техобслуживании</Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <div className="flex justify-end space-x-2 pt-4">
        <Button variant="outline" onClick={resetFilters}>Сбросить</Button>
        <Button onClick={() => {
          applyFilters();
          setIsAdvancedFiltersOpen(false);
        }}>Применить</Button>
      </div>
    </div>
  );
  
  // Обработчики массового выбора
  const toggleSelectAll = () => {
    if (isAllSelected) {
      setSelectedCars([]);
    } else {
      setSelectedCars(cars.map(car => car.id));
    }
    setIsAllSelected(!isAllSelected);
  };
  
  const toggleSelectCar = (carId: string) => {
    if (selectedCars.includes(carId)) {
      setSelectedCars(selectedCars.filter(id => id !== carId));
      setIsAllSelected(false);
    } else {
      setSelectedCars([...selectedCars, carId]);
      if (selectedCars.length + 1 === cars.length) {
        setIsAllSelected(true);
      }
    }
  };
  
  // Сброс выбора при изменении страницы или применении фильтров
  useEffect(() => {
    setSelectedCars([]);
    setIsAllSelected(false);
  }, [currentPage, cars]);
  
  // Массовое изменение статуса
  const handleBulkStatusChange = async () => {
    try {
      setLoading(true);
      
      // Последовательное обновление всех выбранных автомобилей
      for (const carId of selectedCars) {
        await carsApi.update(carId, { status: bulkActionStatus });
      }
      
      // Обновление локального состояния
      setCars(cars.map(car => 
        selectedCars.includes(car.id) 
          ? { ...car, status: bulkActionStatus } 
          : car
      ));
      
      toast({
        title: "Статус обновлен",
        description: `Обновлен статус для ${selectedCars.length} автомобилей`,
      });
      
      // Сброс выбора
      setSelectedCars([]);
      setIsAllSelected(false);
      setIsBulkActionDialogOpen(false);
    } catch (err) {
      console.error('Failed to update cars status:', err);
      toast({
        title: "Ошибка",
        description: "Не удалось обновить статус автомобилей",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  
  // Массовое удаление
  const handleBulkDelete = async () => {
    try {
      setLoading(true);
      
      // Последовательное удаление всех выбранных автомобилей
      for (const carId of selectedCars) {
        await carsApi.delete(carId);
      }
      
      // Обновление локального состояния
      setCars(cars.filter(car => !selectedCars.includes(car.id)));
      setTotalCars(prev => prev - selectedCars.length);
      
      toast({
        title: "Автомобили удалены",
        description: `Удалено ${selectedCars.length} автомобилей`,
      });
      
      // Сброс выбора
      setSelectedCars([]);
      setIsAllSelected(false);
      setIsBulkActionDialogOpen(false);
    } catch (err) {
      console.error('Failed to delete cars:', err);
      toast({
        title: "Ошибка",
        description: "Не удалось удалить автомобили",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  
  // Экспорт выбранных автомобилей в JSON
  const handleExportSelected = () => {
    const selectedData = cars.filter(car => selectedCars.includes(car.id));
    const jsonData = JSON.stringify(selectedData, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `exported_cars_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Экспорт завершен",
      description: `Экспортировано ${selectedCars.length} автомобилей`,
    });
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Управление автомобилями</h1>
        <Button asChild>
          <Link to="/admin/cars/new">
            <Icon name="Plus" className="h-4 w-4 mr-2" />
            Добавить автомобиль
          </Link>
        </Button>
      </div>
      
      {selectedCars.length > 0 && (
        <Card className="p-4 mb-4 bg-muted/50 border-primary/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="px-2 py-1">
                {selectedCars.length} выбрано
              </Badge>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => {
                  setSelectedCars([]);
                  setIsAllSelected(false);
                }}
              >
                Очистить выбор
              </Button>
            </div>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => {
                  setBulkAction('status');
                  setIsBulkActionDialogOpen(true);
                }}
              >
                <Icon name="RefreshCw" className="h-4 w-4 mr-2" />
                Изменить статус
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleExportSelected}
              >
                <Icon name="Download" className="h-4 w-4 mr-2" />
                Экспорт JSON
              </Button>
              <Button 
                variant="destructive" 
                size="sm" 
                onClick={() => {
                  setBulkAction('delete');
                  setIsBulkActionDialogOpen(true);
                }}
              >
                <Icon name="Trash2" className="h-4 w-4 mr-2" />
                Удалить
              </Button>
            </div>
          </div>
        </Card>
      )}
      
      <Card className="p-4 mb-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Поиск */}
          <div className="relative">
            <Input
              placeholder="Поиск по марке, модели..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
          
          {/* Фильтр по бренду */}
          <div>
            <Select value={brand} onValueChange={setBrand}>
              <SelectTrigger>
                <SelectValue placeholder="Все марки" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Все марки</SelectItem>
                {availableBrands.map(brand => (
                  <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* Фильтр по статусу */}
          <div>
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger>
                <SelectValue placeholder="Любой статус" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Любой статус</SelectItem>
                <SelectItem value="available">Активные</SelectItem>
                <SelectItem value="unavailable">Скрытые</SelectItem>
                <SelectItem value="maintenance">На техобслуживании</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Сортировка */}
          <div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Сортировка" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">По умолчанию</SelectItem>
                <SelectItem value="pricePerDay">По цене (возр.)</SelectItem>
                <SelectItem value="-pricePerDay">По цене (убыв.)</SelectItem>
                <SelectItem value="-year">По году (новее)</SelectItem>
                <SelectItem value="year">По году (старше)</SelectItem>
                <SelectItem value="-rating">По рейтингу</SelectItem>
                <SelectItem value="brand">По марке (А-Я)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="flex justify-between mt-4">
          <Popover open={isAdvancedFiltersOpen} onOpenChange={setIsAdvancedFiltersOpen}>
            <PopoverTrigger asChild>
              <Button variant="outline">
                <Icon name="SlidersHorizontal" className="h-4 w-4 mr-2" />
                Расширенный фильтр
                {activeFiltersCount > 0 && (
                  <Badge variant="secondary" className="ml-2">
                    {activeFiltersCount}
                  </Badge>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[350px] p-0">
              <AdvancedFiltersContent />
            </PopoverContent>
          </Popover>
          
          <div className="flex gap-2">
            <Button variant="outline" onClick={resetFilters}>
              <Icon name="X" className="h-4 w-4 mr-2" />
              Сбросить
            </Button>
            <Button onClick={applyFilters}>
              <Icon name="Filter" className="h-4 w-4 mr-2" />
              Применить фильтры
            </Button>
          </div>
        </div>
      </Card>
      
      {/* Статус загрузки */}
      {loading ? (
        renderLoading()
      ) : error ? (
        renderError()
      ) : (
        <>
          <div className="bg-white rounded-md border">
            <div className="p-4 border-b">
              <div className="text-sm text-gray-600 flex items-center">
                Найдено автомобилей: {totalCars}
              </div>
            </div>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">
                    <Checkbox 
                      checked={isAllSelected}
                      onCheckedChange={toggleSelectAll}
                      aria-label="Выбрать все автомобили"
                    />
                  </TableHead>
                  <TableHead>Автомобиль</TableHead>
                  <TableHead>Год</TableHead>
                  <TableHead>Цена/день</TableHead>
                  <TableHead>Трансмиссия</TableHead>
                  <TableHead>Топливо</TableHead>
                  <TableHead>Статус</TableHead>
                  <TableHead className="text-right">Действия</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cars.map((car) => (
                  <TableRow 
                    key={car.id}
                    className={selectedCars.includes(car.id) ? "bg-primary/5" : ""}
                  >
                    <TableCell>
                      <Checkbox 
                        checked={selectedCars.includes(car.id)}
                        onCheckedChange={() => toggleSelectCar(car.id)}
                        aria-label={`Выбрать ${car.brand} ${car.model}`}
                      />
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded overflow-hidden mr-3 bg-gray-100 flex items-center justify-center">
                          {car.imageUrl ? (
                            <img 
                              src={car.imageUrl} 
                              alt={`${car.brand} ${car.model}`} 
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <Icon name="Car" className="h-5 w-5 text-gray-400" />
                          )}
                        </div>
                        <div>
                          <div className="font-medium">{car.brand} {car.model}</div>
                          <div className="text-xs text-gray-500">{car.licensePlate || 'Нет ГРЗ'}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{car.year}</TableCell>
                    <TableCell>{car.pricePerDay.toLocaleString()} ₽</TableCell>
                    <TableCell>{car.transmission}</TableCell>
                    <TableCell>{car.fuelType}</TableCell>
                    <TableCell>
                      {getStatusBadge(car.status)}
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <Icon name="MoreVertical" className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem asChild>
                            <Link to={`/car/${car.id}`} target="_blank" className="flex items-center">
                              <Icon name="ExternalLink" className="h-4 w-4 mr-2" />
                              Просмотр на сайте
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link to={`/admin/cars/edit/${car.id}`} className="flex items-center">
                              <Icon name="Edit" className="h-4 w-4 mr-2" />
                              Редактировать
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => toggleStatus(car)} className="flex items-center">
                            <Icon name={car.status === 'available' ? "EyeOff" : "Eye"} className="h-4 w-4 mr-2" />
                            {car.status === 'available' ? 'Снять с публикации' : 'Опубликовать'}
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            onClick={() => openDeleteDialog(car)}
                            className="text-red-600 flex items-center"
                          >
                            <Icon name="Trash2" className="h-4 w-4 mr-2" />
                            Удалить
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
                
                {cars.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center py-8">
                      <div className="flex flex-col items-center">
                        <Icon name="Car" className="w-12 h-12 mb-2 text-gray-300" />
                        <p className="text-gray-500">Автомобили не найдены</p>
                        <Button 
                          variant="outline" 
                          onClick={resetFilters} 
                          className="mt-2"
                        >
                          Сбросить фильтры
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
            
            {/* Пагинация */}
            {totalPages > 1 && (
              <div className="py-4 flex justify-center">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                    
                    {[...Array(totalPages)].map((_, i) => (
                      <PaginationItem key={i}>
                        <PaginationLink
                          isActive={currentPage === i + 1}
                          onClick={() => setCurrentPage(i + 1)}
                        >
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    
                    <PaginationItem>
                      <PaginationNext 
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </div>
        </>
      )}
      
      {/* Диалог подтверждения удаления */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Удалить автомобиль?</DialogTitle>
            <DialogDescription>
              Вы уверены, что хотите удалить {selectedCar?.brand} {selectedCar?.model}? Это действие нельзя отменить.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Отмена
            </Button>
            <Button variant="destructive" onClick={handleDeleteCar}>
              Удалить
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Диалог для массовых действий */}
      <Dialog open={isBulkActionDialogOpen} onOpenChange={setIsBulkActionDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {bulkAction === 'status' ? 'Изменить статус автомобилей' : 'Удалить автомобили'}
            </DialogTitle>
            <DialogDescription>
              {bulkAction === 'status' 
                ? `Выберите новый статус для ${selectedCars.length} выбранных автомобилей.`
                : `Вы уверены, что хотите удалить ${selectedCars.length} выбранных автомобилей? Это действие нельзя отменить.`
              }
            </DialogDescription>
          </DialogHeader>
          
          {bulkAction === 'status' && (
            <div className="py-4">
              <Select value={bulkActionStatus} onValueChange={setBulkActionStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите статус" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="available">Активен</SelectItem>
                  <SelectItem value="unavailable">Скрыт</SelectItem>
                  <SelectItem value="maintenance">Техобслуживание</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsBulkActionDialogOpen(false)}>
              Отмена
            </Button>
            <Button 
              variant={bulkAction === 'delete' ? "destructive" : "default"}
              onClick={bulkAction === 'status' ? handleBulkStatusChange : handleBulkDelete}
            >
              {bulkAction === 'status' ? 'Обновить статус' : 'Удалить'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminCars;