// Import React Use Context (Hook)
import { useContext } from "react";

// Import Data
import DataContext from "../data/DataContext";

// Import Styling
import "./ReportComponent.css"

const ReportComponent = () => {
    // Destructuring values from DataContext
    const {income, expense} = useContext(DataContext);
    // Format number function (add commas in every numbers that greater than ฿999.99)
    const formatNumber = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }
    return (
        <div>
            <h4>Balance (Baht)</h4>
            <h1>฿{formatNumber((income-expense).toFixed(2))}</h1>
            <div className="report-container">
                <div>
                    <h4>Total Income</h4>
                    <p className="report plus">฿{formatNumber(income)}</p>
                </div>
                <div>
                    <h4>Total Expense</h4>
                    <p className="report minus">฿{formatNumber(expense)}</p>
                </div>
            </div>
        </div>
    );
}

export default ReportComponent;