import React from 'react';

interface ParallaxSectionProps {
  imageUrl: string;
  title: string;
  subtitle?: string;
  height?: string;
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({ 
  imageUrl, 
  title, 
  subtitle,
  height = "h-screen" // Default to full screen
}) => {
  return (
    <div 
      className={`relative ${height} w-full overflow-hidden flex items-center justify-center text-center bg-fixed bg-center bg-no-repeat bg-cover`}
      style={{ backgroundImage: `url('${imageUrl}')` }}
    >
      {/* Dark Overlay - 少し濃くして文字の視認性を向上 */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 px-4 max-w-4xl animate-fade-in-up w-full">
        <h2 className="font-display text-4xl md:text-7xl text-white tracking-[0.15em] md:tracking-[0.2em] mb-3 md:mb-4 drop-shadow-xl break-words">
          {title}
        </h2>
        {subtitle && (
          <p className="font-serif text-base md:text-2xl text-gray-200 font-medium tracking-wide leading-relaxed drop-shadow-md px-2">
            {subtitle}
          </p>
        )}
        <div className="w-16 md:w-24 h-px md:h-1 bg-gold-500 mx-auto mt-6 md:mt-8" />
      </div>
    </div>
  );
};