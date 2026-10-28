import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Camera,
  ShieldCheck,
} from 'lucide-react';
import { companyInfo, serviceAreas } from '../data/friendlyContent';
import contractorPhoto from '../assets/images/contractor-hero.jpg';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Maintenance & Handyman Repairs',
    address: '',
    message: '',
    smsConsent: true,
  });

  const [isSent, setIsSent] = useState(false);

  const mailSubject = encodeURIComponent(`Service Inquiry from ${formData.name || 'Website Visitor'}`);
  const mailBody = encodeURIComponent(
`Full Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Service Needed: ${formData.service}
Property Address / Neighborhood: ${formData.address}
Message / Punch-List Details:
${formData.message}

SMS Consent: ${formData.smsConsent ? 'Yes' : 'No'}`
  );
  const mailtoUrl = `mailto:${companyInfo.email}?subject=${mailSubject}&body=${mailBody}`;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    // Direct mailto invocation
    window.location.href = mailtoUrl;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="contact-page bg-blueprint-grid" style={{ minHeight: '100vh', paddingTop: '32px', paddingBottom: '80px' }}>
      
      {/* ── 1. HERO ── */}
      <section style={{ padding: '30px 0 40px', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
          <div className="badge-amber" style={{ marginBottom: '14px' }}>
            <MapPin size={14} /> Greater Virginia & Central Virginia
          </div>
          <h1 style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.25rem)', fontWeight: 800, color: '#0F172A', lineHeight: 1.15, marginBottom: '14px' }}>
            Get in Touch With Our Virginia Team
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#475569', lineHeight: 1.6, maxWidth: '680px', margin: '0 auto' }}>
            Have a home repair question, need turnover service between tenants, or managing an asset? Call, text, or email us below. A friendly team member will be happy to help.
          </p>
        </div>
      </section>

      {/* ── 2. THREE DIRECT CONTACT CHANNELS ── */}
      <section style={{ padding: '0 0 48px' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            
            {/* Card 1: Call or Text */}
            <div className="white-card" style={{ padding: '28px', borderTop: '4px solid #0063A6' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: '#EFF6FF', color: '#0063A6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Phone size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
                Call or Text Us
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.5, marginBottom: '14px' }}>
                You can even text us photos of what needs to be fixed for faster scoping!
              </p>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
                {companyInfo.phone}
              </div>
              <div style={{ fontSize: '0.85rem', color: '#475569', marginBottom: '16px' }}>
                Mon–Fri: 8:00 AM – 5:00 PM
              </div>
              <a href={`tel:${companyInfo.phoneRaw}`} className="btn-amber" style={{ padding: '8px 18px', fontSize: '0.875rem' }}>
                <Phone size={15} /> Call or Text Now
              </a>
            </div>

            {/* Card 2: Email Our Team */}
            <div className="white-card" style={{ padding: '28px', borderTop: '4px solid #0F172A' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: '#F1F5F9', color: '#0F172A', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Mail size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
                Direct Email Dispatch
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.5, marginBottom: '14px' }}>
                Send inspection sheets, punch lists, or work order scopes. We review every note promptly.
              </p>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '6px', wordBreak: 'break-all' }}>
                {companyInfo.email}
              </div>
              <div style={{ fontSize: '0.85rem', color: '#475569', marginBottom: '16px' }}>
                Average response in 1–2 business days
              </div>
              <a
                href={`mailto:${companyInfo.email}?subject=${encodeURIComponent('Service Inquiry - Homesync LLC')}`}
                className="btn-outline-navy"
                style={{ padding: '8px 18px', fontSize: '0.875rem' }}
              >
                <Mail size={15} /> Open Email to Write Us
              </a>
            </div>

            {/* Card 3: Local Shop & Service Hub */}
            <div className="white-card" style={{ padding: '28px', borderTop: '4px solid #CBD5E1' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: '#F8FAFC', color: '#334155', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <MapPin size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
                Local Service Hub
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.5, marginBottom: '14px' }}>
                Operating across Richmond, Henrico, Chesterfield, Midlothian, Hanover & Greater Virginia.
              </p>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#0F172A', marginBottom: '6px' }}>
                {companyInfo.address}
              </div>
              <div style={{ fontSize: '0.85rem', color: '#475569', marginBottom: '16px' }}>
                Dispatch & field truck staging
              </div>
              <Link to="/services" className="btn-outline-navy" style={{ padding: '8px 18px', fontSize: '0.875rem' }}>
                View Service Areas
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3. INTERACTIVE CONTACT FORM & RIGHT TRUST SIDEBAR ── */}
      <section style={{ padding: '20px 0 60px' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', alignItems: 'start' }}>
            
            {/* Form Column */}
            <div className="white-card" style={{ padding: '32px' }}>
              {isSent ? (
                <div style={{ textAlign: 'center', padding: '32px 16px' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#DEF7EC', color: '#03543F', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                    Inquiry Prepared!
                  </h3>
                  <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.6, marginBottom: '24px' }}>
                    Thank you, {formData.name || 'friend'}. We opened your email client to send your message directly to <strong>{companyInfo.email}</strong>. If your email client did not open automatically, click the button below:
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
                    <a href={mailtoUrl} className="btn-amber">
                      <Mail size={16} /> Open Your Email App
                    </a>
                    <button
                      type="button"
                      onClick={() => setIsSent(false)}
                      className="btn-outline-navy"
                    >
                      Edit Note
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
                      Send Us a Message via Email
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: '#64748B', margin: 0 }}>
                      Fill in your details below. Clicking send will open your email client pre-populated with your scope.
                    </p>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.name}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '0.95rem' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="(804) 555-0123"
                        value={formData.phone}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '0.95rem' }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="sarah@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '0.95rem' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                        Service Needed
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '0.95rem', background: '#FFF' }}
                      >
                        <option value="Maintenance & Handyman Repairs">Maintenance & Handyman Repairs</option>
                        <option value="Property Preservation & Board-Ups">Property Preservation & Board-Ups</option>
                        <option value="Full Rental Turnover Make-Ready">Full Rental Turnover Make-Ready</option>
                        <option value="Multiple Repairs / Other">Multiple Repairs / Other</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                      Property Address or Neighborhood
                    </label>
                    <input
                      type="text"
                      name="address"
                      placeholder="e.g. 1204 Grove Ave, The Fan or Short Pump"
                      value={formData.address}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '0.95rem' }}
                    />
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                      Tell Us About Your Project or Questions *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Describe what needs fixing, any timeline preferences, or specific punch-list items..."
                      value={formData.message}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '0.95rem', resize: 'vertical' }}
                    />
                  </div>

                  {/* SMS Consent Checkbox */}
                  <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '6px', padding: '12px 14px', marginBottom: '20px' }}>
                    <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer', fontSize: '0.8125rem', color: '#475569', lineHeight: 1.5 }}>
                      <input
                        type="checkbox"
                        name="smsConsent"
                        checked={formData.smsConsent}
                        onChange={handleChange}
                        style={{ marginTop: '2px', accentColor: '#0063A6' }}
                      />
                      <span>
                        I agree to receive text messages from Homesync LLC about my service request. Message and data rates may apply. Reply STOP anytime to opt out.
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn-amber"
                    style={{ width: '100%', padding: '14px', fontSize: '1.05rem', justifyContent: 'center' }}
                  >
                    <Send size={18} /> Send Message to Dispatch
                  </button>

                  <div style={{ fontSize: '0.8rem', color: '#94A3B8', textAlign: 'center', marginTop: '12px' }}>
                    We respect your privacy. Your info is never sold or shared.
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: Friendly Support Card with Contractor Photo */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              <div className="white-card" style={{ padding: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '18px' }}>
                  <img
                    src={contractorPhoto}
                    alt="Mike from Homesync"
                    style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #0063A6' }}
                  />
                  <div>
                    <div className="badge-amber" style={{ marginBottom: '4px' }}>
                      Local Virginia Pro
                    </div>
                    <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '1.1rem' }}>
                      Prefer talking directly?
                    </div>
                  </div>
                </div>

                <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.6, marginBottom: '20px' }}>
                  If you prefer speaking with a real person right away, call Mike and our team during business hours. We’re always glad to talk through a repair.
                </p>

                <a
                  href={`tel:${companyInfo.phoneRaw}`}
                  className="btn-amber"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '1rem', marginBottom: '14px' }}
                >
                  <Phone size={18} /> Call {companyInfo.phone}
                </a>

                {/* Text a Photo Callout */}
                <div style={{ background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: '8px', padding: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, color: '#0063A6', marginBottom: '6px' }}>
                    <Camera size={16} /> Text Photos of Your Repair
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#1E293B', lineHeight: 1.5, margin: 0 }}>
                    Snap 2–3 photos of the repair with your smartphone and text them directly to <strong>{companyInfo.phone}</strong>. It helps us arrive with the right tools and parts on day one!
                  </p>
                </div>
              </div>

              {/* Work Guarantee */}
              <div className="white-card" style={{ padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <ShieldCheck size={24} color="#0063A6" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
                      Our Workmanship Guarantee
                    </h4>
                    <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                      If something isn’t done right, we return and fix it. No runarounds, no surprise invoices.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── 4. COVERAGE DIRECTORY IN A SINGLE LINE ── */}
      <section style={{ padding: '40px 0 60px', borderTop: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
              Where We Work in Greater Virginia
            </h3>
            <p style={{ color: '#64748B', fontSize: '0.95rem', margin: 0 }}>
              Our service trucks are on the road five days a week throughout Greater Virginia & Central Virginia:
            </p>
          </div>

          <div className="areas-single-line-grid">
            {serviceAreas.map((area, idx) => (
              <div key={idx} className="white-card" style={{ padding: '18px 16px' }}>
                <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '0.95rem', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <MapPin size={15} color="#0063A6" />
                  {area.name}
                </div>
                <div style={{ fontSize: '0.8125rem', color: '#64748B', lineHeight: 1.45 }}>
                  {area.areas}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
