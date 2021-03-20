import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { TransactionState } from "../context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const {
    state: { transactions },
  } = useContext(GlobalContext);
  // transaction list output
  const transactionList = transactions.map((el: TransactionState) => (
    <Transaction key={el.id} id={el.id} text={el.text} amount={el.amount} />
  ));
  return (
    <>
      <h3>History</h3>
      <ul className="list">{transactionList}</ul>
    </>
  );
};

export default TransactionList;
