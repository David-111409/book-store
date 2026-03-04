import './tours.css';
import TourItem from '../tour-item/TourItem';
const Tours = ({ toursList }) => {
  return (
    <div className="tours">
      {toursList.map((item) => (
        <TourItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Tours;
