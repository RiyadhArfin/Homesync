import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { companyInfo } from '../data/friendlyContent';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="footer-root">
      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 20px' }}>
        <div className="footer-main-grid">
          
          {/* Column 1: Brand & Office Info */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-brand-anchor">
              <img src={logo} alt="Homesync LLC Logo" className="footer-logo-img" />
              <div className="footer-brand-text">
                <span className="footer-brand-name">
                  HOME<span style={{ color: '#0063A6' }}>SYNC</span> LLC
                </span>
                <span className="footer-brand-tag">PROPERTY MAINTENANCE &amp; REPAIRS</span>
              </div>
            </Link>
            
            <p className="footer-text-secondary">
              Dependable residential property care, handyman repairs, and rental turnovers across Richmond, Virginia.
            </p>

            <div className="footer-contact-items">
              <p className="footer-contact-row">
                <MapPin size={16} className="text-brand-blue" />
                <span>{companyInfo.address}</span>
              </p>
              <p className="footer-contact-row">
                <Phone size={16} className="text-brand-blue" />
                <a href={`tel:${companyInfo.phoneRaw}`} className="footer-link-highlight">
                  {companyInfo.phone}
                </a>
              </p>
              <p className="footer-contact-row">
                <Mail size={16} className="text-brand-blue" />
                <a href={`mailto:${companyInfo.email}`} className="footer-link-highlight">
                  {companyInfo.email}
                </a>
              </p>
            </div>
          </div>

          {/* Column 2: 3 Pillars & Services */}
          <div className="footer-col">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-list">
              <li>
                <Link to="/services#maintenance" className="footer-link">
                  General Handyman &amp; Repairs
                </Link>
              </li>
              <li>
                <Link to="/services#maintenance" className="footer-link">
                  Drywall Patching &amp; Painting
                </Link>
              </li>
              <li>
                <Link to="/services#turnover" className="footer-link">
                  Rental Turnovers (Make-Ready)
                </Link>
              </li>
              <li>
                <Link to="/services#preservation" className="footer-link">
                  Vacant Property Preservation
                </Link>
              </li>
              <li>
                <Link to="/services#maintenance" className="footer-link">
                  Plumbing &amp; Fixture Repairs
                </Link>
              </li>
              <li>
                <Link to="/services#maintenance" className="footer-link">
                  Pressure Washing &amp; Decks
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Service Areas (Greater Virginia / RVA) */}
          <div className="footer-col">
            <h4 className="footer-heading">Service Areas (Greater Virginia)</h4>
            <p className="footer-text-secondary" style={{ marginBottom: '12px', fontSize: '0.85rem' }}>
              Serving residential neighborhoods throughout Greater Richmond:
            </p>
            <ul className="footer-list area-list">
              <li>• Richmond City &amp; The Fan</li>
              <li>• Henrico &amp; Short Pump</li>
              <li>• Chesterfield &amp; Midlothian</li>
              <li>• Hanover &amp; Mechanicsville</li>
              <li>• Tri-Cities &amp; Colonial Heights</li>
            </ul>
            <div style={{ marginTop: '14px', fontSize: '0.8125rem', color: '#94A3B8' }}>
              Plus Goochland, Powhatan &amp; surrounding Central VA counties.
            </div>
          </div>

          {/* Column 4: Contractor Assurance & Hours */}
          <div className="footer-col">
            <h4 className="footer-heading">Contractor Assurance</h4>
            <div className="assurance-box">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FFFFFF', fontWeight: 700, fontSize: '0.9rem', marginBottom: '6px' }}>
                <ShieldCheck size={18} color="#0063A6" />
                <span>Licensed &amp; Insured VA Contractor</span>
              </div>
              <p style={{ fontSize: '0.8125rem', color: '#94A3B8', lineHeight: 1.45, margin: '0 0 14px' }}>
                Virginia Contractor Class C · Insured for full homeowner protection on every project.
              </p>

              <div className="hours-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, color: '#F8FAFC', fontSize: '0.85rem', marginBottom: '4px' }}>
                  <Clock size={15} color="#0063A6" />
                  <span>Hours of Operation</span>
                </div>
                <div style={{ fontSize: '0.8125rem', color: '#CBD5E1', lineHeight: 1.4 }}>
                  <div>Mon – Fri: 8:00 AM – 5:00 PM</div>
                  <div style={{ color: '#94A3B8', marginTop: '2px' }}>Saturday & Sunday: Closed</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Strip */}
        <div className="footer-bottom-strip">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Homesync LLC. Licensed &amp; Insured Residential Contractor in Richmond, VA. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link to="/services" className="footer-legal-link">
              Work Guarantee
            </Link>
            <span className="footer-bullet">•</span>
            <Link to="/about" className="footer-legal-link">
              About Our Crew
            </Link>
            <span className="footer-bullet">•</span>
            <Link to="/privacy" className="footer-legal-link">
              Privacy &amp; SMS Policy
            </Link>
            <span className="footer-bullet">•</span>
            <Link to="/contact" className="footer-legal-link">
              Contact Dispatch
            </Link>
          </div>
        </div>

      </div>

      <style>{`
        .footer-root {
          background-color: #0B1C30;
          color: #94A3B8;
          padding: 64px 0 28px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .footer-main-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 36px;
          margin-bottom: 48px;
        }

        @media (min-width: 640px) {
          .footer-main-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (min-width: 1024px) {
          .footer-main-grid {
            grid-template-columns: 1.4fr 1.1fr 1.1fr 1.3fr;
          }
        }

        .footer-brand-anchor {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          margin-bottom: 12px;
        }

        .footer-logo-img {
          height: 38px;
          width: auto;
          object-fit: contain;
        }

        .footer-brand-text {
          display: flex;
          flex-direction: column;
        }

        .footer-brand-name {
          font-size: 1.2rem;
          font-weight: 800;
          color: #FFFFFF;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }

        .footer-brand-tag {
          font-size: 0.65rem;
          font-weight: 700;
          color: #64748B;
          letter-spacing: 0.08em;
          margin-top: 2px;
        }

        .footer-text-secondary {
          font-size: 0.875rem;
          line-height: 1.55;
          color: #94A3B8;
          margin-bottom: 16px;
        }

        .footer-contact-items {
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 0.875rem;
          color: #CBD5E1;
        }

        .footer-contact-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 0;
        }

        .footer-link-highlight {
          color: #E2E8F0;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.15s ease;
        }

        .footer-link-highlight:hover {
          color: #0063A6;
        }

        .text-brand-blue {
          color: #0063A6;
          flex-shrink: 0;
        }

        .footer-heading {
          font-size: 1.05rem;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 16px;
          letter-spacing: -0.01em;
        }

        .footer-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-link {
          color: #CBD5E1;
          font-size: 0.875rem;
          text-decoration: none;
          transition: color 0.15s ease;
        }

        .footer-link:hover {
          color: #0063A6;
          text-decoration: underline;
        }

        .area-list li {
          font-size: 0.875rem;
          color: #E2E8F0;
        }

        .hours-card {
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 12px 14px;
        }

        /* ── Bottom Legal Strip ── */
        .footer-bottom-strip {
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          font-size: 0.8125rem;
          color: #64748B;
        }

        @media (min-width: 768px) {
          .footer-bottom-strip {
            flex-direction: row;
          }
        }

        .footer-copyright {
          margin: 0;
          text-align: center;
        }

        .footer-bottom-links {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
        }

        .footer-legal-link {
          color: #94A3B8;
          text-decoration: none;
          transition: color 0.15s ease;
        }

        .footer-legal-link:hover {
          color: #0063A6;
          text-decoration: underline;
        }

        .footer-bullet {
          color: #475569;
        }
      `}</style>
    </footer>
  );
}
