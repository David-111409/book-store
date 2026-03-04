import './tour-item.css';
import Rating from '../rating/Rating';
import { Link } from 'react-router-dom';
const TourItem = ({ item }) => {
  return (
    <div className="tour-item">
      <img src={`${item.image}`} alt={item.title} />
      <span className="label">adventure</span>
      <div className="item-body">
        <div className="title">{item.title}</div>
        <div className="duration">
          <span>{item.duration}</span> <i className="bi bi-dot"></i>
          Pickup available
        </div>
        <Rating rating={item.rating} reviews={item.reviews} />
        <div className="price">
          <span>From ${item.priceFrom}</span> per person
        </div>
        <Link className="tour-link" to={`/tour/${item.id}`}>
          See More
        </Link>
      </div>
    </div>
  );
};

export default TourItem;
