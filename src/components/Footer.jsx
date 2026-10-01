import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-28 md:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-black text-white tracking-wider">
                THE JOEUN <span className="gold-gradient-text">MAX</span>
              </span>
            </Link>
            <p className="text-sm text-slate-300 font-medium">
              당신의 더 좋은 LIFE를 MAX하다
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              맥스지사 통합 영업 플랫폼은 상조, 헬스케어, 보험, 크루즈, 골프, 비즈니스 미디어 등 삶에 필요한 프리미엄 서비스와 영상 콘텐츠를 통합 제공합니다.
            </p>
          </div>

          {/* Quick Links 1 */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 border-l-2 border-amber-400 pl-2">주요 서비스</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/life" className="hover:text-amber-400 transition-colors">라이프케어 (상조/웨딩)</Link>
              </li>
              <li>
                <Link to="/life/hybrid698" className="hover:text-amber-400 transition-colors pl-2 text-xs text-slate-400">└ 더좋은하이브리드698</Link>
              </li>
              <li>
                <Link to="/life/premium540" className="hover:text-amber-400 transition-colors pl-2 text-xs text-slate-400">└ 더좋은프리미엄540</Link>
              </li>
              <li>
                <Link to="/insurance" className="hover:text-amber-400 transition-colors">보험 / 보장분석</Link>
              </li>
              <li>
                <Link to="/cruise" className="hover:text-amber-400 transition-colors">여행먼저 크루즈</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links 2 */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 border-l-2 border-amber-400 pl-2">콘텐츠 & 미디어</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/golf" className="hover:text-amber-400 transition-colors">골프 레슨 / 스윙교정</Link>
              </li>
              <li>
                <Link to="/business" className="hover:text-amber-400 transition-colors">MAX BUSINESS 홍보영상</Link>
              </li>
              <li>
                <Link to="/class" className="hover:text-amber-400 transition-colors">MAX CLASS 교육영상</Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-amber-400 transition-colors">생생 고객 후기</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors font-semibold text-amber-300">1:1 무료 상담 신청</Link>
              </li>
            </ul>
          </div>

          {/* Contact & Support Placeholder */}
          <div className="space-y-3">
            <h3 className="text-white font-bold text-base mb-4 border-l-2 border-amber-400 pl-2">고객 센터</h3>
            <div className="flex items-center space-x-3 text-sm">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <span>상담전화: <strong className="text-white font-semibold">1544-XXXX (대표번호 준비중)</strong></span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <Mail className="w-4 h-4 text-amber-400 shrink-0" />
              <span>이메일: contact@thejoeunmax.com</span>
            </div>
            <div className="flex items-start space-x-3 text-sm">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
              <span>맥스지사 영업본부 (상세주소 준비중)</span>
            </div>
            <div className="pt-2">
              <span className="inline-flex items-center px-3 py-1 bg-slate-900 rounded border border-slate-800 text-xs text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
                안심 전문 상담 보장
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} THE JOEUN MAX. All rights reserved.</p>
          <div className="flex space-x-6">
            <span className="hover:text-slate-300 cursor-pointer">개인정보처리방침</span>
            <span className="hover:text-slate-300 cursor-pointer">이용약관</span>
            <span className="hover:text-slate-300 cursor-pointer">상담신청 안내</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
