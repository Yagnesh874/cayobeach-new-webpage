import React from "react";
import { useState, useEffect } from "react";

const CleanupFunction = () => {
  const [message, setMessage] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCounter((prev) => prev + 1);
      setMessage(`Run ${counter} second`);
    }, 1000);

    return () => {
      clearInterval(id);
      //setMessage("Component is remove ")
    };
  });

  return (
    <>
      <h1>Message : {message}</h1>
    </>
  );
};

export default CleanupFunction;
