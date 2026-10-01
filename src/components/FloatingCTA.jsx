import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, CalendarCheck } from 'lucide-react';

export default function FloatingCTA() {
  // NOTE: Placeholder URLs until official telephone number and KakaoTalk channel link are confirmed
  const TEL_PLACEHOLDER = 'tel:1544-0000';
  const KAKAO_PLACEHOLDER = 'https://pf.kakao.com';

  return (
    <aside aria-label="Mobile Quick Floating Menu" className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-slate-950/95 backdrop-blur-md border-t border-slate-800/90 py-2 px-3 pb-[calc(0.5rem+env(safe-area-inset-bottom))] shadow-2xl">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2 text-center">
        
        {/* Telephone Call Button (Placeholder) */}
        <a
          href={TEL_PLACEHOLDER}
          aria-label="전화 상담 연결"
          className="flex flex-col items-center justify-center py-1.5 px-2 bg-slate-900 text-slate-200 rounded-lg hover:bg-slate-800 border border-slate-800 transition-colors"
        >
          <Phone className="w-4 h-4 text-amber-400 mb-0.5" />
          <span className="font-medium text-[11px]">전화상담</span>
        </a>

        {/* KakaoTalk Channel Link (Placeholder) */}
        <a
          href={KAKAO_PLACEHOLDER}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="카카오톡 상담 연결"
          className="flex flex-col items-center justify-center py-1.5 px-2 bg-amber-400 text-slate-950 rounded-lg hover:bg-amber-300 font-bold transition-colors"
        >
          <MessageCircle className="w-4 h-4 fill-slate-950 text-slate-950 mb-0.5" />
          <span className="font-bold text-[11px]">카카오톡</span>
        </a>

        {/* Highlighted Consultation Button -> /contact */}
        <Link
          to="/contact"
          aria-label="1:1 무료 상담 신청"
          className="flex flex-col items-center justify-center py-1.5 px-2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 rounded-lg shadow-md hover:brightness-110 transition-colors"
        >
          <CalendarCheck className="w-4 h-4 mb-0.5" />
          <span className="font-extrabold text-[11px]">상담신청</span>
        </Link>

      </div>
    </aside>
  );
}
