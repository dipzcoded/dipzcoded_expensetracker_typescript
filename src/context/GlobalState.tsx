import React, { createContext, useReducer, Dispatch } from "react";
import { TransactionActions, transactionReducer } from "./AppReducer";

// interface
export type TransactionState = {
  id: number;
  text: string;
  amount: number;
};

export type TransactionObject = {
  transactions: TransactionState[];
};
// initialState
let initialState: TransactionObject;
initialState = {
  transactions: JSON.parse(localStorage.getItem("transactions") || "[]"),
};

// Create Context
export const GlobalContext = createContext<{
  state: TransactionObject;
  dispatch: Dispatch<TransactionActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

// global reducer
const mainReducer = (
  { transactions }: TransactionObject,
  action: TransactionActions
) => ({
  transactions: transactionReducer(transactions, action),
});

// Provider component
export const GlobalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
