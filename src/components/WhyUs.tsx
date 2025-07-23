import React from 'react';
import { useTranslation } from 'react-i18next';
import wIcon from '../assets/w.png';
import l1Icon from '../assets/l1.png';
import l2Icon from '../assets/l2.png';
import l3Icon from '../assets/l3.png';

const WhyUs: React.FC = () => {
  const { t } = useTranslation();
  const features = [
    { icon: wIcon, label: t('whyus.exp'), bg: 'bg-[#0a2342]', textColor: 'text-[#bf9e55]' },
    { icon: l1Icon, label: t('whyus.foreign'), bg: 'bg-[#bf9e55]', textColor: 'text-[#0a2342]' },
    { icon: l2Icon, label: t('whyus.local'), bg: 'bg-[#0a2342]', textColor: 'text-[#bf9e55]' },
    { icon: l3Icon, label: t('whyus.success'), bg: 'bg-[#bf9e55]', textColor: 'text-[#0a2342]' },
  ];
  return (
    <section className="bg-white py-12 md:py-20" id="whyus" aria-label={t('whyus.title')}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#052035] mb-8">{t('whyus.title')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
          {features.map((f) => (
            <div
              className={`relative rounded-[28px] p-8 flex items-center min-h-[120px] text-left font-semibold ${f.bg}`}
              key={f.label}
            >
              <span className={`relative z-10 text-base md:text-lg font-medium ${f.textColor} leading-snug`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {f.label}
              </span>
              <span className="absolute bottom-4 right-4 opacity-10 pointer-events-none select-none">
                <img 
                  src={f.icon} 
                  alt="icon-bg" 
                  className="w-20 h-20 object-contain" 
                  style={{
                    filter: f.bg === 'bg-[#0a2342]'
                      ? 'brightness(0) saturate(100%) invert(64%) sepia(56%) saturate(434%) hue-rotate(21deg) brightness(93%) contrast(87%)'
                      : 'none'
                  }}
                />
              </span>
            </div>
          ))}
        </div>
        <div className="bg-gray-100 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#052035] font-bold text-lg md:text-xl mb-2 md:mb-0">
            {t('whyus.goal')}
          </p>
          <a href="#contacts" className="bg-[#052035] text-white font-bold px-4 py-3 rounded-lg shadow hover:bg-[#1c3350] transition-colors">{t('whyus.contact')}</a>
        </div>
      </div>
    </section>
  );
};

export default WhyUs; 