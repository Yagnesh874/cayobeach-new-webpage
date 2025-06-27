import React, { useActionState } from "react";

const ActionState = () => {
  const handleSubmit = async (prevData, formData) => {
    let name = formData.get("name");
    let password = formData.get("password");

    await new Promise((res) => setTimeout(res, 2000));
    console.log("HandleSubmit called", name, password);

    if (name && password) {
      return { message: "data submitted", name, password };
    } else {
      return { error: "Failed to submit. Enter proper data", name, password };
    }
  };
  const [data, action, pending] = useActionState(handleSubmit, undefined);
  console.log(data);

  return (
    <div>
      <h1>ActionState Hooks in React js</h1>
      <form action={action}>
        <input defaultValue={data?.name} type="text" placeholder="Enter Name" name="name" />
        <br /> <br />
        <input defaultValue={data?.password} type="password" placeholder="Enter Password" name="password" />
        <br /> <br />
        <button disabled={pending}>Submit</button>
      </form>
      {data?.error && <span style={{ color: "red" }}>{data.error}</span>}
      {data?.message && <span style={{ color: "green" }}>{data.message}</span>}
      <h3>Name : {data?.name}</h3>
      <h3>Password : {data?.password}</h3>
    </div>
  );
};

export default ActionState;
