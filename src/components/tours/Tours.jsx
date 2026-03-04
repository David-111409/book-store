import './tours.css';
import { useState } from 'react';
import TourItem from '../tour-item/TourItem';
import SortInput from '../sort-input/Sort';
import Pagination from '../pagination/Pagination';

const sortedList = (tours, sortBy, page) => {
  const start = (page - 1) * 6;
  const end = page * 6;
  if (sortBy === 'low') {
    return tours.sort((a, b) => a.priceFrom - b.priceFrom).slice(start, end);
  } else if (sortBy === 'recomended') {
    return tours.sort((a, b) => b.rating - a.rating).slice(start, end);
  } else if (sortBy === 'high') {
    return tours.sort((a, b) => b.priceFrom - a.priceFrom).slice(start, end);
  }
};
const Tours = ({ toursList }) => {
  const totalPages = Math.ceil(toursList.length / 6);
  const [sortItem, setSortItem] = useState('recomended');
  const [page, setPage] = useState(1);
  const handleSortInput = (e) => setSortItem(e.target.value);
  const onPageChange = (i) => {
    setPage(i);
  };

  return (
    <>
      <SortInput
        toursLength={toursList.length}
        handleSortInput={handleSortInput}
        sortItem={sortItem}
      />
      <div className="tours">
        {sortedList(toursList, sortItem, page).map((item) => (
          <TourItem key={item.id} item={item} />
        ))}
      </div>
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </>
  );
};

export default Tours;
