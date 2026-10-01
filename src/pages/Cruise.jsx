import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ConsultationCTA from '../components/ConsultationCTA';
import VideoCard from '../components/VideoCard';
import { cruisesData } from '../data/cruises';
import { videosData } from '../data/videos';
import { Ship, Calendar, Compass, ArrowRight } from 'lucide-react';

export default function Cruise() {
  const cruiseVideo = videosData.find(v => v.id === 'vid-3') || videosData[2];

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-bold rounded-full border border-cyan-500/30">
            TRAVEL FIRST CRUISE
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            여행먼저 <span className="gold-gradient-text">럭셔리 크루즈</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            바다 위 낭만과 럭셔리 휴식! 전문 인솔자가 함께하여 안심하고 떠나는 프리미엄 크루즈 여행.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div>
          <SectionTitle
            badge="출항 일정"
            title="인기 크루즈 추천 일정"
            subtitle="더좋은 라이프 포인트를 전환하여 알뜰하게 다녀오실 수 있습니다."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cruisesData.map((c) => (
              <div key={c.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                <div className="h-48 relative">
                  <img src={c.image} alt={c.title} className="w-full h-full object-cover" />
                  <span className="absolute top-3 right-3 px-2 py-1 bg-slate-900/90 text-amber-400 text-xs font-bold rounded">
                    {c.ship}
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-cyan-700">{c.destination}</span>
                  <h3 className="text-base font-bold text-slate-900 mt-1 mb-2">{c.title}</h3>
                  <div className="flex items-center text-xs text-slate-500 mb-4">
                    <Calendar className="w-3.5 h-3.5 mr-1 text-slate-400" />
                    <span>{c.period}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {c.tags.map((t, idx) => (
                      <span key={idx} className="text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Guide */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white p-8 sm:p-12 rounded-3xl border border-slate-200">
          <div>
            <span className="text-xs font-bold text-cyan-600 uppercase">Cruise Media</span>
            <h3 className="text-2xl font-bold text-slate-900 mt-2 mb-4">처음 가는 크루즈 여행 완벽 가이드</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              복장, 기항지 투어, 선내 뷔페 및 공연 예약법까지 크루즈 여행 전 꼭 알아야 할 핵심 노하우를 영상으로 준비했습니다.
            </p>
          </div>
          <div>
            <VideoCard video={cruiseVideo} />
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </div>
  );
}
