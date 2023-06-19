// Import Component
import Item from "./Item";

// Import Styling
import "./Transaction.css";

const Transaction = (props) => {
  const { items } = props;
  // Display the data from "data" Array (of Object Properties) (by map to iterate over each element in "data" array)
  return (
    <div>
      <ul className="item-list">
        {items.map((element) => {
          // return <Item title={element.title} amount={element.amount}/>
          return <Item {...element} key={element.id} />; // Spread Operator and Generate key props function
        })}
      </ul>
    </div>
  );
};

export default Transaction;
