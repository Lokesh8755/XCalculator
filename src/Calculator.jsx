import React, { useState } from "react";
import "./Calculator.css"; // Optional: For styling (add your styles if needed)

const Calculator = () => {
    const [expression, setExpression] = useState(""); // will Track the input expression
    const [result, setResult] = useState(""); //  will Track the result

    // Handles button clicks
    const handleClick = (value) => {
        if (value === "C") {
            setExpression(""); // Clear everything
            setResult("");
        } else if (value === "=") {
            if (!expression.trim()) {
                setResult("Error"); // Handle empty expression
                return;
            }
            try {
                const evaluated = eval(expression); // Evaluate the expression
                setResult(evaluated === Infinity ? "Infinity" : evaluated.toString()); // Handle division by zero
            } catch (error) {
                setResult("Error"); // Catch invalid expressions
            }
        } else {
            setExpression((prev) => prev + value); // Append button value to the expression
        }
    };

    return (
        <div className="calculator">
            <input 
                type="text" 
                value={expression} 
                readOnly 
                className="calculator-input" 
                placeholder="Calculate"
            />
            <div className="calculator-result">{result}</div>
            <div className="calculator-buttons">
                {["7", "8", "9", "/", 
                  "4", "5", "6", "*", 
                  "1", "2", "3", "-", 
                  "C", "0", ".", "+"].map((btn) => (
                    <button
                        key={btn}
                        className="calculator-button"
                        onClick={() => handleClick(btn)}
                    >
                        {btn}
                    </button>
                ))}
                <button
                    className="calculator-button equal-button"
                    onClick={() => handleClick("=")}
                >
                    =
                </button>
            </div>
        </div>
    );
};

export default Calculator;
