"use client";
import { Provider } from "react-redux";
import { store } from "./component/store";
import Protected from "./component/protect";
import { useEffect, useState } from "react";
import LivingChart from "./component/pieChart";
import EanrandSpendChart from "./component/barChart";

export default function Dashboard() {
  const [spending, setSpending] = useState([]);
  
  const [earning, setEarning] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.earning) {
      setEarning(user.earning.slice(0, 3));
      setSpending(user.spending.slice(0, 3));
    }
  }, []);

  return (
    <Provider store={store}>
      <Protected>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex flex-col lg:flex-row">
        <div className="p-5 rounded-2xl flex-1/2">
          <h2 className="font-bold">Spending</h2>
          <div className="p-2 md:p-5 bg-white mt-2 rounded-2xl">
                 <div class="flex justify-between p-5 border-b font-bold cursor-pointer"><span class="w-15 md:w-30">amount</span>
          <span class="w-15 md:w-30">date</span><span class="w-15 md:w-30">reason</span></div> {spending.map((row, index) => (
            <div key={index} className="flex justify-between p-5 border-b">
              <span className="w-15 md:w-30">{row.amount}</span>
              <span className="w-15 md:w-30">{row.date}</span>
              <span className="w-15 md:w-30">{row.reason}</span>
            </div>
          ))}</div>
        </div>
        <div className="p-5 rounded-2xl mt-10 md:mt-0 flex-1/2">
          <h2 className="font-bold">Earning</h2>
          <div className=" p-2 md:p-5 bg-white mt-2 rounded-2xl">
          <div class="flex justify-between p-5 border-b font-bold cursor-pointer"><span class="w-15 md:w-30 ">amount</span>
          <span class="w-15 md:w-30">date</span><span class="w-15 md:w-30">reason</span></div>
          {earning.map((row, index) => (
            <div key={index} className="flex justify-between p-5  border-b">
              <span className="w-15 md:w-30">{row.amount}</span>
              <span className="w-15 md:w-30">{row.date}</span>
              <span className="w-15 md:w-30">{row.reason}</span>
            </div>
          ))}</div>
        </div></div>
        
        <div className="flex flex-col lg:flex-row">
          <EanrandSpendChart className="mt-10 md:mt-0 flex-1/2"/>
          <LivingChart className="mt-10 md:mt-0 flex-1/2"/>
        </div>
      </Protected>
    </Provider>
  );
}
