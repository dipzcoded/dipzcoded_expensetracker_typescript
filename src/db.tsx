import { TransactionState } from "./context/GlobalState";
export const saveToLocalStorage = (data: TransactionState[]) => {
  let transactions = JSON.parse(localStorage.getItem("transactions") || "[]");
  if (!transactions.length) {
    localStorage.setItem("transactions", JSON.stringify(data));
  } else {
    localStorage.setItem("transactions", JSON.stringify(data));
  }
};
