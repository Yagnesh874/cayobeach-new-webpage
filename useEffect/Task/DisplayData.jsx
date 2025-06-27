import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const DisplayData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const displayData = async () => {
      try {
        let response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setData(response.data);
      } catch (err) {
        console.log("Error fetching data", err);
      }
    };
    displayData();
  }, []);
  return(
    <div>
       <h1>User list : </h1>
        <ul>
            {
                data.map(user =>(
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))
            }
        </ul>
    </div>
  ) 
};

export default DisplayData;
