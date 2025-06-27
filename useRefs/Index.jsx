import React, { useRef } from "react";

const Index = () => {
  const username = useRef(null);
  const password = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value, password.current.value);
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Enter your name" ref={username} />
        <input type="text" placeholder="Enter password" ref={password} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Index;
