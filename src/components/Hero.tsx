import React from 'react';
import { useTranslation } from 'react-i18next';
import bgImage from '../assets/observation-urban-building-business-steel.avif';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section
      className="relative flex items-center justify-start min-h-[60vh] md:min-h-[70vh] bg-[#052035] overflow-hidden"
      id="home"
      aria-label={t('header.consulting')}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/30 to-white/30"></div>
      <div className="parent z-10 max-w-4xl px-8 py-16 justify-start">
        <div className="content2 w-full text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight break-words" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <span className="block">{t('header.consulting_main')}</span>
            <span className="block">{t('header.consulting_sub')}</span>
          </h1>
          <p className="text-lg md:text-xl text-white mb-3 font-normal leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {t('header.subtitle')}
          </p>
          <p className="text-base md:text-lg text-[#ff8c00] font-medium mb-8 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {t('header.desc_short')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contacts"
              className="bg-[#0a2342] text-white font-semibold px-8 py-4 rounded-none shadow-lg hover:bg-[#1a3452] transition-colors uppercase text-sm tracking-wide"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {t('header.consult')}
            </a>
            <a
              href="#about"
              className="bg-white text-[#0a2342] font-semibold px-8 py-4 rounded-none border-2 border-white hover:bg-gray-100 transition-colors uppercase text-sm tracking-wide"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {t('header.learn_more')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 