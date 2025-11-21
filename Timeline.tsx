import React from 'react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  location: string;
}

const events: TimelineEvent[] = [
  {
    year: '1273',
    title: 'ハプスブルク家の台頭',
    description: 'スイスの小領主であったルドルフ1世がドイツ王に選出され、表舞台へ。',
    location: 'Swiss/Vienna'
  },
  {
    year: '1452',
    title: '神聖ローマ皇帝の世襲化',
    description: 'フリードリヒ3世が戴冠。「AEIOU」を掲げ、一族の支配を盤石にする。',
    location: 'Vienna'
  },
  {
    year: '1583',
    title: '魔都プラハへの遷都',
    description: '奇人皇帝ルドルフ2世がウィーンを嫌い、プラハへ宮廷を移す。錬金術の時代。',
    location: 'Prague'
  },
  {
    year: '1740',
    title: '女帝マリア・テレジア即位',
    description: 'ハプスブルク家唯一の女性君主。シェーンブルン宮殿を愛し、16人の母となる。',
    location: 'Vienna'
  },
  {
    year: '1857',
    title: 'リンク通りの建設',
    description: 'フランツ・ヨーゼフ1世が城壁撤去を命令。近代都市ウィーンが誕生。',
    location: 'Vienna'
  },
  {
    year: '1914',
    title: 'サラエボ事件',
    description: '皇位継承者フランツ・フェルディナント暗殺。第一次世界大戦の引き金となる。',
    location: 'Sarajevo'
  },
  {
    year: '1918',
    title: '帝国の終焉',
    description: '第一次世界大戦敗北。シェーンブルン宮殿「青の中国のサロン」で皇帝が退位。',
    location: 'Vienna'
  }
];

export const Timeline: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-stone-950 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-display text-3xl md:text-4xl text-gold-500 tracking-[0.2em] mb-4">
            CHRONOLOGY
          </h2>
          <p className="font-serif text-gray-400 tracking-widest text-sm">
            ハプスブルク興亡の650年
          </p>
        </div>

        <div className="relative">
          {/* Center Line (Desktop) / Left Line (Mobile) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-800/50 to-transparent"></div>

          <div className="space-y-12 md:space-y-24">
            {events.map((event, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row items-start md:items-center w-full group ${
                  index % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}
              >
                {/* Left Side Content (Desktop) */}
                <div className="hidden md:block w-1/2 pr-16 text-right">
                  {index % 2 === 0 ? (
                    <TimelineContent event={event} align="right" />
                  ) : (
                    <TimelineYear year={event.year} align="right" />
                  )}
                </div>

                {/* Center Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-[5px] md:-translate-x-1/2 w-3 h-3 bg-stone-950 border border-gold-500 rounded-full z-10 mt-2 md:mt-0 shadow-[0_0_10px_rgba(197,160,89,0.5)] group-hover:bg-gold-500 transition-colors duration-300"></div>

                {/* Right Side Content (Desktop) */}
                <div className="hidden md:block w-1/2 pl-16 text-left">
                  {index % 2 !== 0 ? (
                    <TimelineContent event={event} align="left" />
                  ) : (
                    <TimelineYear year={event.year} align="left" />
                  )}
                </div>

                {/* Mobile Content (Always Right of Line) */}
                <div className="md:hidden pl-12 w-full">
                  <span className="font-display text-2xl text-gold-500 font-bold block mb-1">
                    {event.year}
                  </span>
                  <TimelineContent event={event} align="left" isMobile />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineContent: React.FC<{ event: TimelineEvent; align: 'left' | 'right'; isMobile?: boolean }> = ({ event, align, isMobile }) => (
  <div className={`transition-opacity duration-500 hover:opacity-100 ${!isMobile && 'opacity-80'}`}>
    <span className={`inline-block text-[10px] tracking-[0.2em] uppercase text-gold-600 border border-gold-900/30 px-2 py-1 rounded mb-2 bg-stone-900/50`}>
      {event.location}
    </span>
    <h3 className="text-xl font-serif font-bold text-gray-200 mb-3 group-hover:text-gold-400 transition-colors">
      {event.title}
    </h3>
    <p className="text-gray-400 text-sm leading-7 font-serif">
      {event.description}
    </p>
  </div>
);

const TimelineYear: React.FC<{ year: string; align: 'left' | 'right' }> = ({ year, align }) => (
  <div className={`font-display text-7xl font-bold text-stone-800 select-none group-hover:text-gold-900/20 transition-colors duration-500 ${align === 'right' ? 'mr-[-20px]' : 'ml-[-20px]'}`}>
    {year}
  </div>
);
