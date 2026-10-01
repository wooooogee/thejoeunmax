import React from 'react';

export default function SectionTitle({ badge, title, subtitle, center = true, light = false }) {
  return (
    <div className={`mb-10 ${center ? 'text-center' : 'text-left'}`}>
      {badge && (
        <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 tracking-wide ${
          light 
            ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30' 
            : 'bg-amber-100 text-amber-800 border border-amber-200'
        }`}>
          {badge}
        </span>
      )}
      <h2 className={`text-2xl md:text-4xl font-extrabold tracking-tight ${
        light ? 'text-white' : 'text-slate-900'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-sm md:text-base max-w-2xl ${center ? 'mx-auto' : ''} ${
          light ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-16 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full ${
        center ? 'mx-auto' : ''
      }`} />
    </div>
  );
}
