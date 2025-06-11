import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Icon from "@/components/ui/icon";

const RewardSystem = () => {
  const levels = [
    {
      level: "Стартовый уровень",
      revenue: "до 50 000₽/мес",
      bonus: "базовая ставка",
      icon: "Star",
      color: "text-gray-600",
    },
    {
      level: "Серебряный партнер",
      revenue: "50 000 - 200 000₽/мес",
      bonus: "+5% к ставке",
      icon: "Award",
      color: "text-gray-400",
    },
    {
      level: "Золотой партнер",
      revenue: "от 200 000₽/мес",
      bonus: "+10% к ставке",
      icon: "Crown",
      color: "text-yellow-500",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Прогрессивная система вознаграждений
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Чем больше зарабатываете, тем выше ваш процент
          </p>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="font-semibold">Уровень</TableHead>
                  <TableHead className="font-semibold">
                    Оборот в месяц
                  </TableHead>
                  <TableHead className="font-semibold">Бонус</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {levels.map((level, index) => (
                  <TableRow key={index} className="hover:bg-gray-50">
                    <TableCell className="font-medium">
                      <div className="flex items-center space-x-2">
                        <Icon
                          name={level.icon}
                          size={20}
                          className={level.color}
                        />
                        <span>{level.level}</span>
                      </div>
                    </TableCell>
                    <TableCell>{level.revenue}</TableCell>
                    <TableCell>
                      <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-semibold">
                        {level.bonus}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardSystem;
