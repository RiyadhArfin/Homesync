import React from 'react';
import { MapPin, Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';

const regions = [
  {
    name: 'Short Pump & West End',
    neighborhoods: 'Pump Road Corridor, Innsbrook, Wellesley, Twin Hickory',
    time: 'Headquarters Immediate Route'
  },
  {
    name: 'Henrico & Tuckahoe',
    neighborhoods: 'Monument Avenue, Mooreland, Kanawha, River Road Estates',
    time: 'Daily Commercial & Residential Dispatch'
  },
  {
    name: 'Midlothian & Bon Air',
    neighborhoods: 'Salisbury, Brandermill, Woodlake, Queensmill Communities',
    time: 'Scheduled Recurring Service'
  },
  {
    name: 'Glen Allen & Wyndham',
    neighborhoods: 'Dominion Club, Mountain Run, Laurel, Nuckols Corridor',
    time: 'Weekly Dedicated Fleet Route'
  },
  {
    name: 'Downtown Richmond & The Fan',
    neighborhoods: 'The Museum District, Shockoe Slip, Church Hill, Scott\'s Addition',
    time: 'High-Volume Commercial & HOA'
  },
  {
    name: 'Chesterfield & Mechanicsville',
    neighborhoods: 'Pebble Creek, Ash Creek, Bell Creek, Magnolia Green',
    time: 'Fast Mobile Crew Dispatch'
  }
];

export default function ServiceArea() {
  return (
    <section id="service-area" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-100 text-electric-950 text-xs font-bold tracking-wider uppercase">
              Virginia Service Coverage
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Proudly Serving Richmond & Central Virginia
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Based at <strong>3540 Pump Rd, Richmond, VA 23233</strong>, Homesync LLC deploys modern maintenance fleets daily across Henrico County, Chesterfield County, and the Greater Richmond Metropolitan Area.
            </p>

            <div className="p-5 rounded-2xl bg-homesync-950 text-white space-y-3">
              <div className="flex items-center gap-2.5 text-electric-400 font-bold text-sm">
                <MapPin className="w-4 h-4" />
                <span>Richmond Headquarters</span>
              </div>
              <p className="text-xs text-slate-300">
                3540 Pump Rd, Richmond, VA 23233
              </p>
              <div className="pt-2 flex items-center justify-between border-t border-homesync-800 text-xs text-slate-300">
                <span>Direct Client Line:</span>
                <a href="tel:8042922009" className="text-electric-400 font-black hover:text-white transition-colors">
                  (804) 292-2009
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
              <ShieldCheck className="w-4 h-4 text-springgreen-600 shrink-0" />
              <span>Full compliance documentation for Richmond commercial asset managers & HOAs.</span>
            </div>
          </div>

          {/* Right Region Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {regions.map((region, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm hover:border-electric-300 transition-colors space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-electric-600 shrink-0" />
                    <span>{region.name}</span>
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {region.neighborhoods}
                </p>
                <div className="pt-2 border-t border-slate-200/60 flex items-center gap-1 text-[11px] font-bold text-electric-700">
                  <CheckCircle2 className="w-3 h-3 text-springgreen-600" />
                  <span>{region.time}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
