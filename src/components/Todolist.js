import React, { useRef, useState } from "react";

function Todolist() {
  const data = { username: "", designation: "" };
  const [inputData, setInputData] = useState(data);

  const [listData, setListData] = useState([]);
  const [flag, setFlag] = useState(false);
  const refelement = useRef();
  const handleInputData = (e) => {
    setInputData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAdd = () => {
    if (inputData.username === "" || inputData.designation === "") {
      alert("Input is required");
    } else {
      setFlag(true);
      setListData([...listData, inputData]); //to add in list
      setInputData(data); //to clear input space
      refelement.current.focus();
    }
  };

  const handleDelete = (i) => {
    const updated = listData.filter((_, index) => i != index);
    setListData(updated);
  };
  return (
    <>
      <h1>Todolist</h1>
      <input
        type="text"
        name="username"
        value={inputData.username}
        placeholder="Enter user name"
        onChange={handleInputData}
        ref={refelement}
      />
      <input
        type="text"
        name="designation"
        value={inputData.designation}
        placeholder="Enter Designation"
        onChange={handleInputData}
      />
      <button onClick={handleAdd}>Add</button>
      {/* <pre>{JSON.stringify(inputData, null, 2)}</pre> */}
      {flag ? (
        <div>
          {listData != [] &&
            listData.map((data, index) => {
              return (
                <div key={index}>
                  <div>{data.username}</div>
                  <div>{data.designation}</div>
                  <button onClick={() => handleDelete(index)}>remove</button>
                </div>
              );
            })}
        </div>
      ) : null}
    </>
  );
}

export default Todolist;
