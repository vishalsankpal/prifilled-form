import { useState, useEffect } from "react";
//Initially We need to check if data is present in localstorage or not
//if data is not present then we will set initial values
//on every key stroke be need to update local storage data
//On submit we need to remove data from local storage
const PreFilledForm = () => {
  const initialState = () => {
    const abc = localStorage.getItem("formData");
    if (!abc) {
      return {
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      };
    }
    return JSON.parse(abc);
  };
  //   const [formValue, setFormValue] = useState({
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     message: "",
  //   });
  const [formValue, setFormValue] = useState(initialState);
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formValue));
  }, [formValue]);
  const changeHandler = (e) => {
    const { value, name } = e.target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    // Object.keys(formValue).forEach((item) => {
    //   console.log(formValue[item]);
    //   if (formValue[item] === "") {
    //     //handle error here
    //   }
    // });

    localStorage.removeItem("formData");
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formValue.firstName}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formValue.lastName}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formValue.email}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>message</label>
          <textarea
            name="message"
            value={formValue.message}
            onChange={changeHandler}
          ></textarea>
        </div>
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default PreFilledForm;
