import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Phone, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';
import logo from '../assets/logo.png';
import { companyInfo } from '../data/friendlyContent';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  const location = useLocation();

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
    <>
      {/* ── Top Utility Contact Strip (Stitch Warm Craft Design) ── */}
      <div className="top-utility-strip">
        <div className="container top-utility-content">
          <div className="utility-left">
            <span className="utility-item">
              <MapPin size={14} className="utility-icon" />
              <span>Richmond, VA</span>
            </span>
            <span className="utility-separator">|</span>
            <span className="utility-item">
              <ShieldCheck size={14} className="utility-icon" />
              <span>Licensed &amp; Insured VA Contractor</span>
            </span>
          </div>

          <div className="utility-right">
            <a href={`tel:${companyInfo.phoneRaw}`} className="utility-phone">
              <Phone size={14} className="utility-icon" />
              <span>Call or Text: {companyInfo.phone}</span>
            </a>
            <span className="utility-separator utility-desktop-only">·</span>
            <span className="utility-hours utility-desktop-only">Mon–Sat 7:00 AM – 7:00 PM</span>
          </div>
        </div>
      </div>

      {/* ── Docked Sticky Navigation Bar (Stitch Edge-to-Edge Architecture) ── */}
      <header className={`docked-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-inner">
          
          {/* Brand Logo & Two-Line Subtitle */}
          <Link to="/" className="brand-anchor" onClick={closeMobileMenu}>
            <img src={logo} alt="Homesync LLC Logo" className="brand-logo-img" />
            <div className="brand-text-col">
              <span className="brand-name">
                HOME<span className="brand-highlight">SYNC</span> LLC
              </span>
              <span className="brand-subtitle">PROPERTY CARE &amp; HANDYMAN</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="desktop-navigation">
            <Link
              to="/"
              className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`nav-item ${location.pathname === '/services' ? 'active' : ''}`}
            >
              Services
            </Link>
            <Link
              to="/about"
              className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}
            >
              About Us
            </Link>
            <Link
              to="/get-quote"
              className={`nav-item ${location.pathname === '/get-quote' ? 'active' : ''}`}
            >
              Get a Quote
            </Link>
            <Link
              to="/contact"
              className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}
            >
              Contact
            </Link>
          </nav>

          {/* Header Action Cluster */}
          <div className="header-action-cluster">
            <button
              className="theme-toggle-btn"
              onClick={() => setIsDark(!isDark)}
              aria-label="Toggle light/dark theme"
              title="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a href={`tel:${companyInfo.phoneRaw}`} className="header-phone-cta desktop-only">
              <Phone size={16} className="text-brand-blue" />
              <span>{companyInfo.phone}</span>
            </a>

            <Link
              to="/get-quote"
              className="tactile-button-primary desktop-only"
              style={{ padding: '9px 18px', fontSize: '0.9rem', gap: '6px' }}
            >
              <span>Get Free Estimate</span>
              <ArrowRight size={15} />
            </Link>

            <button
              className="mobile-hamburger-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-drawer-inner">
            <Link to="/" className={`mobile-nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={closeMobileMenu}>
              Home
            </Link>
            <Link to="/services" className={`mobile-nav-link ${location.pathname === '/services' ? 'active' : ''}`} onClick={closeMobileMenu}>
              Services
            </Link>
            <Link to="/about" className={`mobile-nav-link ${location.pathname === '/about' ? 'active' : ''}`} onClick={closeMobileMenu}>
              About Us
            </Link>
            <Link to="/get-quote" className={`mobile-nav-link ${location.pathname === '/get-quote' ? 'active' : ''}`} onClick={closeMobileMenu}>
              Get a Quote
            </Link>
            <Link to="/contact" className={`mobile-nav-link ${location.pathname === '/contact' ? 'active' : ''}`} onClick={closeMobileMenu}>
              Contact
            </Link>

            <div className="mobile-drawer-actions">
              <a href={`tel:${companyInfo.phoneRaw}`} className="btn-outline-navy" style={{ justifyContent: 'center' }}>
                <Phone size={16} color="#0063A6" />
                <span>Call or Text {companyInfo.phone}</span>
              </a>
              <Link to="/get-quote" className="tactile-button-primary" onClick={closeMobileMenu} style={{ justifyContent: 'center', padding: '12px' }}>
                <span>Get Free Estimate</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <style>{`
        /* ── Top Utility Strip ── */
        .top-utility-strip {
          background-color: #0F172A;
          color: #CBD5E1;
          font-size: 0.8125rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 7px 0;
        }

        .top-utility-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 8px;
        }

        .utility-left,
        .utility-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .utility-item {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #E2E8F0;
          font-weight: 500;
        }

        .utility-icon {
          color: #0063A6;
          flex-shrink: 0;
        }

        .utility-separator {
          color: #475569;
        }

        .utility-phone {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #FFFFFF;
          font-weight: 700;
          transition: color 0.15s ease;
        }

        .utility-phone:hover {
          color: #38BDF8;
        }

        .utility-hours {
          color: #94A3B8;
        }

        @media (max-width: 640px) {
          .utility-desktop-only {
            display: none;
          }
          .top-utility-content {
            justify-content: center;
            text-align: center;
          }
        }

        /* ── Docked Header ── */
        .docked-header {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 76px;
          background-color: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid #E2E8F0;
          box-shadow: 0 1px 3px rgba(15, 23, 42, 0.05);
          transition: background-color 0.2s ease, box-shadow 0.2s ease;
          z-index: 99;
        }

        .docked-header.scrolled {
          background-color: #FFFFFF;
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.08);
          border-bottom-color: #CBD5E1;
        }

        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
        }

        /* ── Brand Logo ── */
        .brand-anchor {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .brand-logo-img {
          height: 44px;
          width: auto;
          object-fit: contain;
          transition: transform 0.2s ease;
        }

        .brand-anchor:hover .brand-logo-img {
          transform: scale(1.04);
        }

        .brand-text-col {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .brand-name {
          font-size: 1.25rem;
          font-weight: 800;
          color: #0F172A;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }

        .brand-highlight {
          color: #0063A6;
        }

        .brand-subtitle {
          font-size: 0.6875rem;
          font-weight: 700;
          color: #64748B;
          letter-spacing: 0.1em;
          margin-top: 2px;
        }

        /* ── Desktop Navigation ── */
        .desktop-navigation {
          display: none;
          align-items: center;
          gap: 32px;
        }

        @media (min-width: 960px) {
          .desktop-navigation {
            display: flex;
          }
        }

        .nav-item {
          font-size: 0.95rem;
          font-weight: 600;
          color: #475569;
          position: relative;
          padding: 8px 0;
          transition: color 0.15s ease;
        }

        .nav-item:hover {
          color: #0063A6;
        }

        .nav-item.active {
          color: #0063A6;
          font-weight: 700;
        }

        .nav-item.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: #0063A6;
          border-radius: 2px;
        }

        /* ── Header Actions ── */
        .header-action-cluster {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .theme-toggle-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: #475569;
          padding: 8px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.15s ease, color 0.15s ease;
        }

        .theme-toggle-btn:hover {
          background-color: #F1F5F9;
          color: #0F172A;
        }

        .header-phone-cta {
          display: none;
          align-items: center;
          gap: 6px;
          font-size: 0.9rem;
          font-weight: 700;
          color: #0F172A;
          padding: 8px 12px;
          border-radius: 8px;
          transition: background-color 0.15s ease, color 0.15s ease;
        }

        .header-phone-cta:hover {
          background-color: #F8FAFC;
          color: #0063A6;
        }

        .text-brand-blue {
          color: #0063A6;
        }

        .desktop-only {
          display: none;
        }

        @media (min-width: 960px) {
          .desktop-only {
            display: inline-flex;
          }
        }

        .mobile-hamburger-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          background: none;
          border: none;
          cursor: pointer;
          color: #0F172A;
          padding: 6px;
        }

        @media (min-width: 960px) {
          .mobile-hamburger-btn {
            display: none;
          }
        }

        /* ── Mobile Drawer ── */
        .mobile-drawer {
          display: none;
        }

        @media (max-width: 959px) {
          .mobile-drawer {
            display: block;
            position: absolute;
            top: 76px;
            left: 0;
            right: 0;
            background: #FFFFFF;
            border-bottom: 2px solid #E2E8F0;
            box-shadow: 0 16px 32px rgba(15, 23, 42, 0.12);
            opacity: 0;
            visibility: hidden;
            transform: translateY(-8px);
            transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;
            pointer-events: none;
          }

          .mobile-drawer.open {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
            pointer-events: auto;
          }
        }

        .mobile-drawer-inner {
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .mobile-nav-link {
          font-size: 1.05rem;
          font-weight: 600;
          color: #1E293B;
          padding: 8px 0;
          border-bottom: 1px solid #F1F5F9;
          transition: color 0.15s ease;
        }

        .mobile-nav-link.active,
        .mobile-nav-link:hover {
          color: #0063A6;
        }

        .mobile-drawer-actions {
          margin-top: 10px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        /* ── Dark Mode Overrides ── */
        body.dark .docked-header {
          background-color: rgba(15, 23, 42, 0.96);
          border-bottom-color: rgba(255, 255, 255, 0.12);
        }

        body.dark .docked-header.scrolled {
          background-color: #0F172A;
          border-bottom-color: rgba(255, 255, 255, 0.16);
        }

        body.dark .brand-name {
          color: #F8FAFC;
        }

        body.dark .brand-subtitle {
          color: #94A3B8;
        }

        body.dark .nav-item {
          color: #CBD5E1;
        }

        body.dark .nav-item.active {
          color: #38BDF8;
        }

        body.dark .nav-item.active::after {
          background: #38BDF8;
        }

        body.dark .theme-toggle-btn {
          color: #CBD5E1;
        }

        body.dark .theme-toggle-btn:hover {
          background-color: #1E293B;
          color: #FFFFFF;
        }

        body.dark .header-phone-cta {
          color: #F8FAFC;
        }

        body.dark .mobile-hamburger-btn {
          color: #F8FAFC;
        }

        body.dark .mobile-drawer {
          background: #0F172A;
          border-bottom-color: rgba(255, 255, 255, 0.12);
        }

        body.dark .mobile-nav-link {
          color: #F1F5F9;
          border-bottom-color: rgba(255, 255, 255, 0.08);
        }
      `}</style>
    </>
  );
}
