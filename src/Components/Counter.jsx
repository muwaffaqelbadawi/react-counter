import React from "react";
import { useState } from "react";
import "../Styles/counterStyle.css";

// Always use semantic HTML!!

const Counter = () => {
  const [count, setCount] = useState(0);

  function handleNextNumber() {
    setCount(count + 1);
  }

  return (
    <article className="counter">
      <h2>Current number is:</h2>
      <p>{count}</p>
      <button className="button" onClick={handleNextNumber}>
        Next
      </button>
    </article>
  );
};

export default Counter;
