import { Link } from 'react-router-dom';
import { ShieldCheck, TreePine, Trash2, Hammer, ClipboardCheck, Home, Ruler, Snowflake, PaintBucket, HardHat, Key } from 'lucide-react';
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
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1>Our Expert Services</h1>
                    <p>Comprehensive solutions for every stage of property preservation and management.</p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section">
                <div className="container">
                    <div className="services-grid-large">
                        {allServices.map((service, index) => (
                            <div key={index} className="service-card-large">
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

                    <div className="additional-info">
                        <h3>Need a custom solution?</h3>
                        <p>We also offer additional property solutions tailored to your specific asset needs.</p>
                        <Link to="/contact" className="btn btn-primary">Contact Our Team</Link>
                    </div>
                </div>
            </section>

            <style>{`
        .page-header {
          position: relative;
          background-image: url(${heroServices});
          background-size: cover;
          background-position: center;
          color: white;
          padding: 140px 0 100px;
          text-align: center;
          overflow: hidden;
        }
        
        .page-header::before {
             content: '';
             position: absolute;
             inset: 0;
             background: linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.7));
             z-index: 1;
        }

        .page-header .container {
            position: relative;
            z-index: 2;
        }

        .page-header h1 {
          font-size: 3rem;
          margin-bottom: 24px;
          animation: fadeInUp 0.8s ease-out;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        
        @media (min-width: 768px) {
            .page-header h1 { font-size: 4rem; }
        }

        .page-header p {
          font-size: 1.25rem;
          color: var(--text-dark-secondary);
          max-width: 700px;
          margin: 0 auto;
          animation: fadeInUp 0.8s ease-out 0.2s backwards;
        }

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
