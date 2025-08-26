import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    title: 'Chocolate Eclair',
    price: 120,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    rating: 5,
  },
  {
    id: 2,
    title: 'Strawberry Tart',
    price: 150,
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
    rating: 4,
  },
  {
    id: 3,
    title: 'Macaron Box',
    price: 200,
    image: 'https://images.unsplash.com/photo-1505250461400-41d8fae8ed31?auto=format&fit=crop&w=400&q=80',
    rating: 5,
  },
  // Add more pastries as needed
];

export default function ProductList() {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Our Pastries</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}