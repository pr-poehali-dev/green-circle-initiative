import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import CategoriesTab from "@/components/avito/admin/tabs/CategoriesTab";
import CitiesTab from "@/components/avito/admin/tabs/CitiesTab";
import FinanceTab from "@/components/avito/admin/tabs/FinanceTab";
import SettingsTab from "@/components/avito/admin/tabs/SettingsTab";
import StatsTab from "@/components/avito/admin/tabs/StatsTab";
import UsersTab from "@/components/avito/admin/tabs/UsersTab";

export default function AvitoAdmin() {
  const [activeTab, setActiveTab] = useState("stats");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Icon name="Settings" size={28} />
              Avito Admin Panel
            </CardTitle>
            <CardDescription>Управление платформой Avito</CardDescription>
          </CardHeader>
        </Card>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="stats" className="flex items-center gap-2">
              <Icon name="BarChart3" size={16} />
              Статистика
            </TabsTrigger>
            <TabsTrigger value="users" className="flex items-center gap-2">
              <Icon name="Users" size={16} />
              Пользователи
            </TabsTrigger>
            <TabsTrigger value="categories" className="flex items-center gap-2">
              <Icon name="Grid3X3" size={16} />
              Категории
            </TabsTrigger>
            <TabsTrigger value="cities" className="flex items-center gap-2">
              <Icon name="MapPin" size={16} />
              Города
            </TabsTrigger>
            <TabsTrigger value="finance" className="flex items-center gap-2">
              <Icon name="DollarSign" size={16} />
              Финансы
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Icon name="Cog" size={16} />
              Настройки
            </TabsTrigger>
          </TabsList>

          <TabsContent value="stats">
            <StatsTab />
          </TabsContent>

          <TabsContent value="users">
            <UsersTab />
          </TabsContent>

          <TabsContent value="categories">
            <CategoriesTab />
          </TabsContent>

          <TabsContent value="cities">
            <CitiesTab />
          </TabsContent>

          <TabsContent value="finance">
            <FinanceTab />
          </TabsContent>

          <TabsContent value="settings">
            <SettingsTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
