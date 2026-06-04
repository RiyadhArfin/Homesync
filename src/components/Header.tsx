import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon, Phone } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <Link to="/" className="logo-container">
          <img src={logo} alt="Homesync LLC" className="logo-img" />
          <span className="logo-text">
            HOME<span className="logo-highlight">SYNC</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a href="tel:8042922009" className="phone-link desktop-only">
            <Phone size={18} />
            <span>(804) 292-2009</span>
          </a>

          <Link to="/contact" className="btn btn-primary desktop-only">Get Quote</Link>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-content">
            <Link to="/" className="mobile-link" onClick={closeMobileMenu}>Home</Link>
            <Link to="/services" className="mobile-link" onClick={closeMobileMenu}>Services</Link>
            <Link to="/about" className="mobile-link" onClick={closeMobileMenu}>About Us</Link>
            <Link to="/contact" className="mobile-link" onClick={closeMobileMenu}>Contact</Link>
            <Link to="/contact" className="btn btn-primary mobile-cta" onClick={closeMobileMenu}>Get Quote</Link>
          </div>
        </div>
      </div>

      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: var(--header-height);
          background-color: var(--bg-light);
          z-index: 1000;
          transition: all var(--transition-medium);
          border-bottom: 1px solid transparent;
        }

        .header.scrolled {
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          border-bottom-color: rgba(0,0,0,0.05);
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 800;
          font-size: 1.2rem;
          color: var(--primary);
          text-transform: uppercase;
        }

        .logo-img {
          height: 48px;
          width: auto;
        }
        
        .logo-text {
          display: none; /* Hidden on mobile, shown on desktop if needed, or just rely on logo */
        }

        @media (min-width: 768px) {
          .logo-text {
            display: block;
          }
        }

        .logo-highlight {
          color: var(--accent);
        }

        .desktop-nav {
          display: none;
          gap: 32px;
        }

        .nav-link {
          font-weight: 500;
          font-size: 1.05rem;
          color: var(--text-secondary);
          position: relative;
        }

        .nav-link:hover {
          color: var(--accent);
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .theme-toggle {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text-primary);
          padding: 8px;
          border-radius: 50%;
          transition: background 0.2s;
        }

        .theme-toggle:hover {
          background-color: var(--bg-off-white);
        }

        .phone-link {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          color: var(--primary);
        }

        .phone-link:hover {
          color: var(--accent);
        }

        .mobile-menu-btn {
          display: block;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text-primary);
        }

        /* Mobile Nav */
        .mobile-nav {
          position: fixed;
          top: var(--header-height);
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--bg-light);
          transform: translateX(100%);
          transition: transform 0.3s ease-in-out;
          padding: 24px;
        }

        .mobile-nav.open {
          transform: translateX(0);
        }

        .mobile-nav-content {
          display: flex;
          flex-direction: column;
          gap: 24px;
          font-size: 1.25rem;
          font-weight: 600;
        }

        .desktop-only {
          display: none;
        }

        @media (min-width: 992px) {
          .desktop-nav {
            display: flex;
          }
          .mobile-menu-btn, .mobile-nav {
            display: none;
          }
          .desktop-only {
            display: inline-flex;
          }
        }
        
        /* Dark Mode Header */
        body.dark .header,
        body.dark .mobile-nav {
          background-color: var(--bg-dark);
          border-bottom-color: rgba(255,255,255,0.05);
        }
        
        body.dark .nav-link, 
        body.dark .logo-container,
        body.dark .phone-link,
        body.dark .theme-toggle,
        body.dark .mobile-menu-btn {
          color: var(--text-light);
        }
        
        body.dark .theme-toggle:hover {
          background-color: rgba(255,255,255,0.1);
        }
      `}</style>
    </header>
  );
}
