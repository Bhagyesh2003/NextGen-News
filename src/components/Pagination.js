import React from "react";

const Pagination = ({
  currentPage,
  totalPages,
  handleNextPage,
  handlePrevPage,
}) => {
  return (
    <div className="d-flex justify-content-around">
      <button
        className="btn btn-primary"
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        {"<"} Prev Page
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        className="btn btn-primary"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        Next Page {">"}
      </button>
    </div>
  );
};

export default Pagination;
