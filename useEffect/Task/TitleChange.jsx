import React from "react";
import { useState, useEffect } from "react";

const TitleChange = () => {
  const [value, setValue] = useState(0);

  const counterValue = () => {
    setValue((prev) => prev + 1);
  };

  useEffect(() => {
    document.title = "Hello world";
  }, [value]);

  return (
    <div>
      <h1>Value is : {value}</h1>
      <button onClick={counterValue}>Click</button>
    </div>
  );
};

export default TitleChange;
