import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpenses = () => {
  const {
    state: { transactions },
  } = useContext(GlobalContext);
  let income: number;
  let expense: number;
  income = transactions
    .map((el) => el.amount)
    .filter((amount) => amount > -1)
    .reduce((prevVal, nextVal) => prevVal + nextVal, 0);
  expense =
    transactions
      .map((el) => el.amount)
      .filter((amount) => amount < 0)
      .reduce((prevVal, nextVal) => prevVal + nextVal, 0) * -1;

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${income.toFixed(2)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${expense.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
