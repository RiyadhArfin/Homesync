import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  CheckCircle2,
  Clock,
  Phone,
  ShieldCheck,
  Send,
  Home,
  Wrench,
  Key,
  Calendar,
  Sparkles,
  Mail,
} from 'lucide-react';
import {
  companyInfo,
  maintenanceServices,
  preservationServices,
  turnoverSteps,
} from '../data/friendlyContent';
import contractorPhoto from '../assets/images/contractor-hero.jpg';

export default function GetQuotePage() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'maintenance';

  const [selectedPillar, setSelectedPillar] = useState<'maintenance' | 'preservation' | 'turnover' | 'multiple'>(
    initialCategory === 'preservation'
      ? 'preservation'
      : initialCategory === 'turnover'
      ? 'turnover'
      : 'maintenance'
  );

  const [selectedServices, setSelectedServices] = useState<string[]>(() => {
    const serviceParam = searchParams.get('service');
    return serviceParam ? [serviceParam] : [];
  });

  const [propertyType, setPropertyType] = useState('single-family');
  const [timing, setTiming] = useState('within-2-weeks');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    neighborhood: '',
    details: '',
    smsConsent: true,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const mailSubject = encodeURIComponent(
    `Estimate Request: ${selectedPillar.toUpperCase()} - ${formData.name || 'Client'}`
  );
  const mailBody = encodeURIComponent(
`Full Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Service Category: ${selectedPillar}
Selected Services: ${selectedServices.join(', ')}
Property Address: ${formData.address}, ${formData.neighborhood}
Property Type: ${propertyType}
Desired Timeline: ${timing}
Specific Project Details:
${formData.details}

SMS Consent: ${formData.smsConsent ? 'Yes' : 'No'}`
  );
  const mailtoUrl = `mailto:${companyInfo.email}?subject=${mailSubject}&body=${mailBody}`;

  const toggleService = (title: string) => {
    setSelectedServices((prev) =>
      prev.includes(title) ? prev.filter((s) => s !== title) : [...prev, title]
    );
  };

  const handleInputChange = (
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
    setIsSubmitted(true);
    // Direct mailto trigger
    window.location.href = mailtoUrl;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="get-quote-page bg-blueprint-grid" style={{ minHeight: '100vh', paddingTop: '32px', paddingBottom: '90px' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Breadcrumb & Heading */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="badge-amber" style={{ marginBottom: '12px' }}>
            <Sparkles size={14} /> 100% Free, No-Obligation Written Quotes
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: '#0F172A', lineHeight: 1.2, marginBottom: '12px' }}>
            Get a Free Estimate for Your Property
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#475569', maxWidth: '680px', margin: '0 auto' }}>
            Tell us about your home repairs, preservation needs, or rental turnover across Greater Virginia. We’ll review your scope and provide a prompt, transparent estimate.
          </p>
        </div>

        {isSubmitted ? (
          /* Confirmation State */
          <div className="white-card" style={{ maxWidth: '720px', margin: '0 auto', padding: '48px 32px', textAlign: 'center' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#DEF7EC', color: '#03543F', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <CheckCircle2 size={36} />
            </div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>
              Estimate Prepared via Email!
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.6, marginBottom: '24px' }}>
              Thank you, <strong>{formData.name || 'neighbor'}</strong>. We opened your email client to send your estimate request directly to <strong>{companyInfo.email}</strong>.
            </p>
            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '16px 20px', textAlign: 'left', marginBottom: '28px' }}>
              <div style={{ fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>Next Steps:</div>
              <ul style={{ paddingLeft: '20px', color: '#475569', fontSize: '0.95rem', lineHeight: 1.7 }}>
                <li>Your default email application should be open with all selected items pre-filled.</li>
                <li>Simply hit "Send" in your mail client to dispatch your request to our team.</li>
                <li>If your email client didn't open automatically, click the button below:</li>
              </ul>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <a href={mailtoUrl} className="btn-amber">
                <Mail size={18} /> Open Your Email App
              </a>
              <Link to="/" className="btn-outline-navy">
                Back to Home
              </Link>
              <a href={`tel:${companyInfo.phoneRaw}`} className="btn-outline-navy">
                <Phone size={18} /> Call {companyInfo.phone}
              </a>
            </div>
          </div>
        ) : (
          /* 2-Column Guided Form + Summary Sidebar */
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', alignItems: 'start' }}>
            
            {/* Form Column */}
            <form onSubmit={handleSubmit} className="white-card" style={{ padding: '32px', border: '1px solid #E2E8F0' }}>
              
              {/* Step 1: Select Pillar */}
              <div style={{ marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                  <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#0063A6', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.875rem' }}>1</span>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', margin: 0 }}>
                    What type of service do you need?
                  </h3>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '12px' }}>
                  {[
                    { id: 'maintenance', title: 'Maintenance & Repairs', icon: <Wrench size={18} /> },
                    { id: 'preservation', title: 'Property Preservation', icon: <ShieldCheck size={18} /> },
                    { id: 'turnover', title: 'Rental Turnover', icon: <Key size={18} /> },
                    { id: 'multiple', title: 'Multiple / Custom', icon: <Home size={18} /> },
                  ].map((p) => {
                    const active = selectedPillar === p.id;
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setSelectedPillar(p.id as typeof selectedPillar)}
                        style={{
                          background: active ? '#0F172A' : '#F8FAFC',
                          color: active ? '#FFFFFF' : '#334155',
                          border: active ? '1px solid #0F172A' : '1px solid #E2E8F0',
                          borderRadius: '8px',
                          padding: '14px 12px',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '8px',
                          cursor: 'pointer',
                          fontWeight: 600,
                          fontSize: '0.875rem',
                          textAlign: 'center',
                          transition: 'all 0.15s ease',
                        }}
                      >
                        <span style={{ color: active ? '#0063A6' : '#64748B' }}>{p.icon}</span>
                        {p.title}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Specific Services Multi-Select */}
              <div style={{ marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#0063A6', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.875rem' }}>2</span>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', margin: 0 }}>
                    Select specific punch-list items
                  </h3>
                </div>
                <p style={{ fontSize: '0.875rem', color: '#64748B', marginBottom: '16px' }}>
                  Choose all that apply. You can also describe additional tasks below.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', maxHeight: '240px', overflowY: 'auto', padding: '12px', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px' }}>
                  {selectedPillar === 'maintenance' || selectedPillar === 'multiple' ? (
                    maintenanceServices.map((s) => {
                      const checked = selectedServices.includes(s.title);
                      return (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => toggleService(s.title)}
                          style={{
                            background: checked ? '#EFF6FF' : '#FFFFFF',
                            color: checked ? '#0063A6' : '#334155',
                            border: checked ? '1px solid #0063A6' : '1px solid #CBD5E1',
                            borderRadius: '9999px',
                            padding: '6px 14px',
                            fontSize: '0.8125rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            transition: 'all 0.15s ease',
                          }}
                        >
                          {checked && <CheckCircle2 size={13} color="#0063A6" />}
                          {s.title}
                        </button>
                      );
                    })
                  ) : null}

                  {selectedPillar === 'preservation' || selectedPillar === 'multiple' ? (
                    preservationServices.map((s) => {
                      const checked = selectedServices.includes(s.title);
                      return (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => toggleService(s.title)}
                          style={{
                            background: checked ? '#EFF6FF' : '#FFFFFF',
                            color: checked ? '#0063A6' : '#334155',
                            border: checked ? '1px solid #0063A6' : '1px solid #CBD5E1',
                            borderRadius: '9999px',
                            padding: '6px 14px',
                            fontSize: '0.8125rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            transition: 'all 0.15s ease',
                          }}
                        >
                          {checked && <CheckCircle2 size={13} color="#0063A6" />}
                          {s.title}
                        </button>
                      );
                    })
                  ) : null}

                  {selectedPillar === 'turnover' ? (
                    turnoverSteps.map((step) => {
                      const checked = selectedServices.includes(step.title);
                      return (
                        <button
                          key={step.step}
                          type="button"
                          onClick={() => toggleService(step.title)}
                          style={{
                            background: checked ? '#EFF6FF' : '#FFFFFF',
                            color: checked ? '#0063A6' : '#334155',
                            border: checked ? '1px solid #0063A6' : '1px solid #CBD5E1',
                            borderRadius: '9999px',
                            padding: '6px 14px',
                            fontSize: '0.8125rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            transition: 'all 0.15s ease',
                          }}
                        >
                          {checked && <CheckCircle2 size={13} color="#0063A6" />}
                          {step.title}
                        </button>
                      );
                    })
                  ) : null}
                </div>
              </div>

              {/* Step 3: Property Details */}
              <div style={{ marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                  <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#0063A6', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.875rem' }}>3</span>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', margin: 0 }}>
                    Property address & timing
                  </h3>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                      Property Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      required
                      placeholder="e.g. 1204 Grove Ave"
                      value={formData.address}
                      onChange={handleInputChange}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '0.95rem' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                      City / Area *
                    </label>
                    <input
                      type="text"
                      name="neighborhood"
                      required
                      placeholder="Richmond, Short Pump, etc."
                      value={formData.neighborhood}
                      onChange={handleInputChange}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '0.95rem' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                      Property Type
                    </label>
                    <select
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '0.95rem', background: '#FFF' }}
                    >
                      <option value="single-family">Single Family Home</option>
                      <option value="rental-unit">Rental Unit / Apartment</option>
                      <option value="condo">Townhouse / Condo</option>
                      <option value="vacant">Vacant / Bank Asset</option>
                      <option value="commercial">Commercial Space</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                      Desired Timeline
                    </label>
                    <select
                      value={timing}
                      onChange={(e) => setTiming(e.target.value)}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '0.95rem', background: '#FFF' }}
                    >
                      <option value="urgent">Urgent (As soon as possible)</option>
                      <option value="within-1-week">Within 1 Week</option>
                      <option value="within-2-weeks">Within 2 Weeks</option>
                      <option value="flexible">Flexible / Planning Ahead</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 4: Contact Info */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                  <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#0063A6', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.875rem' }}>4</span>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', margin: 0 }}>
                    Your contact information
                  </h3>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. David Miller"
                      value={formData.name}
                      onChange={handleInputChange}
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
                      onChange={handleInputChange}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '0.95rem' }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="david@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '0.95rem' }}
                  />
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                    Job Details / Specific Punch-List Items
                  </label>
                  <textarea
                    name="details"
                    rows={3}
                    placeholder="Describe specific items, measurements, or access notes (e.g., lockbox code, dog on premises, gate key)..."
                    value={formData.details}
                    onChange={handleInputChange}
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
                      onChange={handleInputChange}
                      style={{ marginTop: '2px', accentColor: '#0063A6' }}
                    />
                    <span>
                      I consent to receive text messages from Homesync LLC regarding my service request. Message and data rates may apply. Reply STOP to cancel at any time.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn-amber"
                  style={{ width: '100%', padding: '14px', fontSize: '1.05rem', justifyContent: 'center' }}
                >
                  <Send size={18} /> Request Your Free Written Estimate
                </button>
              </div>

            </form>

            {/* Sidebar Column: Summary & Trust */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              {/* Summary Card */}
              <div className="white-card" style={{ padding: '24px', border: '1px solid #E2E8F0' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0F172A', marginBottom: '14px' }}>
                  Estimate Summary
                </h4>
                <div style={{ borderBottom: '1px solid #E2E8F0', paddingBottom: '12px', marginBottom: '12px' }}>
                  <div style={{ fontSize: '0.8125rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Service Category</div>
                  <div style={{ fontWeight: 700, color: '#0F172A', textTransform: 'capitalize' }}>
                    {selectedPillar}
                  </div>
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ fontSize: '0.8125rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '6px' }}>
                    Selected Items ({selectedServices.length})
                  </div>
                  {selectedServices.length === 0 ? (
                    <p style={{ fontSize: '0.875rem', color: '#94A3B8', fontStyle: 'italic', margin: 0 }}>
                      No items checked yet. Select items from Step 2 above.
                    </p>
                  ) : (
                    <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.875rem', color: '#334155', lineHeight: 1.6 }}>
                      {selectedServices.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <div style={{ background: '#F1F5F9', borderRadius: '6px', padding: '12px', fontSize: '0.8125rem', color: '#475569' }}>
                  <Clock size={14} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'text-bottom' }} />
                  <strong>Turnaround:</strong> Most written estimates sent in 1–2 business days.
                </div>
              </div>

              {/* Direct Support Card with Contractor Photo */}
              <div className="white-card" style={{ padding: '24px', border: '1px solid #E2E8F0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                  <img
                    src={contractorPhoto}
                    alt="Mike from Homesync"
                    style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #0063A6' }}
                  />
                  <div>
                    <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '0.95rem' }}>Need a quote faster?</div>
                    <div style={{ fontSize: '0.8125rem', color: '#64748B' }}>Call or text Mike directly</div>
                  </div>
                </div>
                <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.5, marginBottom: '16px' }}>
                  Have pictures of the repairs? Text photos directly to <strong>{companyInfo.phone}</strong> along with your address for quick feedback.
                </p>
                <a
                  href={`tel:${companyInfo.phoneRaw}`}
                  className="btn-outline-navy"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '0.9rem' }}
                >
                  <Phone size={16} /> Call {companyInfo.phone}
                </a>
              </div>

              {/* Trust Features */}
              <div className="white-card" style={{ padding: '20px 24px', border: '1px solid #E2E8F0' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <ShieldCheck size={20} color="#0063A6" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div style={{ fontSize: '0.875rem', color: '#334155' }}>
                      <strong>Licensed & Insured:</strong> Fully insured Virginia residential contractor.
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle2 size={20} color="#0063A6" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div style={{ fontSize: '0.875rem', color: '#334155' }}>
                      <strong>Photo Proof Logs:</strong> We send clear before/after photos with every repair.
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <Calendar size={20} color="#0063A6" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div style={{ fontSize: '0.875rem', color: '#334155' }}>
                      <strong>Working Hours:</strong> Mon–Sat 7:00 AM – 7:00 PM.
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}
