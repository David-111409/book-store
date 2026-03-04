import './Pagination.css';
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [1, 2, 3, 4];
  return (
    <div className="pagination">
      <button
        disabled={currentPage === 1}
        className="page prev"
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </button>

      {pages.map((page) => (
        <button
          className={`page ${page === currentPage ? 'current' : ''}`}
          key={page}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        disabled={currentPage === totalPages}
        className="page next"
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
