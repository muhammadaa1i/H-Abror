import React from 'react';
import { useTranslation } from 'react-i18next';

const Contacts: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-white py-12 md:py-20" id="contacts" aria-label={t('contacts.title')}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a2342]">{t('contacts.title')}</h2>
        <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
          <div className="flex-1 flex flex-col justify-center mb-8 lg:mb-0">
            <address className="not-italic text-[#f9b233] text-base md:text-lg lg:text-xl xl:text-2xl font-semibold mb-12 leading-relaxed">
              {t('contacts.address')}
            </address>
            <div className="text-[#0a2342] space-y-2">
              <a href={`mailto:${t('contacts.email')}`} className="block underline hover:text-[#f9b233] transition-colors text-base md:text-lg xl:text-lg 2xl:text-xl">{t('contacts.email')}</a>
              <a href={`tel:${t('contacts.phone').replace(/\s+/g, '')}`} className="block font-bold text-lg md:text-xl xl:text-2xl 2xl:text-3xl hover:text-[#f9b233] transition-colors">{t('contacts.phone')}</a>
            </div>
          </div>
          <div className="flex-[2] w-full flex justify-center items-center">
            {/* Responsive Yandex Map with 16:9 aspect ratio */}
            <div className="w-full max-w-2xl aspect-[16/9] rounded-xl overflow-hidden shadow-inner border-0">
              <iframe
                src="https://yandex.uz/map-widget/v1/-/CHHcrX~~"
                title="Yandex Map Location"
                className="w-full h-full min-h-[200px] rounded-xl border-0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts; 