import React, { useState } from "react";

const UseCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  const valueIncrement = () => {
    setCounter((prev) => prev + 1);
  };

  const valueDecrement = () => {
    setCounter((prev) => prev - 1);
  };

  const reset = () => {
    setCounter(initialValue);
  };
  return [counter , valueIncrement , valueDecrement , reset];
};

export default UseCounter;
