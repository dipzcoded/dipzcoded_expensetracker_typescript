import React, { useContext } from "react";
import { TransactionState, GlobalContext } from "../context/GlobalState";
import { Types } from "../context/AppReducer";

const Transaction: React.FC<TransactionState> = ({ text, amount, id }) => {
  const { dispatch } = useContext(GlobalContext);

  const deleteTransactionByID = (e: React.MouseEvent) => {
    dispatch({
      type: Types.Delete,
      id,
    });
  };
  return (
    <li className={`${amount < 0 ? "minus" : "plus"}`}>
      {text}{" "}
      <span>
        {amount < 0 ? "-" : "+"}${Math.abs(amount)}
      </span>
      <button className="delete-btn" onClick={deleteTransactionByID}>
        x
      </button>
    </li>
  );
};

export default Transaction;
