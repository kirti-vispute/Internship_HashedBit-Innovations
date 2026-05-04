import React, { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const calculate = (type) => {
    const a = Number(num1);
    const b = Number(num2);

    if (type === "add") setResult(a + b);
    if (type === "sub") setResult(a - b);
    if (type === "mul") setResult(a * b);
    if (type === "div") setResult(b !== 0 ? a / b : "Cannot divide by 0");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Calculator</h2>

      {/* Inputs */}
      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <br /><br />

      {/* Buttons */}
      <button onClick={() => calculate("add")}>Add</button>
      <button onClick={() => calculate("sub")}>Subtract</button>
      <button onClick={() => calculate("mul")}>Multiply</button>
      <button onClick={() => calculate("div")}>Divide</button>

      {/* Output */}
      <div style={{ marginTop: "20px" }}>
        <h3>Result: {result}</h3>
      </div>
    </div>
  );
}

export default App;