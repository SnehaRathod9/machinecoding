import React, { useEffect, useState } from "react";

function Apifetch() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const apiData = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await apiData.json();
    setData(json);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>ApiFetch</h1>
      <table>
        <tr>
          <th>Sr. No </th>
          <th>Title</th>
        </tr>

        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.title}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Apifetch;

// const [data, setData] = useState([]);
// const handleFetch = async () => {
//   const dataapi = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const res = await dataapi.json();
//   setData(res);
//   console.log(res);
// };

// useEffect(() => {
//   handleFetch();
// }, []);

// return (
//   <div>
//     Apifetch
//     {data.map((item, index) => {
//       return (
//         <div>
//           <ul key={item.id}>
//             <li key={item.id}>{item.title}</li>
//           </ul>
//         </div>
//       );
//     })}
//   </div>
// );
