import React, { useState } from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

const galleryItems = [
  {
    category: 'lawn',
    categoryName: 'Turf Care & Striping',
    title: 'Precision Tall Fescue Striping & Edging',
    location: 'Short Pump, Richmond Residential',
    image: '/images/gallery_lawn1.jpg',
    details: 'Weekly precision mowing, laser-straight edge trimming, and turf health management.'
  },
  {
    category: 'mulch',
    categoryName: 'Mulch & Bed Design',
    title: 'Deep Trench Bed with Dark Hardwood Mulch',
    location: 'Henrico, VA Property',
    image: '/images/gallery_mulch.jpg',
    details: 'Virginia perennial plantings, stone borders, and moisture-retaining organic dark hardwood mulch.'
  },
  {
    category: 'commercial',
    categoryName: 'Commercial Grounds',
    title: 'Corporate Park Perimeter Maintenance',
    location: 'Downtown Richmond Commercial',
    image: '/images/gallery_commercial.jpg',
    details: 'Full contract groundskeeping, walkway clearing, and Virginia code compliance.'
  },
  {
    category: 'shrub',
    categoryName: 'Boxwood & Shrub Care',
    title: 'Sculpted Boxwood Privacy Hedges',
    location: 'Midlothian, VA Estate',
    image: '/images/gallery_shrub.jpg',
    details: 'Precision level hedge pruning and ornamental Virginia plant rejuvenation.'
  },
  {
    category: 'cleanup',
    categoryName: 'Seasonal Cleanup',
    title: 'Fall Leaf Removal & Lawn Aeration',
    location: 'Glen Allen, VA Property',
    image: '/images/gallery_cleanup.jpg',
    details: 'Complete foliage vacuuming, root aeration, and winter grass prep.'
  },
  {
    category: 'lawn',
    categoryName: 'Turf Care & Striping',
    title: 'Vibrant Green Bluegrass Turf Restoration',
    location: 'Chesterfield, VA Residential',
    image: '/images/gallery_lawn2.jpg',
    details: 'Overseeding, custom aeration, and scheduled Virginia soil nourishment.'
  }
];

export default function Gallery() {
  const [filter, setFilter] = useState('all');

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="showcase" className="py-20 lg:py-28 bg-slate-50 bg-pattern-dots-homesync relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-100 text-electric-950 text-xs font-bold tracking-wider uppercase">
            Work Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Recent Landscaping Projects in Richmond
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            A glimpse into the residential properties, HOA communities, and commercial facilities we maintain across Central Virginia.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'lawn', label: 'Turf & Edging' },
            { id: 'mulch', label: 'Mulch & Planting' },
            { id: 'shrub', label: 'Boxwood & Shrub' },
            { id: 'cleanup', label: 'Seasonal Cleanup' },
            { id: 'commercial', label: 'Commercial Grounds' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all duration-200 ${
                filter === tab.id
                  ? 'bg-gradient-to-r from-electric-600 to-indigo-600 text-white shadow-md shadow-indigo-600/20'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredItems.map((item, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-soft shadow-hover flex flex-col"
            >
              <div className="relative h-60 overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-[11px] font-bold text-homesync-900 shadow-sm">
                  {item.categoryName}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-bold text-electric-700 mb-1 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-electric-600" />
                    <span>{item.location}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-electric-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {item.details}
                  </p>
                </div>
                <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-electric-700">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-springgreen-600" />
                    Homesync Quality Standard
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
