import React from 'react';

interface TextSectionProps {
  title: string;
  children: React.ReactNode;
  bgColor?: 'light' | 'dark';
}

export const TextSection: React.FC<TextSectionProps> = ({ title, children, bgColor = 'light' }) => {
  const isDark = bgColor === 'dark';
  
  return (
    <section className={`py-16 px-5 md:py-20 md:px-12 ${isDark ? 'bg-stone-950 text-gray-300' : 'bg-paper text-stone-800'}`}>
      <div className="max-w-3xl mx-auto">
        <h3 className={`text-xl md:text-3xl font-serif mb-6 md:mb-8 pb-3 border-b border-gold-500/50 inline-block ${isDark ? 'text-white' : 'text-stone-900'}`}>
          {title}
        </h3>
        <div className="space-y-6 leading-8 md:leading-9 text-base md:text-lg font-serif text-justify break-words">
          {children}
        </div>
      </div>
    </section>
  );
};