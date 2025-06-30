import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

export default function SettingsTab() {
  const [settings, setSettings] = useState({
    siteName: "Avito",
    siteDescription: "Объявления в России",
    maintenanceMode: false,
    newRegistrations: true,
    emailNotifications: true,
    smsNotifications: false,
    autoModeration: true,
    maxPhotosPerAd: 10,
    adDuration: 30,
    supportEmail: "support@avito.ru",
    supportPhone: "+7 (800) 100-00-00",
  });

  const handleSettingChange = (key: string, value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Основные настройки</CardTitle>
          <CardDescription>Основные параметры работы платформы</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="siteName">Название сайта</Label>
              <Input
                id="siteName"
                value={settings.siteName}
                onChange={(e) =>
                  handleSettingChange("siteName", e.target.value)
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="supportEmail">Email поддержки</Label>
              <Input
                id="supportEmail"
                type="email"
                value={settings.supportEmail}
                onChange={(e) =>
                  handleSettingChange("supportEmail", e.target.value)
                }
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="siteDescription">Описание сайта</Label>
            <Textarea
              id="siteDescription"
              value={settings.siteDescription}
              onChange={(e) =>
                handleSettingChange("siteDescription", e.target.value)
              }
              rows={3}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="supportPhone">Телефон поддержки</Label>
              <Input
                id="supportPhone"
                value={settings.supportPhone}
                onChange={(e) =>
                  handleSettingChange("supportPhone", e.target.value)
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="maxPhotos">Максимум фото в объявлении</Label>
              <Input
                id="maxPhotos"
                type="number"
                value={settings.maxPhotosPerAd}
                onChange={(e) =>
                  handleSettingChange(
                    "maxPhotosPerAd",
                    parseInt(e.target.value),
                  )
                }
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Настройки системы</CardTitle>
          <CardDescription>
            Управление основными функциями платформы
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Режим обслуживания</Label>
              <div className="text-sm text-muted-foreground">
                Временно отключить доступ к сайту для пользователей
              </div>
            </div>
            <Switch
              checked={settings.maintenanceMode}
              onCheckedChange={(checked) =>
                handleSettingChange("maintenanceMode", checked)
              }
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Новые регистрации</Label>
              <div className="text-sm text-muted-foreground">
                Разрешить регистрацию новых пользователей
              </div>
            </div>
            <Switch
              checked={settings.newRegistrations}
              onCheckedChange={(checked) =>
                handleSettingChange("newRegistrations", checked)
              }
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Автоматическая модерация</Label>
              <div className="text-sm text-muted-foreground">
                Включить ИИ-модерацию для новых объявлений
              </div>
            </div>
            <Switch
              checked={settings.autoModeration}
              onCheckedChange={(checked) =>
                handleSettingChange("autoModeration", checked)
              }
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Уведомления</CardTitle>
          <CardDescription>Настройки системы уведомлений</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Email уведомления</Label>
              <div className="text-sm text-muted-foreground">
                Отправлять уведомления по электронной почте
              </div>
            </div>
            <Switch
              checked={settings.emailNotifications}
              onCheckedChange={(checked) =>
                handleSettingChange("emailNotifications", checked)
              }
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>SMS уведомления</Label>
              <div className="text-sm text-muted-foreground">
                Отправлять SMS уведомления пользователям
              </div>
            </div>
            <Switch
              checked={settings.smsNotifications}
              onCheckedChange={(checked) =>
                handleSettingChange("smsNotifications", checked)
              }
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Правила объявлений</CardTitle>
          <CardDescription>Настройки для размещения объявлений</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="adDuration">Срок размещения (дни)</Label>
              <Input
                id="adDuration"
                type="number"
                value={settings.adDuration}
                onChange={(e) =>
                  handleSettingChange("adDuration", parseInt(e.target.value))
                }
              />
              <div className="text-sm text-muted-foreground">
                Количество дней, в течение которых объявление активно
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end space-x-2">
        <Button variant="outline">
          <Icon name="RotateCcw" size={16} className="mr-2" />
          Сбросить
        </Button>
        <Button>
          <Icon name="Save" size={16} className="mr-2" />
          Сохранить настройки
        </Button>
      </div>
    </div>
  );
}
