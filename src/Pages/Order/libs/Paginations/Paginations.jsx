import React, { useEffect, useState } from "react";

const Paginations = ({ menuLoader, handlePageChange }) => {
  const itemsPerPage = 10;
  const itemsPage = Math.ceil(menuLoader.cursor / itemsPerPage);
  const itemsButton = [...Array(itemsPage).keys()];
  const paginationsButton = (e) => {
    handlePageChange(e, itemsPerPage);
  };
  return (
    <div className="text-center space-x-12">
      {itemsButton.map((item) => (
        <button
          onClick={() => paginationsButton(item)}
          className="btn"
          key={item}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Paginations;
