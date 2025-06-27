import React from "react";
import { useState, useEffect } from "react";

const NoDependency = () => {
  const [count, setCount] = useState(0);

  const valueUpdate = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(()=>{
    console.log("I am running on each and every render");
    
  })
  return (
    <>
      <h1>Run on every render {count}</h1>
      <button onClick={valueUpdate}>value</button>
    </>
  );
  }

export default NoDependency;
