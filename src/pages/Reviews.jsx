import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ConsultationCTA from '../components/ConsultationCTA';
import { reviewsData } from '../data/reviews';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';

export default function Reviews() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded-full border border-amber-500/30">
            REAL REVIEWS
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            고객님들의 <span className="gold-gradient-text">솔직한 이용 후기</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            맥스지사 통합 플랫폼을 통해 상담 및 서비스를 이용하신 고객님들의 생생한 소리를 확인하세요.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="생생한 후기"
          title="분야별 고객 만족 후기"
          subtitle="실제 이용 후기를 통해 검증된 서비스 품질을 느껴보세요."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviewsData.map((rev) => (
            <div key={rev.id} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200/90 flex flex-col justify-between hover:border-amber-400 transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 space-x-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-400">{rev.date}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{rev.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{rev.content}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-bold text-slate-900">{rev.author}</span>
                <span className="px-3 py-1 bg-amber-100 text-amber-900 font-bold rounded-full">
                  {rev.serviceUsed}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ConsultationCTA />
    </div>
  );
}
