import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#0a2342] text-white py-6 mt-8" aria-label="Footer">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-2 px-4">
        <div className="mb-2" aria-hidden="true">
          {/* Placeholder SVG logo */}
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <rect width="48" height="48" rx="8" fill="#fff"/>
            <text x="24" y="28" textAnchor="middle" fontSize="18" fill="#002147" fontWeight="bold">LOGO</text>
          </svg>
        </div>
        <div className="text-sm text-center opacity-80">
          &copy; {new Date().getFullYear()} HAYRAT UL ABROR. {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
};

export default Footer; 