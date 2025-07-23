import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#052035] text-white py-6 mt-8" aria-label="Footer">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-2 px-4">
        <div className="mb-2" aria-hidden="true">
          <img src={logo} alt="Hayrat Ul Abror Logo" className="rounded-lg w-24" />
        </div>
        <div className="text-sm text-center opacity-80">
          &copy; {new Date().getFullYear()} HAYRAT UL ABROR. {t('footer.copyright')}
        </div>
        <div className="text-sm text-center opacity-80 mt-1">
          {t('footer.softhub')}
        </div>
      </div>
    </footer>
  );
};

export default Footer; 