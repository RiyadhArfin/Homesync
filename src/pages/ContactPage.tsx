import { Mail, Phone, MapPin, Send } from 'lucide-react';
import contactSupport from '../assets/images/contact-support.png';
import featureInspection from '../assets/images/feature-inspection.png';

export default function ContactPage() {
    return (
        <div className="contact-page">
            <section className="page-header">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>Get in touch for a free quote or service inquiry. We respond within 24 hours.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info">
                            <div className="support-visual">
                                <img src={contactSupport} alt="Customer Support" className="support-img" />
                            </div>
                            <div className="info-card">
                                <h2>Get In Touch</h2>
                                <p className="info-intro">
                                    We are ready to assist with all your property preservation needs.
                                    Reach out directly or use the form to send us a message.
                                </p>

                                <ul className="info-list">
                                    <li>
                                        <div className="icon-box"><Phone size={24} /></div>
                                        <div>
                                            <strong>Phone</strong>
                                            <a href="tel:8042922009">(804) 292-2009</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon-box"><Mail size={24} /></div>
                                        <div>
                                            <strong>Email</strong>
                                            <a href="mailto:info@homesyncllc.org">info@homesyncllc.org</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon-box"><MapPin size={24} /></div>
                                        <div>
                                            <strong>Service Area</strong>
                                            <span>Richmond, VA & Surrounding Areas</span>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>

                        <div className="contact-form-wrapper">
                            <form className="contact-form" action="mailto:info@homesyncllc.org" method="post" encType="text/plain">
                                <h3>Send a Message</h3>
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" id="name" name="name" className="form-input" required placeholder="John Doe" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" name="email" className="form-input" required placeholder="john@example.com" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="tel" id="phone" name="phone" className="form-input" placeholder="(555) 123-4567" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" name="message" rows={5} className="form-textarea" required placeholder="Tell us about your property needs..."></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">
                                    Send Message <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
        .page-header {
          position: relative;
          background-image: url(${featureInspection});
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

        .contact-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 60px;
        }
        
        @media (min-width: 992px) {
            .contact-grid {
                grid-template-columns: 1fr 1.2fr;
                gap: 80px;
            }
        }
        
        .support-visual {
            margin-bottom: 32px;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: var(--shadow-md);
            border: 1px solid var(--surface-2);
        }
        
        .support-img {
            width: 100%;
            height: auto;
            display: block;
        }

        .info-card {
            background: white;
            padding: 40px;
            border-radius: 16px;
            border: 1px solid var(--surface-2);
            box-shadow: var(--shadow-lg);
        }
        
        body.dark .info-card {
            background: var(--surface-dark-2);
            border-color: var(--glass-border-dark);
        }
        
        .info-card h2 {
            font-size: 2rem;
            margin-bottom: 16px;
            color: var(--primary);
        }
        
        body.dark .info-card h2 {
            color: var(--text-light);
        }
        
        .info-intro {
            color: var(--text-secondary);
            margin-bottom: 40px;
            line-height: 1.6;
            font-size: 1.1rem;
        }
        
        body.dark .info-intro {
            color: var(--text-dark-secondary);
        }
        
        .info-list {
            display: flex;
            flex-direction: column;
            gap: 32px;
        }
        
        .info-list li {
            display: flex;
            gap: 20px;
            align-items: flex-start;
        }
        
        .icon-box {
            background: var(--accent-light);
            color: var(--accent);
            width: 48px;
            height: 48px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }
        
        body.dark .icon-box {
            background: rgba(245, 158, 11, 0.1);
        }
        
        .info-list strong {
            display: block;
            font-size: 1.1rem;
            margin-bottom: 4px;
            color: var(--primary);
        }
        
        body.dark .info-list strong {
            color: var(--text-light);
        }
        
        .info-list span, .info-list a {
            color: var(--text-secondary);
            font-size: 1.05rem;
        }
        
        body.dark .info-list span, body.dark .info-list a {
            color: var(--text-dark-secondary);
        }
        
        .info-list a:hover {
            color: var(--accent);
        }

        .contact-form-wrapper {
            background: white;
            padding: 48px;
            border-radius: 16px;
            box-shadow: var(--shadow-xl);
            border: 1px solid var(--surface-2);
        }
        
        body.dark .contact-form-wrapper {
            background: var(--surface-dark-2);
            border-color: var(--glass-border-dark);
        }
        
        .contact-form h3 {
            font-size: 2rem;
            margin-bottom: 32px;
            color: var(--primary);
        }
        
        body.dark .contact-form h3 {
            color: var(--text-light);
        }
        
        .form-group {
            margin-bottom: 24px;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: var(--primary);
        }
        
        body.dark .form-group label {
            color: var(--text-light);
        }
        
        .form-input, .form-textarea {
          width: 100%;
          padding: 16px;
          border: 2px solid var(--surface-2);
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.2s;
          background-color: var(--bg-light);
          color: var(--text-primary);
          font-family: inherit;
        }
        
        body.dark .form-input, body.dark .form-textarea {
            background-color: var(--bg-dark);
            border-color: var(--surface-dark-2);
            color: var(--text-light);
        }

        .form-input:focus, .form-textarea:focus {
          outline: none;
          border-color: var(--accent);
          background-color: white;
          box-shadow: 0 0 0 4px rgba(245, 158, 11, 0.1);
        }
        
        body.dark .form-input:focus, body.dark .form-textarea:focus {
            background-color: var(--surface-dark-1);
        }
        
        .btn-block {
            width: 100%;
            padding: 16px;
            font-size: 1.1rem;
        }
      `}</style>
        </div>
    );
}
