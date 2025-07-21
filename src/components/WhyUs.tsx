import React from 'react';
import { useTranslation } from 'react-i18next';

const WhyUs: React.FC = () => {
  const { t } = useTranslation();
  const features = [
    { icon: '⏳', label: t('whyus.exp'), bg: 'bg-[#0a2342] text-white' },
    { icon: '💼', label: t('whyus.foreign'), bg: 'bg-[#f9b233] text-[#0a2342]' },
    { icon: '🏦', label: t('whyus.local'), bg: 'bg-[#0a2342] text-white' },
    { icon: '✅', label: t('whyus.success'), bg: 'bg-[#f9b233] text-[#0a2342]' },
  ];
  return (
    <section className="bg-white py-12 md:py-20" id="whyus" aria-label={t('whyus.title')}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a2342] mb-8">{t('whyus.title')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {features.map((f) => (
            <div
              className={`rounded-xl p-6 flex flex-col items-center text-center font-semibold shadow ${f.bg}`}
              key={f.label}
            >
              <span className="text-3xl mb-2">{f.icon}</span>
              <span className="text-base md:text-lg">{f.label}</span>
            </div>
          ))}
        </div>
        <div className="bg-gray-100 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#0a2342] font-bold text-lg md:text-xl mb-2 md:mb-0">
            {t('whyus.goal')}
          </p>
          <a href="#contacts" className="bg-[#0a2342] text-white font-bold px-6 py-3 rounded-lg shadow hover:bg-[#1c3350] transition-colors">{t('whyus.contact')}</a>
        </div>
      </div>
    </section>
  );
};

export default WhyUs; 