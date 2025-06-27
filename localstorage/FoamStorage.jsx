import React from "react";
import { useState, useEffect } from "react";
const FoamStorage = () => {
  const [foamData, setFoamData] = useState({
    name: "",
    email: "",
    number: "",
  });

  useEffect(() => {
    let saveUsername = localStorage.getItem("username");
    let saveEmail = localStorage.getItem("email");
    let saveNumber = localStorage.getItem("number");

    if (saveUsername || saveEmail || saveNumber) {
      setFoamData({
        name: saveUsername || "",
        email: saveEmail || "",
        number: saveNumber || "",
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("username", foamData.name);
    localStorage.setItem("email", foamData.email);
    localStorage.setItem("number", foamData.number);
  }, [foamData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFoamData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <input
        type="text"
        name="name"
        // value={foamData.name}
        placeholder="Enter Your Name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        // value={foamData.email}
        placeholder="Enter Your Email"
        onChange={handleChange}
      />
      <input
        type="text"
        name="number"
        // value={foamData.number}
        placeholder="Enter Your Phone Number"
        onChange={handleChange}
      />
    </>
  );
};

export default FoamStorage;
