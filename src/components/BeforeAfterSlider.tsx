import { useState, useRef, useEffect } from 'react';
import type { MouseEvent, TouchEvent } from 'react';
import defaultBeforeImg from '../assets/images/living-room-before.jpg';
import defaultAfterImg from '../assets/images/living-room-after.jpg';
import { ArrowLeftRight, SlidersHorizontal } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage?: string;
  title?: string;
  subtitle?: string;
}

export default function BeforeAfterSlider({
  beforeImage = defaultBeforeImg,
  afterImage = defaultAfterImg,
  title = 'See Our Real Richmond Transformations',
  subtitle = 'Drag the slider across to see before & after makeovers delivered by our crew.',
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(960);

  useEffect(() => {
    if (!containerRef.current) return;
    setContainerWidth(containerRef.current.clientWidth);

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect.width > 0) {
          setContainerWidth(entry.contentRect.width);
        }
      }
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMove = (clientX: number) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    
    setSliderPosition(Math.round(percentage));
  };

  const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX);
  const handleTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);
  const handleDragEnd = () => setIsDragging(false);

  return (
    <div className="before-after-wrapper">
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
          {title}
        </h3>
        <p style={{ fontSize: '0.95rem', color: '#64748B', maxWidth: '640px', margin: '0 auto' }}>
          {subtitle}
        </p>
      </div>

      {/* Main Split Image Container */}
      <div 
        className="before-after-container"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseUp={handleDragEnd}
        onTouchEnd={handleDragEnd}
        onMouseLeave={handleDragEnd}
      >
        <div className="image-container after-image">
          <img
            src={afterImage}
            alt="After Work"
            style={{ width: `${containerWidth}px`, height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <div className="label label-after">After Turnkey Finish</div>
        </div>

        <div 
          className="image-container before-image"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImage}
            alt="Before Work"
            style={{ width: `${containerWidth}px`, height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <div className="label label-before">Before Cleanup &amp; Prep</div>
        </div>

        <div 
          className="slider-handle"
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
        >
          <div className="slider-button">
            <ArrowLeftRight size={18} color="#0F172A" />
          </div>
        </div>
      </div>

      {/* Physical Range Slider Control Underneath (Stitch Accessibility Specification) */}
      <div className="slider-range-control">
        <div className="slider-range-hint">
          <SlidersHorizontal size={17} color="#F97316" />
          <span>Drag slider or scrub bar to inspect both rooms</span>
        </div>

        <div className="slider-range-bar">
          <span className="slider-range-badge">BEFORE</span>
          <input
            type="range"
            min={0}
            max={100}
            value={sliderPosition}
            onChange={(e) => setSliderPosition(Number(e.target.value))}
            className="slider-range-input"
            aria-label="Before and after transformation slider"
          />
          <span className="slider-range-badge">AFTER</span>
        </div>
      </div>

      <style>{`
        .before-after-wrapper {
          width: 100%;
          max-width: 960px;
          margin: 0 auto;
        }

        .before-after-container {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          border-radius: 12px;
          border: 1px solid #E2E8F0;
          box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.08);
          cursor: col-resize;
          background: #F1F5F9;
          user-select: none;
        }

        .image-container {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          overflow: hidden;
        }

        .after-image {
          width: 100%;
          z-index: 1;
        }

        .before-image {
          z-index: 2;
        }

        .label {
          position: absolute;
          top: 16px;
          padding: 6px 14px;
          color: #FFFFFF;
          border-radius: 8px;
          font-weight: 700;
          font-size: 0.8125rem;
          backdrop-filter: blur(6px);
          z-index: 3;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .label-before {
          left: 16px;
          background: rgba(15, 23, 42, 0.85);
        }

        .label-after {
          right: 16px;
          background: rgba(249, 115, 22, 0.92);
          box-shadow: 0 2px 8px rgba(249, 115, 22, 0.4);
        }

        .slider-handle {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 3px;
          background-color: #F97316;
          z-index: 10;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 10px rgba(249, 115, 22, 0.5);
        }

        .slider-button {
          width: 42px;
          height: 42px;
          background: #FFFFFF;
          border: 2px solid #F97316;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.2);
          transition: transform 0.1s;
          cursor: ew-resize;
        }

        .slider-handle:active .slider-button {
          transform: scale(0.92);
        }

        /* ── Range Control Underneath ── */
        .slider-range-control {
          margin-top: 18px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 0 4px;
        }

        @media (min-width: 640px) {
          .slider-range-control {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }

        .slider-range-hint {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.875rem;
          font-weight: 600;
          color: #64748B;
        }

        .slider-range-bar {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          max-width: 380px;
        }

        .slider-range-badge {
          font-size: 0.75rem;
          font-weight: 800;
          color: #64748B;
          letter-spacing: 0.05em;
        }

        .slider-range-input {
          flex: 1;
          height: 6px;
          border-radius: 8px;
          background: #E2E8F0;
          outline: none;
          cursor: pointer;
          accent-color: #F97316;
        }

        body.dark .before-after-container {
          border-color: rgba(255, 255, 255, 0.12);
        }

        body.dark .slider-range-input {
          background: #334155;
        }
      `}</style>
    </div>
  );
}
