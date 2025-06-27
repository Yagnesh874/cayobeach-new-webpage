import React from "react";
import { useFormStatus } from "react-dom";

const FormStatus = () => {
    const handleSubmit = async () => {
        await new Promise((res) => setTimeout(res, 5000));
        console.log("submit");
    };
    function CustomForm() {
        const { pending } = useFormStatus();
        console.log(pending);
        
        return (
      <>
        <input type="text" placeholder="Enter name" />
        <br />
        <br />
        <input type="password" placeholder="Enter password" />
        <br />
        <br />
        <button disabled={pending}>{pending?"Submitting.." : "submit"}</button>
      </>
    );
  }
  return (
    <>
      <form action={handleSubmit}>
      <CustomForm />
      </form>
      
    </>
  );
};

export default FormStatus;
