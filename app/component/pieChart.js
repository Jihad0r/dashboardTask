"use client";

import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28CFE', '#FF69B4', '#FFA500'];

export default function LivingChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      const storedData = localStorage.getItem("user");
      if (storedData) {
        const parsed = JSON.parse(storedData);
        const living = parsed?.living;

        if (living && typeof living === "object") {
          const transformed = Object.entries(living).map(([key, value]) => ({
            category: key,
            value
          }));
          setData(transformed);
        }
      }
    } catch (error) {
      console.error("Error parsing living data from localStorage:", error);
    }
  }, []);

  return (
    <div className="w-full lg:w-1/2 p-2  md:p-5">
      <h2 className="text-lg font-semibold mb-2">Cost of Living</h2>
      <div className="h-100 rounded-xl bg-white shadow-sm p-2">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="category"
              cx="50%"
              cy="50%"
              outerRadius={70} // Smaller radius
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend layout="horizontal" verticalAlign="bottom" height={36}/>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
