import React, { useState } from "react";

const EmailFormBefore = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setPending(true);

    await new Promise((res) => setTimeout(res, 2000));
    setMessage(`Email is : ${email}`);
    setPending(false);
    setEmail("");
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
        />
        <button disabled={pending}>{pending ? "saving" : "submit"}</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default EmailFormBefore;
