import React from 'react';
import { Zap, ShieldCheck, CheckCircle, Clock, Award, Users, PhoneCall } from 'lucide-react';

const pillars = [
  {
    icon: Zap,
    title: 'Rapid Richmond Dispatch',
    description: 'Fast estimation and dependable fleet mobilization. From overgrown lot clearance to recurring mowing, we respond promptly.'
  },
  {
    icon: ShieldCheck,
    title: 'Virginia Code & Safety Compliance',
    description: 'We adhere strictly to Richmond and Henrico County municipal codes, HOA requirements, and safety guidelines. Fully licensed & insured in VA.'
  },
  {
    icon: Award,
    title: 'Pristine Landscape Quality',
    description: 'Razor-sharp edging, even turf cutting, thorough weed control, and clean driveway and walkway blow-off on every visit.'
  },
  {
    icon: Clock,
    title: 'Consistent Scheduled Service',
    description: 'Dependable recurring grounds maintenance for commercial properties, rental portfolios, and homeowners across Central Virginia.'
  },
  {
    icon: Users,
    title: 'Trained Professional Grounds Crew',
    description: 'Experienced groundskeepers equipped with commercial-grade zero-turn mowers, precision edgers, and specialized trimming tools.'
  },
  {
    icon: CheckCircle,
    title: 'Transparent Itemized Invoicing',
    description: 'Clear upfront pricing, no hidden fees, and dedicated reporting for property managers, HOA boards, and individual owners.'
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-slate-50 bg-pattern-dots-homesync relative border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left info column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-100 text-electric-950 text-xs font-bold tracking-wider uppercase">
              Why Homesync LLC
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Speed, Compliance, and Superior Virginia Grounds Quality
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              At <strong>HOMESYNC LLC</strong>, we are committed to delivering dependable, high-standard landscaping services throughout Richmond, VA. We protect and elevate property values with diligent grounds preservation.
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-electric-50 text-electric-700 flex items-center justify-center shrink-0 font-black text-lg">
                  01
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Commercial & Asset Manager Ready</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Equipped to handle high-volume portfolios, HOA communities, and residential estates.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-springgreen-50 text-springgreen-700 flex items-center justify-center shrink-0 font-black text-lg">
                  02
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Direct Richmond Phone Line</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Call (804) 292-2009 or email info@homesyncllc.org for instant estimates.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-electric-600 to-indigo-600 hover:from-electric-700 hover:to-indigo-700 text-white font-black text-sm px-6 py-3.5 rounded-xl shadow-md shadow-indigo-600/20 transition-all"
              >
                Schedule Service in Richmond
              </a>
            </div>

            {/* Crew Image Callout */}
            <div className="pt-4 overflow-hidden rounded-2xl border border-slate-200 shadow-sm relative group">
              <img 
                src="/images/team-landscaping.jpg" 
                alt="Homesync LLC Professional Grounds Crew" 
                className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-homesync-950/80 via-transparent to-transparent flex items-end p-4">
                <p className="text-xs font-semibold text-white">
                  Experienced, insured, and certified grounds specialists in Richmond, VA.
                </p>
              </div>
            </div>
          </div>

          {/* Right 2x3 Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft shadow-hover space-y-3"
                >
                  <div className="w-11 h-11 rounded-xl bg-electric-50 text-electric-700 flex items-center justify-center">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
