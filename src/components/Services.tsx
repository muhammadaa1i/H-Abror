import React from 'react';
import { useTranslation } from 'react-i18next';

const Services: React.FC = () => {
  const { t } = useTranslation();
  const services = [
    {
      icon: '📄',
      title: t('services.doc'),
      desc: t('services.doc_desc'),
    },
    {
      icon: '📐',
      title: t('services.design'),
      desc: t('services.design_desc'),
    },
    {
      icon: '💰',
      title: t('services.finance'),
      desc: t('services.finance_desc'),
    },
    {
      icon: '🔍',
      title: t('services.expertise'),
      desc: t('services.expertise_desc'),
    },
    {
      icon: '🚚',
      title: t('services.import'),
      desc: t('services.import_desc'),
    },
    {
      icon: '👥',
      title: t('services.personnel'),
      desc: t('services.personnel_desc'),
    },
  ];
  return (
    <section className="bg-white py-12 md:py-20" id="services" aria-label={t('services.title')}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a2342] mb-8">{t('services.title')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              className="bg-[#0a2342] rounded-xl p-6 flex flex-col items-start shadow hover:scale-[1.03] transition-transform min-h-[180px]"
              key={s.title}
            >
              <span className="text-3xl text-[#f9b233] mb-2">{s.icon}</span>
              <h3 className="text-lg font-bold text-white mb-1">{s.title}</h3>
              <p className="text-white/80 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 