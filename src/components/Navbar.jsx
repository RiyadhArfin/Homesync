import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X, ChevronRight, Clock, ShieldCheck, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Richmond Info Bar */}
      <div className="bg-homesync-950 text-slate-200 text-xs py-2 px-4 border-b border-homesync-900">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-5 flex-wrap justify-center sm:justify-start">
            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-electric-400" />
              <span>3540 Pump Rd, Richmond, VA 23233</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300 hidden md:flex">
              <Clock className="w-3.5 h-3.5 text-electric-400" />
              <span>Mon - Sat: 7:00 AM - 6:00 PM EST</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="mailto:info@homesyncllc.org" 
              className="flex items-center gap-1.5 text-slate-300 hover:text-electric-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-electric-400" />
              <span>info@homesyncllc.org</span>
            </a>
            <span className="hidden sm:inline text-homesync-800">|</span>
            <span className="text-electric-400 font-bold tracking-wide hidden sm:inline flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-electric-400" />
              Richmond Landscaping Pros
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`bg-white/95 backdrop-blur-md transition-shadow duration-300 ${scrolled ? 'shadow-md border-b border-slate-100' : 'border-b border-slate-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            
            {/* Logo */}
            <a href="#" className="flex items-center gap-3.5 group shrink-0">
              <img 
                src="/logo_icon_transparent.png" 
                alt="Homesync LLC" 
                className="h-11 w-auto object-contain group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col">
                <div className="font-black text-lg sm:text-xl text-homesync-950 tracking-tight leading-none whitespace-nowrap">
                  HOMESYNC <span className="text-electric-600">LLC</span>
                </div>
                <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-homesync-500 font-bold mt-1 whitespace-nowrap">
                  Richmond Grounds & Landscaping
                </div>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden xl:flex items-center space-x-6 text-sm font-bold text-slate-700">
              <a href="#services" className="hover:text-electric-600 transition-colors whitespace-nowrap">Services</a>
              <a href="#why-us" className="hover:text-electric-600 transition-colors whitespace-nowrap">Why Choose Us</a>
              <a href="#process" className="hover:text-electric-600 transition-colors whitespace-nowrap">Process</a>
              <a href="#showcase" className="hover:text-electric-600 transition-colors whitespace-nowrap">Showcase</a>
              <a href="#service-area" className="hover:text-electric-600 transition-colors whitespace-nowrap">Service Area</a>
              <a href="#contact" className="hover:text-electric-600 transition-colors whitespace-nowrap">Contact</a>
            </div>

            {/* Phone & CTA Button */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <a 
                href="tel:8042922009" 
                className="flex items-center gap-2 text-homesync-950 hover:text-electric-600 font-extrabold text-sm transition-colors py-2 px-3 rounded-xl hover:bg-slate-50 whitespace-nowrap"
              >
                <div className="w-8 h-8 rounded-lg bg-electric-50 flex items-center justify-center text-electric-600">
                  <Phone className="w-4 h-4" />
                </div>
                <span>(804) 292-2009</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-electric-600 to-indigo-600 hover:from-electric-700 hover:to-indigo-700 text-white font-extrabold text-sm px-5 py-3 rounded-xl shadow-md shadow-indigo-500/20 transition-all hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap"
              >
                <span>Free Quote</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex xl:hidden items-center gap-2">
              <a
                href="tel:8042922009"
                className="p-2 rounded-xl text-homesync-900 bg-homesync-50"
                aria-label="Call Homesync"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-slate-700 hover:text-electric-600 hover:bg-slate-100 transition-colors focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <div className="flex flex-col space-y-2 font-bold text-sm text-slate-800">
              <a 
                href="#services" 
                onClick={() => setIsOpen(false)} 
                className="px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Landscaping Services
              </a>
              <a 
                href="#why-us" 
                onClick={() => setIsOpen(false)} 
                className="px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Why Choose Homesync
              </a>
              <a 
                href="#process" 
                onClick={() => setIsOpen(false)} 
                className="px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Our 4-Step Process
              </a>
              <a 
                href="#showcase" 
                onClick={() => setIsOpen(false)} 
                className="px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Project Showcase
              </a>
              <a 
                href="#service-area" 
                onClick={() => setIsOpen(false)} 
                className="px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Richmond Service Area
              </a>
              <a 
                href="#contact" 
                onClick={() => setIsOpen(false)} 
                className="px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Contact & Inquiries
              </a>
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href="tel:8042922009"
                className="w-full py-3 bg-homesync-50 text-homesync-900 font-extrabold rounded-xl flex items-center justify-center gap-2 text-sm"
              >
                <Phone className="w-4 h-4 text-electric-600" />
                <span>Call (804) 292-2009</span>
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full py-3.5 bg-gradient-to-r from-electric-600 to-indigo-600 hover:from-electric-700 hover:to-indigo-700 text-white font-extrabold rounded-xl text-center shadow-md text-sm"
              >
                Request Free Richmond Estimate
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
