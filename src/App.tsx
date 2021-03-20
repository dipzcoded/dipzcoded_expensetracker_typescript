import React from "react";
// styling
import "./App.css";

// components
import Header from "./component/Header";
import Balance from "./component/Balance";
import IncomeExpenses from "./component/IncomeExpenses";
import TransactionList from "./component/TransactionList";
import AddTransaction from "./component/AddTransaction";
// context api
import { GlobalProvider } from "./context/GlobalState";
import { saveToLocalStorage } from "./db";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
