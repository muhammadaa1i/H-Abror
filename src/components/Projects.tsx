import React from 'react';
import { useTranslation } from 'react-i18next';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const projects = [
    { img: '🏭', title: t('projects.textile'), desc: t('projects.textile_desc') },
    { img: '🏢', title: t('projects.concrete'), desc: t('projects.concrete_desc') },
    { img: '⛏️', title: t('projects.crushed'), desc: t('projects.crushed_desc') },
    { img: '🧵', title: t('projects.cable'), desc: t('projects.cable_desc') },
    { img: '♻️', title: t('projects.agro'), desc: t('projects.agro_desc') },
  ];
  return (
    <section className="bg-white py-12 md:py-20" id="projects" aria-label={t('projects.title')}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a2342] mb-8">{t('projects.title')}</h2>
        <div className="flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible">
          {projects.map((p) => (
            <div
              className="min-w-[220px] bg-white rounded-xl shadow p-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
              key={p.title}
            >
              <div className="w-20 h-20 flex items-center justify-center bg-gray-100 rounded-lg text-4xl mb-3">
                {p.img}
              </div>
              <h3 className="text-lg font-bold text-[#0a2342] mb-1">{p.title}</h3>
              <p className="text-[#b0b7c3] text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 