import React from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle, ArrowRight, ShieldCheck, Award, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToServices = () => {
    const elem = document.getElementById('quick-menu');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      
      {/* Background Glow & Pattern */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          
          {/* Top Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide shadow-inner">
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>맥스지사 통합 영업 & 미디어 플랫폼</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight sm:leading-tight">
            당신의 더 좋은 <span className="text-amber-400">LIFE</span>를 <br className="hidden sm:inline" />
            <span className="gold-gradient-text">MAX</span>하다
          </h1>

          {/* Subcopy */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            상조 · 건강 · 보험 · 여행 · 골프 · 비즈니스까지 <br className="hidden sm:inline" />
            필요한 서비스를 영상으로 먼저 알아보고 편하게 상담받아보세요.
          </p>

          {/* CTA Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 rounded-xl shadow-lg shadow-amber-500/25 hover:brightness-110 transform hover:-translate-y-0.5 transition-all"
            >
              무료 상담 신청
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>

            <button
              onClick={scrollToServices}
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 text-base font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 rounded-xl transition-all"
            >
              <PlayCircle className="w-5 h-5 mr-2 text-amber-400" />
              서비스 둘러보기
            </button>
          </div>

          {/* Key Selling Features (Trust Badges) */}
          <div className="pt-10 grid grid-cols-3 gap-2 sm:gap-6 border-t border-slate-800/80 max-w-xl mx-auto text-xs sm:text-sm text-slate-300">
            <div className="flex flex-col items-center p-2">
              <Award className="w-6 h-6 text-amber-400 mb-1" />
              <span className="font-bold text-white">프리미엄 서비스</span>
              <span className="text-[11px] text-slate-400">맞춤 라이프 솔루션</span>
            </div>
            <div className="flex flex-col items-center p-2 border-x border-slate-800">
              <PlayCircle className="w-6 h-6 text-amber-400 mb-1" />
              <span className="font-bold text-white">영상 First</span>
              <span className="text-[11px] text-slate-400">MAX CLASS 설명</span>
            </div>
            <div className="flex flex-col items-center p-2">
              <ShieldCheck className="w-6 h-6 text-amber-400 mb-1" />
              <span className="font-bold text-white">안심 전문 상담</span>
              <span className="text-[11px] text-slate-400">1:1 맞춤 보장 분석</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
