import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Wrench,
  ShieldCheck,
  Key,
  ArrowRight,
  Phone,
  CheckCircle2,
  Clock,
  MapPin,
  Camera,
  DollarSign,
  Send,
  Home as HomeIcon,
  Sparkles,
  ArrowDown,
  Hammer,
} from 'lucide-react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import {
  companyInfo,
  maintenanceServices,
  preservationServices,
  turnoverSteps,
  serviceAreas,
} from '../data/friendlyContent';
import contractorHero from '../assets/images/contractor-hero.jpg';
import livingRoomBefore from '../assets/images/living-room-before.jpg';
import livingRoomAfter from '../assets/images/living-room-after.jpg';
import exteriorBefore from '../assets/images/before-exterior.png';
import exteriorAfter from '../assets/images/after-exterior.png';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [sliderTab, setSliderTab] = useState<'interior' | 'exterior'>('interior');
  const pillarsRef = useRef<HTMLDivElement>(null);
  const estimateRef = useRef<HTMLDivElement>(null);

  const [estimateData, setEstimateData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Maintenance & Handyman Repairs',
    address: '',
    details: '',
    smsConsent: true,
  });
  const [estimateSent, setEstimateSent] = useState(false);

  const estimateMailSubject = encodeURIComponent(
    `Free Estimate Request from ${estimateData.name || 'Website Visitor'}`
  );
  const estimateMailBody = encodeURIComponent(
`Full Name: ${estimateData.name}
Phone: ${estimateData.phone}
Email: ${estimateData.email}
Service Needed: ${estimateData.service}
Property Address / Neighborhood: ${estimateData.address}
Project Details:
${estimateData.details}

SMS Consent: ${estimateData.smsConsent ? 'Yes' : 'No'}`
  );
  const estimateMailto = `mailto:${companyInfo.email}?subject=${estimateMailSubject}&body=${estimateMailBody}`;

  const scrollToPillars = () => {
    pillarsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToEstimate = () => {
    estimateRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectTab = (idx: number) => {
    setActiveTab(idx);
    if (window.innerWidth < 960) {
      const el = document.getElementById(`pillar-card-${idx}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  };

  const handleEstimateChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setEstimateData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setEstimateData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleEstimateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEstimateSent(true);
    window.location.href = estimateMailto;
  };

  return (
    <div className="home-page bg-blueprint-grid" style={{ minHeight: '100vh' }}>
      
      {/* ── 1. HERO SECTION ── */}
      <section style={{ padding: '40px 0 60px', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            
            {/* Left Column: Value Proposition & Hero CTAs */}
            <div>
              <div className="badge-amber" style={{ marginBottom: '16px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0063A6', display: 'inline-block' }} />
                <span>Dependable Craftsmanship in Richmond & Surrounding Counties</span>
              </div>

              <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.4rem)', fontWeight: 800, color: '#0F172A', lineHeight: 1.15, letterSpacing: '-0.03em', marginBottom: '18px' }}>
                Home Repairs & Property Care Made Simple.
              </h1>

              <p style={{ fontSize: '1.15rem', color: '#475569', lineHeight: 1.6, marginBottom: '28px' }}>
                From quick handyman fixes and drywall patching to full rental turnovers and vacant property upkeep. Homesync delivers dependable workmanship, upfront pricing, and friendly service across Greater Virginia.
              </p>

              {/* CTAs */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center', marginBottom: '32px' }}>
                <button
                  type="button"
                  onClick={scrollToEstimate}
                  className="tactile-button-primary"
                  style={{ padding: '14px 28px', fontSize: '1.05rem' }}
                >
                  <Hammer size={18} /> Get a Free Estimate
                </button>
                <button
                  type="button"
                  onClick={scrollToPillars}
                  className="btn-outline-navy"
                  style={{ padding: '14px 24px', fontSize: '1.05rem' }}
                >
                  <span>See Our 3 Services</span> <ArrowDown size={16} />
                </button>
              </div>

              {/* Trust Badges Strip (Stitch 4-Item Grid) */}
              <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: '#1E293B', fontWeight: 600 }}>
                    <ShieldCheck size={18} color="#0063A6" />
                    <span>Licensed & Insured</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: '#1E293B', fontWeight: 600 }}>
                    <DollarSign size={18} color="#0063A6" />
                    <span>Upfront Honest Pricing</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: '#1E293B', fontWeight: 600 }}>
                    <CheckCircle2 size={18} color="#0063A6" />
                    <span>Friendly Vetted Pros</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: '#1E293B', fontWeight: 600 }}>
                    <Sparkles size={18} color="#0063A6" />
                    <span>Free Estimates</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Contractor Photo with Floating Credibility Badge */}
            <div>
              <div className="white-card" style={{ padding: '12px', position: 'relative' }}>
                <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden' }}>
                  <img
                    src={contractorHero}
                    alt="Homesync technician smiling in front of a clean home in Greater Virginia"
                    style={{ width: '100%', height: '460px', objectFit: 'cover', display: 'block' }}
                  />
                  
                  {/* Floating Credibility Badge (Stitch Style) */}
                  <div style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    right: '16px',
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid #E2E8F0',
                    padding: '14px 18px',
                    borderRadius: '10px',
                    boxShadow: '0 8px 24px rgba(15, 23, 42, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                  }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '8px', background: '#EFF6FF', color: '#0063A6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Wrench size={22} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#0F172A', lineHeight: 1.2 }}>
                        Serving Greater Virginia & Surrounding Counties
                      </div>
                      <div style={{ fontSize: '0.8125rem', color: '#64748B', marginTop: '2px' }}>
                        Henrico, Chesterfield, Midlothian, Hanover & Beyond
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. PINNED 3-PILLAR SERVICE SHOWCASE (3 Side-by-Side Cards) ── */}
      <section ref={pillarsRef} style={{ padding: '70px 0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 20px' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 36px' }}>
            <span style={{ color: '#0063A6', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'inline-block', marginBottom: '8px' }}>
              HOW WE HELP
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#0F172A', lineHeight: 1.2, marginBottom: '12px' }}>
              Three Clear Ways We Care for Your Properties
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
              Whether you live in your home, rent it out, or manage an entire portfolio, we have the right team for the job.
            </p>
          </div>

          {/* Interactive Tab Switcher */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
            <div style={{ background: '#F1F5F9', border: '1px solid #E2E8F0', padding: '6px', borderRadius: '12px', display: 'inline-flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button
                type="button"
                onClick={() => handleSelectTab(0)}
                style={{
                  padding: '10px 20px',
                  borderRadius: '8px',
                  border: 'none',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: activeTab === 0 ? '#0F172A' : 'transparent',
                  color: activeTab === 0 ? '#FFFFFF' : '#475569',
                  boxShadow: activeTab === 0 ? '0 2px 8px rgba(15, 23, 42, 0.15)' : 'none',
                  transition: 'all 0.15s ease',
                }}
              >
                <Wrench size={16} color={activeTab === 0 ? '#0063A6' : '#64748B'} />
                <span>1. Maintenance & Handyman</span>
              </button>

              <button
                type="button"
                onClick={() => handleSelectTab(1)}
                style={{
                  padding: '10px 20px',
                  borderRadius: '8px',
                  border: 'none',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: activeTab === 1 ? '#0F172A' : 'transparent',
                  color: activeTab === 1 ? '#FFFFFF' : '#475569',
                  boxShadow: activeTab === 1 ? '0 2px 8px rgba(15, 23, 42, 0.15)' : 'none',
                  transition: 'all 0.15s ease',
                }}
              >
                <ShieldCheck size={16} color={activeTab === 1 ? '#0063A6' : '#64748B'} />
                <span>2. Property Preservation</span>
              </button>

              <button
                type="button"
                onClick={() => handleSelectTab(2)}
                style={{
                  padding: '10px 20px',
                  borderRadius: '8px',
                  border: 'none',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: activeTab === 2 ? '#0F172A' : 'transparent',
                  color: activeTab === 2 ? '#FFFFFF' : '#475569',
                  boxShadow: activeTab === 2 ? '0 2px 8px rgba(15, 23, 42, 0.15)' : 'none',
                  transition: 'all 0.15s ease',
                }}
              >
                <Key size={16} color={activeTab === 2 ? '#0063A6' : '#64748B'} />
                <span>3. Rental Turnovers</span>
              </button>
            </div>
          </div>

          {/* SIMULTANEOUS 3-PILLAR CARDS GRID (Stitch Layout) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px', alignItems: 'stretch' }}>
            
            {/* PILLAR 1: MAINTENANCE & HANDYMAN (Primary Focus) */}
            <div
              id="pillar-card-0"
              className="white-card"
              style={{
                padding: '32px 28px',
                border: activeTab === 0 ? '2px solid #0063A6' : '1px solid #E2E8F0',
                boxShadow: activeTab === 0 ? '0 12px 30px rgba(0, 99, 166, 0.15)' : '0 4px 6px -1px rgba(15, 23, 42, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.2s ease',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <span className="badge-amber" style={{ fontSize: '0.75rem', padding: '4px 10px' }}>
                    01 · Primary Focus
                  </span>
                  <Wrench size={24} color="#0063A6" />
                </div>

                <div style={{ display: 'inline-block', background: '#EFF6FF', color: '#0063A6', fontSize: '0.8rem', fontWeight: 700, padding: '2px 8px', borderRadius: '4px', marginBottom: '12px' }}>
                  Everyday Household Repairs
                </div>

                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                  Maintenance & Handyman Care
                </h3>

                <p style={{ fontSize: '0.925rem', color: '#475569', lineHeight: 1.5, marginBottom: '20px' }}>
                  Your dependable neighborhood crew for everyday repairs, seasonal chores, and custom home punch lists.
                </p>

                {/* 12 Handyman Trade Chips */}
                <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '16px', marginBottom: '24px' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
                    12 Core Trades Handled:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {maintenanceServices.map((s) => (
                      <span
                        key={s.id}
                        style={{
                          background: '#F8FAFC',
                          border: '1px solid #E2E8F0',
                          borderRadius: '9999px',
                          padding: '4px 10px',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          color: '#334155',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                        }}
                      >
                        <CheckCircle2 size={11} color="#0063A6" />
                        {s.title}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ paddingTop: '16px', borderTop: '1px solid #F1F5F9' }}>
                <Link
                  to="/services#maintenance"
                  className="btn-amber"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '0.9rem', padding: '11px' }}
                >
                  Explore All 12 Maintenance Services <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* PILLAR 2: PROPERTY PRESERVATION */}
            <div
              id="pillar-card-1"
              className="white-card"
              style={{
                padding: '32px 28px',
                border: activeTab === 1 ? '2px solid #0063A6' : '1px solid #E2E8F0',
                boxShadow: activeTab === 1 ? '0 12px 30px rgba(0, 99, 166, 0.15)' : '0 4px 6px -1px rgba(15, 23, 42, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.2s ease',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <span className="badge-navy" style={{ fontSize: '0.75rem', padding: '4px 10px' }}>
                    02 · Asset Protection
                  </span>
                  <ShieldCheck size={24} color="#0F172A" />
                </div>

                <div style={{ display: 'inline-block', background: '#F1F5F9', color: '#334155', fontSize: '0.8rem', fontWeight: 700, padding: '2px 8px', borderRadius: '4px', marginBottom: '12px' }}>
                  Vacant, Bank & Estate Properties
                </div>

                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                  Vacant Home Upkeep
                </h3>

                <p style={{ fontSize: '0.925rem', color: '#475569', lineHeight: 1.5, marginBottom: '20px' }}>
                  Keeping vacant, estate, and bank-owned properties secure, code-compliant, and well-maintained across Greater Virginia.
                </p>

                {/* 6 Preservation Chips */}
                <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '16px', marginBottom: '24px' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
                    6 Core Preservation Capabilities:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {preservationServices.map((s) => (
                      <span
                        key={s.id}
                        style={{
                          background: '#F8FAFC',
                          border: '1px solid #E2E8F0',
                          borderRadius: '9999px',
                          padding: '4px 10px',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          color: '#334155',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                        }}
                      >
                        <CheckCircle2 size={11} color="#0F172A" />
                        {s.title}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ paddingTop: '16px', borderTop: '1px solid #F1F5F9' }}>
                <Link
                  to="/services#preservation"
                  className="btn-outline-navy"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '0.9rem', padding: '11px' }}
                >
                  View Preservation Details <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* PILLAR 3: FULL RENTAL TURNOVERS */}
            <div
              id="pillar-card-2"
              className="white-card"
              style={{
                padding: '32px 28px',
                border: activeTab === 2 ? '2px solid #0063A6' : '1px solid #E2E8F0',
                boxShadow: activeTab === 2 ? '0 12px 30px rgba(0, 99, 166, 0.15)' : '0 4px 6px -1px rgba(15, 23, 42, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.2s ease',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <span className="badge-amber" style={{ fontSize: '0.75rem', padding: '4px 10px' }}>
                    03 · Turnkey Make-Ready
                  </span>
                  <Key size={24} color="#0063A6" />
                </div>

                <div style={{ display: 'inline-block', background: '#EFF6FF', color: '#0063A6', fontSize: '0.8rem', fontWeight: 700, padding: '2px 8px', borderRadius: '4px', marginBottom: '12px' }}>
                  Fast Landlord Make-Readies
                </div>

                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                  Full Rental Turnovers
                </h3>

                <p style={{ fontSize: '0.925rem', color: '#475569', lineHeight: 1.5, marginBottom: '20px' }}>
                  Thorough make-ready turnarounds between tenants so you can re-lease quickly with zero vacancy headache.
                </p>

                {/* 4 Turnover Stages */}
                <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '16px', marginBottom: '24px' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
                    4-Stage Make-Ready System:
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {turnoverSteps.map((step) => (
                      <div key={step.step} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '6px', padding: '6px 10px', fontSize: '0.8rem' }}>
                        <span style={{ fontWeight: 700, color: '#0F172A' }}>
                          Stage {step.step}: {step.title.split('&')[0]}
                        </span>
                        <span style={{ fontSize: '0.75rem', color: '#0063A6', fontWeight: 700 }}>{step.duration}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ paddingTop: '16px', borderTop: '1px solid #F1F5F9' }}>
                <Link
                  to="/services#turnover"
                  className="btn-outline-navy"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '0.9rem', padding: '11px' }}
                >
                  See Full Turnover Checklist <ArrowRight size={16} />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 3. TRANSFORMATION SLIDER + 3 CUSTOMER GUARANTEES (Stitch Layout) ── */}
      <section style={{ padding: '70px 0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 20px' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 28px' }}>
            <span style={{ color: '#0063A6', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'inline-block', marginBottom: '8px' }}>
              PROVEN CRAFTSMANSHIP
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#0F172A', lineHeight: 1.2, marginBottom: '10px' }}>
              Real Results You Can See
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748B', maxWidth: '640px', margin: '0 auto 20px' }}>
              Slide to inspect how we transform cluttered, damaged spaces into clean, move-in-ready rooms.
            </p>

            {/* Toggle Tabs */}
            <div style={{ display: 'inline-flex', background: '#F1F5F9', border: '1px solid #E2E8F0', padding: '4px', borderRadius: '10px', gap: '6px' }}>
              <button
                type="button"
                onClick={() => setSliderTab('interior')}
                style={{
                  padding: '8px 18px',
                  borderRadius: '6px',
                  border: 'none',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  background: sliderTab === 'interior' ? '#0F172A' : 'transparent',
                  color: sliderTab === 'interior' ? '#FFFFFF' : '#475569',
                  transition: 'all 0.15s ease',
                }}
              >
                Interior Rental Turnover
              </button>
              <button
                type="button"
                onClick={() => setSliderTab('exterior')}
                style={{
                  padding: '8px 18px',
                  borderRadius: '6px',
                  border: 'none',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  background: sliderTab === 'exterior' ? '#0F172A' : 'transparent',
                  color: sliderTab === 'exterior' ? '#FFFFFF' : '#475569',
                  transition: 'all 0.15s ease',
                }}
              >
                Exterior Property Restoration
              </button>
            </div>
          </div>

          {/* Slider Container */}
          <div className="white-card" style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto 40px' }}>
            {sliderTab === 'interior' ? (
              <BeforeAfterSlider
                beforeImage={livingRoomBefore}
                afterImage={livingRoomAfter}
                title="Living Room Turnaround: Worn Carpet & Drywall Cracks to Fresh Hardwoods"
                subtitle="Untidy rental unit prepped, patched, painted, and refreshed with new floors in 4 days."
              />
            ) : (
              <BeforeAfterSlider
                beforeImage={exteriorBefore}
                afterImage={exteriorAfter}
                title="Exterior Curb Appeal & Porch Restoration"
                subtitle="Overgrowth cleared, siding power washed, and trim repaired for full curb appeal."
              />
            )}
          </div>

          {/* 3 Customer Guarantee Cards (Stitch Feature) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', maxWidth: '1000px', margin: '0 auto' }}>
            
            <div className="white-card" style={{ padding: '24px', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: '#DEF7EC', color: '#03543F', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <ShieldCheck size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
                  100% Quality Guarantee
                </h4>
                <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                  If something isn’t done right the first time, our crew comes back and makes it right. No runarounds, no excuses.
                </p>
              </div>
            </div>

            <div className="white-card" style={{ padding: '24px', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: '#EFF6FF', color: '#0063A6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Camera size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
                  Photo Proof on Every Job
                </h4>
                <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                  We take date-stamped before-and-after photos of every repair so you have total transparency, even if you are out of state.
                </p>
              </div>
            </div>

            <div className="white-card" style={{ padding: '24px', display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: '#F1F5F9', color: '#0F172A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <DollarSign size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
                  No Surprise Fees
                </h4>
                <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                  Itemized written estimates upfront. If unexpected repairs arise behind a wall, we discuss and get approval before proceeding.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 4. WHO WE HELP (3 Personas) ── */}
      <section style={{ padding: '70px 0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 20px' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 40px' }}>
            <span style={{ color: '#0F172A', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'inline-block', marginBottom: '8px' }}>
              TAILORED SOLUTIONS
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#0F172A', marginBottom: '10px' }}>
              Tailored Care for Every Property Type
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748B', margin: 0 }}>
              Different properties need different care. Here is how we support our neighbors across Greater Virginia:
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            
            {/* Persona 1: Homeowners */}
            <div className="white-card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#EFF6FF', color: '#0063A6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                  <HomeIcon size={24} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '10px' }}>
                  Homeowners & Families
                </h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>
                  Take your weekends back. Stop putting off that squeaky door, damaged drywall, or seasonal pressure washing. We arrive on time and take care of your punch list cleanly.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.875rem', color: '#334155' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={15} color="#0063A6" /> Clear, upfront price estimates
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={15} color="#0063A6" /> Respectful, clean technicians
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={15} color="#0063A6" /> Single point of contact for multiple trades
                  </li>
                </ul>
              </div>
              <Link to="/get-quote?category=maintenance" className="btn-outline-navy" style={{ width: '100%', justifyContent: 'center', fontSize: '0.9rem' }}>
                Book Home Repairs
              </Link>
            </div>

            {/* Persona 2: Landlords */}
            <div className="white-card" style={{ padding: '32px', borderTop: '4px solid #0F172A', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#F1F5F9', color: '#0F172A', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                  <Key size={24} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '10px' }}>
                  Landlords & Property Managers
                </h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>
                  Minimize vacancy periods. We provide fast tenant turnover make-readies, emergency maintenance dispatches, and date-stamped photo logs so you can lease with confidence.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.875rem', color: '#334155' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={15} color="#0063A6" /> Fast make-ready turnarounds
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={15} color="#0063A6" /> Detailed room-by-room move-out logs
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={15} color="#0063A6" /> Lock rekeying & smoke alarm checks
                  </li>
                </ul>
              </div>
              <Link to="/get-quote?category=turnover" className="btn-outline-navy" style={{ width: '100%', justifyContent: 'center', fontSize: '0.9rem' }}>
                Schedule Unit Turnover
              </Link>
            </div>

            {/* Persona 3: Investors */}
            <div className="white-card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#EFF6FF', color: '#0063A6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                  <ShieldCheck size={24} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '10px' }}>
                  Real Estate Investors & Lenders
                </h3>
                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>
                  Protect the physical condition and equity of vacant assets. We handle initial inspections, board-ups, lawn mowing compliance, and winterization for out-of-town owners.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.875rem', color: '#334155' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={15} color="#0063A6" /> Comprehensive date-stamped photo proof
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={15} color="#0063A6" /> Code violation prevention (lawn/debris)
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={15} color="#0063A6" /> Rekey to master codes & lockbox placement
                  </li>
                </ul>
              </div>
              <Link to="/get-quote?category=preservation" className="btn-outline-navy" style={{ width: '100%', justifyContent: 'center', fontSize: '0.9rem' }}>
                Preserve Vacant Asset
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. DIRECT FREE ESTIMATE FORM ON HOME PAGE (Stitch Feature) ── */}
      <section ref={estimateRef} style={{ padding: '70px 0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 20px' }}>
          
          <div style={{
            background: '#0F172A',
            color: '#FFFFFF',
            borderRadius: '24px',
            padding: 'clamp(28px, 5vw, 56px)',
            boxShadow: '0 20px 40px rgba(15, 23, 42, 0.2)',
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
              
              {/* Left Column: Direct Contact & Info */}
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.1)', padding: '6px 14px', borderRadius: '9999px', fontSize: '0.8125rem', fontWeight: 700, color: '#BAE6FD', marginBottom: '18px' }}>
                  <Clock size={15} color="#38BDF8" /> Prompt, Friendly Scheduling
                </div>
                
                <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.2, marginBottom: '18px' }}>
                  Ready to check those repairs off your list?
                </h2>

                <p style={{ fontSize: '1.1rem', color: '#CBD5E1', lineHeight: 1.6, marginBottom: '28px' }}>
                  Request a free estimate online or give us a call today. We’re happy to help with any home maintenance, preservation, or rental turnover project across Greater Virginia.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: '20px' }}>
                  <a href={`tel:${companyInfo.phoneRaw}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: '#FFFFFF', textDecoration: 'none', fontSize: '1.25rem', fontWeight: 800 }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#0063A6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Phone size={20} color="#FFFFFF" />
                    </div>
                    <span>{companyInfo.phone}</span>
                  </a>
                  <div style={{ fontSize: '0.875rem', color: '#94A3B8' }}>
                    {companyInfo.hours} · Greater Virginia & Surrounding Counties
                  </div>
                </div>
              </div>

              {/* Right Column: Embedded Free Estimate Card */}
              <div className="white-card" style={{ padding: '32px', color: '#0F172A' }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
                  Request a Free Estimate
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#64748B', marginBottom: '20px' }}>
                  Tell us about your home project. Submitting opens your email client directly.
                </p>

                {estimateSent ? (
                  <div style={{ textAlign: 'center', padding: '24px 12px' }}>
                    <CheckCircle2 size={40} color="#059669" style={{ margin: '0 auto 12px' }} />
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
                      Estimate Request Ready!
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: '#475569', marginBottom: '16px' }}>
                      We opened your email app to send directly to <strong>{companyInfo.email}</strong>. If your email app did not open automatically, click below:
                    </p>
                    <a href={estimateMailto} className="btn-amber" style={{ width: '100%', justifyContent: 'center', fontSize: '0.9rem' }}>
                      <Send size={15} /> Click to Send Email
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleEstimateSubmit}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="John Miller"
                          value={estimateData.name}
                          onChange={handleEstimateChange}
                          style={{ width: '100%', padding: '9px 12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '0.9rem' }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="(804) 555-0123"
                          value={estimateData.phone}
                          onChange={handleEstimateChange}
                          style={{ width: '100%', padding: '9px 12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '0.9rem' }}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="john@example.com"
                          value={estimateData.email}
                          onChange={handleEstimateChange}
                          style={{ width: '100%', padding: '9px 12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '0.9rem' }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>
                          Service Needed
                        </label>
                        <select
                          name="service"
                          value={estimateData.service}
                          onChange={handleEstimateChange}
                          style={{ width: '100%', padding: '9px 12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '0.9rem', background: '#FFF' }}
                        >
                          <option value="Maintenance & Handyman Repairs">Maintenance & Handyman Repairs</option>
                          <option value="Property Preservation & Board-Ups">Property Preservation & Board-Ups</option>
                          <option value="Full Rental Turnover Make-Ready">Full Rental Turnover Make-Ready</option>
                          <option value="Multiple Repairs / Other">Multiple Repairs / Other</option>
                        </select>
                      </div>
                    </div>

                    <div style={{ marginBottom: '12px' }}>
                      <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>
                        Property Address or Neighborhood
                      </label>
                      <input
                        type="text"
                        name="address"
                        placeholder="e.g. 1204 Grove Ave, The Fan or Short Pump"
                        value={estimateData.address}
                        onChange={handleEstimateChange}
                        style={{ width: '100%', padding: '9px 12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '0.9rem' }}
                      />
                    </div>

                    <div style={{ marginBottom: '14px' }}>
                      <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>
                        Project Details / Notes
                      </label>
                      <textarea
                        name="details"
                        rows={2}
                        placeholder="Briefly describe what needs fixing..."
                        value={estimateData.details}
                        onChange={handleEstimateChange}
                        style={{ width: '100%', padding: '9px 12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '0.9rem', resize: 'vertical' }}
                      />
                    </div>

                    <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '6px', padding: '10px 12px', marginBottom: '16px' }}>
                      <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer', fontSize: '0.78rem', color: '#475569', lineHeight: 1.4 }}>
                        <input
                          type="checkbox"
                          name="smsConsent"
                          checked={estimateData.smsConsent}
                          onChange={handleEstimateChange}
                          style={{ marginTop: '2px', accentColor: '#0063A6' }}
                        />
                        <span>
                          I agree to receive text messages from Homesync LLC about my service request. Message and data rates may apply. Reply STOP anytime.
                        </span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="tactile-button-primary"
                      style={{ width: '100%', padding: '12px', fontSize: '1rem', justifyContent: 'center' }}
                    >
                      <Send size={16} /> Send Estimate Request
                    </button>
                    <p style={{ fontSize: '0.75rem', color: '#64748B', textAlign: 'center', marginTop: '8px', marginBottom: 0 }}>
                      Opens your email app directly addressed to {companyInfo.email}.
                    </p>
                  </form>
                )}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ── 6. WHERE WE WORK IN GREATER VIRGINIA (Single Line 5-Column Grid) ── */}
      <section style={{ padding: '60px 0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
              Where We Work in Greater Virginia
            </h3>
            <p style={{ color: '#64748B', fontSize: '1rem', margin: 0 }}>
              Our service trucks are on the road five days a week throughout Greater Virginia & Central Virginia:
            </p>
          </div>

          <div className="areas-single-line-grid">
            {serviceAreas.map((area, idx) => (
              <div key={idx} className="white-card" style={{ padding: '18px 16px' }}>
                <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '0.95rem', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <MapPin size={15} color="#0063A6" />
                  {area.name}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#64748B', lineHeight: 1.45 }}>
                  {area.areas}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '24px', fontSize: '0.9rem', color: '#64748B' }}>
            Don’t see your exact town listed? If you are in Greater Virginia or surrounding counties, call or text us at <strong>{companyInfo.phone}</strong>.
          </div>
        </div>
      </section>

    </div>
  );
}
