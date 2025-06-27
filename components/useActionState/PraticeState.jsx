import React, { useActionState } from "react";

const PraticeState = () => {
  const handleSubmit = async (prevState, formData) => {
    let email = formData.get("name");
    let password = formData.get("password");

    if (email && password) {
      await new Promise((res) => setTimeout(res, 2000));
      console.log("Data is : ", email, password);
      return { message: "Data is successfully submitted", email, password };
    } else {
      return { error: "Data is not successfully submitted" };
    }
  };

  const [data, action, pending] = useActionState(handleSubmit, null);
  return (
    <>
      <form action={action}>
        <input type="email" placeholder="Enter Email" name="name" />
        <br />
        <br />
        <input type="password" placeholder="Enter Password" name="password" />
        <br />
        <br />
        <button>Submit</button>
      </form>

      {data?.message && <span style={{ color: "green" }}>{data.message}</span>}
      {data?.error && <span style={{ color: "red" }}>{data.error}</span>}

      <h3>The Email id : {data?.email}</h3>
      <h3>The Password is:  {data?.password}</h3>
    </>
  );
};

export default PraticeState;
