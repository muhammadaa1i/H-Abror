import React from 'react';
import { useTranslation } from 'react-i18next';
import OptimizedImage from './OptimizedImage';
import m1 from '../assets/m1.jpg';
import m2 from '../assets/m2.jpg';
import m3 from '../assets/m3.jpg';
import m4 from '../assets/m4.jpg';
import f1 from '../assets/f1.png';
import f2 from '../assets/f2.png';
import f3 from '../assets/f3.png';
import f4 from '../assets/f4.png';
import f5 from '../assets/f5.png';
import u7 from '../assets/u7.jpg';
import u3 from '../assets/u3.jpg';
import u1 from '../assets/u1.png';
import u2 from '../assets/u2.jpg';
import u5 from '../assets/u5.png';
import u6 from '../assets/u6.png';
import u8 from '../assets/u8.png';
import u9 from '../assets/u9.png';
import u10 from '../assets/u10.png';
import u11 from '../assets/u11.jpeg';

const Projects: React.FC = () => {
  const { t } = useTranslation()
  
  // Helper function to format region values using translation keys
  const formatRegionValue = (value: number, isThousand: boolean = false) => {
    const suffix = isThousand ? t('projects.region_thousand').replace('${value}', '') : t('projects.region_mln').replace('${value}', '');
    return `${value}${suffix}`;
  }

  const projects = [
    { img: m1, icon: f1, title: t('projects.textile'), desc: t('projects.textile_desc'), location: t('projects.location_surxondaryo'), region: formatRegionValue(42.5) },
    { img: m2, icon: f2, title: t('projects.concrete'), desc: t('projects.concrete_desc'), location: t('projects.location_sirdaryo'), region: formatRegionValue(3.5) },
    { img: m3, icon: f3, title: t('projects.crushed'), desc: t('projects.crushed_desc'), location: t('projects.location_tashkent'), region: formatRegionValue(2.2) },
    { img: m4, icon: f4, title: t('projects.cable'), desc: t('projects.cable_desc'), location: t('projects.location_tashkent'), region: formatRegionValue(117) },
    { img: u2, icon: f5, title: t('projects.agro'), desc: t('projects.agro_desc'), location: t('projects.location_jizzakh'), region: formatRegionValue(38.4) },
    { img: u7, icon: u6, title: t('projects.amusement'), desc: t('projects.amusement_desc'), location: t('projects.location_tashkent'), region: formatRegionValue(120, true) },
    { img: u3, icon: u5, title: t('projects.ecotourism'), desc: t('projects.ecotourism_desc'), location: t('projects.location_tashkent'), region: formatRegionValue(60, true) },
    { img: u11, icon: u1, title: t('projects.export'), desc: t('projects.export_desc'), location: t('projects.location_uzbekistan'), region: formatRegionValue(5.5) },
  ]

  return (
    <section className="bg-white py-12 md:py-20" id="projects" aria-label={t('projects.title')}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#052035] mb-8">{t('projects.title')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 sm:gap-4">
          {projects.map((p, index) => (
            <div
              className="bg-white rounded-[32px] shadow-lg flex flex-col items-stretch hover:shadow-xl transition-shadow w-full lg:max-w-[340px] mx-auto sm:max-w-none sm:mx-0 h-auto"
              key={p.title}
            >
              <OptimizedImage 
                src={p.img} 
                alt={p.title} 
                className={`w-full h-48 rounded-t-[32px] flex-shrink-0 ${p.img === m3 ? 'object-cover object-center' : 'object-cover object-center'}`}
                width={340}
                height={192}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                style={{ height: '192px', minHeight: '192px', maxHeight: '192px' }}
              />
              <div className="px-4 py-6 w-full">
                {index === 0 ? (
                  // Special layout for first card
                  <div className="space-y-4">
                    {/* Title with icon */}
                    <div className="flex items-center gap-3">
                      <OptimizedImage 
                        src={p.icon} 
                        alt="icon" 
                        className="w-8 h-8 object-contain flex-shrink-0" 
                        width={32}
                        height={32}
                        style={{ 
                          filter: 'brightness(0) saturate(100%) invert(77%) sepia(24%) saturate(1162%) hue-rotate(2deg) brightness(92%) contrast(92%)'
                        }} 
                      />
                      <h3 className="text-[#052035] font-extrabold text-[18px] leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>{p.title}</h3>
                    </div>
                    
                    {/* Three lines of information */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <OptimizedImage 
                          src={u8} 
                          alt="Location" 
                          className="w-5 h-5 object-contain flex-shrink-0" 
                          width={20}
                          height={20}
                          style={{ 
                            filter: 'brightness(0) saturate(100%) invert(77%) sepia(24%) saturate(1162%) hue-rotate(2deg) brightness(92%) contrast(92%)'
                          }} 
                        />
                        <span className="text-[#052035] text-[14px] font-medium">{p.location}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <OptimizedImage 
                          src={u9} 
                          alt="Cost" 
                          className="w-5 h-5 object-contain flex-shrink-0" 
                          width={20}
                          height={20}
                          style={{ 
                            filter: 'brightness(0) saturate(100%) invert(77%) sepia(24%) saturate(1162%) hue-rotate(2deg) brightness(92%) contrast(92%)'
                          }} 
                        />
                        <span className="text-[#052035] text-[14px] font-medium">{p.region}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <OptimizedImage 
                          src={u10} 
                          alt="Services" 
                          className="w-5 h-5 object-contain flex-shrink-0 mt-0.5" 
                          width={20}
                          height={20}
                          style={{ 
                            filter: 'brightness(0) saturate(100%) invert(77%) sepia(24%) saturate(1162%) hue-rotate(2deg) brightness(92%) contrast(92%)'
                          }} 
                        />
                        <span className="text-[#052035] text-[14px] font-medium leading-tight">{p.desc}</span>
                      </div>
                    </div>
                  </div>
                ) : index === 1 ? (
                  // Special layout for second card
                  <div className="space-y-4">
                    {/* Title with icon */}
                    <div className="flex items-center gap-3">
                      <OptimizedImage 
                        src={p.icon} 
                        alt="icon" 
                        className="w-8 h-8 object-contain flex-shrink-0" 
                        width={32}
                        height={32}
                        style={{ 
                          filter: 'brightness(0) saturate(100%) invert(77%) sepia(24%) saturate(1162%) hue-rotate(2deg) brightness(92%) contrast(92%)'
                        }} 
                      />
                      <h3 className="text-[#052035] font-extrabold text-[18px] leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>{p.title}</h3>
                    </div>
                    
                    {/* Three lines of information */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <OptimizedImage 
                          src={u8} 
                          alt="Location" 
                          className="w-5 h-5 object-contain flex-shrink-0" 
                          width={20}
                          height={20}
                          style={{ 
                            filter: 'brightness(0) saturate(100%) invert(77%) sepia(24%) saturate(1162%) hue-rotate(2deg) brightness(92%) contrast(92%)'
                          }} 
                        />
                        <span className="text-[#052035] text-[14px] font-medium">{p.location}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <OptimizedImage 
                          src={u9} 
                          alt="Cost" 
                          className="w-5 h-5 object-contain flex-shrink-0" 
                          width={20}
                          height={20}
                          style={{ 
                            filter: 'brightness(0) saturate(100%) invert(77%) sepia(24%) saturate(1162%) hue-rotate(2deg) brightness(92%) contrast(92%)'
                          }} 
                        />
                        <span className="text-[#052035] text-[14px] font-medium">{p.region}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <OptimizedImage 
                          src={u10} 
                          alt="Services" 
                          className="w-5 h-5 object-contain flex-shrink-0 mt-0.5" 
                          width={20}
                          height={20}
                          style={{ 
                            filter: 'brightness(0) saturate(100%) invert(77%) sepia(24%) saturate(1162%) hue-rotate(2deg) brightness(92%) contrast(92%)'
                          }} 
                        />
                        <span className="text-[#052035] text-[14px] font-medium leading-tight">{p.desc}</span>
                      </div>
                    </div>
                  </div>
                ) : index === 2 ? (
                  // Special layout for third card
                  <div className="space-y-4">
                    {/* Title with icon */}
                    <div className="flex items-center gap-3">
                      <OptimizedImage 
                        src={p.icon} 
                        alt="icon" 
                        className="w-8 h-8 object-contain flex-shrink-0" 
                        width={32}
                        height={32}
                        style={{ 
                          filter: 'brightness(0) saturate(100%) invert(77%) sepia(24%) saturate(1162%) hue-rotate(2deg) brightness(92%) contrast(92%)'
                        }} 
                      />
                      <h3 className="text-[#052035] font-extrabold text-[18px] leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>{p.title}</h3>
                    </div>
                    
                    {/* Three lines of information */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <OptimizedImage 
                          src={u8} 
                          alt="Location" 
                          className="w-5 h-5 object-contain flex-shrink-0" 
                          width={20}
                          height={20}
                          style={{ 
                            filter: 'brightness(0) saturate(100%) invert(77%) sepia(24%) saturate(1162%) hue-rotate(2deg) brightness(92%) contrast(92%)'
                          }} 
                        />
                        <span className="text-[#052035] text-[14px] font-medium">{p.location}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <OptimizedImage 
                          src={u9} 
                          alt="Cost" 
                          className="w-5 h-5 object-contain flex-shrink-0" 
                          width={20}
                          height={20}
                          style={{ 
                            filter: 'brightness(0) saturate(100%) invert(77%) sepia(24%) saturate(1162%) hue-rotate(2deg) brightness(92%) contrast(92%)'
                          }} 
                        />
                        <span className="text-[#052035] text-[14px] font-medium">{p.region}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <OptimizedImage 
                          src={u10} 
                          alt="Services" 
                          className="w-5 h-5 object-contain flex-shrink-0 mt-0.5" 
                          width={20}
                          height={20}
                          style={{ 
                            filter: 'brightness(0) saturate(100%) invert(77%) sepia(24%) saturate(1162%) hue-rotate(2deg) brightness(92%) contrast(92%)'
                          }} 
                        />
                        <span className="text-[#052035] text-[14px] font-medium leading-tight">{p.desc}</span>
                      </div>
                    </div>
                  </div>
                ) : index === 3 ? (
                  // Special layout for fourth card
                  <div className="space-y-4">
                    {/* Title with icon */}
                    <div className="flex items-center gap-3">
                      <OptimizedImage 
                        src={p.icon} 
                        alt="icon" 
                        className="w-8 h-8 object-contain flex-shrink-0" 
                        width={32}
                        height={32}
                        style={{ 
                          filter: 'brightness(0) saturate(100%) invert(77%) sepia(24%) saturate(1162%) hue-rotate(2deg) brightness(92%) contrast(92%)'
                        }} 
                      />
                      <h3 className="text-[#052035] font-extrabold text-[18px] leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>{p.title}</h3>
                    </div>
                    
                    {/* Three lines of information */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <OptimizedImage 
                          src={u8} 
                          alt="Location" 
                          className="w-5 h-5 object-contain flex-shrink-0" 
                          width={20}
                          height={20}
                          style={{ 
                            filter: 'brightness(0) saturate(100%) invert(77%) sepia(24%) saturate(1162%) hue-rotate(2deg) brightness(92%) contrast(92%)'
                          }} 
                        />
                        <span className="text-[#052035] text-[14px] font-medium">{p.location}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <OptimizedImage 
                          src={u9} 
                          alt="Cost" 
                          className="w-5 h-5 object-contain flex-shrink-0" 
                          width={20}
                          height={20}
                          style={{ 
                            filter: 'brightness(0) saturate(100%) invert(77%) sepia(24%) saturate(1162%) hue-rotate(2deg) brightness(92%) contrast(92%)'
                          }} 
                        />
                        <span className="text-[#052035] text-[14px] font-medium">{p.region}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <OptimizedImage 
                          src={u10} 
                          alt="Services" 
                          className="w-5 h-5 object-contain flex-shrink-0 mt-0.5" 
                          width={20}
                          height={20}
                          style={{ 
                            filter: 'brightness(0) saturate(100%) invert(77%) sepia(24%) saturate(1162%) hue-rotate(2deg) brightness(92%) contrast(92%)'
                          }} 
                        />
                        <span className="text-[#052035] text-[14px] font-medium leading-tight">{p.desc}</span>
                      </div>
                    </div>
                  </div>
                ) : index === 4 ? (
                  // Special layout for fifth card
                  <div className="space-y-4">
                    {/* Title with icon */}
                    <div className="flex items-center gap-3">
                      <OptimizedImage 
                        src={p.icon} 
                        alt="icon" 
                        className="w-8 h-8 object-contain flex-shrink-0" 
                        width={32}
                        height={32}
                        style={{ 
                          filter: 'brightness(0) saturate(100%) invert(77%) sepia(24%) saturate(1162%) hue-rotate(2deg) brightness(92%) contrast(92%)'
                        }} 
                      />
                      <h3 className="text-[#052035] font-extrabold text-[18px] leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>{p.title}</h3>
                    </div>
                    
                    {/* Three lines of information */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <OptimizedImage 
                          src={u8} 
                          alt="Location" 
                          className="w-5 h-5 object-contain flex-shrink-0" 
                          width={20}
                          height={20}
                          style={{ 
                            filter: 'brightness(0) saturate(100%) invert(77%) sepia(24%) saturate(1162%) hue-rotate(2deg) brightness(92%) contrast(92%)'
                          }} 
                        />
                        <span className="text-[#052035] text-[14px] font-medium">{p.location}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <OptimizedImage 
                          src={u9} 
                          alt="Cost" 
                          className="w-5 h-5 object-contain flex-shrink-0" 
                          width={20}
                          height={20}
                          style={{ 
                            filter: 'brightness(0) saturate(100%) invert(77%) sepia(24%) saturate(1162%) hue-rotate(2deg) brightness(92%) contrast(92%)'
                          }} 
                        />
                        <span className="text-[#052035] text-[14px] font-medium">{p.region}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <OptimizedImage 
                          src={u10} 
                          alt="Services" 
                          className="w-5 h-5 object-contain flex-shrink-0 mt-0.5" 
                          width={20}
                          height={20}
                          style={{ 
                            filter: 'brightness(0) saturate(100%) invert(77%) sepia(24%) saturate(1162%) hue-rotate(2deg) brightness(92%) contrast(92%)'
                          }} 
                        />
                        <span className="text-[#052035] text-[14px] font-medium leading-tight">{p.desc}</span>
                      </div>
                    </div>
                  </div>
                ) : index === 5 ? (
                  // Special layout for sixth card
                  <div className="space-y-4">
                    {/* Title with icon */}
                    <div className="flex items-center gap-3">
                      <OptimizedImage 
                        src={p.icon} 
                        alt="icon" 
                        className="w-8 h-8 object-contain flex-shrink-0" 
                        width={32}
                        height={32}
                        style={{ 
                          filter: 'brightness(0) saturate(100%) invert(77%) sepia(24%) saturate(1162%) hue-rotate(2deg) brightness(92%) contrast(92%)'
                        }} 
                      />
                      <h3 className="text-[#052035] font-extrabold text-[18px] leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>{p.title}</h3>
                    </div>
                    
                    {/* Three lines of information */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <OptimizedImage 
                          src={u8} 
                          alt="Location" 
                          className="w-5 h-5 object-contain flex-shrink-0" 
                          width={20}
                          height={20}
                          style={{ 
                            filter: 'brightness(0) saturate(100%) invert(77%) sepia(24%) saturate(1162%) hue-rotate(2deg) brightness(92%) contrast(92%)'
                          }} 
                        />
                        <span className="text-[#052035] text-[14px] font-medium">{p.location}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <OptimizedImage 
                          src={u9} 
                          alt="Cost" 
                          className="w-5 h-5 object-contain flex-shrink-0" 
                          width={20}
                          height={20}
                          style={{ 
                            filter: 'brightness(0) saturate(100%) invert(77%) sepia(24%) saturate(1162%) hue-rotate(2deg) brightness(92%) contrast(92%)'
                          }} 
                        />
                        <span className="text-[#052035] text-[14px] font-medium">{p.region}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <OptimizedImage 
                          src={u10} 
                          alt="Services" 
                          className="w-5 h-5 object-contain flex-shrink-0 mt-0.5" 
                          width={20}
                          height={20}
                          style={{ 
                            filter: 'brightness(0) saturate(100%) invert(77%) sepia(24%) saturate(1162%) hue-rotate(2deg) brightness(92%) contrast(92%)'
                          }} 
                        />
                        <span className="text-[#052035] text-[14px] font-medium leading-tight">{p.desc}</span>
                      </div>
                    </div>
                  </div>
                ) : index === 6 ? (
                  // Special layout for seventh card
                  <div className="space-y-4">
                    {/* Title with icon */}
                    <div className="flex items-center gap-3">
                      <OptimizedImage 
                        src={p.icon} 
                        alt="icon" 
                        className="w-8 h-8 object-contain flex-shrink-0" 
                        width={32}
                        height={32}
                        style={{ 
                          filter: 'brightness(0) saturate(100%) invert(77%) sepia(24%) saturate(1162%) hue-rotate(2deg) brightness(92%) contrast(92%)'
                        }} 
                      />
                      <h3 className="text-[#052035] font-extrabold text-[18px] leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>{p.title}</h3>
                    </div>
                    
                    {/* Three lines of information */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <OptimizedImage 
                          src={u8} 
                          alt="Location" 
                          className="w-5 h-5 object-contain flex-shrink-0" 
                          width={20}
                          height={20}
                          style={{ 
                            filter: 'brightness(0) saturate(100%) invert(77%) sepia(24%) saturate(1162%) hue-rotate(2deg) brightness(92%) contrast(92%)'
                          }} 
                        />
                        <span className="text-[#052035] text-[14px] font-medium">{p.location}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <OptimizedImage 
                          src={u9} 
                          alt="Cost" 
                          className="w-5 h-5 object-contain flex-shrink-0" 
                          width={20}
                          height={20}
                          style={{ 
                            filter: 'brightness(0) saturate(100%) invert(77%) sepia(24%) saturate(1162%) hue-rotate(2deg) brightness(92%) contrast(92%)'
                          }} 
                        />
                        <span className="text-[#052035] text-[14px] font-medium">{p.region}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <OptimizedImage 
                          src={u10} 
                          alt="Services" 
                          className="w-5 h-5 object-contain flex-shrink-0 mt-0.5" 
                          width={20}
                          height={20}
                          style={{ 
                            filter: 'brightness(0) saturate(100%) invert(77%) sepia(24%) saturate(1162%) hue-rotate(2deg) brightness(92%) contrast(92%)'
                          }} 
                        />
                        <span className="text-[#052035] text-[14px] font-medium leading-tight">{p.desc}</span>
                      </div>
                    </div>
                  </div>
                ) : index === 7 ? (
                  // Special layout for eighth card
                  <div className="space-y-4">
                    {/* Title with icon */}
                    <div className="flex items-center gap-3">
                      <OptimizedImage 
                        src={p.icon} 
                        alt="icon" 
                        className="w-8 h-8 object-contain flex-shrink-0" 
                        width={32}
                        height={32}
                        style={{ 
                          filter: 'brightness(0) saturate(100%) invert(77%) sepia(24%) saturate(1162%) hue-rotate(2deg) brightness(92%) contrast(92%)'
                        }} 
                      />
                      <h3 className="text-[#052035] font-extrabold text-[18px] leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>{p.title}</h3>
                    </div>
                    
                    {/* Three lines of information */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <OptimizedImage 
                          src={u8} 
                          alt="Location" 
                          className="w-5 h-5 object-contain flex-shrink-0" 
                          width={20}
                          height={20}
                          style={{ 
                            filter: 'brightness(0) saturate(100%) invert(77%) sepia(24%) saturate(1162%) hue-rotate(2deg) brightness(92%) contrast(92%)'
                          }} 
                        />
                        <span className="text-[#052035] text-[14px] font-medium">{p.location}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <OptimizedImage 
                          src={u9} 
                          alt="Cost" 
                          className="w-5 h-5 object-contain flex-shrink-0" 
                          width={20}
                          height={20}
                          style={{ 
                            filter: 'brightness(0) saturate(100%) invert(77%) sepia(24%) saturate(1162%) hue-rotate(2deg) brightness(92%) contrast(92%)'
                          }} 
                        />
                        <span className="text-[#052035] text-[14px] font-medium">{p.region}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <OptimizedImage 
                          src={u10} 
                          alt="Services" 
                          className="w-5 h-5 object-contain flex-shrink-0 mt-0.5" 
                          width={20}
                          height={20}
                          style={{ 
                            filter: 'brightness(0) saturate(100%) invert(77%) sepia(24%) saturate(1162%) hue-rotate(2deg) brightness(92%) contrast(92%)'
                          }} 
                        />
                        <span className="text-[#052035] text-[14px] font-medium leading-tight">{p.desc}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Original layout for other cards
                  <div className="flex flex-row items-center gap-4 w-full text-wrap flex-1 min-h-[120px]">
                    <span className="flex items-center justify-center w-16 h-16 rounded-xl bg-[#f7f6f3] flex-shrink-0">
                      <OptimizedImage 
                        src={p.icon} 
                        alt="icon" 
                        className="w-12 h-12 object-contain" 
                        width={48}
                        height={48}
                        style={{ 
                          filter: 'brightness(0) saturate(100%) invert(77%) sepia(24%) saturate(1162%) hue-rotate(2deg) brightness(92%) contrast(92%)'
                        }} 
                      />
                    </span>
                    <div className="flex flex-col items-start min-w-0 w-full flex-1">
                      <h3 className="text-[#052035] font-extrabold text-[15px] text-left leading-tight break-words whitespace-normal w-full" style={{ fontFamily: 'Montserrat, sans-serif' }}>{p.title}</h3>
                      <span className="text-[#b0b7c3] text-[12px] text-left leading-tight font-medium break-words whitespace-normal mt-1 w-full" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {p.location} — {p.region}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects; 