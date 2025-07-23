import React from 'react';
import { useTranslation } from 'react-i18next';
import g1 from '../assets/g1.png';
import g2 from '../assets/g2.png';
import g3 from '../assets/g3.png';
import g4 from '../assets/g4.png';
import g5 from '../assets/g5.png';
import g6 from '../assets/g6.png';

const Services: React.FC = () => {
  const { t } = useTranslation();
  const services = [
    {
      icon: g1,
      title: t('services.doc'),
      desc: t('services.doc_desc'),
    },
    {
      icon: g2,
      title: t('services.design'),
      desc: t('services.design_desc'),
    },
    {
      icon: g3,
      title: t('services.finance'),
      desc: t('services.finance_desc'),
    },
    {
      icon: g4,
      title: t('services.expertise'),
      desc: t('services.expertise_desc'),
    },
    {
      icon: g5,
      title: t('services.import'),
      desc: t('services.import_desc'),
    },
    {
      icon: g6,
      title: t('services.personnel'),
      desc: t('services.personnel_desc'),
    },
  ];
  return (
    <section className="bg-white py-12 md:py-20" id="services" aria-label={t('services.title')}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#052035] mb-8">{t('services.title')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              className="bg-[#0a2342] rounded-2xl p-8 flex flex-col items-center shadow-lg min-h-[220px]"
              key={s.title}
            >
              <span className="flex items-center justify-center w-16 h-16 mb-4">
                <img 
                  src={s.icon} 
                  alt="icon" 
                  className="w-10 h-10 object-contain" 
                  loading="lazy"
                  decoding="async"
                  style={{ filter: 'invert(73%) sepia(24%) saturate(749%) hue-rotate(2deg) brightness(92%) contrast(92%)', color: '#bf9e55' }} 
                />
              </span>
              <h3 className="text-xl font-bold text-white mb-2 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>{s.title}</h3>
              <p className="text-[#b0b7c3] text-base text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 