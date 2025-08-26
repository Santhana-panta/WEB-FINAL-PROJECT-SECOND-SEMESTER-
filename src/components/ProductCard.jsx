import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItem } from '../features/cartSlice'

export default function ProductCard({product}){
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      qty: 1,
    }));
  };

  // Helper to render stars (supports half star)
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<i key={i} className="bi bi-star-fill" style={{color: '#7c43bd', fontSize: '1.2rem'}} />);
      } else if (rating >= i - 0.5) {
        stars.push(<i key={i} className="bi bi-star-half" style={{color: '#7c43bd', fontSize: '1.2rem'}} />);
      } else {
        stars.push(<i key={i} className="bi bi-star" style={{color: '#7c43bd', fontSize: '1.2rem'}} />);
      }
    }
    return stars;
  };

  return (
    <div className="col">
      <div className="card h-100 product-card">
        <img src={product.image} className="card-img-top" alt={product.title} style={{height: '220px', objectFit: 'cover'}} />
        <div className="card-body">
          <h5 className="card-title mb-1">
            <Link
              to={`/product/${product.id}`}
              state={{ product }}             
              className="product-title-link"
            >
              {product.title}
            </Link>
          </h5>
          <div className="rating mb-2">
            {renderStars(product.rating)}
          </div>
          <div className="fw-semibold text-secondary">Rs. {product.price}</div>
          <button className="btn btn-primary mt-2" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}