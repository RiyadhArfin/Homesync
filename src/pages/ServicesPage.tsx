import { Link } from 'react-router-dom';
import { ShieldCheck, TreePine, Trash2, Hammer, ClipboardCheck, Home, Ruler, Snowflake, PaintBucket, HardHat, Key, ChevronDown } from 'lucide-react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import handymanVideo from '../assets/videos/handyman-service.webm';
import serviceLock from '../assets/images/service-lock.png';
import serviceLawn from '../assets/images/service-lawn.png';
import serviceDebris from '../assets/images/service-debris.png';
import featureInspection from '../assets/images/feature-inspection.png';
import serviceRepair from '../assets/images/service-repair.png';
import heroServices from '../assets/images/hero-services.png';
import officeInterior from '../assets/images/office-interior.png';
import serviceWinter from '../assets/images/service-winter.png';
import servicePaint from '../assets/images/service-paint.png';
import heroMain from '../assets/images/hero-main.png';

export default function ServicesPage() {
    useRevealOnScroll('.reveal, .reveal-scale');
    const allServices = [
        { title: 'Securing & Lock Services', icon: <Key size={24} />, img: serviceLock, desc: 'Complete property securing including re-keying, lock changes, board-ups, and lockbox installation to prevent unauthorized access.' },
        { title: 'Lawn & Landscape Care', icon: <TreePine size={24} />, img: serviceLawn, desc: 'Regular grass cuts, tree trimming, shrub maintenance, and seasonal yard cleanups to maintain curb appeal.' },
        { title: 'Debris Removal', icon: <Trash2 size={24} />, img: serviceDebris, desc: 'Full interior and exterior trash-outs, hazard removal, and dumping services for foreclosed or vacant properties.' },
        { title: 'Initial Inspections & Reports', icon: <ClipboardCheck size={24} />, img: featureInspection, desc: 'Comprehensive property condition reports, occupancy verification, and damage assessment within 24-48 hours.' },
        { title: 'General Repairs', icon: <Hammer size={24} />, img: serviceRepair, desc: 'Handyman services covering drywall, plumbing leaks, electrical safety checks, and structural repairs.' },
        { title: 'Exterior Maintenance', icon: <Home size={24} />, img: heroServices, desc: 'Siding repairs, gutter cleaning, pressure washing, and roof tarping/patching.' },
        { title: 'Interior Maintenance', icon: <Ruler size={24} />, img: officeInterior, desc: 'Janitorial services, deep cleaning, carpet removal, and system checks.' },
        { title: 'Winterization', icon: <Snowflake size={24} />, img: serviceWinter, desc: 'Plumbing system draining, anti-freeze application, and dry heat system testing to prevent freeze damage.' },
        { title: 'Renovation & Refresh', icon: <PaintBucket size={24} />, img: servicePaint, desc: 'Full painting, flooring replacement, and kitchen/bath upgrades to increase property value.' },
        { title: 'Health & Safety Repairs', icon: <ShieldCheck size={24} />, img: serviceRepair, desc: 'Mold remediation, trip hazard removal, railing installation, and code compliance fixes.' },
        { title: 'Full Unit Turnovers', icon: <HardHat size={24} />, img: heroMain, desc: 'End-to-end preparation of rental units for new tenants, including cleaning, repairs, and painting.' },
    ];

    return (
        <div className="services-page">
            {/* ── CINEMATIC VIDEO HERO ── */}
            <section className="svc-hero">

                {/* Video */}
                <video
                    className="svc-hero-video"
                    src={handymanVideo}
                    autoPlay muted loop playsInline
                    poster={heroServices}
                />

                {/* Letterbox bars */}
                <div className="svc-hero-lb svc-hero-lb--top" />
                <div className="svc-hero-lb svc-hero-lb--bottom" />

                {/* Overlay layers */}
                <div className="svc-hero-overlay svc-hero-overlay--dark" />
                <div className="svc-hero-overlay svc-hero-overlay--brand" />
                <div className="svc-hero-overlay svc-hero-overlay--vignette" />

                {/* Film grain */}
                <div className="svc-hero-grain" aria-hidden="true" />

                {/* Glowing accent line */}
                <div className="svc-hero-accent-line" aria-hidden="true" />

                {/* Content */}
                <div className="container svc-hero-content">
                    <div className="svc-hero-badge">
                        <span className="svc-hero-badge-dot" />
                        11 Expert Services · Richmond, VA
                    </div>

                    <h1 className="svc-hero-title">
                        Our Expert <span className="svc-highlight">Services</span>
                    </h1>

                    <p className="svc-hero-subtitle">
                        Comprehensive preservation, maintenance, and renovation solutions
                        for every stage of property management.
                    </p>

                    <Link to="/contact" className="btn svc-hero-cta">
                        Get A Free Quote <ChevronDown size={18} style={{ transform: 'rotate(-90deg)' }} />
                    </Link>
                </div>

                {/* Scroll indicator */}
                <a href="#services-grid" className="svc-scroll-indicator" aria-label="Scroll to services">
                    <ChevronDown size={22} />
                </a>
            </section>

            <section className="section" id="services-grid">
                <div className="container">
                    <div className="services-grid-large">
                        {allServices.map((service, index) => (
                            <div key={index} className="service-card-large reveal-scale" data-delay={`${index * 80}`}>
                                <div className="service-img-container">
                                    <img src={service.img} alt={service.title} />
                                    <div className="service-icon-overlay">{service.icon}</div>
                                </div>
                                <div className="service-content">
                                    <h3>{service.title}</h3>
                                    <p>{service.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="additional-info reveal" data-delay="100">
                        <h3>Need a custom solution?</h3>
                        <p>We also offer additional property solutions tailored to your specific asset needs.</p>
                        <Link to="/contact" className="btn btn-primary">Contact Our Team</Link>
                    </div>
                </div>
            </section>

            <style>{`
        /* ─── SERVICES VIDEO HERO ─────────────────── */
        .svc-hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          color: white;
        }

        .svc-hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
          transform: scale(1.06);
        }

        /* Letterbox bars */
        .svc-hero-lb {
          position: absolute; left: 0; right: 0;
          height: clamp(20px, 3.5vw, 48px);
          background: #000;
          z-index: 3;
          animation: svc-lb-in 1.2s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .svc-hero-lb--top    { top: 0;    transform-origin: top; }
        .svc-hero-lb--bottom { bottom: 0; transform-origin: bottom; }
        @keyframes svc-lb-in {
          from { transform: scaleY(3); }
          to   { transform: scaleY(1); }
        }

        /* Overlay layers */
        .svc-hero-overlay { position: absolute; inset: 0; }
        .svc-hero-overlay--dark    { background: linear-gradient(180deg, rgba(5,10,24,0.5) 0%, rgba(5,10,24,0.75) 100%); z-index: 1; }
        .svc-hero-overlay--brand   { background: linear-gradient(135deg, rgba(10,28,58,0.6) 0%, transparent 55%); z-index: 1; }
        .svc-hero-overlay--vignette{ background: radial-gradient(ellipse at center, transparent 25%, rgba(0,0,0,0.65) 100%); z-index: 1; }

        /* Film grain */
        .svc-hero-grain {
          position: absolute; inset: 0; z-index: 2;
          opacity: 0.04;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-size: 180px;
          animation: grain-shift 0.4s steps(1) infinite;
          pointer-events: none;
        }

        /* Glowing accent line */
        .svc-hero-accent-line {
          position: absolute; bottom: 38%; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, var(--accent) 30%, #00aaff 50%, var(--accent) 70%, transparent 100%);
          opacity: 0.22; z-index: 3;
          animation: accent-line-in 2s ease-out 0.5s both;
        }

        /* Content */
        .svc-hero-content {
          position: relative; z-index: 4;
          max-width: 800px; margin: 0 auto;
          text-align: center; padding: 100px 24px 80px;
        }

        /* Badge */
        .svc-hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.18);
          backdrop-filter: blur(8px);
          border-radius: 100px; padding: 7px 18px;
          font-size: 0.82rem; font-weight: 600;
          letter-spacing: 0.05em; text-transform: uppercase;
          color: rgba(255,255,255,0.9); margin-bottom: 24px;
          animation: fadeInUp 0.7s ease-out 0.3s both;
        }
        .svc-hero-badge-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #f59e0b;
          box-shadow: 0 0 0 0 rgba(245,158,11,0.5);
          animation: pulse-amber 2s ease-in-out infinite;
        }
        @keyframes pulse-amber {
          0%,100% { box-shadow: 0 0 0 0 rgba(245,158,11,0.5); }
          50%      { box-shadow: 0 0 0 6px rgba(245,158,11,0); }
        }

        /* Title */
        .svc-hero-title {
          font-size: clamp(2.4rem, 5.5vw, 4.5rem);
          font-weight: 900; line-height: 1.05;
          letter-spacing: -0.03em; margin-bottom: 20px;
          animation: fadeInUp 0.7s ease-out 0.5s both;
          text-shadow: 0 4px 32px rgba(0,0,0,0.5);
        }
        .svc-highlight {
          color: transparent;
          background: linear-gradient(90deg, #f59e0b, #fbbf24);
          -webkit-background-clip: text;
          background-clip: text;
        }

        /* Subtitle */
        .svc-hero-subtitle {
          font-size: clamp(0.95rem, 1.8vw, 1.15rem);
          color: rgba(255,255,255,0.78);
          max-width: 580px; margin: 0 auto 36px;
          line-height: 1.7;
          animation: fadeInUp 0.7s ease-out 0.7s both;
        }

        /* CTA */
        .svc-hero-cta {
          background: #f59e0b; color: #0a1c3a;
          padding: 14px 32px; border-radius: 8px;
          font-size: 1rem; font-weight: 700;
          box-shadow: 0 0 28px rgba(245,158,11,0.45);
          display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s cubic-bezier(0.23,1,0.32,1);
          animation: fadeInUp 0.7s ease-out 0.9s both;
        }
        .svc-hero-cta:hover {
          background: #fbbf24;
          box-shadow: 0 0 44px rgba(245,158,11,0.7);
          transform: translateY(-2px);
        }

        /* Scroll indicator */
        .svc-scroll-indicator {
          position: absolute; bottom: 28px; left: 50%;
          transform: translateX(-50%); z-index: 4;
          color: rgba(255,255,255,0.45);
          animation: scroll-bounce 2s ease-in-out infinite, fadeIn 1s ease-out 1.2s both;
          transition: color 0.2s;
        }
        .svc-scroll-indicator:hover { color: white; }

        .section {
            padding: 140px 0;
        }

        .services-grid-large {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 40px;
          animation: fadeInUp 0.8s ease-out 0.4s backwards;
        }

        .service-card-large {
          background: white;
          border: 1px solid var(--surface-2);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          height: 100%;
          box-shadow: var(--shadow-sm);
        }
        
        body.dark .service-card-large {
            background: var(--surface-dark-2);
            border-color: var(--glass-border-dark);
        }

        .service-card-large:hover {
          box-shadow: var(--shadow-xl);
          border-color: var(--accent);
          transform: translateY(-8px);
        }

        .service-img-container {
            position: relative;
            height: 200px;
            overflow: hidden;
        }
        
        .service-img-container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.6s ease;
        }
        
        .service-card-large:hover .service-img-container img {
            transform: scale(1.05);
        }
        
        .service-icon-overlay {
            position: absolute;
            bottom: -20px;
            right: 20px;
            background: var(--accent);
            color: white;
            width: 48px;
            height: 48px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: var(--shadow-md);
            z-index: 2;
        }

        .service-content {
          padding: 40px 32px 32px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .service-card-large h3 {
          font-size: 1.5rem;
          margin-bottom: 16px;
          font-weight: 700;
        }

        .service-card-large p {
          color: var(--text-secondary);
          line-height: 1.7;
          font-size: 1.05rem;
        }
        
        body.dark .service-card-large p {
            color: var(--text-dark-secondary);
        }
        
        .additional-info {
            text-align: center;
            margin-top: 100px;
            margin-bottom: 40px;
            padding: 60px;
            background-color: var(--bg-light);
            border-radius: 16px;
            border: 1px solid var(--surface-2);
            box-shadow: var(--shadow-lg);
        }
        
        body.dark .additional-info {
            background-color: var(--surface-dark-2);
            border-color: var(--glass-border-dark);
        }
        
        .additional-info h3 {
            margin-bottom: 24px;
            font-size: 2rem;
        }
        
        .additional-info p {
            margin-bottom: 40px;
            color: var(--text-secondary);
            font-size: 1.25rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }
        
        body.dark .additional-info p {
            color: var(--text-dark-secondary);
        }
      `}</style>
        </div>
    );
}
