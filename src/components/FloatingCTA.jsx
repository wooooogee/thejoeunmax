import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, CalendarCheck } from 'lucide-react';

export default function FloatingCTA() {
  return (
    <aside aria-label="Quick Actions" className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-slate-950/95 backdrop-blur-md border-t border-slate-800 py-2.5 px-4 shadow-2xl">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2 text-center text-xs">
        
        {/* Telephone Placeholder */}
        <a
          href="tel:1544-0000"
          className="flex flex-col items-center justify-center py-1.5 px-2 bg-slate-900 text-slate-200 rounded-xl hover:bg-slate-800 border border-slate-800 transition-colors"
        >
          <Phone className="w-5 h-5 text-amber-400 mb-1" />
          <span className="font-semibold text-[11px]">전화상담</span>
        </a>

        {/* KakaoTalk Placeholder */}
        <a
          href="https://pf.kakao.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 bg-amber-400 text-slate-950 font-bold rounded-xl hover:bg-amber-300 transition-colors shadow-sm"
        >
          <MessageCircle className="w-5 h-5 fill-slate-950 text-slate-950 mb-1" />
          <span className="font-bold text-[11px]">카카오톡</span>
        </a>

        {/* Consultation Link */}
        <Link
          to="/contact"
          className="flex flex-col items-center justify-center py-1.5 px-2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black rounded-xl shadow-md hover:brightness-110 transition-colors"
        >
          <CalendarCheck className="w-5 h-5 mb-1" />
          <span className="font-extrabold text-[11px]">상담신청</span>
        </Link>

      </div>
    </aside>
  );
}
