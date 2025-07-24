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
    
    <div className="w-full lg:w-1/2 p-5">
    <div style={{width:"100%", height: 400 }} className="m-auto ">
      <h2 className="font-bold">Cost of Living</h2>
      <ResponsiveContainer width="100%" height="100%" className="bg-white mt-2 p-2 rounded-2xl">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="category"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend layout="vertical" align="right" verticalAlign="middle" />
        </PieChart>
      </ResponsiveContainer>
    </div></div>
  );
}
