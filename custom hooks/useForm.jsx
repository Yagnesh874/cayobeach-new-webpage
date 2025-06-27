import React from "react";
import { useState } from "react";
const useForm = (initialValue ) => {
  const [formValue, setFormValue] = useState(initialValue);

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {formValue, handleChange};
};

export default useForm;
