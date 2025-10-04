import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const CustomBarChart = ({ data = [], xKey }) => {
  // Early return for empty data
  if (!data?.length) {
    return (
      <div className="bg-white mt-6 p-4 rounded-lg border border-gray-200 text-sm text-gray-500">
        No data to display
      </div>
    );
  }

  // Infer X key if not provided (supports both shapes)
  const inferredXKey =
    xKey ?? (data[0]?.category ? "category" : "month");

  // Alternate colors per bar
  const getBarColor = (index) => (index % 2 === 0 ? "#875cf5" : "#cfbefb");

  // Custom tooltip (works with either 'category' or 'month')
  const CustomTooltip = ({ active, payload }) => {
    if (!active || !payload?.length) return null;
    const d = payload[0].payload;
    const label = d[inferredXKey] ?? "Item";
    return (
      <div className="bg-white shadow-md rounded-lg p-2 border border-gray-300">
        <p className="text-xs font-semibold text-purple-800 mb-1">{label}</p>
        <p className="text-sm text-gray-600">
          Amount:{" "}
          <span className="text-sm font-medium text-gray-900">
            ${d.amount}
          </span>
        </p>
      </div>
    );
  };

  return (
    <div className="bg-white mt-6 rounded-lg">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid stroke="none" />

          <XAxis
            dataKey={inferredXKey}
            tick={{ fontSize: 12, fill: "#555" }}
            stroke="none"
          />
          <YAxis
            tick={{ fontSize: 12, fill: "#555" }}
            stroke="none"
          />

          <Tooltip content={<CustomTooltip />} />

          <Bar
            dataKey="amount"
            radius={[10, 10, 0, 0]}
            // Proper hover style for bars
            activeBar={{ fill: "#a78bfa" }}
          >
            {data.map((entry, index) => (
              <Cell
                key={entry?.id ?? entry?.[inferredXKey] ?? index}
                fill={getBarColor(index)}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;