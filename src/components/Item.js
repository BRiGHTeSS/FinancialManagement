// Import PropType (to check type of properties)
import PropTypes from "prop-types";

// Import style (for status)
import "./Item.css";

// Create a Component with Properties
const Item = (props) => {
  // Props Destructuring (Object -> Variables)
  const { title, amount } = props;

  // Check Income or Expense (Ternary Operator)?
  const status = amount < 0 ? "expense" : "income";
  // Expense and Income Symbol (negative and positive)
  const symbol = amount < 0 ? "-" : "+";

  // Format number function (add commas in every numbers that greater than ฿999.99)
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }
  // Display the data(properties) from "data" Array
  return (
    <li className={status}>{title}<span>{symbol}{formatNumber(Math.abs(amount))}</span></li>
  );
};

// Validation type of properties in Item component (by PropTypes)
Item.propTypes = {
  title: PropTypes.string.isRequired, // title should be STRING and need to IDENTIFY EVERY TIME
  amount: PropTypes.number.isRequired, // amount should be NUMBER and need to IDENTIFY EVERY TIME
};
export default Item;
