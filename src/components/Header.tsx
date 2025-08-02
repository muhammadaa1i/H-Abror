import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';

const navLinks = [
  { label: 'nav.home', href: '#home' },
  { label: 'nav.about', href: '#about' },
  { label: 'nav.services', href: '#services' },
  { label: 'nav.directions', href: '#projects' },
  { label: 'nav.projects', href: '#projects' },
  { label: 'nav.faq', href: '#faq' },
  { label: 'nav.contacts', href: '#contacts' },
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
      <div 
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
          menuOpen ? 'opacity-40' : 'opacity-0 pointer-events-none'
        }`} 
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
      <header className={`bg-[#052035] text-white sticky top-0 z-50 shadow-xl`}>
        <nav className="max-w-7xl mx-auto flex items-center justify-between relative px-4">
          <a href="#home" className="flex items-center gap-2" aria-label="Home">
            <img src={logo} alt="Logo" className="w-32 h-20 object-contain" />
          </a>
          <ul className={`flex-col max-[929px]:absolute max-[929px]:top-full max-[929px]:left-0 max-[929px]:w-full max-[929px]:bg-[#052035] max-[929px]:shadow-2xl min-[930px]:flex min-[930px]:flex-row min-[930px]:static min-[930px]:w-auto min-[930px]:bg-transparent gap-6 font-medium transition-all duration-200 ${menuOpen ? 'flex z-50' : 'max-[929px]:hidden'} min-[930px]:items-center min-[930px]:justify-center min-[930px]:ml-8`}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={'block px-4 py-3 min-[930px]:p-0 hover:text-[#bf9e55] transition-colors'}
                  onClick={() => setMenuOpen(false)}
                >
                  {t(link.label)}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 ml-4">
            <a
              href="tel:+998998035511"
              className="bg-[#bf9e55] text-white font-bold px-3 py-2 max-[929px]:px-4 max-[929px]:py-2 min-[930px]:px-5 min-[930px]:py-2 rounded-lg hover:bg-[#bf9e55]/80 transition-colors text-sm max-[929px]:text-xs min-[930px]:text-base"
            >
              <span className="min-[440px]:inline max-[439px]:hidden">{t('header.phone')}</span>
              <i className="phone fa-solid fa-phone max-[439px]:inline min-[440px]:hidden"></i>
            </a>
            <select
              value={i18n.language}
              onChange={handleLangChange}
              className="bg-[#052035] border border-[#bf9e55] text-white rounded px-2 py-1 focus:outline-none"
              aria-label="Select language"
            >
              <option value="ru">RU</option>
              <option value="uz">UZ</option>
              <option value="en">EN</option>
            </select>
            <button
              className="max-[929px]:block min-[930px]:hidden ml-2 p-2 rounded focus:outline-none order-last bg-transparent"
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
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header; 