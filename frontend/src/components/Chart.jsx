import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function Chart({ data }) {
  if (!data || data.length === 0) {
    return <p style={{ fontSize: "12px", color: "#6b7280" }}>No data to show.</p>;
  }

  const byMonth = {};

  data.forEach((item) => {
    if (!item.date) return;
    const monthKey = item.date.slice(0, 7);
    if (!byMonth[monthKey]) {
      byMonth[monthKey] = 0;
    }
    byMonth[monthKey] += item.cost_usd;
  });

  const chartData = Object.entries(byMonth).map(([month, cost]) => ({
    month,
    cost,
  }));

  return (
    <BarChart width={800} height={260} data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="cost" />
    </BarChart>
  );
}

export default Chart;
