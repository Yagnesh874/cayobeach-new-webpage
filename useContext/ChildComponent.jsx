import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const ChildComponent = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const HandleTheme = () => {
    if (theme === "white") {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      setTheme("Black Mode");
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setTheme("White Mode");
    }
  };
  return (
    <div>
      <h1>Current theme : {theme}</h1>
      <button onClick={HandleTheme}>{theme}</button>
    </div>
  );
};

export default ChildComponent;
