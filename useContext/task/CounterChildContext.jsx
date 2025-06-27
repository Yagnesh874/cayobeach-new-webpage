import React, { useContext } from "react";
import CounterContext from "./CounterContext";

const CounterChildContext = () => {
  const { counter, setCounter } = useContext(CounterContext);

  const handleCounter = () => {
    setCounter((prev) => prev + 1);
  };
  return (
    <div>
      <div>
        The Counter is : <b>{counter}</b>
      </div>
      <button onClick={handleCounter}>Click</button>
    </div>
  );
};

export default CounterChildContext;
