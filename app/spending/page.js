"use client";
import { useState, useEffect } from "react";
import Protected from "../component/protect";
import { sortAndFilterData } from "../component/sortData"; // 👈 import function
import { FaArrowDownLong } from "react-icons/fa6";
import { FaArrowUpLong } from "react-icons/fa6";

const headers = [
  { label: "amount", key: "amount" },
  { label: "for", key: "for" },
  { label: "reason", key: "reason" },
  { label: "date", key: "date" },
];

function TableRow({ row }) {
  return (
    <div className="flex gap-2 justify-between  p-5 border-b">
      {headers.map(({ key }) => (
        <span className="w-unset lg:w-40" key={key}>
          {row[key]}
        </span>
      ))}
    </div>
  );
}


export default function Spending() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
  const getDataFromLocalStorage = () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user?.spending) setData(user.spending);
    } catch (error) {
      console.error("Failed to load from localStorage:", error);
    }
  };

  if (typeof window !== "undefined") {
    getDataFromLocalStorage();
  }
}, []);


  const handleSort = (key) => {
    if (sortKey === key) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const filteredData = sortAndFilterData(data, search, sortKey, sortOrder); // ✅

  return (
    <Protected>
      <div className="p-5 bg-white rounded-2xl text-sm">
        <div className="flex justify-between">   <h1 className="text-3xl font-bold mb-5">Spending</h1>
        <input
          type="text"
          placeholder="Search..."
          className="border p-2 mb-4 rounded-2xl"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        /></div>
     
        

        <div className="flex justify-between p-5 border-b font-bold cursor-pointer">
          {headers.map(({ label, key }) => (
            <span
              className="w-20 md:w-40 hover:underline"
              key={key}
              onClick={() => handleSort(key)}
            >
              {label}
              {sortKey === key && (sortOrder === "asc" ? <FaArrowUpLong className="inline"/> : <FaArrowDownLong className="inline"/>)}
            </span>
          ))}
        </div>

        {filteredData.length > 0 ? (
          filteredData.map((spend, idx) => <TableRow row={spend} key={idx} />)
        ) : (
          <p className="mt-4">No matching records found.</p>
        )}
      </div>
    </Protected>
  );
}
