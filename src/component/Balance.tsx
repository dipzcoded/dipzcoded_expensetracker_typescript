import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const {
    state: { transactions },
  } = useContext(GlobalContext);
  let amount: number[] = [];
  let total: number;
  amount = transactions.map(({ amount }) => amount);
  total = amount.reduce((prevVal, nextVal) => prevVal + nextVal, 0);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total.toFixed(2)}</h1>
    </>
  );
};

export default Balance;
