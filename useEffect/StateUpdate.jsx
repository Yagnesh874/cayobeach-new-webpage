import React from "react";
import { useState, useEffect } from "react";

const StateUpdate = () => {
  const [value, setValue] = useState(0);

  const counter = () =>{
    setValue(prev => prev + 1)
  }

  useEffect(()=>{
   console.log("Run whenever state value is update");
    
  },[value])
  return(
    <>
        <h3>{value}</h3>
        <button onClick={counter}>Click</button>
    </>    
  ) 
};

export default StateUpdate;
