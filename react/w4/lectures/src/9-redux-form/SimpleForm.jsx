import React from "react";
import { LocalForm, Control } from "react-redux-form";

const SimpleForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  // where does the data get saved as you type it?
  return (
    <div>
      <LocalForm onSubmit={(values) => handleSubmit(values)}>
        {/* modal prop must have a period at the beginning */}
        <Control.text model=".username" placeholder="username" />
        <Control.textarea model=".age" placeholder="age" />
        <button type="submit">Submit</button>
      </LocalForm>
    </div>
  );
};

export default SimpleForm;
