// Import components
import Transaction from "./components/Transaction";
import FormComponent from "./components/FormComponent";
import DataContext from "./data/DataContext";
import ReportComponent from "./components/ReportComponent";

// Import styling
import "./App.css";

// Import React Hooks
import { useEffect, useState } from "react";

// Import React Router (version 6)
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// Main component
function App() {  // Parent Component (Root Component)
  // Financial Management Application
  // JSX Style (inline)
  const design = {color: "red", textAlign: "center", fontSize: "1.5rem"};
  // Sample Data
  /*
  const initData = [
    {id: 1, title: "House Rental", amount: -3000},
    {id: 2, title: "Salary", amount: 50000},
  ];
  */
  // Create States (Hooks)
  const [items, setItems] = useState([]);
  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);
  // Add new item
  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem];
    });
  }
  // If state "items" has changed
  useEffect(() => {
    const amounts = items.map(items => items.amount);
    const income = amounts.filter(element => element>0).reduce((total, element) => total+=element ,0);
    const expense = (amounts.filter(element => element<0).reduce((total, element) => total+=element ,0)) * -1;

    setReportIncome(income.toFixed(2));   //  2 decimal point
    setReportExpense(expense.toFixed(2)); //  2 decimal point
  }, [items, reportIncome, reportExpense]);

  // Display components in DOM
  return (
    <DataContext.Provider value={
      {
        income: reportIncome,
        expense: reportExpense
      }
    }>
      <div className="container">
        <h1 style={design}>Income - Expense Accounting</h1>
        <Router>
          <div>
            <ul className="horizontal-menu">
              <li><Link to="/">Account-Info</Link></li>
              <li><Link to="/insert">Add-Item</Link></li>
            </ul>
            <Routes>
              <Route path='/' exact element={<ReportComponent/>}></Route>
              <Route path='/insert' element={<><FormComponent onAddItem={onAddNewItem}/> <Transaction items={items}/> </>}></Route>
            </Routes>
          </div>
        </Router>
      </div>
    </DataContext.Provider>
  );
}

export default App;