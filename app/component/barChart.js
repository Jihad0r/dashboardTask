"use client";

import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function EanrandSpendChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));

    if (!userData || !userData.spending || !userData.earning) return;

    const spending = userData.spending || [];
    const earning = userData.earning || [];

    const maxLength = Math.max(spending.length, earning.length);

    const combinedData = Array.from({ length: maxLength }, (_, i) => ({
      day: `Day ${i + 1}`,
      spending: spending[i]?.amount || 0,
      earning: earning[i]?.amount || 0,
    }));

    setData(combinedData);
  }, []);

  return (
    <div className="w-full lg:w-1/2 mb-5 barchart">
    <div style={{ width: "100%", height: 400 }}>
       <h2 className="font-bold">Spending and Earning</h2>
      <ResponsiveContainer width="100%" height="100%" className="bg-white rounded-2xl my-2  p-5">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="spending" stroke="#ff4d4f" name="Spending" />
          <Line type="monotone" dataKey="earning" stroke="#52c41a" name="Earning" />
        </LineChart>
      </ResponsiveContainer>
    </div></div>
  );
}
