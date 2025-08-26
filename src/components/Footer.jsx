export default function Footer() {
  return (
    <footer className="footer mt-5 py-4" style={{ background: 'var(--purple-200)' }}>
      <div className="container text-center">
        <img
          src="https://img.icons8.com/color/96/000000/cupcake.png"
          alt="Pastry Palace Logo"
          width={48}
          className="mb-3"
        />
        <h4 className="fw-bold mb-2" style={{ color: 'var(--purple-400)' }}>
          Pastry Palace - Where Every Bite is a Celebration!
        </h4>
        <p className="mb-3" style={{ color: 'var(--purple-400)' }}>
          Freshly baked pastries, cakes, and sweets delivered to your door.<br />
          Taste the magic, share the joy!
        </p>
        <div className="d-flex justify-content-center gap-4 mb-3">
          <a href="mailto:hello@pastrypalace.com" className="text-decoration-none" style={{ color: 'var(--purple-400)' }}>
            <i className="bi bi-envelope-paper me-2"></i>Email Us
          </a>
          <a href="tel:014417571" className="text-decoration-none" style={{ color: 'var(--purple-400)' }}>
            <i className="bi bi-telephone me-2"></i>Call: 01-4417571
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none" style={{ color: 'var(--purple-400)' }}>
            <i className="bi bi-instagram me-2"></i>Instagram
          </a>
        </div>
        <div className="mt-3 small" style={{ color: 'var(--purple-400)' }}>
          &copy; {new Date().getFullYear()} Pastry Palace. Crafted with love and sugar.
        </div>
      </div>
    </footer>
  );
}