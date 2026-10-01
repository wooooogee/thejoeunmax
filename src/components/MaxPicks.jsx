import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from './SectionTitle';
import { picksData } from '../data/picks';
import { ArrowRight, Bookmark, Sparkles } from 'lucide-react';

export default function MaxPicks() {
  return (
    <section id="max-picks" className="py-16 md:py-24 bg-slate-100/80 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionTitle
          badge="MAX PICKS"
          title="이번에 꼭 한번 확인해보세요"
          subtitle="상담 전에 알아두면 좋은 서비스 노하우를 MAX가 골라드립니다."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {picksData.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:border-amber-400/80 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 text-xs font-bold bg-slate-900 text-amber-400 rounded-md">
                    {item.category}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                <span className="text-slate-400 flex items-center">
                  <Bookmark className="w-3.5 h-3.5 mr-1 text-amber-500" />
                  {item.badge}
                </span>
                <Link
                  to={item.link}
                  className="text-slate-900 group-hover:text-amber-600 flex items-center transition-colors"
                >
                  <span>관련 정보 읽기</span>
                  <ArrowRight className="w-4 h-4 ml-1 text-amber-500 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
