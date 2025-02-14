import React, { useState } from "react";

function Pagination({ items, itemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = items.slice(firstIndex, lastIndex);

  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div>Pagination</div>
      <ul>
        {currentItems.map((items, index) => (
          <div key={index}>{items}</div>
        ))}
      </ul>
      <div>
        {pageNumbers.map((number) => (
          <button key={number} onClick={() => setCurrentPage(number)}>
            {number}
          </button>
        ))}
      </div>
    </>
  );
}

export default Pagination;
