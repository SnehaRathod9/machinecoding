import React, { useState } from "react";
import { Outlet } from "react-router";

function Search() {
  const items = [
    "item1",
    "item2",
    "Another Item1",
    "sneha",
    "Volvo",
    "BMW",
    "Ford",
    "Mazda",
  ];

  const [inputData, setInputData] = useState("");

  // console.log("inputData", inputData);

  const SearchedData = items.filter((item, index) =>
    item.toLowerCase().includes(inputData.toLowerCase())
  );

  console.log("SearchedData", SearchedData);

  return (
    <>
      <input
        type="text"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
      />
      {SearchedData.map((item, index) => {
        return (
          <>
            <ul key={index}>
              <li>{item}</li>
            </ul>
          </>
        );
      })}
    </>
  );
}

export default Search;

// const [itemSearch, setItemSearch] = useState("");

//   const filterdItems = items.filter((item, index) =>
//     item.toLowerCase().includes(itemSearch.toLowerCase())
//   );
//   console.log("filterdItems", filterdItems);

//   return (
//     <>
//       <div>Search</div>
//       <input type="text" onChange={(e) => setItemSearch(e.target.value)} />
//       {filterdItems.map((item, index) => (
//         <ul key={index}>
//           <li>{item}</li>
//         </ul>
//       ))}
//       <Outlet />
//     </>
//   );
// }
