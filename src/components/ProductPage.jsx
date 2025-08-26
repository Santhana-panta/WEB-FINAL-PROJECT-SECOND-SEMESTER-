import { useState, useEffect } from 'react'
import { useParams, useLocation, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItem } from '../features/cartSlice.js'
import products from '../data/products.js'

export default function ProductPage(){
  const { id } = useParams()
  const { state } = useLocation()
  const product = state?.product || products.find(p => String(p.id) === String(id))

  const [qty, setQty] = useState(1)
  const dispatch = useDispatch()

  useEffect(() => { window.scrollTo(0, 0) }, [])

  if (!product) {
    return (
      <div className="container py-5">
        <h4 className="mb-3">Product not found</h4>
        <Link to="/" className="btn btn-outline-secondary">Back to Home</Link>
      </div>
    )
  }

  const bullets = product.bullets ?? []

  return (
    <section className="py-4">
      <div className="container">
        <Link to="/" className="btn btn-outline-secondary btn-sm mb-3">&larr; Go back</Link>

        <div className="row g-4">
          {/* Left: image (fixed size, non-responsive) */}
          <div className="col-lg-6">
            <img src={product.image} alt={product.title} className="product-detail-img" />
          </div>

          {/* Right: title, price, single box with qty + buttons */}
          <div className="col-lg-6">
            <h2 className="fw-bold mb-1">{product.title}</h2>
            <div className="rating mb-1">
              {Array.from({length:5}).map((_,i)=>(
                <i key={i} className={`bi ${i < product.rating ? 'bi-star-fill' : 'bi-star'}`} />
              ))}
            </div>
            <div className="h5 mb-3">Rs. {product.price}</div>

            <p className="text-muted">{product.description}</p>

            <div className="box mb-3" style={{maxWidth:'360px'}}>
              <label className="form-label small text-secondary">Quantity</label>
              <div className="input-group" style={{maxWidth:'240px'}}>
                <button className="btn btn-outline-secondary" onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
                <input className="form-control text-center" value={qty} readOnly />
                <button className="btn btn-outline-secondary" onClick={() => setQty(q => Math.min(20, q + 1))}>+</button>
              </div>

              <div className="d-grid gap-2 mt-3">
                <button className="btn btn-warning fw-semibold">Buy Now</button>
                <button
                  className="btn btn-dark"
                  onClick={() => dispatch(addItem({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.image,
                    qty
                  }))}
                >
                  Add to Cart
                </button>
              </div>
            </div>

            {bullets.length > 0 && (
              <ul className="text-secondary mb-0">
                {bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}