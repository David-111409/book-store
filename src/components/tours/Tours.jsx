import './tours.css';
import { useState, useMemo } from 'react';
import TourItem from '../tour-item/TourItem';
import SortInput from '../sort-input/Sort';
import Pagination from '../pagination/Pagination';
import toursList from '../../data';
import Services from '../../components/services/Services';
const Tours = () => {
  const totalPages = Math.ceil(toursList.length / 6);
  const [sortItem, setSortItem] = useState('recomended');
  const [page, setPage] = useState(1);

  const handleSortInput = (e) => {
    setSortItem(e.target.value);
    setPage(1);
  };

  const onPageChange = (i) => {
    setPage(i);
  };

  const sortedList = useMemo(() => {
    const sorted = [...toursList];
    const start = (page - 1) * 6;

    switch (sortItem) {
      case 'low':
        sorted.sort((a, b) => a.priceFrom - b.priceFrom);
        break;
      case 'high':
        sorted.sort((a, b) => b.priceFrom - a.priceFrom);
        break;
      case 'recomended':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    console.log('sorting and paginating');
    return sorted.slice(start, start + 6);
  }, [sortItem, page]);

  return (
    <>
      <Services />
      <SortInput
        toursLength={toursList.length}
        handleSortInput={handleSortInput}
        sortItem={sortItem}
      />
      <div className="tours">
        {sortedList.map((item) => (
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
