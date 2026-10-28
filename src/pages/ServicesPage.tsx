import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Wrench,
  ShieldCheck,
  Key,
  ArrowRight,
  Phone,
  CheckCircle2,
  Check,
  ChevronRight,
  Flame,
  Paintbrush,
  Layers,
  Hammer,
  Fence,
  Trash2,
  Droplets,
  DoorClosed,
  Home as HomeIcon,
  Zap,
  Truck,
  Scissors,
  ClipboardCheck,
  Trash,
  Compass,
  Sparkles,
  Clock,
  DollarSign,
  MapPin,
  Send,
  Calendar,
} from 'lucide-react';
import {
  companyInfo,
  maintenanceServices,
  preservationServices,
} from '../data/friendlyContent';
import livingRoomAfter from '../assets/images/living-room-after.jpg';

const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string; style?: React.CSSProperties }>> = {
  Wrench,
  Flame,
  Paintbrush,
  Layers,
  Hammer,
  Fence,
  Trash2,
  Droplets,
  DoorClosed,
  Home: HomeIcon,
  Zap,
  Truck,
  Lock: ShieldCheck,
  Scissors,
  Trash,
  ClipboardCheck,
  ShieldCheck,
  Compass,
};

const maintenanceCategories: Record<string, string> = {
  'general-handyman': 'Everyday Fixes',
  'hvac-appliances': 'Heating & Air',
  'painting': 'Interior & Exterior',
  'drywall': 'Seamless Patch',
  'carpentry-flooring': 'Finish Carpentry',
  'fencing-decking-landscaping': 'Outdoor Living',
  'cleaning-debris': 'Junk Haul-Away',
  'pressure-washing': 'Exterior Wash',
  'garage-door': 'Tune-Ups & Safety',
  'roofing': 'Weather Defense',
  'plumbing-electrical': 'Fixtures & Power',
  'driveway-maintenance': 'Asphalt & Gravel',
};

const preservationCategories: Record<string, string> = {
  'lock-changes': 'Access Control',
  'lawn-maintenance': 'Code Compliance',
  'trash-outs': 'Cleanout Scopes',
  'property-inspections': 'Date-Stamped Logs',
  'safety-repairs': 'Hazard Abatement',
  'winterization': 'Freeze Protection',
};

const preservationFooters: Record<string, string> = {
  'lock-changes': 'Rapid Richmond Dispatch',
  'lawn-maintenance': 'Scheduled Recurring Service',
  'trash-outs': 'Includes Responsible Disposal',
  'property-inspections': 'Delivered Same Day As Visit',
  'safety-repairs': 'Liability Reduction',
  'winterization': 'Seasonal Peace of Mind',
};

