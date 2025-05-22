import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

interface AlcoholData {
  hour: number;
  light: number;
  moderate: number;
  heavy: number;
}

// Данные о выветривании алкоголя в промилле (‰) со временем
const alcoholMetabolismData: AlcoholData[] = [
  { hour: 0, light: 0.5, moderate: 1.2, heavy: 2.0 },
  { hour: 1, light: 0.4, moderate: 1.0, heavy: 1.8 },
  { hour: 2, light: 0.3, moderate: 0.8, heavy: 1.6 },
  { hour: 3, light: 0.2, moderate: 0.6, heavy: 1.4 },
  { hour: 4, light: 0.1, moderate: 0.4, heavy: 1.2 },
  { hour: 5, light: 0.0, moderate: 0.2, heavy: 1.0 },
  { hour: 6, light: 0.0, moderate: 0.0, heavy: 0.8 },
  { hour: 7, light: 0.0, moderate: 0.0, heavy: 0.6 },
  { hour: 8, light: 0.0, moderate: 0.0, heavy: 0.4 },
  { hour: 9, light: 0.0, moderate: 0.0, heavy: 0.2 },
  { hour: 10, light: 0.0, moderate: 0.0, heavy: 0.0 },
];

export default function AlcoholMetabolismChart() {
  return (
    <div className="w-full h-96 bg-gradient-to-br from-[#2B3144] to-[#3A3D60] p-6 rounded-xl border-2 border-[#9b87f5]/50 shadow-lg">
      <h3 className="text-xl font-bold text-white mb-6 text-center">
        График выветривания алкоголя
      </h3>
      <div className="text-xs text-gray-300 mb-6">
        <p className="mb-2">
          <span className="inline-block w-3 h-3 bg-[#9b87f5] mr-2 rounded-full"></span>
          Легкое опьянение: 1-2 бокала вина (0.5‰)
        </p>
        <p className="mb-2">
          <span className="inline-block w-3 h-3 bg-[#D6BCFA] mr-2 rounded-full"></span>
          Среднее опьянение: 3-4 бокала вина (1.2‰)
        </p>
        <p>
          <span className="inline-block w-3 h-3 bg-[#7E69AB] mr-2 rounded-full"></span>
          Сильное опьянение: более 5 бокалов вина (2.0‰)
        </p>
      </div>
      <ResponsiveContainer width="100%" height="70%">
        <LineChart
          data={alcoholMetabolismData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#444" opacity={0.3} />
          <XAxis
            dataKey="hour"
            label={{
              value: "Время (часы)",
              position: "insideBottom",
              offset: 0,
              fill: "#D6BCFA",
              fontSize: 12,
              dy: 10,
            }}
            tick={{ fill: "#D6BCFA" }}
          />
          <YAxis
            label={{
              value: "Промилле (‰)",
              angle: -90,
              position: "insideLeft",
              fill: "#D6BCFA",
              fontSize: 12,
              dx: -10,
            }}
            tick={{ fill: "#D6BCFA" }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1E2434",
              borderColor: "#9b87f5",
              color: "white",
            }}
            formatter={(value: number) => [`${value}‰`, ""]}
            labelFormatter={(hour) => `Через ${hour} часов`}
          />
          <Legend
            wrapperStyle={{ color: "white" }}
            formatter={(value) => (
              <span style={{ color: "#D6BCFA" }}>
                {value === "light"
                  ? "Легкое опьянение"
                  : value === "moderate"
                    ? "Среднее опьянение"
                    : "Сильное опьянение"}
              </span>
            )}
          />
          <Line
            type="monotone"
            dataKey="light"
            stroke="#9b87f5"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="moderate"
            stroke="#D6BCFA"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="heavy"
            stroke="#7E69AB"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
