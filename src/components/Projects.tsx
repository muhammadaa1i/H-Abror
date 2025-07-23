import React from 'react';
import { useTranslation } from 'react-i18next';
import m1 from '../assets/m1.jpg';
import m2 from '../assets/m2.jpg';
import m3 from '../assets/m3.jpg';
import m4 from '../assets/m4.jpg';
import m5 from '../assets/m5.jpg';
import f1 from '../assets/f1.png';
import f2 from '../assets/f2.png';
import f3 from '../assets/f3.png';
import f4 from '../assets/f4.png';
import f5 from '../assets/f5.png';

const Projects: React.FC = () => {
  const { t, i18n } = useTranslation()
  const projects = [
<<<<<<< HEAD
    { img: m1, icon: f1, title: t('projects.textile'), desc: t('projects.textile_desc'), location: 'Сурхандарьинская обл.', region: '$42.5 млн', location_uz: 'Surxondaryo vil.', region_uz: '$42.5 mln' },
    { img: m2, icon: f2, title: t('projects.concrete'), desc: t('projects.concrete_desc'), location: 'Сырдарьинская обл.', region: '$3.5 млн', location_uz: 'Sirdaryo vil.', region_uz: '$3.5 mln' },
    { img: m3, icon: f3, title: t('projects.crushed'), desc: t('projects.crushed_desc'), location: 'Ташкентская обл.', region: '$2.2 млн', location_uz: 'Toshkent vil.', region_uz: '$2.2 mln' },
    { img: m4, icon: f4, title: t('projects.cable'), desc: t('projects.cable_desc'), location: 'Ташкентская обл.', region: '$11.7 млн', location_uz: 'Toshkent vil.', region_uz: '$11.7 mln' },
    { img: m5, icon: f5, title: t('projects.agro'), desc: t('projects.agro_desc'), location: 'Жизакская обл.', region: '$38.4 млн', location_uz: 'Jizzax vil.', region_uz: '$38.4 mln' },
=======
    { img: m1, icon: f1, title: t('projects.textile'), desc: t('projects.textile_desc'), location: 'Сурхандарьинская обл.', region: 'S = 24,1 га' },
    { img: m2, icon: f2, title: t('projects.concrete'), desc: t('projects.concrete_desc'), location: 'Ташкентская обл.', region: 'S = 8,35 га' },
    { img: m3, icon: f3, title: t('projects.crushed'), desc: t('projects.crushed_desc'), location: 'Ташкентская обл.', region: 'S = 12 га' },
    { img: m4, icon: f4, title: t('projects.cable'), desc: t('projects.cable_desc'), location: 'Ташкентская обл.', region: 'S = 10 га' },
    { img: m5, icon: f5, title: t('projects.agro'), desc: t('projects.agro_desc'), location: 'Вахшская обл.', region: 'S = 15,1 га' },
>>>>>>> 739a2fb15ef7a1bf3f9df3f53266ee6ece49e0ed
  ]

  return (
    <section className="bg-white py-12 md:py-20" id="projects" aria-label={t('projects.title')}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#052035] mb-8">{t('projects.title')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {projects.map((p) => (
            <div
              className="bg-white rounded-[32px] shadow-lg flex flex-col items-stretch hover:shadow-xl transition-shadow w-full lg:max-w-[340px] mx-auto sm:max-w-none sm:mx-0"
              key={p.title}
            >
              <img src={p.img} alt={p.title} className="w-full h-36 md:h-40 object-cover rounded-t-[32px]" />
              <div className="flex flex-row items-center gap-4 px-4 py-6 w-full text-wrap flex-1">
                <span className="flex items-center justify-center w-16 h-16 rounded-xl bg-[#f7f6f3] flex-shrink-0">
                  <img src={p.icon} alt="icon" className="w-12 h-12 object-contain" 
                    style={{ 
                      filter: 'brightness(0) saturate(100%) invert(77%) sepia(24%) saturate(1162%) hue-rotate(2deg) brightness(92%) contrast(92%)'
                    }} 
                  />
                </span>
                <div className="flex flex-col items-start min-w-0 w-full flex-1">
<<<<<<< HEAD
                  <h3 className="text-[#052035] font-extrabold text-[15px] text-left leading-tight break-words whitespace-normal w-full" style={{ fontFamily: 'Montserrat, sans-serif' }}>{p.title}</h3>
                  <span className="text-[#b0b7c3] text-[12px] text-left leading-tight font-medium break-words whitespace-normal mt-1 w-full" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {i18n.language === 'uz' ? p.location_uz : p.location} — {i18n.language === 'uz' ? p.region_uz : p.region}
                  </span>
=======
                  <h3 className="text-base font-extrabold text-[#052035] mb-1 text-left leading-tight break-words whitespace-normal" style={{ fontFamily: 'Montserrat, sans-serif' }}>{p.title}</h3>
                  <span className="text-[#b0b7c3] text-sm text-left leading-tight font-medium break-words whitespace-normal" style={{ fontFamily: 'Montserrat, sans-serif' }}>{p.location} — {p.region}</span>
>>>>>>> 739a2fb15ef7a1bf3f9df3f53266ee6ece49e0ed
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects; 