import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";
import type { SwitchModel } from "@/types/models";
import { useIsMobile } from "@/hooks/useIsMobile"; // Импортируем хук

// Вспомогательная функция для характеристик
function getSpecs(model: SwitchModel) {
  const name = model.name.toLowerCase();
  const specs = {
    baseTports: 0,
    sfpSlots: 0,
    sfpPlusSlots: 0,
    poeWatts: 0 as number | string,
    expansionSlots: 0,
    powerSupplies: 2,
    throughput: 0,
    hasConsole: false,
    hasUsb: false,
    hasOobManagement: false,
    sfpOnly: false,
  };

  if (name.includes("24t") || name.includes("24p")) {
    specs.baseTports = 24;
    specs.sfpPlusSlots = 6;
    specs.throughput = 448;
    specs.expansionSlots = 1;
  } else if (name.includes("48t") || name.includes("48p")) {
    specs.baseTports = 48;
    specs.sfpPlusSlots = 6;
    specs.throughput = 496;
    specs.expansionSlots = 1;
  } else if (name.includes("24s")) {
    specs.sfpSlots = 24;
    specs.sfpPlusSlots = 4;
    specs.throughput = 688;
    specs.expansionSlots = 2;
    specs.sfpOnly = true;
    specs.hasConsole = true;
    specs.hasUsb = true;
    specs.hasOobManagement = true;
  } else if (name.includes("48s")) {
    specs.sfpSlots = 48;
    specs.sfpPlusSlots = 4;
    specs.throughput = 216;
    specs.expansionSlots = 2;
    specs.sfpOnly = true;
    specs.hasConsole = true;
    specs.hasUsb = true;
    specs.hasOobManagement = true;
  }

  if (name.includes("24p")) {
    specs.poeWatts = "380Вт/760Вт";
  } else if (name.includes("48p")) {
    specs.poeWatts = "380Вт/720Вт/1440Вт";
  }

  return specs;
}

function formatThroughput(gbps: number) {
  return gbps >= 1000 ? `${(gbps / 1000).toFixed(2)} Тбит/с` : `${gbps} Гбит/с`;
}

interface DeviceCard4530Props {
  model: SwitchModel;
  index: number;
  isInCompareList: boolean;
  onToggleCompare: (modelId: string) => void;
  onNavigate: (url: string) => void;
}

export default function DeviceCard4530({
  model,
  index,
  isInCompareList,
  onToggleCompare,
  onNavigate,
}: DeviceCard4530Props) {
  const specs = getSpecs(model);
  const isMobile = useIsMobile();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      {...(!isMobile && {
        whileInView: { opacity: 1, y: 0, scale: 1 },
        viewport: { once: true, amount: 0.15 },
      })}
      transition={{
        duration: 0.44,
        delay: index * 0.07,
        ease: [0.23, 1, 0.32, 1],
      }}
      whileHover={{
        y: -7,
        boxShadow:
          "0px 8px 32px rgba(56,110,170,0.08), 0px 2px 8px rgba(0,0,0,0.05)",
        scale: 1.025,
        borderColor: "#87BFFF",
        transition: { duration: 0.28 },
      }}
      className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 hover:border-blue-300 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col w-full max-w-full"
    >
      {/* Верхушка */}
      <div className="p-3 sm:p-4 pb-2">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex-1 min-w-0">
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-1 truncate">
              {model.name}
            </h3>
            <div className="flex flex-wrap gap-1">
              {(typeof specs.poeWatts === "string" || specs.poeWatts > 0) && (
                <span className="inline-flex items-center px-1.5 sm:px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  <Icon name="Zap" size={13} className="mr-1" />
                  PoE
                </span>
              )}
              {specs.sfpOnly && (
                <span className="inline-flex items-center px-1.5 sm:px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  <Icon name="Lightbulb" size={13} className="mr-1" />
                  SFP only
                </span>
              )}
              {specs.powerSupplies > 1 && (
                <span className="inline-flex items-center px-1.5 sm:px-2 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                  <Icon name="Battery" size={13} className="mr-1" />
                  Dual PSU
                </span>
              )}
            </div>
          </div>
          <Checkbox
            id={`compare-${model.id}`}
            checked={isInCompareList}
            onCheckedChange={() => onToggleCompare(model.id)}
            aria-label="Добавить в сравнение"
            className="mt-0.5 scale-90 sm:scale-100 lg:scale-110"
          />
        </div>
      </div>

      {/* Основные характеристики */}
      <div className="px-3 sm:px-4 pb-3 flex-1">
        <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm lg:text-base">
          {specs.baseTports > 0 && (
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Base-T порты:</span>
              <span className="font-medium">{specs.baseTports}</span>
            </div>
          )}
          {(specs.sfpSlots > 0 || specs.sfpPlusSlots > 0) && (
            <div className="flex justify-between items-center">
              <span className="text-gray-600">SFP слоты:</span>
              <span className="font-medium">
                {specs.sfpSlots > 0 && `${specs.sfpSlots} SFP`}
                {specs.sfpSlots > 0 && specs.sfpPlusSlots > 0 && " + "}
                {specs.sfpPlusSlots > 0 && `${specs.sfpPlusSlots} SFP+`}
              </span>
            </div>
          )}
          {(typeof specs.poeWatts === "string" || specs.poeWatts > 0) && (
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Бюджет PoE/PoE+:</span>
              <span className="font-medium">
                {typeof specs.poeWatts === "string"
                  ? specs.poeWatts
                  : `${specs.poeWatts}Вт`}
              </span>
            </div>
          )}
          {specs.expansionSlots > 0 && (
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Слоты расширения:</span>
              <span className="font-medium">{specs.expansionSlots}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span className="text-gray-600">Блоки питания:</span>
            <span className="font-medium">{specs.powerSupplies}</span>
          </div>
          {specs.throughput > 0 && (
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Пропускная способность:</span>
              <span className="font-medium">
                {formatThroughput(specs.throughput)}
              </span>
            </div>
          )}
          {(specs.hasConsole || specs.hasUsb || specs.hasOobManagement) && (
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Управление:</span>
              <div className="flex items-center space-x-2">
                {specs.hasConsole && (
                  <Icon
                    name="Terminal"
                    size={16}
                    className="text-gray-500"
                    title="RJ45 консоль"
                  />
                )}
                {specs.hasUsb && (
                  <Icon
                    name="Usb"
                    size={16}
                    className="text-gray-500"
                    title="USB порт"
                  />
                )}
                {specs.hasOobManagement && (
                  <Icon
                    name="Settings"
                    size={16}
                    className="text-gray-500"
                    title="OOB-management"
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Кнопки */}
      <div className="px-3 sm:px-4 pb-3 sm:pb-4 flex flex-col sm:flex-row gap-2 mt-auto">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onNavigate(model.url)}
          className="flex-1 min-w-0 text-sm lg:text-base py-2 sm:py-2.5"
        >
          Подробнее
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="flex-1 min-w-0 sm:ml-2 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-400 text-sm lg:text-base py-2 sm:py-2.5"
          onClick={() => onNavigate("/partners")}
        >
          Выбрать
        </Button>
      </div>
    </motion.div>
  );
}
