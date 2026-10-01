import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ConsultationCTA from '../components/ConsultationCTA';
import { ShieldCheck, CheckCircle2, ArrowRight, HeartHandshake } from 'lucide-react';

export default function Premium540() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded-full border border-amber-500/30">
            SMART ESSENTIAL
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            더좋은<span className="gold-gradient-text">프리미엄540</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            부담 없는 월 납입금으로 완성하는 알뜰하고 실속 있는 상조 및 헬스케어 프리미엄 플랜.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="실속형 라인업"
          title="더좋은프리미엄540 핵심 혜택"
          subtitle="합리적인 비용으로 꼭 필요한 보장과 상조 서비스를 채웠습니다."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <ShieldCheck className="w-8 h-8 text-amber-500 mb-3" />
            <h3 className="font-bold text-slate-900 text-lg">실속 있는 월 납입</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              부담을 크게 낮춘 월 납입 플랜으로 가계 부담을 줄이고 상조 장례 준비를 안전하게 도와드립니다.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <HeartHandshake className="w-8 h-8 text-amber-500 mb-3" />
            <h3 className="font-bold text-slate-900 text-lg">가족 동반 멤버십</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              가입 고객 및 직계 가족까지 이용 가능한 제휴 할인 혜택 및 멤버십 우대 서비스 제공.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <CheckCircle2 className="w-8 h-8 text-amber-500 mb-3" />
            <h3 className="font-bold text-slate-900 text-lg">품격 의전 서비스</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              고급 수의, 리무진 운행, 의전도우미 지원 등 빈틈없는 품격 정성 장례 진행.
            </p>
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </div>
  );
}
