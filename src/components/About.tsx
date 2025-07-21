import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();
  const features = [
    { icon: '🌍', label: t('about.exp') },
    { icon: '🌐', label: t('about.clients') },
    { icon: '⚙️', label: t('about.full') },
  ];
  return (
    <section className="bg-white py-12 md:py-20" id="about" aria-label={t('about.title')}>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 px-4">
        <div className="flex-1 w-full">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a2342] mb-4">{t('about.title')}</h2>
          <p className="text-[#b0b7c3] text-lg mb-8 max-w-xl">
            {t('about.desc')}
          </p>
          <ul className="flex flex-col sm:flex-row flex-wrap gap-6 md:gap-12">
            {features.map((f) => (
              <li key={f.label} className="flex items-center gap-3 min-w-[180px]">
                <span className="text-3xl text-[#f9b233]">{f.icon}</span>
                <span className="text-[#0a2342] font-semibold">{f.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 w-full flex justify-center items-center mt-8 lg:mt-0">
          {/* Placeholder for about image */}
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-80 lg:h-80 h-48 md:h-64 bg-gray-200 rounded-xl flex items-center justify-center text-2xl text-gray-400 shadow-inner">
            IMG
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 