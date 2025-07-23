import React from 'react';
import { useTranslation } from 'react-i18next';

const Contacts: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-white py-12 md:py-20" id="contacts" aria-label={t('contacts.title')}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#052035]">{t('contacts.title')}</h2>
        <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
          <div className="flex-1 flex flex-col justify-center mb-8 lg:mb-0">
            <address className="not-italic text-[#bf9e55] text-base md:text-lg lg:text-xl xl:text-2xl font-semibold mb-12 leading-relaxed">
              {t('contacts.address')}
            </address>
            <div className="text-[#052035] space-y-2">
              <a href={`mailto:${t('contacts.email')}`} className="block underline hover:text-[#bf9e55] transition-colors text-base md:text-lg xl:text-lg 2xl:text-xl">{t('contacts.email')}</a>
              <a href={`tel:${t('contacts.phone').replace(/\s+/g, '')}`} className="block font-bold text-lg md:text-xl xl:text-2xl 2xl:text-3xl hover:text-[#bf9e55] transition-colors">{t('contacts.phone')}</a>
            </div>
          </div>
          <div className="flex-[2] w-full flex justify-center items-center">
            <div className="w-full max-w-2xl aspect-[16/9] rounded-xl overflow-hidden shadow-inner border-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3003.9995539124507!2d69.66461947604799!3d41.15636107133007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDA5JzIyLjkiTiA2OcKwNDAnMDEuOSJF!5e0!3m2!1sru!2s!4v1753251442697!5m2!1sru!2s"
                title="Google Map Location"
                className="w-full h-full min-h-[200px] rounded-xl border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts; 