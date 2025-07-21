import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const navLinks = [
  { label: 'nav.home', href: '#home' },
  { label: 'nav.about', href: '#about' },
  { label: 'nav.services', href: '#services' },
  { label: 'nav.directions', href: '#projects' },
  { label: 'nav.projects', href: '#projects' },
  { label: 'nav.faq', href: '#faq' },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [menuOpen]);

  return (
    <>
      {/* Overlay for mobile menu */}
      <div 
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
          menuOpen ? 'opacity-40' : 'opacity-0 pointer-events-none'
        }`} 
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
      <header className={`bg-[#0a2342] text-white sticky top-0 z-50 shadow`}>
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 relative">
          <a href="#home" className="flex items-center gap-2" aria-label="Home">
            {/* Placeholder SVG logo */}
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
              <rect width="48" height="48" rx="8" fill="#fff"/>
              <text x="24" y="28" textAnchor="middle" fontSize="18" fill="#002147" fontWeight="bold">LOGO</text>
            </svg>
          </a>
          <ul className={`flex-col md:flex-row md:flex gap-6 font-medium absolute md:static top-full left-0 w-full md:w-auto bg-[#0a2342] md:bg-transparent transition-all duration-200 ${menuOpen ? 'flex z-50 shadow-2xl' : 'hidden'} md:items-center md:justify-center md:ml-8`}
              >
            {navLinks.map((link, idx) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`block px-4 py-2 md:p-0 hover:text-[#f9b233] transition-colors ${idx === 0 ? 'font-bold text-[#f9b233]' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {t(link.label)}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 ml-4">
            <select
              value={i18n.language}
              onChange={handleLangChange}
              className="bg-[#0a2342] border border-[#f9b233] text-white rounded px-2 py-1 focus:outline-none"
              aria-label="Select language"
            >
              <option value="ru">RU</option>
              <option value="uz">UZ</option>
            </select>
            <button
              className="md:hidden ml-2 p-2 rounded focus:outline-none order-last bg-transparent"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span aria-hidden="true" className="text-2xl transition-all duration-200">
                {menuOpen ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" /></svg>
                )}
              </span>
            </button>
            <a
              href="tel:+998998035511"
              className="hidden md:inline-block bg-[#f9b233] text-[#0a2342] font-bold px-5 py-2 rounded-lg hover:bg-[#ffd580] transition-colors"
            >
              {t('header.phone')}
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header; 