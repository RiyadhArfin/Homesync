import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Wrench,
  ShieldCheck,
  Key,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Camera,
  DollarSign,
  Sparkles,
  ArrowDown,
  Hammer,
} from 'lucide-react';
import {
  companyInfo,
  maintenanceServices,
  preservationServices,
  serviceAreas,
} from '../data/friendlyContent';
import contractorHero from '../assets/images/contractor-hero.jpg';

const turnoverCoreServices = [
  'Property Inspections & Documentation',
  'General Repairs',
  'Interior & Exterior Painting',
  'Drywall Repair & Texture',
  'Flooring Repairs & Replacement',
  'Plumbing & Electrical Repairs',
  'Appliance Repair & Replacement',
  'Door, Lock & Hardware Repairs',
  'Deep Cleaning & Trash-Outs',
  'Lawn & Exterior Cleanup',
  'Final Quality Check & Photo Documentation',
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const pillarsRef = useRef<HTMLDivElement>(null);

  const scrollToPillars = () => {
    pillarsRef.current?.scrollIntoView({ behavior: 'smooth' });
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
                Home Repairs & Property Care 
              </h1>

              <p style={{ fontSize: '1.15rem', color: '#475569', lineHeight: 1.6, marginBottom: '28px' }}>
                From quick handyman fixes and drywall patching to full rental turnovers and vacant property upkeep. Homesync delivers dependable workmanship, competitive pricing, and friendly services across Greater Virginia.
              </p>

              {/* CTAs */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center', marginBottom: '32px' }}>
                <Link
                  to="/get-quote"
                  className="tactile-button-primary"
                  style={{ padding: '14px 28px', fontSize: '1.05rem', textDecoration: 'none' }}
                >
                  <Hammer size={18} /> Get a Free Estimate
                </Link>
                <button
                  type="button"
                  onClick={scrollToPillars}
                  className="btn-outline-navy"
                  style={{ padding: '14px 24px', fontSize: '1.05rem' }}
                >
                  <span>Our Services</span> <ArrowDown size={16} />
                </button>
              </div>

              {/* Trust Badges Strip */}
              <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: '#1E293B', fontWeight: 600 }}>
                    <ShieldCheck size={18} color="#0063A6" />
                    <span>Licensed & Insured</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: '#1E293B', fontWeight: 600 }}>
                    <DollarSign size={18} color="#0063A6" />
                    <span>Competitive Pricing</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: '#1E293B', fontWeight: 600 }}>
                    <Sparkles size={18} color="#0063A6" />
                    <span>Free Estimates</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Natural Contractor Photo with Floating Credibility Badge */}
            <div>
              <div className="white-card" style={{ padding: '12px', position: 'relative' }}>
                <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden' }}>
                  <img
                    src={contractorHero}
                    alt="Homesync professional technician ready for property maintenance in Virginia"
                    style={{ width: '100%', height: '460px', objectFit: 'cover', display: 'block' }}
                  />
                  
                  {/* Floating Badge (Revision 4) */}
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
                        Your Northern Virginia Property Maintenance Partner
                      </div>
                      <div style={{ fontSize: '0.8125rem', color: '#64748B', marginTop: '2px' }}>
                        Arlington, Fairfax, Loudoun, Prince William & expanded Virginia coverage
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. PINNED 3-PILLAR SERVICE SHOWCASE ── */}
      <section ref={pillarsRef} style={{ padding: '70px 0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 20px' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 36px' }}>
            <span style={{ color: '#0063A6', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'inline-block', marginBottom: '8px' }}>
              HOW WE HELP
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#0F172A', lineHeight: 1.2, marginBottom: '12px' }}>
               We Care for Your Properties
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
              Whether you live in your home, rent it out, or manage an entire portfolio, we have the right team for your job.
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
                <Wrench size={16} color={activeTab === 0 ? '#FFFFFF' : '#0063A6'} />
                Maintenance & Repairs
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
                <ShieldCheck size={16} color={activeTab === 1 ? '#FFFFFF' : '#0F172A'} />
                Property Preservation
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
                  color: activeTab === 2 ? '#FFFFFF' : '#0063A6',
                  boxShadow: activeTab === 2 ? '0 2px 8px rgba(15, 23, 42, 0.15)' : 'none',
                  transition: 'all 0.15s ease',
                }}
              >
                <Key size={16} color={activeTab === 2 ? '#FFFFFF' : '#0063A6'} />
                Turnkey Make-Ready
              </button>
            </div>
          </div>

          {/* 3 Pillar Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            
            {/* PILLAR 1: MAINTENANCE & REPAIRS */}
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
                  Maintenance Care
                </h3>

                <p style={{ fontSize: '0.925rem', color: '#475569', lineHeight: 1.5, marginBottom: '20px' }}>
                  Your dependable neighborhood crew for everyday repairs and seasonal chores.
                </p>

                {/* 12 Handyman Trade Chips */}
                <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '16px', marginBottom: '24px' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
                    Core Services:
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
                  Explore All Maintenance Services <ArrowRight size={16} />
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
                  Securing, maintaining, and preserving vacant and bank-owned properties with dependable, code-compliant solutions.
                </p>

                {/* 6 Preservation Chips */}
                <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '16px', marginBottom: '24px' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
                     Core Preservation Capabilities:
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

            {/* PILLAR 3: FULL RENTAL TURNOVERS (Revision 9) */}
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

                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px', letterSpacing: '0.02em' }}>
                  FULL RENTAL TURNOVERS
                </h3>

                <p style={{ fontSize: '0.925rem', color: '#475569', lineHeight: 1.5, marginBottom: '20px' }}>
                  Complete turnover support to take properties from current condition to clean, repaired, and ready for the next resident.
                </p>

                {/* CORE TURNOVER SERVICES (11 items) */}
                <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '16px', marginBottom: '20px' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
                    CORE TURNOVER SERVICES:
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
                    {turnoverCoreServices.map((service, sIdx) => (
                      <div key={sIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.8125rem', color: '#334155' }}>
                        <CheckCircle2 size={15} color="#0063A6" style={{ marginTop: '2px', flexShrink: 0 }} />
                        <span style={{ fontWeight: 500 }}>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ background: '#EFF6FF', border: '1px dashed #93C5FD', borderRadius: '8px', padding: '10px 14px', textAlign: 'center', marginBottom: '20px' }}>
                  <span style={{ fontSize: '0.875rem', fontWeight: 800, color: '#0063A6' }}>
                    Turnover Ready. Resident Ready.
                  </span>
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

      {/* ── 3. VISIBLE RESULTS & 3 CUSTOMER GUARANTEES (Revisions 1, 3, 6) ── */}
      <section style={{ padding: '70px 0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 20px' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#0F172A', lineHeight: 1.2, marginBottom: '12px' }}>
              Visible Results. Lasting Value.
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748B', maxWidth: '680px', margin: '0 auto', lineHeight: 1.6 }}>
              Explore the difference our attention to detail makes, from initial repair to final presentation.
            </p>
          </div>

          {/* 3 Customer Guarantee Cards (Revision 3) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', maxWidth: '1140px', margin: '0 auto' }}>
            
            <div className="white-card" style={{ padding: '28px 24px', display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#DEF7EC', color: '#03543F', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                  Quality You Can Trust
                </h4>
                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                  We take pride in doing the job right. From routine maintenance to complex repairs, every project is handled with care, attention to detail, and a commitment to lasting results.
                </p>
              </div>
            </div>

            <div className="white-card" style={{ padding: '28px 24px', display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#EFF6FF', color: '#0063A6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Camera size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                  Complete Transparency
                </h4>
                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                  Know exactly what was done, where it was done, and how it turned out. We provide clear before-and-after photos and thorough documentation so you’re never left guessing.
                </p>
              </div>
            </div>

            <div className="white-card" style={{ padding: '28px 24px', display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#F1F5F9', color: '#0F172A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <DollarSign size={24} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                  Detailed Estimates, Always
                </h4>
                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                  You’ll receive straightforward, itemized estimates before work begins. If something unexpected is discovered, we communicate it clearly and get approval before moving forward.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 4. SIMPLE FINARA-STYLE CTA BANNER (Revision 5) ── */}
      <section style={{ padding: '70px 0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{
            background: '#0F172A',
            color: '#FFFFFF',
            borderRadius: '24px',
            padding: 'clamp(48px, 6vw, 68px) 24px',
            textAlign: 'center',
            boxShadow: '0 20px 40px rgba(15, 23, 42, 0.2)',
          }}>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.2, marginBottom: '14px' }}>
              Ready to secure your property?
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#CBD5E1', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
              Contact us today for a free consultation or quote.
            </p>
            <div>
              <Link
                to="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#FFFFFF',
                  color: '#0F172A',
                  fontWeight: 700,
                  fontSize: '1rem',
                  padding: '14px 34px',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)',
                  transition: 'all 0.2s ease',
                }}
              >
                Contact Us Now <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. WHERE WE WORK ACROSS VIRGINIA (Revision 8) ── */}
      <section style={{ padding: '70px 0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 36px' }}>
            <h3 style={{ fontSize: 'clamp(1.85rem, 3vw, 2.25rem)', fontWeight: 800, color: '#0F172A', marginBottom: '10px' }}>
              Where We Work Across Virginia
            </h3>
            <p style={{ color: '#64748B', fontSize: '1.05rem', margin: 0, lineHeight: 1.6 }}>
              HomeSync provides reliable property maintenance services across Greater Virginia, with coverage spanning Central, Northern, and Eastern Virginia.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {serviceAreas.map((area, idx) => (
              <div key={idx} className="white-card" style={{ padding: '22px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '1rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <MapPin size={18} color="#0063A6" />
                    {area.name}
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.55 }}>
                    {area.areas}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '28px', fontSize: '0.95rem', color: '#64748B' }}>
            Don’t see your exact location listed? Call or text us at <a href={`tel:${companyInfo.phoneRaw}`} style={{ color: '#0063A6', fontWeight: 800, textDecoration: 'none' }}>{companyInfo.phone}</a> to confirm coverage.
          </div>
        </div>
      </section>

    </div>
  );
}
