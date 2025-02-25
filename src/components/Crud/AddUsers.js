import React, { useState } from "react";
import { adduser } from "../../Service/api";

export const AddUsers = () => {
  const initialData = {
    name: "",
    username: "",
    email: "",
    phone: 0,
  };
  const [inputData, setInputData] = useState(initialData);
  //   const [data, setData] = useState([]);
  //   const [flag, setFlag] = useState(false);
  const handleChange = (e) => {
    // console.log("inputData", data);
    setInputData({
      ...inputData,

      [e.target.name]: e.target.value,
    });
  };
  const addUser = async () => {
    // setFlag(true);
    // setData([...data, inputData]);
    await adduser(inputData);
    setInputData({
      name: "",
      username: "",
      email: "",
      phone: "",
    });
  };
  return (
    <>
      <label>Name: </label>
      <input
        type="text"
        placeholder="name"
        value={inputData.name}
        name="name"
        onChange={(e) => handleChange(e)}
      />
      <br />
      <label>User Name: </label>
      <input
        type="text"
        placeholder="Username"
        value={inputData.username}
        name="username"
        onChange={(e) => handleChange(e)}
      />{" "}
      <br />
      <label>Email: </label>
      <input
        type="text"
        placeholder="email"
        name="email"
        value={inputData.email}
        onChange={(e) => handleChange(e)}
      />{" "}
      <br />
      <label>Phone No: </label>
      <input
        type="number"
        placeholder="phone"
        name="phone"
        value={inputData.phone}
        onChange={(e) => handleChange(e)}
      />{" "}
      <br />
      <button onClick={addUser}>Add user</button>
      {/* {flag ? data != [] && data?.map((item) => <h1>{item.name}</h1>) : null} */}
    </>
  );
};
