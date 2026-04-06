import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", revenue: 400 },
  { name: "Feb", revenue: 800 },
  { name: "Mar", revenue: 600 },
  { name: "Apr", revenue: 1200 },
  { name: "May", revenue: 900 },
];

const Chart = () => {
  return (
    <div className="tw-bg-white tw-p-5 tw-rounded-2xl tw-shadow-lg tw-shadow-gray-300 tw-mt-6">
      <h2 className="tw-text-lg tw-font-semibold tw-mb-4 tw-text-gray-700">
        Revenue Overview
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="revenue" stroke="#ef4444" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;