import './sort.css';

const SortInput = ({ toursLength, handleSortInput, sortItem }) => {
  return (
    <div className="sort-container">
      <div className="available-tours">
        {toursLength} tours found <i className="bi bi-info-circle"></i>
      </div>
      <select onChange={handleSortInput} value={sortItem}>
        <option value="recomended">Recomended</option>
        <option value="low">Price - Low to high</option>
        <option value="high">Price - High to low</option>
      </select>
    </div>
  );
};

export default SortInput;
