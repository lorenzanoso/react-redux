import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionBudget from "../redux/actions/actionBudget";

function Budget() {
  const totalBudget = useSelector((state) => state.budget);
  const { depositMoney, withDrawMoney } = bindActionCreators(
    actionBudget,
    useDispatch()
  );

  return (
    <div className="family-budget">
      <h1>BUDGET: {totalBudget}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withDrawMoney(500)}>Withdrawal</button>
    </div>
  );
}

export default Budget;