export default function ServicesPage() {
  const location = useLocation();
  const estimateRef = useRef<HTMLDivElement>(null);

  // Initialize filter based on hash without triggering setState in effect
  const [filter, setFilter] = useState<'all' | 'maintenance' | 'preservation' | 'turnover'>(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      if (window.location.hash.includes('maintenance')) return 'maintenance';
      if (window.location.hash.includes('preservation')) return 'preservation';
      if (window.location.hash.includes('turnover')) return 'turnover';
    }
    return 'all';
  });

  const [estimateData, setEstimateData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'General Handyman Services',
    address: '',
    details: '',
    smsConsent: true,
  });
  const [estimateSent, setEstimateSent] = useState(false);

  useEffect(() => {
    if (location.hash) {
      const raw = location.hash.replace('#', '');
      if (raw === 'estimate') {
        estimateRef.current?.scrollIntoView({ behavior: 'smooth' });
        return;
      }
      const el =
        document.getElementById(raw) ||
        document.getElementById(`section-${raw}`) ||
        document.getElementById(`${raw}-section`) ||
        (raw === 'maintenance' && document.getElementById('section-handyman')) ||
        (raw === 'preservation' && document.getElementById('section-preservation')) ||
        (raw === 'turnover' && document.getElementById('section-turnover'));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  const scrollToEstimate = (selectedService?: string) => {
    if (selectedService) {
      setEstimateData((prev) => ({ ...prev, service: selectedService }));
    }
    estimateRef.current?.scrollIntoView({ behavior: 'smooth' });
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

  const estimateMailSubject = encodeURIComponent(
    `Services Estimate Request from ${estimateData.name || 'Website Visitor'}`
  );
  const estimateMailBody = encodeURIComponent(
`Full Name: ${estimateData.name}
Phone: ${estimateData.phone}
Email: ${estimateData.email}
Requested Service: ${estimateData.service}
Property Address / Neighborhood: ${estimateData.address}
Job Details:
${estimateData.details}

SMS Consent: ${estimateData.smsConsent ? 'Yes' : 'No'}`
  );
  const estimateMailto = `mailto:${companyInfo.email}?subject=${estimateMailSubject}&body=${estimateMailBody}`;

  const handleEstimateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEstimateSent(true);
    window.location.href = estimateMailto;
  };

  return (
    <div className="services-page bg-blueprint-grid" style={{ minHeight: '100vh', paddingTop: '32px', paddingBottom: '80px' }}>
      
      {/* ── 1. HERO SECTION & TRUST MINI-BADGES (Stitch Screen 1) ── */}
      <section style={{ padding: '48px 0 36px', borderBottom: '1px solid #E2E8F0' }} id="services">
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 20px' }}>
          
          <div style={{ maxWidth: '820px' }}>
            <div className="badge-amber" style={{ marginBottom: '16px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0063A6', display: 'inline-block' }} />
              <span style={{ fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', fontSize: '0.75rem' }}>WHAT WE DO</span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.4rem)', fontWeight: 800, color: '#0F172A', lineHeight: 1.15, letterSpacing: '-0.025em', marginBottom: '16px' }}>
              Complete Property Services Across Greater Richmond
            </h1>

            <p style={{ fontSize: '1.15rem', color: '#475569', lineHeight: 1.6, marginBottom: '28px' }}>
              Whether you need everyday handyman repairs, vacant home preservation, or a fast rental turnover, we have the right skilled crew for the job. Punctual, transparent, and built on dependable local craft.
            </p>

            {/* Trust Mini Badges (Stitch Style) */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#FFFFFF', padding: '8px 14px', borderRadius: '8px', border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(15, 23, 42, 0.05)', fontSize: '0.85rem', fontWeight: 600, color: '#1E293B' }}>
                <CheckCircle2 size={16} color="#0063A6" />
                <span>Fully Licensed &amp; Insured</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#FFFFFF', padding: '8px 14px', borderRadius: '8px', border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(15, 23, 42, 0.05)', fontSize: '0.85rem', fontWeight: 600, color: '#1E293B' }}>
                <Clock size={16} color="#0063A6" />
                <span>Mon–Fri 8am–5pm Scheduling</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#FFFFFF', padding: '8px 14px', borderRadius: '8px', border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(15, 23, 42, 0.05)', fontSize: '0.85rem', fontWeight: 600, color: '#1E293B' }}>
                <DollarSign size={16} color="#0063A6" />
                <span>Clear Itemized Estimates</span>
              </div>
            </div>
          </div>

          {/* Sticky Interactive Filter Tabs with Count Chips (Stitch Style) */}
          <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '24px', display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
            
            <button
              type="button"
              onClick={() => setFilter('all')}
              style={{
                padding: '10px 22px',
                borderRadius: '9999px',
                border: filter === 'all' ? '1px solid #0F172A' : '1px solid #CBD5E1',
                fontWeight: 700,
                fontSize: '0.9rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: filter === 'all' ? '#0F172A' : '#FFFFFF',
                color: filter === 'all' ? '#FFFFFF' : '#475569',
                boxShadow: filter === 'all' ? '0 2px 8px rgba(15, 23, 42, 0.15)' : 'none',
                transition: 'all 0.15s ease',
              }}
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#0063A6', display: 'inline-block' }} />
              <span>All Services</span>
            </button>

            <button
              type="button"
              onClick={() => setFilter('maintenance')}
              style={{
                padding: '10px 20px',
                borderRadius: '9999px',
                border: filter === 'maintenance' ? '1px solid #0F172A' : '1px solid #CBD5E1',
                fontWeight: 700,
                fontSize: '0.9rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: filter === 'maintenance' ? '#0F172A' : '#FFFFFF',
                color: filter === 'maintenance' ? '#FFFFFF' : '#475569',
                boxShadow: filter === 'maintenance' ? '0 2px 8px rgba(15, 23, 42, 0.15)' : 'none',
                transition: 'all 0.15s ease',
              }}
            >
              <Wrench size={16} color={filter === 'maintenance' ? '#0063A6' : '#64748B'} />
              <span>Maintenance &amp; Handyman</span>
              <span style={{ background: filter === 'maintenance' ? 'rgba(255,255,255,0.2)' : '#F1F5F9', color: filter === 'maintenance' ? '#FFF' : '#334155', padding: '2px 8px', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 800 }}>
                12
              </span>
            </button>

            <button
              type="button"
              onClick={() => setFilter('preservation')}
              style={{
                padding: '10px 20px',
                borderRadius: '9999px',
                border: filter === 'preservation' ? '1px solid #0F172A' : '1px solid #CBD5E1',
                fontWeight: 700,
                fontSize: '0.9rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: filter === 'preservation' ? '#0F172A' : '#FFFFFF',
                color: filter === 'preservation' ? '#FFFFFF' : '#475569',
                boxShadow: filter === 'preservation' ? '0 2px 8px rgba(15, 23, 42, 0.15)' : 'none',
                transition: 'all 0.15s ease',
              }}
            >
              <ShieldCheck size={16} color={filter === 'preservation' ? '#0063A6' : '#64748B'} />
              <span>Property Preservation</span>
              <span style={{ background: filter === 'preservation' ? 'rgba(255,255,255,0.2)' : '#F1F5F9', color: filter === 'preservation' ? '#FFF' : '#334155', padding: '2px 8px', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 800 }}>
                6
              </span>
            </button>

            <button
              type="button"
              onClick={() => setFilter('turnover')}
              style={{
                padding: '10px 20px',
                borderRadius: '9999px',
                border: filter === 'turnover' ? '1px solid #0F172A' : '1px solid #CBD5E1',
                fontWeight: 700,
                fontSize: '0.9rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: filter === 'turnover' ? '#0F172A' : '#FFFFFF',
                color: filter === 'turnover' ? '#FFFFFF' : '#475569',
                boxShadow: filter === 'turnover' ? '0 2px 8px rgba(15, 23, 42, 0.15)' : 'none',
                transition: 'all 0.15s ease',
              }}
            >
              <Key size={16} color={filter === 'turnover' ? '#0063A6' : '#64748B'} />
              <span>Rental Turnovers</span>
              <span style={{ background: '#EFF6FF', color: '#0063A6', padding: '2px 8px', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 800 }}>
                Make-Ready
              </span>
            </button>

          </div>
        </div>
      </section>

      {/* ── 2. PILLAR 1: MAINTENANCE & HANDYMAN (12 TRADES WITH CATEGORY CHIPS) ── */}
      {(filter === 'all' || filter === 'maintenance') && (
        <section id="section-handyman" style={{ padding: '60px 0', borderBottom: '1px solid #E2E8F0' }}>
          <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 20px' }}>
            
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '32px', flexWrap: 'wrap', gap: '16px', borderBottom: '1px solid #E2E8F0', paddingBottom: '18px' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#0063A6', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
                  <Wrench size={16} />
                  <span>Pillar 01 • Residential Maintenance</span>
                </div>
                <h2 style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.35rem)', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                  Maintenance &amp; Handyman Services
                </h2>
                <p style={{ color: '#64748B', margin: '6px 0 0', fontSize: '1rem' }}>
                  Dependable craftsmanship for homes, townhouses, and residential communities throughout Greater Virginia.
                </p>
              </div>

              <button
                type="button"
                onClick={() => scrollToEstimate('Maintenance & Handyman')}
                className="tactile-button-primary"
                style={{ padding: '10px 20px', fontSize: '0.9rem' }}
              >
                <span>Request Maintenance</span> <ArrowRight size={16} />
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '24px' }}>
              {maintenanceServices.map((service) => {
                const IconComp = iconMap[service.icon] || Wrench;
                const categoryChip = maintenanceCategories[service.id] || 'Everyday Fixes';

                return (
                  <div key={service.id} className="white-card service-card-hover" style={{ padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                        <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0063A6' }}>
                          <IconComp size={24} />
                        </div>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0063A6', background: '#EFF6FF', border: '1px solid #BFDBFE', padding: '3px 10px', borderRadius: '9999px' }}>
                          {categoryChip}
                        </span>
                      </div>

                      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                        {service.title}
                      </h3>
                      <p style={{ fontSize: '0.925rem', color: '#475569', lineHeight: 1.55, marginBottom: '20px' }}>
                        {service.description}
                      </p>

                      <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '14px', marginBottom: '20px' }}>
                        <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
                          What We Cover:
                        </div>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          {service.highlights.map((h, i) => (
                            <li key={i} style={{ fontSize: '0.85rem', color: '#334155', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                              <Check size={15} color="#0063A6" style={{ marginTop: '2px', flexShrink: 0 }} />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div style={{ paddingTop: '16px', borderTop: '1px solid #F1F5F9' }}>
                      <button
                        type="button"
                        onClick={() => scrollToEstimate(service.title)}
                        className="btn-outline-navy"
                        style={{ width: '100%', justifyContent: 'center', fontSize: '0.9rem', padding: '10px' }}
                      >
                        <span>Request Service</span> <ArrowRight size={15} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>
      )}

      {/* ── 3. PILLAR 2: PROPERTY PRESERVATION (6 ASSET PROTECTION SERVICES) ── */}
      {(filter === 'all' || filter === 'preservation') && (
        <section id="section-preservation" style={{ padding: '60px 0', borderBottom: '1px solid #E2E8F0' }}>
          <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 20px' }}>
            
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '32px', flexWrap: 'wrap', gap: '16px', borderBottom: '1px solid #E2E8F0', paddingBottom: '18px' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#0F172A', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
                  <ShieldCheck size={16} />
                  <span>Pillar 02 • Vacant Asset Protection</span>
                </div>
                <h2 style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.35rem)', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                  Property Preservation &amp; Asset Care
                </h2>
                <p style={{ color: '#64748B', margin: '6px 0 0', fontSize: '1rem' }}>
                  Comprehensive property preservation, code violation abatement, and vacant asset upkeep for lenders, heirs, and real estate investors.
                </p>
              </div>

              <button
                type="button"
                onClick={() => scrollToEstimate('Property Preservation')}
                className="btn-outline-navy"
                style={{ padding: '10px 20px', fontSize: '0.9rem' }}
              >
                <span>Order Preservation Scopes</span> <ArrowRight size={16} />
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '24px' }}>
              {preservationServices.map((service) => {
                const IconComp = iconMap[service.icon] || ShieldCheck;
                const categoryChip = preservationCategories[service.id] || 'Asset Protection';
                const footerTag = preservationFooters[service.id] || 'Rapid Richmond Dispatch';

                return (
                  <div key={service.id} className="white-card service-card-hover" style={{ padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                        <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0F172A' }}>
                          <IconComp size={24} />
                        </div>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#1E293B', background: '#F1F5F9', border: '1px solid #E2E8F0', padding: '3px 10px', borderRadius: '9999px' }}>
                          {categoryChip}
                        </span>
                      </div>

                      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                        {service.title}
                      </h3>
                      <p style={{ fontSize: '0.925rem', color: '#475569', lineHeight: 1.55, marginBottom: '20px' }}>
                        {service.description}
                      </p>

                      <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '14px', marginBottom: '20px' }}>
                        <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
                          Key Protection Deliverables:
                        </div>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          {service.highlights.map((h, i) => (
                            <li key={i} style={{ fontSize: '0.85rem', color: '#334155', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                              <CheckCircle2 size={15} color="#0F172A" style={{ marginTop: '2px', flexShrink: 0 }} />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div style={{ paddingTop: '16px', borderTop: '1px solid #F1F5F9', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748B', background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '6px 10px', borderRadius: '6px', textAlign: 'center' }}>
                        {footerTag}
                      </span>
                      <button
                        type="button"
                        onClick={() => scrollToEstimate(service.title)}
                        className="btn-outline-navy"
                        style={{ width: '100%', justifyContent: 'center', fontSize: '0.9rem', padding: '10px' }}
                      >
                        <span>Order Service</span> <ArrowRight size={15} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>
      )}

      {/* ── 4. PILLAR 3: TURNKEY RENTAL TURNOVERS + SPOTLIGHT CARD (Stitch Screen 4) ── */}
      {(filter === 'all' || filter === 'turnover') && (
        <section id="section-turnover" style={{ padding: '60px 0', borderBottom: '1px solid #E2E8F0' }}>
          <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 20px' }}>
            
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#0063A6', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
                <Key size={16} />
                <span>Pillar 03 • Fast Rental Turnovers</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.35rem)', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                Turnkey Rental Make-Ready Services
              </h2>
              <p style={{ color: '#64748B', margin: '6px 0 0', fontSize: '1rem', maxWidth: '780px' }}>
                Minimizing vacancy between leases for Richmond landlords and rental property investors with a reliable 4-step turnaround process.
              </p>
            </div>

            {/* Turnaround Transformation Spotlight Card (Stitch Exact Component) */}
            <div className="white-card" style={{ overflow: 'hidden', marginBottom: '40px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '0' }}>
                
                {/* Left: Image Container with Badge */}
                <div style={{ position: 'relative', minHeight: '340px' }}>
                  <img
                    src={livingRoomAfter}
                    alt="Homesync LLC Rental Turnover Before and After"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    background: 'rgba(15, 23, 42, 0.9)',
                    backdropFilter: 'blur(6px)',
                    color: '#FFFFFF',
                    padding: '8px 14px',
                    borderRadius: '6px',
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    letterSpacing: '0.02em',
                  }}>
                    Richmond Single Family Rental • 4-Day Make-Ready
                  </div>
                </div>

                {/* Right: Turnover Value & Commitment */}
                <div style={{ padding: 'clamp(28px, 4vw, 40px)', background: '#F8FAFC', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#EFF6FF', color: '#0063A6', border: '1px solid #BFDBFE', padding: '4px 12px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 800, marginBottom: '14px' }}>
                      <Zap size={14} color="#0063A6" />
                      <span>Fast Turnkey Turnarounds for Landlords</span>
                    </div>

                    <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0F172A', marginBottom: '10px', lineHeight: 1.25 }}>
                      From Move-Out Chaos to Lease-Ready in Days
                    </h3>

                    <p style={{ fontSize: '0.925rem', color: '#475569', lineHeight: 1.6, marginBottom: '24px' }}>
                      Vacant units cost money every sunrise. We manage the entire turnover scope from junk clearing to the final lock cylinder re-key so you don’t have to juggle five different sub-contractors.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#DEF7EC', color: '#03543F', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                          <CheckCircle2 size={16} />
                        </div>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0F172A' }}>
                            Itemized Landlord Invoicing
                          </div>
                          <div style={{ fontSize: '0.8rem', color: '#64748B' }}>
                            Categorized by tenant deposit deductions and normal wear-and-tear for simple bookkeeping.
                          </div>
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#DEF7EC', color: '#03543F', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                          <CheckCircle2 size={16} />
                        </div>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0F172A' }}>
                            Single Point of Contact
                          </div>
                          <div style={{ fontSize: '0.8rem', color: '#64748B' }}>
                            One dedicated Richmond lead managing your timeline, keys, and punch list.
                          </div>
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#DEF7EC', color: '#03543F', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                          <CheckCircle2 size={16} />
                        </div>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#0F172A' }}>
                            Photo Completion Report
                          </div>
                          <div style={{ fontSize: '0.8rem', color: '#64748B' }}>
                            Full documentation sent directly to your phone before you list for the next tenant.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => scrollToEstimate('Rental Turnover Make-Ready')}
                    className="tactile-button-primary"
                    style={{ width: '100%', justifyContent: 'center', padding: '12px', fontSize: '0.95rem' }}
                  >
                    <span>Book a Rental Make-Ready Estimate</span> <ArrowRight size={16} />
                  </button>
                </div>

              </div>
            </div>

            {/* 4-Step Process Timeline Cards (Stitch Screen 4) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
              {[
                {
                  step: '01',
                  title: 'Trash-Out',
                  icon: Trash2,
                  desc: 'Any leftover tenant belongings, basement leftovers, or garage scrap are packed and hauled away quickly to clear the workspace.',
                },
                {
                  step: '02',
                  title: 'Repairs & Checks',
                  icon: Wrench,
                  desc: 'Faucets, toilets, smoke alarms, switches, ceiling fans, and kitchen appliances are tested, repaired, or updated for safety.',
                },
                {
                  step: '03',
                  title: 'Patch & Paint',
                  icon: Paintbrush,
                  desc: 'Nail holes, anchor tears, and door dings are spackled flat and coated with fresh, neutral paint for that crisp new-home aroma.',
                },
                {
                  step: '04',
                  title: 'Deep Clean & Re-Key',
                  icon: Sparkles,
                  desc: 'Spotless sanitizing of ovens, refrigerators, tile, and baths. Finished with fresh lock cylinders and new keys in hand.',
                },
              ].map((item) => {
                const StepIcon = item.icon;
                return (
                  <div key={item.step} className="white-card service-card-hover" style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#EFF6FF', color: '#0063A6', fontWeight: 800, fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                        {item.step}
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                        <StepIcon size={20} color="#0063A6" />
                        <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                          {item.title}
                        </h4>
                      </div>

                      <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.55, margin: '0 0 16px' }}>
                        {item.desc}
                      </p>
                    </div>

                    <div style={{ paddingTop: '14px', borderTop: '1px solid #F1F5F9' }}>
                      <button
                        type="button"
                        onClick={() => scrollToEstimate(`Rental Turnover: Stage ${item.step} (${item.title})`)}
                        style={{ background: 'none', border: 'none', padding: 0, fontSize: '0.85rem', fontWeight: 700, color: '#0063A6', display: 'inline-flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}
                      >
                        <span>Book Stage {item.step}</span> <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>
      )}

      {/* ── 5. DIRECT IN-PAGE SERVICE ESTIMATE SECTION (Stitch Screen 5) ── */}
      <section ref={estimateRef} id="estimate" style={{ padding: '70px 0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 20px' }}>
          
          <div className="white-card" style={{ padding: 'clamp(28px, 5vw, 48px)', border: '1px solid #CBD5E1', boxShadow: '0 12px 30px rgba(15, 23, 42, 0.08)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '44px', alignItems: 'center' }}>
              
              {/* Left Column: Local Contact & Hours */}
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#EFF6FF', color: '#0063A6', border: '1px solid #BFDBFE', padding: '4px 12px', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 800, marginBottom: '14px' }}>
                  <Calendar size={14} color="#0063A6" />
                  <span>Prompt Local Response</span>
                </div>

                <h2 style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#0F172A', lineHeight: 1.2, marginBottom: '14px' }}>
                  Request Your Free Service Estimate
                </h2>

                <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.6, marginBottom: '28px' }}>
                  Tell us what needs attention at your home or rental property. We review your request, provide transparent pricing, and schedule a convenient walkthrough time.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', borderTop: '1px solid #E2E8F0', paddingTop: '22px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <MapPin size={20} color="#0063A6" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.925rem', color: '#0F172A' }}>Richmond Office</div>
                      <div style={{ fontSize: '0.85rem', color: '#64748B' }}>{companyInfo.address}</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <Phone size={20} color="#0063A6" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.925rem', color: '#0F172A' }}>Direct Contractor Line</div>
                      <a href={`tel:${companyInfo.phoneRaw}`} style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0063A6', textDecoration: 'none' }}>
                        {companyInfo.phone} (Call or Text)
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <Clock size={20} color="#0063A6" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.925rem', color: '#0F172A' }}>Operating Hours</div>
                      <div style={{ fontSize: '0.85rem', color: '#64748B' }}>Monday through Friday: 8:00 AM – 5:00 PM <br /><small>Saturday &amp; Sunday: Closed</small></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Embedded Estimate Form */}
              <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '14px', padding: '28px' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
                  Service Details Form
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#64748B', marginBottom: '20px' }}>
                  No high-pressure sales calls. Straightforward written estimates.
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
                          style={{ width: '100%', padding: '9px 12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '0.9rem', background: '#FFF' }}
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
                          style={{ width: '100%', padding: '9px 12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '0.9rem', background: '#FFF' }}
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
                          style={{ width: '100%', padding: '9px 12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '0.9rem', background: '#FFF' }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>
                          Project Category
                        </label>
                        <select
                          name="service"
                          value={estimateData.service}
                          onChange={handleEstimateChange}
                          style={{ width: '100%', padding: '9px 12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '0.9rem', background: '#FFF' }}
                        >
                          <option value="General Handyman Services">General Handyman Services</option>
                          <option value="Drywall & Interior Painting">Drywall &amp; Interior Painting</option>
                          <option value="Rental Turnover (Make-Ready)">Rental Turnover (Make-Ready)</option>
                          <option value="Property Preservation & Asset Care">Property Preservation &amp; Asset Care</option>
                          <option value="Plumbing or Electrical Fixes">Plumbing or Electrical Fixes</option>
                          <option value="Pressure Washing & Exterior Care">Pressure Washing &amp; Exterior Care</option>
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
                        placeholder="e.g. 3540 Pump Rd, Henrico or Richmond"
                        value={estimateData.address}
                        onChange={handleEstimateChange}
                        style={{ width: '100%', padding: '9px 12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '0.9rem', background: '#FFF' }}
                      />
                    </div>

                    <div style={{ marginBottom: '14px' }}>
                      <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#334155', marginBottom: '4px' }}>
                        Brief Description of the Job
                      </label>
                      <textarea
                        name="details"
                        rows={3}
                        placeholder="Tell us what needs fixing or updating..."
                        value={estimateData.details}
                        onChange={handleEstimateChange}
                        style={{ width: '100%', padding: '9px 12px', borderRadius: '6px', border: '1px solid #CBD5E1', fontSize: '0.9rem', resize: 'vertical', background: '#FFF' }}
                      />
                    </div>

                    <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '6px', padding: '10px 12px', marginBottom: '16px' }}>
                      <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer', fontSize: '0.78rem', color: '#475569', lineHeight: 1.4 }}>
                        <input
                          type="checkbox"
                          name="smsConsent"
                          checked={estimateData.smsConsent}
                          onChange={handleEstimateChange}
                          style={{ marginTop: '2px', accentColor: '#0063A6' }}
                        />
                        <span>
                          I agree to receive text messages from Homesync LLC regarding this estimate. Message and data rates may apply. Reply STOP anytime.
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
                    <p style={{ fontSize: '0.75rem', color: '#64748B', textAlign: 'center', marginTop: '10px', marginBottom: 0 }}>
                      Zero commitment. Upfront quotes provided prior to starting work.
                    </p>
                  </form>
                )}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ── 6. BOTTOM CUSTOMIZED PACKAGE BANNER (Stitch Screen 6) ── */}
      <section style={{ padding: '60px 0', background: '#0F172A', color: '#FFFFFF', marginTop: '20px' }}>
        <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center', justifyContent: 'space-between', textAlign: 'center' }}>
            <div style={{ maxWidth: '720px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#BAE6FD', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px' }}>
                <Sparkles size={14} />
                <span>FRIENDLY RICHMOND CONTRACTORS</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.4rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '12px', lineHeight: 1.25 }}>
                Need a customized service package for your property?
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#CBD5E1', margin: 0, lineHeight: 1.6 }}>
                Give us a call at <strong>{companyInfo.phone}</strong> or request an estimate online. We are here Mon–Fri 8am–5pm.
              </p>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center' }}>
              <button
                type="button"
                onClick={() => scrollToEstimate()}
                className="tactile-button-primary"
                style={{ padding: '13px 28px', fontSize: '1rem' }}
              >
                <span>Get a Free Estimate</span>
              </button>
              <a
                href={`tel:${companyInfo.phoneRaw}`}
                className="btn-outline-dark-surface"
              >
                <Phone size={16} color="#38BDF8" />
                <span>Call {companyInfo.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CSS Utilities for Cards ── */}
      <style>{`
        .service-card-hover {
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .service-card-hover:hover {
          transform: translateY(-2px);
          border-color: #CBD5E1;
          box-shadow: 0 10px 24px -4px rgba(15, 23, 42, 0.1);
        }
      `}</style>

    </div>
  );
}
