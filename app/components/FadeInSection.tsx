import { useEffect, useRef, ReactNode } from "react";

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
}

const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  className = "",
  direction = "up",
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const classNames = {
              up: "fade-up-active",
              left: "fade-left-active",
              right: "fade-right-active",
            };

            entry.target.classList.add(classNames[direction]);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2, // Adjusted for mobile
        rootMargin: "0px 0px -20px 0px", // Helps trigger animation earlier
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [direction]);

  return (
    <div
      ref={ref}
      className={`${className} ${direction === "up" ? "fade-up" : 
        direction === "left" ? "fade-left" : "fade-right"}`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
