import { useEffect, useState } from 'react';

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(pct);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        id="scroll-progress-bar"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />
      <style>{`
        #scroll-progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          height: 3px;
          background: linear-gradient(90deg, #F97316, #FB923C, #0F172A);
          z-index: 9999;
          transition: width 0.05s linear;
          border-radius: 0 2px 2px 0;
          box-shadow: 0 0 8px rgba(249, 115, 22, 0.6);
        }
      `}</style>
    </>
  );
}
