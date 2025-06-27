import React from "react";
import { useState, useEffect } from "react";

const LocalStorageDemo1 = () => {
    const [name , setName] = useState("");

    
    useEffect(()=>{
        //Read the value from localstorage  using the key "username".
        const storeName = localStorage.getItem("username")
        if(storeName){
            setName(storeName)
        }
    },[])

    useEffect(()=>{
        localStorage.setItem("username",name)
    },[name])

  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome {name || "Guest"}</h1>
      <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
};

export default LocalStorageDemo1;
