import React, { useState, useContext, useEffect } from "react";
import { Types } from "../context/AppReducer";
import { GlobalContext, TransactionState } from "../context/GlobalState";
import { saveToLocalStorage } from "../db";
const AddTransaction = () => {
  const [text, setText] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const {
    dispatch,
    state: { transactions },
  } = useContext(GlobalContext);

  let createTransaction: (e: React.FormEvent) => void;
  createTransaction = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: transactions.length
        ? transactions[transactions.length - 1].id + 1
        : 0,
      text,
      amount,
    };
    dispatch({ type: Types.Create, payload: newTransaction });
    setText("");
    setAmount(0);
  };

  useEffect(() => {
    saveToLocalStorage(transactions);
  }, [transactions]);

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={createTransaction}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text...."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.valueAsNumber)}
            placeholder="Enter amount...."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
