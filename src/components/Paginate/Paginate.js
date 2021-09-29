import React from "react";

const Paginate = ({ usersPerPage, totalUsers, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="w-100  m-4">
      <ul className="pagination mx-5">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <div onClick={() => paginate(number)} className="m-1 page-link">
              {number}
            </div>
          </li>
        ))}{" "}
        <p className="p-2">page {currentPage}</p>
      </ul>
    </nav>
  );
};

export default Paginate;
