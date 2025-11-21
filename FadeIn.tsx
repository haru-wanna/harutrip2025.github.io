import React, { useRef, useState, useEffect } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number; // 遅延時間 (ms)
  threshold?: number; // 画面のどれくらいに入ったら発火するか (0-1)
  className?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  threshold = 0.2,
  className = "" 
}) => {
  const domRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // 一度表示されたら監視を解除（パフォーマンスのため）
          if (domRef.current) observer.unobserve(domRef.current);
        }
      });
    }, { threshold });

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={domRef}
      className={`${className} transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};