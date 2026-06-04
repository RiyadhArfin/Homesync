import { Link } from 'react-router-dom';
import { Target, Shield, Users } from 'lucide-react';
import aboutTeam from '../assets/images/about-team.png';
import officeInterior from '../assets/images/office-interior.png';

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="page-header">
        <div className="container">
          <h1>About Homesync LLC</h1>
          <p>Setting the standard for property preservation in Western New York.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Who We Are</h2>
          </div>
          <div className="about-content">
            <div className="about-visual">
              <img src={aboutTeam} alt="Our Team" className="about-img" />
            </div>
            <div className="about-text text-content">
              <p>
                Homesync LLC is a premier property preservation and maintenance company based in Richmond, VA.
                We specialize in protecting and maintaining assets for banks, asset management companies, and individual investors.
              </p>
              <p>
                Our mission is to provide "LLC-grade" professional services that go beyond the typical handyman approach.
                We understand the strict compliance requirements, timelines, and quality standards demanded by the industry.
                Whether it's a simple lock change or a full renovation for a rental turnover, we treat every property as if it were our own.
              </p>
            </div>
          </div>

          <div className="highlight-section">
            <div className="highlight-box">
              <div className="highlight-content">
                <h2>Operational Excellence</h2>
                <p>
                  We leverage advanced tracking and reporting to ensure every work order is documented, verified, and completed on time.
                </p>
              </div>
              <div className="highlight-visual">
                <img src={officeInterior} alt="Office" className="highlight-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-off-white">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Values</h2>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <Shield size={32} />
              </div>
              <h3>Integrity & Compliance</h3>
              <p>We strictly adhere to all local codes and client-specific guidelines to ensure your asset is protected and compliant.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <Target size={32} />
              </div>
              <h3>Speed & Efficiency</h3>
              <p>Time is money in property management. We pride ourselves on rapid response times and meeting every deadline.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <Users size={32} />
              </div>
              <h3>Partnership Focus</h3>
              <p>We view ourselves as partners in your success, providing transparent reporting and communication at every step.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="container cta-content">
          <h2>Looking for a reliable partner?</h2>
          <p>Let's discuss how we can help manage your portfolio.</p>
          <Link to="/contact" className="btn btn-primary-inverse">Contact Us</Link>
        </div>
      </section>

      <style>{`
        .about-page {
            overflow-x: hidden;
        }
        
        .page-header {
          position: relative;
          background-image: url(${officeInterior});
          background-size: cover;
          background-position: center;
          color: white;
          padding: 140px 0 100px;
          text-align: center;
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
          padding: 100px 0;
        }
        
        .section-header {
            text-align: center;
            margin-bottom: 60px;
        }
        
        .section-header h2 {
            font-size: 2.5rem;
            color: var(--primary);
            margin-bottom: 16px;
        }
        
        body.dark .section-header h2 {
            color: var(--text-light);
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 60px;
          align-items: center;
          margin-bottom: 80px;
        }

        @media (min-width: 992px) {
          .about-content {
            grid-template-columns: 1fr 1fr;
          }
        }
        
        .about-img {
            width: 100%;
            border-radius: 16px;
            box-shadow: var(--shadow-xl);
            border: 1px solid var(--surface-2);
        }

        .highlight-section {
            margin-top: 80px;
        }

        .highlight-box {
          background: white;
          border: 1px solid var(--surface-2);
          border-radius: 16px;
          box-shadow: var(--shadow-lg);
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr;
        }
        
        @media (min-width: 768px) {
            .highlight-box {
                grid-template-columns: 1fr 1fr;
            }
        }
        
        body.dark .highlight-box {
          background: var(--surface-dark-2);
          border-color: var(--glass-border-dark);
        }
        
        .highlight-content {
            padding: 48px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .highlight-box h2 {
          font-size: 2rem;
          margin-bottom: 24px;
          color: var(--accent);
        }

        .highlight-visual {
            height: 100%;
            min-height: 300px;
        }
        
        .highlight-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .text-content h2 {
          font-size: 2.5rem;
          margin-bottom: 24px;
          color: var(--primary);
        }
        
        body.dark .text-content h2 {
            color: var(--text-light);
        }

        .text-content p {
          font-size: 1.125rem;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 24px;
        }
        
        body.dark .text-content p {
            color: var(--text-dark-secondary);
        }
        
        .bg-off-white {
            background-color: var(--bg-light);
            border-top: 1px solid var(--surface-2);
            border-bottom: 1px solid var(--surface-2);
        }
        
        body.dark .bg-off-white {
            background-color: var(--bg-dark);
            border-color: var(--glass-border-dark);
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 40px;
          margin-top: 60px;
        }

        .value-card {
          text-align: center;
          padding: 40px;
          background: white;
          border-radius: 12px;
          transition: transform 0.3s ease;
          border: 1px solid var(--surface-2);
          box-shadow: var(--shadow-sm);
        }
        
        body.dark .value-card {
            background: var(--surface-dark-2);
            border-color: var(--glass-border-dark);
        }

        .value-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent);
          box-shadow: var(--shadow-md);
        }

        .value-icon {
          color: var(--accent);
          margin-bottom: 24px;
          background: var(--accent-light);
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        
        body.dark .value-icon {
            background: rgba(245, 158, 11, 0.1);
        }

        .value-card h3 {
          font-size: 1.5rem;
          margin-bottom: 16px;
        }

        .value-card p {
          color: var(--text-secondary);
          line-height: 1.6;
        }
        
        body.dark .value-card p {
            color: var(--text-dark-secondary);
        }
        
        .cta-strip {
          padding: 100px 0;
          background: linear-gradient(135deg, var(--primary), var(--primary-light));
          color: white;
          text-align: center;
          position: relative;
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
        
        .btn-primary-inverse {
          background-color: white;
          color: var(--primary);
          padding: 16px 32px;
          border-radius: 4px;
          font-weight: 700;
          transition: all 0.2s;
        }

        .btn-primary-inverse:hover {
          background-color: var(--accent);
          color: white;
        }
      `}</style>
    </div>
  );
}
