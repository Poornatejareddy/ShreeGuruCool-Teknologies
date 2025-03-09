import { useEffect, useRef, ReactNode } from 'react';

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'left' | 'right';
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children, className = '', direction = 'up' }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const classNames = {
              up: 'fade-up-active',
              left: 'fade-left-active',
              right: 'fade-right-active'
            };

            entry.target.classList.add(classNames[direction]);
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [direction]);

  return (
    <div 
      ref={ref} 
      className={`${className} ${direction === 'up' ? 'fade-up' : 
        direction === 'left' ? 'fade-left' : 'fade-right'}`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
