import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectItemCount } from '../features/cartSlice.js'

export default function Header(){
  const itemCount = useSelector(selectItemCount)
  const [query, setQuery] = useState('')

  return (
    <nav className="navbar navbar-expand-lg sticky-top" style={{ background: 'var(--brand)' }}>
      <div className="container py-2">
        <Link className="navbar-brand d-flex align-items-center fw-bold fs-2" to="/" style={{ color: 'var(--purple-400)' }}>
          <img src="/images/logo.png" width="36" className="me-2 rounded-circle" alt="logo" />
          PASTRY PALACE
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav">
          <form className="d-flex ms-lg-4 my-3 my-lg-0 flex-grow-1" role="search" onSubmit={(e)=>e.preventDefault()}>
            <div className="input-group">
              <span className="input-group-text bg-white"><i className="bi bi-search"></i></span>
              <input
                className="form-control"
                type="search"
                placeholder="Search for pastries"
                value={query}
                onChange={(e)=>setQuery(e.target.value)}
              />
            </div>
          </form>

          <ul className="navbar-nav ms-lg-4 align-items-lg-center gap-lg-3">
            <li className="nav-item">
              <Link className="nav-link" to="/"><i className="bi bi-house-door me-1"></i>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link position-relative" to="/cart">
                <span role="img" aria-label="cart" className="me-1">🧁</span>Cart
                {itemCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {itemCount}
                  </span>
                )}
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="bi bi-telephone me-1"></i>Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      </nav>
  )
}