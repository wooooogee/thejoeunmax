import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ConsultationCTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>부담 없는 1:1 맞춤 상담 서비스</span>
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          어떤 서비스가 <span className="gold-gradient-text">궁금하신가요?</span>
        </h2>

        <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          관심 있는 분야를 선택해 상담 신청을 남겨주세요. <br className="hidden sm:inline" />
          전담 상담 전문가가 빠른 시간 내 친절하게 안내해 드립니다.
        </p>

        {/* Benefits Checklist */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-10 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>상담 신청비 100% 무료</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>맞춤 보장분석 & 제안서 제공</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>영상 기반 쉬운 설명</span>
          </div>
        </div>

        {/* Action Button */}
        <div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-extrabold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 rounded-xl shadow-xl shadow-amber-500/20 hover:brightness-110 transform hover:-translate-y-0.5 transition-all"
          >
            무료 상담 신청
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>

      </div>
    </section>
  );
}
