import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, TreePine, Trash2, Hammer, CheckCircle2, Snowflake, PaintBucket, Users } from 'lucide-react';
import TiltCard from '../components/TiltCard';
import QuoteEstimator from '../components/QuoteEstimator';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import heroBg from '../assets/images/hero-main.png';
import ctaBg from '../assets/images/cta-keys.png';
import trustBadge from '../assets/images/trust-badge.png';

export default function HomePage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    { title: 'Securing & Locks', icon: <ShieldCheck size={32} />, desc: 'Board-ups, re-keying, and lockbox installation.' },
    { title: 'Lawn & Landscape', icon: <TreePine size={32} />, desc: 'Regular maintenance, mowing, and tree trimming.' },
    { title: 'Debris Removal', icon: <Trash2 size={32} />, desc: 'Interior and exterior trash outs and dumping.' },
    { title: 'General Repairs', icon: <Hammer size={32} />, desc: 'Safety repairs, winterization, and structural fixes.' },
    { title: 'Winterization', icon: <Snowflake size={32} />, desc: 'System draining and anti-freeze application.' },
    { title: 'Renovation', icon: <PaintBucket size={32} />, desc: 'Full painting, flooring, and property upgrades.' },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div
          className="container hero-content"
          style={{
            transform: `translate3d(${mousePos.x * -20}px, ${mousePos.y * -10}px, 0)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <h1 className="hero-title">
            Professional Property <span className="highlight-text">Solutions</span>
          </h1>
          <p className="hero-subtitle">
            Trusted preservation types: Banks, Asset Managers, and Property Owners in Richmond, VA. We secure, maintain, and renovate your assets.
          </p>
          <div className="hero-cta-group">
            <Link to="/contact" className="btn btn-primary btn-large">
              Get A Quote <ArrowRight size={20} className="btn-icon" />
            </Link>
            <Link to="/services" className="btn btn-outline-white btn-large">
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Estimator Section */}
      <section className="section" style={{ backgroundColor: 'var(--surface-2)', padding: '80px 0' }}>
        <div className="container">
          <QuoteEstimator />
        </div>
      </section>

      {/* Services Preview */}
      <section className="section services-preview">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Services</h2>
            <p>Comprehensive property preservation and maintenance solutions.</p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <TiltCard key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <Link to="/services" className="service-link">Learn More</Link>
              </TiltCard>
            ))}
          </div>

          <div className="view-all-container">
            <Link to="/services" className="btn btn-glass-prominent">
              View All Services <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust / About Preview */}
      <section className="section trust-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Homesync?</h2>
            <p>We deliver LLC-grade professionalism with every work order.</p>
            <p className="trust-lead-centered">Our team is dedicated to speed, compliance, and quality across all services.</p>
          </div>

          <div className="grid-2-col">
            <div className="trust-content">
              <ul className="trust-list">
                <li>
                  <CheckCircle2 size={24} className="trust-icon" />
                  <div>
                    <strong>Reliable & Timely</strong>
                    <p>We meet strict deadlines for inspections and repairs.</p>
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={24} className="trust-icon" />
                  <div>
                    <strong>Fully Compliant</strong>
                    <p>Adhering to all local codes and asset management standards.</p>
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={24} className="trust-icon" />
                  <div>
                    <strong>Quality Craftsmanship</strong>
                    <p>From cleanouts to renovations, we do it right seamlessly.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="trust-visual">
              <div className="trust-badge-container">
                <img src={trustBadge} alt="Certified Professional" className="trust-badge-img" />
              </div>
              <div className="stat-card">
                <span className="stat-number">100%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Response Time</span>
              </div>
            </div>
          </div>

          <div className="view-all-container">
            <Link to="/about" className="btn btn-outline-strong">
              Meet The Team <Users size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="section" style={{ padding: '40px 0 100px 0' }}>
        <div className="container">
          <BeforeAfterSlider />
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-strip">
        <div className="cta-overlay"></div>
        <div className="container cta-content">
          <h2>Ready to secure your property?</h2>
          <p>Contact us today for a free consultation or quote.</p>
          <Link to="/contact" className="btn btn-primary-inverse">Contact Us Now</Link>
        </div>
      </section>

      <style>{`
        .home-page {
          overflow-x: hidden;
        }

        .hero {
          position: relative;
          min-height: 85vh;
          background-image: url(${heroBg});
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          color: white;
          padding: 120px 0;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.6));
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 24px;
          line-height: 1.1;
          letter-spacing: -0.02em;
          animation: fadeInUp 0.8s ease-out;
        }
        
        @media (min-width: 768px) {
          .hero-title {
            font-size: 4.5rem;
          }
        }

        .highlight-text {
          color: var(--accent);
          display: inline-block;
          position: relative;
        }
        
        .highlight-text::after {
            content: '';
            position: absolute;
            bottom: 8px;
            left: 0;
            width: 100%;
            height: 12px;
            background: var(--accent);
            opacity: 0.2;
            z-index: -1;
            transform: skewX(-12deg);
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-dark-secondary);
          margin-bottom: 48px;
          max-width: 650px;
          margin-left: auto;
          margin-right: auto;
          animation: fadeInUp 0.8s ease-out 0.2s backwards;
        }

        .hero-cta-group {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
          animation: fadeInUp 0.8s ease-out 0.4s backwards;
        }
        
        .btn-large {
            padding: 16px 36px;
            font-size: 1.125rem;
        }

        /* Sections */
        .section {
          padding: 120px 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-header h2 {
          font-size: 2.5rem;
          color: var(--primary);
          margin-bottom: 16px;
        }
        
        body.dark .section-header h2 {
            color: var(--text-light);
        }
        
        .section-header p {
            font-size: 1.25rem;
            color: var(--text-secondary);
            max-width: 600px;
            margin: 0 auto;
        }
        
        body.dark .section-header p {
            color: var(--text-dark-secondary);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 40px;
          margin-bottom: 64px;
        }

        .service-card {
          padding: 40px;
          background: white;
          border-radius: 12px; /* Modern rounding */
          box-shadow: var(--shadow-sm);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid var(--surface-2);
          display: flex;
          flex-direction: column;
          height: 100%;
          position: relative;
          overflow: hidden;
        }
        
        body.dark .service-card {
            background: var(--surface-dark-2);
            border-color: var(--glass-border-dark);
        }

        @supports (animation-timeline: view()) {
          .service-card {
            animation: fade-in-up linear both;
            animation-timeline: view();
            animation-range: entry 10% cover 30%;
          }
        }

        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(100px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-xl);
          border-color: var(--accent);
        }

        .service-icon {
          color: var(--accent);
          margin-bottom: 24px;
          background: var(--accent-light);
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
        }
        
        body.dark .service-icon {
            background: rgba(245, 158, 11, 0.1);
        }

        .service-card h3 {
          font-size: 1.5rem;
          margin-bottom: 16px;
        }

        .service-link {
          display: inline-flex;
          align-items: center;
          margin-top: auto;
          padding-top: 24px;
          color: var(--primary);
          font-weight: 700;
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .service-link::after {
            content: '→';
            margin-left: 8px;
            transition: transform 0.2s;
        }
        
        .service-link:hover::after {
            transform: translateX(4px);
        }
        
        body.dark .service-link {
          color: var(--text-dark-secondary);
        }
        
        body.dark .service-link:hover {
          color: var(--accent);
        }
        
        .view-all-container {
            text-align: center;
            margin-top: 48px;
        }

        /* Trust Section with Glassmorphism */
        .trust-section {
          background-color: var(--bg-light);
          position: relative;
        }
        
        body.dark .trust-section {
            background-color: var(--bg-dark);
        }

        .grid-2-col {
          display: grid;
          grid-template-columns: 1fr;
          gap: 80px;
          align-items: center;
        }

        @media (min-width: 992px) {
          .grid-2-col {
            grid-template-columns: 1.2fr 1fr;
          }
        }
        
        .trust-lead-centered {
            font-size: 1.25rem;
            color: var(--text-secondary);
            margin-top: 16px;
            line-height: 1.6;
        }
        body.dark .trust-lead-centered {
            color: var(--text-dark-secondary);
        }

        .trust-list {
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .trust-list li {
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }

        .trust-icon {
          color: var(--accent);
          flex-shrink: 0;
          margin-top: 2px;
          background: white;
          border-radius: 50%;
          box-shadow: var(--shadow-sm);
        }
        
        body.dark .trust-icon {
            background: var(--surface-dark-2);
        }
        
        .trust-list strong {
            display: block;
            font-size: 1.15rem;
            margin-bottom: 4px;
            color: var(--primary);
        }
        
        body.dark .trust-list strong {
            color: var(--text-light);
        }

        .trust-visual {
            display: grid;
            grid-template-columns: 1fr;
            gap: 24px;
            grid-auto-flow: dense;
        }
        
        @media (min-width: 768px) {
            .trust-visual {
                grid-template-columns: 1fr 1fr;
            }
        }
        
        .trust-badge-container {
            grid-column: 1 / -1;
            display: flex;
            justify-content: center;
            margin-bottom: 24px;
        }

        .trust-badge-img {
            height: 120px;
            width: auto;
            filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));
            animation: float 3s ease-in-out infinite;
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        
        .stat-card {
            background: white;
            color: var(--primary);
            padding: 48px 32px;
            text-align: center;
            border-radius: 16px;
            box-shadow: var(--shadow-lg);
            border: 1px solid var(--surface-2);
        }
        
        body.dark .stat-card {
            background: var(--surface-dark-2);
            color: var(--text-light);
            border-color: var(--glass-border-dark);
        }
        
        .stat-number {
            display: block;
            font-size: 3.5rem;
            font-weight: 800;
            color: var(--accent);
            margin-bottom: 8px;
            line-height: 1;
        }
        
        .stat-label {
            font-size: 1rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: var(--text-secondary);
        }
        
        body.dark .stat-label {
            color: var(--text-dark-secondary);
        }

        /* CTA Strip */
        .cta-strip {
          padding: 100px 0;
          background-image: url(${ctaBg});
          background-size: cover;
          background-position: center;
          color: white;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .cta-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.8));
            z-index: 1;
        }
        
        .cta-content {
            position: relative;
            z-index: 2;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .cta-content h2 {
          font-size: 3rem;
          margin-bottom: 24px;
        }

        .cta-content p {
          margin-bottom: 40px;
          font-size: 1.5rem;
          color: var(--text-dark-secondary);
        }
      `}</style>
    </div>
  );
}
