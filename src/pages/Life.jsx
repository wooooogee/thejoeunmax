import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import ConsultationCTA from '../components/ConsultationCTA';
import { productsData } from '../data/products';
import { HeartHandshake, CheckCircle2, ArrowRight, ShieldCheck, RefreshCw } from 'lucide-react';

export default function Life() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-16 md:py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded-full border border-amber-500/30">
            THE JOEUN LIFE CARE
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            품격 있는 상조 서비스 & <span className="gold-gradient-text">100% 라이프 전환</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            인생의 중요한 순간을 든든하게 지켜드리는 더좋은 라이프케어 플랜을 만나보세요.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="상품 안내"
          title="더좋은 라이프케어 대표 라인업"
          subtitle="고객님의 라이프스타일에 맞춘 최고의 플랜을 선택하세요."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {productsData.filter(p => p.category === '라이프케어').map((prod) => (
            <div key={prod.id} className="bg-white rounded-3xl p-8 shadow-md border border-slate-200 flex flex-col justify-between hover:border-amber-400 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-slate-900 text-amber-400 font-bold text-xs rounded-lg">
                    {prod.name}
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">{prod.price}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{prod.tagline}</h3>
                <div className="my-6 space-y-2.5">
                  {prod.features.map((f, idx) => (
                    <div key={idx} className="flex items-center text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to={prod.link}
                  className="w-full inline-flex items-center justify-center py-3 bg-slate-900 text-white font-bold text-sm rounded-xl hover:bg-slate-800 transition-colors"
                >
                  <span>{prod.name} 상세페이지 보기</span>
                  <ArrowRight className="w-4 h-4 ml-2 text-amber-400" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Transition Benefits Section */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <RefreshCw className="w-10 h-10 text-amber-400 mx-auto mb-3 animate-spin-slow" />
            <h3 className="text-2xl font-bold text-white">필요할 땐 언제든 100% 자율 전환 서비스</h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              납입금 손실 걱정 없이 크루즈 여행, 웨딩, 골프, 어학연수 등 원하는 라이프 서비스로 언제든지 전환하여 이용하실 수 있습니다.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-xs font-semibold">
            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 text-amber-300">🚢 럭셔리 크루즈</div>
            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 text-amber-300">💍 품격 웨딩 서비스</div>
            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 text-amber-300">⛳ 골프 투어 패키지</div>
            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 text-amber-300">🎓 어학연수 & 리조트</div>
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </div>
  );
}
