import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#0088FE", "#FF8042", "#00C49F", "#FFBB28", "#FF4444"];

const ExpenseChart = ({ expenses }) => {
  const data = expenses.reduce((acc, curr) => {
    const found = acc.find((item) => item.category === curr.category);
    if (found) {
      found.value += curr.amount;
    } else {
      acc.push({ category: curr.category, value: curr.amount });
    }
    return acc;
  }, []);

  return (
    <div className="chart-container">
      <h3>Biểu đồ chi tiêu</h3>
      <div className="charts-row">
        {/* Pie Chart */}
        <div className="chart-item">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="category"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="chart-item">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ExpenseChart;
