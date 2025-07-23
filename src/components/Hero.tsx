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
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.3), rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll'
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {t('header.consulting')}
          </h1>
          <p className="text-lg md:text-xl text-white mb-4 font-normal leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {t('header.subtitle')}
          </p>
          <p className="text-base md:text-lg text-[#bf9e55] font-medium mb-8 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {t('header.desc')}
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
              className="bg-transparent text-white font-semibold px-8 py-4 rounded-none border-2 border-white hover:bg-white hover:text-[#0a2342] transition-colors uppercase text-sm tracking-wide"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {t('header.learn_more')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};export default Hero; 