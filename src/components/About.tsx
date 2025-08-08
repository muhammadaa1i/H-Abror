import React from 'react';
import { useTranslation } from 'react-i18next';
import r2Image from '../assets/r2.avif';
import wIcon from '../assets/w.png';
import w2Icon from '../assets/w2.png';
import w3Icon from '../assets/w3.png';

const About: React.FC = () => {
  const { t } = useTranslation();
  const features = [
    { icon: wIcon, label: t('about.exp') },
    { icon: w2Icon, label: t('about.clients') },
    { icon: w3Icon, label: t('about.full') },
  ];
  return (
    <section className="bg-white py-12 md:py-20 font-['Montserrat',sans-serif]" id="about" aria-label={t('about.title')}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap- px-4">
        <div className="flex flex-col w-full justify-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a2342] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>{t('about.title')}</h2>
          <p className="text-[#bf9e55] text-xl md:text-2xl mb-8 max-w-xl leading-relaxed font-normal" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {t('about.desc')}
          </p>
          <ul className="cards grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-2 min-[1250px]:grid-cols-3 gap-6 mt-8 justify-center items-start max-w-3xl">
            {features.map((f) => (
              <li key={f.label} className="flex flex-row items-center w-full max-w-[250px] mx-auto gap-2 h-20 min-h-[80px]">
                <span className="flex items-center justify-center w-16 h-16 rounded-xl bg-[#f7f6f3] flex-shrink-0">
                  <img src={f.icon} alt="icon" className="w-10 h-10 object-contain" style={{ filter: 'invert(73%) sepia(24%) saturate(749%) hue-rotate(2deg) brightness(92%) contrast(92%)', color: '#bf9e55' }} />
                </span>
                <span className="text-[#0a2342] font-normal text-lg text-left flex-1 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>{f.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex w-full justify-center items-center mt-16 lg:mt-32 lg:mb-48">
          <div className="flex flex-col items-center">
            <img src={r2Image} alt="About" className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-[400px] lg:h-[260px] h-48 md:h-64 object-cover rounded-xl shadow-inner mb-4" />
            {/* Inspirational Slogan */}
            <div className="text-center text-[#0a2342] text-sm font-medium italic leading-relaxed whitespace-pre-line max-w-md mt-2">
              {t('about.slogan')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 