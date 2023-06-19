// Import useState and useEffect (Hooks)
import { useState, useEffect } from "react";

// Import styling
import "./FormComponent.css";

// Universally Unique Identifier
import { v4 as uuidv4 } from 'uuid';

// Create a form component
const FormComponent = (props) => {
    // Create States (Hook)
    const [title, setTitle] = useState("");     // Title State
    const [amount, setAmount] = useState(0);   // Amount State
    const [formValid, setFormValid] = useState(false);  // Form Valid State

    // Create functions
    const inputTitle = (event) => { // Get value from Item input
        setTitle(event.target.value);   // Saved value in title State
    }
    const inputAmount = (event) => { // Get value from Amount input
        setAmount(event.target.value);  // Saved value in amount State
    }
    const saveItem = (event) => {   // Click submit button to save the values
        event.preventDefault();
        const itemData = {  // Save values from title and amount State inside this Object
            id: uuidv4(),
            title: title,
            amount: Number(amount)
        };
        props.onAddItem(itemData);
        // After saved the values inside an Object then back to default values
        setTitle("");
        setAmount(0);
    }
    // Check title is empty? and amount is 0?
    useEffect(() => {
        const checkData = title.trim().length>0 && amount!==0;
        setFormValid(checkData);
    }, [title, amount]);

    return(
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>Items</label>
                    <input type="text" placeholder="Please identify your item name" onChange={inputTitle} value={title}/>
                </div>
                <div className="form-control">
                    <label>Amount</label>
                    <input type="number" placeholder="(+ income, - expense)" onChange={inputAmount} value={amount}/>
                </div>
                <div>
                    <button type="submit" className="btn" disabled={!formValid}>Add Item</button>
                </div>
            </form>
        </div>
    );
}

// Export to main file (App.js)
export default FormComponent;