import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, HelpCircle } from 'lucide-react';

export default function ConsultationCTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold mb-4 uppercase tracking-wider">
          <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
          <span>NOT SURE YET?</span>
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
          어떤 상담이 필요한지 <br className="sm:hidden" />
          <span className="gold-gradient-text">아직 잘 모르시겠나요?</span>
        </h2>

        <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          현재 상황이나 궁금한 내용을 남겨주시면 <br className="hidden sm:inline" />
          확인 후 알맞은 맞춤 상담 분야를 친절하게 안내해 드립니다.
        </p>

        {/* Action Button */}
        <div className="mb-10">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-extrabold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 rounded-xl shadow-xl shadow-amber-500/20 hover:brightness-110 transform hover:-translate-y-0.5 transition-all"
          >
            통합 상담 신청
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>

        {/* Bottom Keywords */}
        <div className="pt-6 border-t border-slate-800/80 text-xs font-semibold text-slate-400 flex flex-wrap justify-center items-center gap-2">
          <span>라이프케어</span>
          <span>·</span>
          <span>보험</span>
          <span>·</span>
          <span>크루즈</span>
          <span>·</span>
          <span>골프</span>
          <span>·</span>
          <span>영상제작</span>
        </div>

      </div>
    </section>
  );
}
