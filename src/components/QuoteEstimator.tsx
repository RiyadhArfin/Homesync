import { useState } from 'react';
import { Calculator } from 'lucide-react';

const SERVICES = [
  { id: 'winterization', label: 'Winterization', basePrice: 150 },
  { id: 'debris', label: 'Debris Removal', basePrice: 300 },
  { id: 'lawn', label: 'Lawn Maintenance', basePrice: 100 },
  { id: 'lock', label: 'Lock Change / Securing', basePrice: 120 },
  { id: 'cleaning', label: 'Janitorial Cleaning', basePrice: 200 }
];

export default function QuoteEstimator() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [propertySize, setPropertySize] = useState<number>(1);

  const toggleService = (id: string) => {
    setSelectedServices(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const calculateEstimate = () => {
    let total = 0;
    selectedServices.forEach(id => {
      const service = SERVICES.find(s => s.id === id);
      if (service) total += service.basePrice;
    });
    
    // Multiply by property size multiplier
    const finalEstimate = total * propertySize;
    
    if (finalEstimate === 0) return '$0';
    return `$${Math.round(finalEstimate * 0.9)} - $${Math.round(finalEstimate * 1.1)}`;
  };

  return (
    <div className="quote-estimator">
      <div className="estimator-header">
        <Calculator size={28} className="estimator-icon" />
        <h3>Instant Quote Estimator</h3>
        <p>Select your services to get a rough estimate for your property.</p>
      </div>

      <div className="estimator-body">
        <div className="form-group">
          <label>Property Size</label>
          <select 
            value={propertySize} 
            onChange={(e) => setPropertySize(Number(e.target.value))}
            className="form-select"
          >
            <option value={0.8}>Small (under 1,500 sq ft)</option>
            <option value={1}>Medium (1,500 - 2,500 sq ft)</option>
            <option value={1.3}>Large (over 2,500 sq ft)</option>
            <option value={1.5}>Multi-Family / Commercial</option>
          </select>
        </div>

        <div className="services-grid-mini">
          {SERVICES.map(service => (
            <label 
              key={service.id} 
              className={`service-toggle ${selectedServices.includes(service.id) ? 'selected' : ''}`}
            >
              <input 
                type="checkbox" 
                checked={selectedServices.includes(service.id)}
                onChange={() => toggleService(service.id)}
              />
              <span>{service.label}</span>
            </label>
          ))}
        </div>

        <div className="estimate-result">
          <div className="estimate-amount">
            <span className="label">Estimated Range:</span>
            <span className="value">{calculateEstimate()}</span>
          </div>
          <p className="disclaimer">*This is a rough estimate. Final pricing may vary based on exact property conditions.</p>
          <a href="/contact" className="btn btn-primary w-full">Request Exact Quote</a>
        </div>
      </div>

      <style>{`
        .quote-estimator {
          background: var(--surface-1);
          border-radius: 16px;
          box-shadow: var(--shadow-xl);
          border: 1px solid var(--surface-2);
          overflow: hidden;
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
        }

        body.dark .quote-estimator {
          background: var(--surface-dark-1);
          border-color: var(--glass-border-dark);
        }

        .estimator-header {
          background: var(--primary);
          color: white;
          padding: 32px 24px;
          text-align: center;
        }

        .estimator-icon {
          color: var(--accent);
          margin-bottom: 12px;
        }

        .estimator-header h3 {
          font-size: 1.5rem;
          margin-bottom: 8px;
        }

        .estimator-header p {
          color: rgba(255,255,255,0.8);
          font-size: 0.95rem;
        }

        .estimator-body {
          padding: 32px 24px;
        }

        .form-select {
          width: 100%;
          padding: 12px 16px;
          border-radius: 8px;
          border: 1px solid var(--surface-2);
          background: var(--bg-light);
          color: var(--text-primary);
          font-family: inherit;
          font-size: 1rem;
          margin-bottom: 24px;
          outline: none;
          transition: border-color 0.2s;
        }

        .form-select:focus {
          border-color: var(--accent);
        }

        body.dark .form-select {
          background: var(--surface-dark-2);
          border-color: var(--glass-border-dark);
          color: var(--text-light);
        }

        .services-grid-mini {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 12px;
          margin-bottom: 32px;
        }

        .service-toggle {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          border-radius: 8px;
          border: 1px solid var(--surface-2);
          cursor: pointer;
          transition: all 0.2s;
          user-select: none;
        }
        
        body.dark .service-toggle {
            border-color: var(--glass-border-dark);
        }

        .service-toggle:hover {
          border-color: var(--accent);
          background: var(--accent-light);
        }
        
        body.dark .service-toggle:hover {
            background: rgba(0, 99, 166, 0.1);
        }

        .service-toggle.selected {
          background: var(--accent-light);
          border-color: var(--accent);
          color: var(--primary);
          font-weight: 600;
        }
        
        body.dark .service-toggle.selected {
            background: rgba(0, 99, 166, 0.15);
            color: var(--accent);
        }

        .service-toggle input {
          margin-right: 12px;
          accent-color: var(--accent);
          width: 18px;
          height: 18px;
        }

        .estimate-result {
          background: var(--bg-light);
          padding: 24px;
          border-radius: 12px;
          text-align: center;
        }

        body.dark .estimate-result {
          background: var(--surface-dark-2);
        }

        .estimate-amount {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
        }

        .estimate-amount .label {
          font-size: 1.1rem;
          color: var(--text-secondary);
        }
        
        body.dark .estimate-amount .label {
            color: var(--text-dark-secondary);
        }

        .estimate-amount .value {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--primary);
        }
        
        body.dark .estimate-amount .value {
            color: var(--text-light);
        }

        .disclaimer {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 24px;
        }

        .w-full {
          width: 100%;
        }
      `}</style>
    </div>
  );
}
