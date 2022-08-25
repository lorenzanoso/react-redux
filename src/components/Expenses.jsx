import React from "react";
import { useSelector } from "react-redux";

function Expenses() {
  const allExpenses = useSelector((state) => state.expense);
  return allExpenses.map((data, index) => (
    <div key={index} style={{ margin: "20px" }}>
      <span>{data.day} - </span>
      <span>{data.name} - </span>
      <span>{data.amount}</span>
    </div>
  ));
}

export default Expenses;
