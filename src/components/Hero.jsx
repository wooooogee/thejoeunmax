import React from 'react';
import { Link } from 'react-router-dom';
import { PlayCircle, Search, ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToNeeds = () => {
    const elem = document.getElementById('needs');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMaxClass = () => {
    const elem = document.getElementById('max-class');
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
          
          {/* Top Subtitle Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-slate-800/90 border border-amber-400/30 text-amber-300 text-xs font-extrabold tracking-wider uppercase shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>THE JOEUN MAX</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">LIFE CONTENT & CONSULTING PLATFORM</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight sm:leading-tight">
            당신의 더 좋은 <span className="text-amber-400">LIFE</span>를 <br className="hidden sm:inline" />
            <span className="gold-gradient-text">MAX</span>하다
          </h1>

          {/* Subcopy */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            상조 · 보험 · 크루즈 · 골프 · 비즈니스 홍보까지 <br className="hidden sm:inline" />
            복잡한 설명은 영상으로 먼저 알아보고 나에게 필요한 서비스만 편하게 상담받아보세요.
          </p>

          {/* CTA Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToNeeds}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-extrabold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 rounded-xl shadow-lg shadow-amber-500/25 hover:brightness-110 transform hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <Search className="w-5 h-5 mr-2" />
              관심 서비스 찾기
            </button>

            <button
              onClick={scrollToMaxClass}
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 text-base font-bold text-slate-200 bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 rounded-xl transition-all cursor-pointer"
            >
              <PlayCircle className="w-5 h-5 mr-2 text-amber-400" />
              영상 먼저 보기
            </button>
          </div>

          {/* Bottom Keywords */}
          <div className="pt-10 border-t border-slate-800/80 flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-xs font-bold text-slate-400 tracking-wider">
            <span className="px-3 py-1 bg-slate-900 rounded-full border border-slate-800">LIFE CARE</span>
            <span className="text-slate-600">•</span>
            <span className="px-3 py-1 bg-slate-900 rounded-full border border-slate-800">INSURANCE</span>
            <span className="text-slate-600">•</span>
            <span className="px-3 py-1 bg-slate-900 rounded-full border border-slate-800">CRUISE</span>
            <span className="text-slate-600">•</span>
            <span className="px-3 py-1 bg-slate-900 rounded-full border border-slate-800">GOLF</span>
            <span className="text-slate-600">•</span>
            <span className="px-3 py-1 bg-slate-900 rounded-full border border-slate-800">BUSINESS</span>
          </div>

        </div>
      </div>
    </section>
  );
}
