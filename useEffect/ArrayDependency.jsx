import React from "react";
import { useState, useEffect } from "react";

const ArrayDependency = () => {
  const [value, setValue] = useState(0);

  const counter = () => {
    setValue((prev) => prev + 1);
  };

  useEffect(() => {
    console.log("Run on only first render");
  }, []);
  return (
    <>
      <h1>Run on only first render {value}</h1>
      <button onClick={counter}>Click</button>
    </>
  );
};

export default ArrayDependency;
