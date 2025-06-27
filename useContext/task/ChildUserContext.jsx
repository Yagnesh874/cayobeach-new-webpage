import React from "react";
import { useContext } from "react";
import UserContext from "./UserContext";

const ChildUserContext = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <p>Username is :  <b>{user.name}</b>   </p>
      <p>Email id is :  <b>{user.email}</b>   </p>
    </div>
  );
};

export default ChildUserContext;
