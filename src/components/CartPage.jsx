import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart } from '../features/cartSlice';

export default function CartPage() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <ul className="list-group">
          {items.map(item => (
            <li key={item.id} className="list-group-item d-flex align-items-center">
              <img src={item.image} alt={item.title} width={50} className="me-2" />
              <span className="me-auto">{item.title} x {item.qty} - Rs. {item.price}</span>
              <button className="btn btn-danger btn-sm" onClick={() => dispatch(removeItem(item.id))}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      {items.length > 0 && (
        <button className="btn btn-warning mt-3" onClick={() => dispatch(clearCart())}>Clear Cart</button>
      )}
    </div>
  );
}