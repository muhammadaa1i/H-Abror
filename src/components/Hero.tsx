import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section
      className="relative flex items-center justify-center min-h-[60vh] md:min-h-[70vh] bg-gradient-to-b from-[#0a2342] to-[#3a506b] overflow-hidden"
      id="home"
      aria-label={t('header.consulting')}
    >
      {/* Background image placeholder */}
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80)' }} aria-hidden="true" />
      <div className="relative z-10 max-w-3xl mx-auto text-center px-4 py-16">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
          {t('header.consulting')}
        </h1>
        <p className="text-lg md:text-2xl text-white/90 mb-2 font-medium">
          {t('header.subtitle')}
        </p>
        <p className="text-base md:text-lg text-[#f9b233] font-semibold mb-6">
          {t('header.desc')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contacts"
            className="bg-[#f9b233] text-[#0a2342] font-bold px-6 py-3 rounded-lg shadow hover:bg-[#ffd580] transition-colors"
          >
            {t('header.consult')}
          </a>
          <a
            href="#about"
            className="bg-white/90 text-[#0a2342] font-bold px-6 py-3 rounded-lg shadow hover:bg-white transition-colors border border-[#0a2342]"
          >
            {t('header.learn_more')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 