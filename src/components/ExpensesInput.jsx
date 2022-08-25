import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionExpenses from "../redux/actions/actionExpenses";
import * as actionBudget from "../redux/actions/actionBudget";

function ExpensesInput() {
  const [day, setDay] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);

  const { spendMoney } = bindActionCreators(actionExpenses, useDispatch());
  const { withDrawMoney } = bindActionCreators(actionBudget, useDispatch());

  const handleSubmit = (e) => {
    e.preventDefault();

    spendMoney(day, name, amount);
    withDrawMoney(amount);
  };
  return (
    <form>
      <div>
        <input
          value={day}
          onChange={(e) => setDay(e.target.value)}
          style={{ width: "100px" }}
          placeholder="Enter Date"
        />
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "300px" }}
          placeholder="Enter Name of action"
        />
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ width: "100px" }}
          placeholder="Enter Amount"
        />
      </div>
      <button onClick={handleSubmit}>ADD</button>
    </form>
  );
}

export default ExpensesInput;
