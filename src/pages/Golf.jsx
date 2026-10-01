import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ConsultationCTA from '../components/ConsultationCTA';
import VideoCard from '../components/VideoCard';
import { videosData } from '../data/videos';
import { Trophy, Target, PlayCircle, CheckCircle2 } from 'lucide-react';

export default function Golf() {
  const golfVideo = videosData.find(v => v.id === 'vid-4') || videosData[3] || videosData[0];

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded-full border border-amber-500/30">
            MAX GOLF ACADEMY
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            골프 레슨 & <span className="gold-gradient-text">스윙 교정 미디어</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            원포인트 스윙 분석 노하우와 드라이버 비거리 향상을 위한 전문 골프 미디어 콘텐츠를 만나보세요.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle
              badge="골프 콘텐츠 솔루션"
              title="실력을 업그레이드하는 골프 팁"
              subtitle="초보 골퍼부터 아마추어 고수까지 만족하는 맞춤 가이드"
              center={false}
            />
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-start space-x-3">
                <Target className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900 text-base">원포인트 스윙 교정 레슨</h4>
                  <p className="text-xs text-slate-600 mt-1">슬라이스 방지, 타격 자율 정렬, 백스윙 체중 이동 핵심 팁</p>
                </div>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-start space-x-3">
                <Trophy className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900 text-base">골프장 필드 가이드 & 라운딩 영상</h4>
                  <p className="text-xs text-slate-600 mt-1">국내외 주요 골프장 코스 공략법 및 필드 전경 영상 제공</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center">
              <PlayCircle className="w-5 h-5 text-amber-500 mr-2" />
              골프 추천 레슨 영상
            </h3>
            <VideoCard video={golfVideo} />
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </div>
  );
}
