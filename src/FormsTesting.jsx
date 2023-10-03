import React, { useState } from "react";

const FormTesting = () => {
  const [name, updatedName] = useState({
    fName: "",
    age: "",
    email: "",
    phone :"",
  });

  const [submittedValue, setSubmittedValue] = useState("");

  // const[ageFirst, setageFirst]=useState("");
  // const [okkk , SetOkk]=useState("");

  const InEvent = (val) => {
    // const value = val.target.value;
    // const name = val.target.name;
    const { value ,  name }= val.target;

    updatedName((prevalue) => ({
      ...prevalue,
      [name] : value,
      // if (name === "fName") {
      //   return {
      //     fName: value,
      //     age: prevalue.age,
      //     email : prevalue.email,
      //     phone : prevalue.phone
      //   };
      // } else if (name === "age") {
      //   return {
      //     fName: prevalue.fName,
      //     age: value,
      //     email : prevalue.email,
      //     phone : prevalue.phone
      //   };
      // } else if (name === "email") {
      //   return {
      //     fName: prevalue.fName,
      //     age: prevalue.age,
      //     email : value,
      //     phone : prevalue.phone
      //   };
      // } else if (name === "phone") {
      //   return {
      //     fName: prevalue.fName,
      //     age: prevalue.age,
      //     email : prevalue.email,
      //     phone : value
      //   };
      // }

    }));
  };

  //   const IntoEvent=(e)=>{
  //     setageFirst(e.target.value)
  // }

  const data = (eve) => {
    eve.preventDefault();
    const fullName = `${name.fName} ${name.age} ${name.email} ${name.phone} `;
    setSubmittedValue(fullName);
  };

  return (
    <>
      <form onSubmit={data}>
        <div style={{ textAlign: "center", margin: "23px" }}>
          <h1>Hello {submittedValue}</h1>
          <input
            type="text"
            placeholder="Enter your name "
            onChange={InEvent}
            name="fName"
            value={name.fName}
            style={{
              width: "250px",
              height: "30px",
              borderRadius: "5px",
            }}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Enter your age "
            onChange={InEvent}
            name="age"
            value={name.age}
            style={{
              width: "250px",
              height: "30px",
              borderRadius: "5px",
            }}
          />
          <br/>
          <br/>
           <input
            type="email"
            placeholder="Enter your email "
            onChange={InEvent}
            name="email"
            value={name.email}
            autoComplete="off"
            style={{
              width: "250px",
              height: "30px",
              borderRadius: "5px",
            }}
          />
          <br/>
          <br/>
           <input
            type="phone"
            placeholder="Enter your number "
            onChange={InEvent}
            name="phone"
            value={name.phone}
            autoComplete="off"
            style={{
              width: "250px",
              height: "30px",
              borderRadius: "5px",
            }}
          />
          <br />
          <button
            type="submit"
            style={{
              width: "100px",
              height: "30px",
              margin: "30px",
            }}
          >
            Submit 😃
          </button>
        </div>
      </form>
    </>
  );
};

export default FormTesting;
