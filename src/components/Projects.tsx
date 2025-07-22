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
  const { t } = useTranslation()
  const projects = [
    { img: m1, icon: f1, title: t('projects.textile'), desc: t('projects.textile_desc') },
    { img: m2, icon: f2, title: t('projects.concrete'), desc: t('projects.concrete_desc') },
    { img: m3, icon: f3, title: t('projects.crushed'), desc: t('projects.crushed_desc') },
    { img: m4, icon: f4, title: t('projects.cable'), desc: t('projects.cable_desc') },
    { img: m5, icon: f5, title: t('projects.agro'), desc: t('projects.agro_desc') },
  ]

  return (
    <section className="bg-white py-12 md:py-20" id="projects" aria-label={t('projects.title')}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#052035] mb-8">{t('projects.title')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 sm:gap-8">
          {projects.map((p) => (
            <div
              className="bg-white rounded-2xl shadow-lg flex flex-col items-stretch hover:shadow-xl transition-shadow w-full lg:max-w-[300px] mx-auto sm:max-w-none sm:mx-0"
              key={p.title}
            >
              <img src={p.img} alt={p.title} className="w-full h-32 md:h-36 object-cover rounded-t-2xl" />
              <div className="flex flex-row items-center gap-3 px-5 py-4 w-full flex-1">
                <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#f7f6f3] flex-shrink-0">
                  <img src={p.icon} alt="icon" className="w-8 h-8 object-contain" 
                    style={{ 
                      filter: 'brightness(0) saturate(100%) invert(64%) sepia(56%) saturate(434%) hue-rotate(21deg) brightness(93%) contrast(87%)'
                    }} 
                  />
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-[#052035] mb-1 text-left leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>{p.title}</h3>
                  <p className="text-[#b0b7c3] text-xs text-left leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>{p.desc}</p>
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