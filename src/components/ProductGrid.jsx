import products from '../data/products.js'
import ProductCard from './ProductCard.jsx'

export default function ProductGrid(){
  return (
    <section id="products" className="py-5">
      <div className="container">
        <h2 className="h1 mb-4">Your Favorite Pastries!!</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-4">
          {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  )
}
