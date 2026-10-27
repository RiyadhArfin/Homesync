import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Clock,
  MapPin,
  Phone,
  Building2,
  XCircle,
  X,
  CheckCircle2,
  Camera,
  Receipt,
  Check,
  Info,
  Store,
  Handshake,
  Quote,
  FileText,
} from 'lucide-react';
import { companyInfo } from '../data/friendlyContent';
import contractorPhoto from '../assets/images/contractor-hero.jpg';
import turnoverTransformation from '../assets/images/turnover-transformation.jpg';

export default function AboutPage() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height > 0) {
        setScrollProgress((winScroll / height) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="about-page architectural-matrix" style={{ minHeight: '100vh', paddingTop: '20px' }}>
      
      {/* ── Scroll Progress Bar ── */}
      <div
        id="scroll-progress"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '4px',
          backgroundColor: '#f97316',
          zIndex: 60,
          width: `${scrollProgress}%`,
          transition: 'width 75ms ease-out',
        }}
      />

      {/* ── 1. HERO SECTION (7:5 RESPONSIVE GRID) ── */}
      <section style={{ padding: '36px 0 68px' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div className="about-hero-grid">
            
            {/* Left Hero Content (7 Cols) */}
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  alignSelf: 'flex-start',
                  background: '#eff4ff',
                  border: '1px solid #cbd5e1',
                  padding: '5px 14px',
                  borderRadius: '9999px',
                  marginBottom: '18px',
                }}
              >
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#f97316' }} />
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#9d4300', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                  ABOUT HOMESYNC LLC
                </span>
              </div>

              <h1 style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.25rem)', fontWeight: 800, color: '#0b1c30', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '18px' }}>
                Real Craftsmanship. Honest Service. Local to Richmond.
              </h1>

              <p style={{ fontSize: '1.15rem', color: '#475569', lineHeight: 1.6, maxWidth: '640px', marginBottom: '24px' }}>
                Connecting homeowners, landlords, and property managers with dependable, friendly trade professionals who show up on time and do the job right.
              </p>

              {/* Badges Cluster */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '28px' }}>
                <div className="white-card tactile-card-shadow" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 600, color: '#0b1c30' }}>
                  <ShieldCheck size={16} color="#f97316" />
                  <span>Licensed &amp; Insured Residential Contractor</span>
                </div>
                <div className="white-card tactile-card-shadow" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 600, color: '#0b1c30' }}>
                  <MapPin size={16} color="#f97316" />
                  <span>Local Richmond Crew</span>
                </div>
                <div className="white-card tactile-card-shadow" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 600, color: '#0b1c30' }}>
                  <Clock size={16} color="#f97316" />
                  <span>Mon–Sat 7am–7pm</span>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '14px' }}>
                <a href="#quote-cta" className="tactile-button-primary" style={{ padding: '12px 26px', fontSize: '1rem', fontWeight: 700 }}>
                  Get a Free Estimate
                </a>
                <a href={`tel:${companyInfo.phoneRaw}`} className="btn-outline-navy" style={{ padding: '12px 24px', fontSize: '1rem' }}>
                  <Phone size={18} /> Call {companyInfo.phone}
                </a>
              </div>
            </div>

            {/* Right Hero Visual with Inset Overlay (5 Cols) */}
            <div>
              <div
                style={{
                  position: 'relative',
                  backgroundColor: '#ffffff',
                  padding: '8px',
                  borderRadius: '20px',
                  border: '1px solid #cbd5e1',
                  boxShadow: '0 4px 6px -1px rgba(15, 23, 42, 0.05), 0 2px 4px -2px rgba(15, 23, 42, 0.03)',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={contractorPhoto}
                  alt="Homesync field contractor technician in front of a Richmond, VA home"
                  style={{ width: '100%', height: '440px', objectFit: 'cover', borderRadius: '14px', display: 'block' }}
                />

                {/* Inset Badge Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    right: '20px',
                    backgroundColor: 'rgba(33, 49, 69, 0.95)',
                    backdropFilter: 'blur(8px)',
                    color: '#ffffff',
                    padding: '16px',
                    borderRadius: '12px',
                    border: '1px solid #565e74',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.35)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div
                      style={{
                        padding: '10px',
                        borderRadius: '8px',
                        backgroundColor: '#f97316',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Building2 size={22} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                        Serving Greater Richmond
                      </h4>
                      <p style={{ fontSize: '0.825rem', color: '#bec6e0', margin: '2px 0 0' }}>
                        Henrico, Chesterfield, Midlothian &amp; Hanover
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. WHY WE STARTED HOMESYNC & BENTO PROBLEM/SOLUTION GRID ── */}
      <section style={{ backgroundColor: '#eff4ff', borderTop: '1px solid #d3e4fe', borderBottom: '1px solid #d3e4fe', padding: '72px 0 84px' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          
          <div style={{ maxWidth: '820px', marginBottom: '36px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <span style={{ width: '24px', height: '6px', backgroundColor: '#f97316', borderRadius: '9999px' }} />
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#9d4300', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Our Mission &amp; Background
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#0b1c30', marginBottom: '10px' }}>
              Why We Started Homesync
            </h2>
            <p style={{ fontSize: '1.15rem', color: '#475569', margin: '0 0 16px' }}>
              Taking the stress out of home repairs, vacant property care, and rental turnovers across Richmond.
            </p>
            <div className="white-card tactile-card-shadow" style={{ padding: '24px 28px', borderRadius: '12px', border: '1px solid #cbd5e1', color: '#0b1c30', lineHeight: 1.65, fontSize: '1rem' }}>
              Homesync was started with a simple goal: take the stress out of home repairs and property care. Homeowners and landlords are tired of calling five different contractors for five small repairs—only to have half of them never show up or return calls. We brought everything under one reliable roof: quality handyman work, vacant property preservation, and fast rental turnovers.
            </div>
          </div>

          {/* Problem vs. Solution Bento Comparison Grid */}
          <div className="about-bento-grid" style={{ marginBottom: '36px' }}>
            
            {/* The Old Headaches Card */}
            <div className="white-card tactile-card-shadow" style={{ padding: '28px', borderRadius: '16px', border: '1px solid #cbd5e1', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', paddingBottom: '16px', borderBottom: '1px solid #d3e4fe' }}>
                  <div style={{ padding: '10px', borderRadius: '10px', background: '#eff4ff', border: '1px solid #cbd5e1', color: '#565e74', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <XCircle size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0b1c30', margin: 0 }}>The Old Headaches</h3>
                    <p style={{ fontSize: '0.85rem', color: '#584237', margin: '2px 0 0' }}>The frustrating reality with typical handymen</p>
                  </div>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0 0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {[
                    'Calling multiple unvetted contractors for small punch-list items',
                    'No price transparency or sudden surprise charges on invoice day',
                    'Missed appointment windows with vague 8-hour waiting ranges',
                    'Zero photo documentation or proof of finished repair work',
                    'Unpredictable delays that leave rental vacancies sitting empty',
                  ].map((pain, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <X size={18} color="#ba1a1a" style={{ marginTop: '3px', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.925rem', color: '#0b1c30', lineHeight: 1.5 }}>{pain}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ borderTop: '1px solid #d3e4fe', paddingTop: '16px', marginTop: '24px', fontSize: '0.85rem', color: '#565e74' }}>
                Result: Wasted afternoons, delayed leases, and unnecessary frustration.
              </div>
            </div>

            {/* The Homesync Way Card (Highlighted) */}
            <div
              className="white-card tactile-card-shadow"
              style={{
                padding: '28px',
                borderRadius: '16px',
                border: '2px solid #f97316',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 8px 24px rgba(249, 115, 22, 0.08)',
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '8px', backgroundColor: '#f97316' }} />
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', paddingBottom: '16px', borderBottom: '1px solid #d3e4fe' }}>
                  <div style={{ padding: '10px', borderRadius: '10px', background: '#e5eeff', border: '1px solid #cbd5e1', color: '#9d4300', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0b1c30', margin: 0 }}>The Homesync Way</h3>
                      <span style={{ background: '#f97316', color: '#ffffff', fontSize: '0.75rem', fontWeight: 700, padding: '2px 8px', borderRadius: '4px' }}>
                        Preferred
                      </span>
                    </div>
                    <p style={{ fontSize: '0.85rem', color: '#9d4300', fontWeight: 600, margin: '2px 0 0' }}>
                      Reliable care built for Richmond homes &amp; rentals
                    </p>
                  </div>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0 0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {[
                    'One trusted local team handling punch-lists, upkeep, and turnovers',
                    'Clear, upfront written estimates before any work starts',
                    'Friendly punctual pros who respect your schedule and arrive on time',
                    'Clear photo proof of completed work delivered directly to your phone',
                    'Prompt walkthroughs and rapid turnarounds for landlord peace of mind',
                  ].map((benefit, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <CheckCircle2 size={18} color="#f97316" style={{ marginTop: '3px', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.925rem', color: '#0b1c30', fontWeight: 500, lineHeight: 1.5 }}>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ borderTop: '1px solid #d3e4fe', paddingTop: '16px', marginTop: '24px', fontSize: '0.85rem', color: '#9d4300', fontWeight: 700 }}>
                Result: Total confidence, well-maintained homes, and stress-free communication.
              </div>
            </div>

          </div>

          {/* Visual Proof of Quality (5:7 Responsive Grid) */}
          <div className="white-card tactile-card-shadow" style={{ padding: '28px', borderRadius: '16px', border: '1px solid #cbd5e1' }}>
            <div className="about-transformation-grid">
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', fontWeight: 700, color: '#9d4300', textTransform: 'uppercase', marginBottom: '10px' }}>
                  <Camera size={16} /> Documented Work Quality
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0b1c30', marginBottom: '12px' }}>
                  See the Homesync Transformation
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.6, marginBottom: '20px' }}>
                  From worn, damaged rooms to move-in ready living areas. We handle wall repair, fresh paint, hardware upgrades, and complete rental turnovers with meticulous craftsmanship.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    'Drywall & water stain restoration',
                    'Flooring, trim & fixture refreshes',
                    'Detailed before-and-after photo logs',
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: '#0b1c30', fontWeight: 500 }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#f97316', flexShrink: 0 }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', border: '1px solid #cbd5e1' }}>
                  <img
                    src={turnoverTransformation}
                    alt="Side-by-side room repair showing before and after property turnover transformation"
                    className="img-zoom-hover"
                    style={{ width: '100%', height: '340px', objectFit: 'cover', display: 'block' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '12px',
                      background: 'rgba(33, 49, 69, 0.92)',
                      color: '#ffffff',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      padding: '6px 12px',
                      borderRadius: '8px',
                      border: '1px solid #565e74',
                    }}
                  >
                    Real Richmond Turnover Project
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 3. WHAT YOU CAN COUNT ON EVERY SINGLE TIME (4 COMMITMENTS) ── */}
      <section style={{ padding: '72px 0 84px' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 48px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#9d4300', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Our Standards
            </span>
            <h2 style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#0b1c30', marginTop: '8px', marginBottom: '12px' }}>
              What You Can Count On Every Single Time
            </h2>
            <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
              We treat your property with the same care and respect we give our own homes. Here is our pledge to every Richmond client.
            </p>
          </div>

          <div className="about-commitments-grid">
            {[
              {
                icon: Clock,
                title: 'We Show Up on Time',
                desc: 'We respect your busy schedule and keep you updated every step of the way. No vague 8-hour waiting windows or unexpected no-shows.',
              },
              {
                icon: Receipt,
                title: 'Clear, Upfront Pricing',
                desc: 'No hidden fees or surprise add-ons. What we estimate is what you pay. You always approve scope changes before any additional work begins.',
              },
              {
                icon: Camera,
                title: 'Photo Proof on Every Job',
                desc: 'You receive clear before-and-after photos of every repair so you know it was done right, whether you\'re at home, at work, or out of town.',
              },
              {
                icon: ShieldCheck,
                title: 'Licensed & Insured',
                desc: 'Full commercial liability coverage for total peace of mind on your personal residence, apartment building, or rental portfolio.',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="white-card tactile-card-shadow tactile-card-shadow-hover"
                  style={{ padding: '28px', borderRadius: '16px', border: '1px solid #cbd5e1', display: 'flex', flexDirection: 'column' }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: '#e5eeff',
                      border: '1px solid #cbd5e1',
                      color: '#f97316',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                    }}
                  >
                    <Icon size={26} />
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0b1c30', marginBottom: '8px' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── 4. ROOTED IN RICHMOND, VIRGINIA (COVERAGE & OPERATIONS 7:5) ── */}
      <section style={{ backgroundColor: '#eff4ff', borderTop: '1px solid #d3e4fe', borderBottom: '1px solid #d3e4fe', padding: '72px 0 84px' }}>
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          
          <div style={{ maxWidth: '820px', marginBottom: '36px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#9d4300', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Service Coverage
            </span>
            <h2 style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#0b1c30', marginTop: '6px', marginBottom: '8px' }}>
              Rooted in Richmond, Virginia
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#475569', margin: 0 }}>
              Dependable service throughout Richmond City and all surrounding suburban counties.
            </p>
          </div>

          <div className="about-coverage-grid">
            
            {/* Left Card: Regular Service Areas (7 Cols) */}
            <div className="white-card tactile-card-shadow" style={{ padding: '32px', borderRadius: '16px', border: '1px solid #cbd5e1' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0b1c30', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <MapPin size={22} color="#f97316" />
                <span>Our Regular Service Areas</span>
              </h3>
              <p style={{ fontSize: '0.925rem', color: '#475569', lineHeight: 1.6, marginBottom: '20px' }}>
                Our service vans are on the road six days a week throughout the Richmond metropolitan area. We serve homeowners, rental landlords, and property management associations across these communities:
              </p>
              
              <div className="about-areas-grid">
                {[
                  'Richmond City & The Fan',
                  'Henrico County & Short Pump',
                  'Chesterfield & Midlothian',
                  'Glen Allen & Tuckahoe',
                  'Mechanicsville',
                  'Hanover County',
                  'Petersburg & Tri-Cities Corridor',
                ].map((area, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      background: '#eff4ff',
                      border: '1px solid #d3e4fe',
                      gridColumn: idx === 6 ? 'span 2' : undefined,
                    }}
                  >
                    <Check size={18} color="#9d4300" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#0b1c30' }}>{area}</span>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: '22px',
                  padding: '14px 18px',
                  borderRadius: '10px',
                  background: '#e5eeff',
                  border: '1px solid #d3e4fe',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                }}
              >
                <Info size={20} color="#f97316" style={{ marginTop: '2px', flexShrink: 0 }} />
                <p style={{ fontSize: '0.875rem', color: '#0b1c30', margin: 0, lineHeight: 1.5 }}>
                  <strong>Don't see your specific neighborhood?</strong> If you're anywhere in the Greater Richmond footprint, give us a call. We're happy to confirm crew availability.
                </p>
              </div>
            </div>

            {/* Right Card: Homesync Operations (5 Cols) */}
            <div className="white-card tactile-card-shadow" style={{ padding: '32px', borderRadius: '16px', border: '1px solid #cbd5e1' }}>
              <div style={{ borderBottom: '1px solid #d3e4fe', paddingBottom: '16px', marginBottom: '22px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#9d4300', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Local Shop &amp; Dispatch
                </span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0b1c30', marginTop: '4px', margin: 0 }}>
                  Homesync Operations
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* Base Office */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{ padding: '8px', borderRadius: '8px', background: '#e5eeff', color: '#f97316', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <Store size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0b1c30', margin: 0 }}>Base Office</h4>
                    <p style={{ fontSize: '0.875rem', color: '#475569', margin: '2px 0 0' }}>3540 Pump Rd, Richmond, VA 23233</p>
                    <span style={{ fontSize: '0.8rem', color: '#565e74' }}>Short Pump / West End Area</span>
                  </div>
                </div>

                {/* Direct Line */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{ padding: '8px', borderRadius: '8px', background: '#e5eeff', color: '#f97316', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0b1c30', margin: 0 }}>Direct Line</h4>
                    <a href={`tel:${companyInfo.phoneRaw}`} style={{ fontSize: '0.9rem', color: '#9d4300', fontWeight: 700, textDecoration: 'none' }}>
                      {companyInfo.phone}
                    </a>
                    <p style={{ fontSize: '0.8rem', color: '#584237', margin: '2px 0 0' }}>Call or text anytime during work hours</p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{ padding: '8px', borderRadius: '8px', background: '#e5eeff', color: '#f97316', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0b1c30', margin: 0 }}>Operating Hours</h4>
                    <p style={{ fontSize: '0.875rem', color: '#0b1c30', fontWeight: 600, margin: '2px 0 0' }}>Monday – Saturday: 7:00 AM – 7:00 PM</p>
                    <p style={{ fontSize: '0.8rem', color: '#565e74', margin: '2px 0 0' }}>Sunday: Closed for family &amp; worship</p>
                  </div>
                </div>

                {/* Neighborhood Service Note */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{ padding: '8px', borderRadius: '8px', background: '#e5eeff', color: '#f97316', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                    <Handshake size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0b1c30', margin: 0 }}>Neighborhood Service Note</h4>
                    <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.5, margin: '4px 0 0' }}>
                      Prompt walkthroughs and friendly written estimates scheduled throughout the week with clean, uniformed crew technicians.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. FIELD TEAM & LEADERSHIP COMMITMENT QUOTE ── */}
      <section style={{ padding: '68px 0 76px' }}>
        <div className="container" style={{ maxWidth: '960px', margin: '0 auto', padding: '0 24px' }}>
          <div
            className="white-card tactile-card-shadow"
            style={{
              border: '2px solid #d3e4fe',
              borderRadius: '24px',
              padding: '48px 36px',
              position: 'relative',
              textAlign: 'center',
              overflow: 'hidden',
            }}
          >
            <Quote
              size={64}
              color="#cbd5e1"
              style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                opacity: 0.3,
                pointerEvents: 'none',
              }}
            />
            <div style={{ position: 'relative', zIndex: 1, maxWidth: '750px', margin: '0 auto' }}>
              <blockquote style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', fontWeight: 600, color: '#0b1c30', lineHeight: 1.45, margin: '0 auto 24px' }}>
                “We treat every home like our own. Whether it’s fixing a broken door or preparing an apartment for new renters, our reputation is built on doing honest, quality work for our neighbors.”
              </blockquote>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '48px', height: '4px', backgroundColor: '#f97316', borderRadius: '9999px', marginBottom: '12px' }} />
                <p style={{ fontSize: '1rem', fontWeight: 700, color: '#0b1c30', margin: 0 }}>
                  The Homesync Field Team &amp; Leadership
                </p>
                <p style={{ fontSize: '0.875rem', color: '#565e74', marginTop: '4px', margin: 0 }}>
                  Richmond, Virginia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. BOTTOM CLOSING CTA BANNER (#quote-cta 8:4) ── */}
      <section id="quote-cta" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px 84px' }}>
        <div
          style={{
            backgroundColor: '#213145',
            color: '#eaf1ff',
            borderRadius: '24px',
            padding: '48px 40px',
            border: '1px solid #565e74',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 35px -5px rgba(15, 23, 42, 0.4)',
          }}
        >
          {/* Subtle amber accent top border */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '8px', backgroundColor: '#f97316' }} />
          
          <div className="about-banner-grid" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(86, 94, 116, 0.3)',
                  border: '1px solid #565e74',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  fontSize: '0.8rem',
                  color: '#ffdcc3',
                  alignSelf: 'flex-start',
                }}
              >
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#f97316' }} />
                Get in Touch with Our Richmond Team
              </div>

              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1.2, margin: 0 }}>
                Ready to get started on your home project?
              </h2>

              <p style={{ fontSize: '1.05rem', color: '#dae2fd', lineHeight: 1.6, margin: 0 }}>
                Call or text us at <strong style={{ color: '#ffffff' }}>{companyInfo.phone}</strong> or request a free estimate online. We're here Monday–Saturday, 7am–7pm.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'stretch', justifyContent: 'center' }}>
              <Link
                to="/get-quote"
                className="tactile-button-primary"
                style={{ width: '100%', padding: '14px 28px', fontSize: '1.05rem', fontWeight: 700, borderRadius: '10px' }}
              >
                <FileText size={18} /> Get a Free Estimate
              </Link>
              <a
                href={`tel:${companyInfo.phoneRaw}`}
                className="btn-outline-dark-surface"
                style={{ width: '100%', padding: '14px 28px', fontSize: '1.05rem', fontWeight: 600, borderRadius: '10px' }}
              >
                <Phone size={18} /> Call {companyInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
