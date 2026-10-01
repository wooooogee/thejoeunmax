import React from 'react';
import { Link } from 'react-router-dom';
import { HeartHandshake, ShieldCheck, Ship, Trophy, Video, ArrowRight } from 'lucide-react';

const iconMap = {
  HeartHandshake: HeartHandshake,
  ShieldCheck: ShieldCheck,
  Ship: Ship,
  Trophy: Trophy,
  Video: Video,
};

export default function ServiceCard({ service }) {
  const IconComponent = iconMap[service.icon] || HeartHandshake;

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col justify-between group transform hover:-translate-y-1">
      <div>
        {/* Top Header & Icon */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-14 h-14 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center shadow-md group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors duration-300">
            <IconComponent className="w-7 h-7" />
          </div>
          {service.badge && (
            <span className="px-3 py-1 text-xs font-bold rounded-full bg-slate-100 text-slate-700 border border-slate-200">
              {service.badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-950 transition-colors">
          {service.name}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          {service.shortDesc}
        </p>
      </div>

      {/* Detail Button */}
      <Link
        to={service.link}
        className="inline-flex items-center text-sm font-bold text-slate-900 hover:text-amber-600 transition-colors pt-4 border-t border-slate-100 group/btn"
      >
        <span>자세히 보기</span>
        <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform text-amber-500" />
      </Link>
    </div>
  );
}
