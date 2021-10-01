import React from "react";
import { LocalForm, Control, Errors } from "react-redux-form";

const ValidationForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <LocalForm onSubmit={(values) => handleSubmit(values)}>
        <div>
          <Control.text
            model=".email"
            placeholder="Email"
            validators={{
              required: (val) => val?.length > 0,
              minLength: (val) => val?.length > 2,
              print: (val) => console.log(val),
            }}
          />
          <Errors
            model=".email"
            show="touched"
            component="div"
            messages={{
              required: "Required",
              minLength: "Must be at least 2 characters",
            }}
            className="text-danger"
          />
        </div>
        <button type="submit">Submit</button>
      </LocalForm>
    </div>
  );
};

export default ValidationForm;
