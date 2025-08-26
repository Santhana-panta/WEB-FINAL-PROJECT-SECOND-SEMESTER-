import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import ProductGrid from './components/ProductGrid.jsx'
import Footer from './components/Footer.jsx'
import ProductPage from './components/ProductPage.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import CartPage from './components/CartPage.jsx'

export default function App(){
  return (
    <>
      <Header />
      <ScrollToTop /> 
      <Routes>
  <Route path="/" element={<><Hero /><ProductGrid /></>} />
  <Route path="/product/:id" element={<ProductPage />} />
  <Route path="/cart" element={<CartPage />} />
</Routes>
      <Footer />
    </>
  )
}