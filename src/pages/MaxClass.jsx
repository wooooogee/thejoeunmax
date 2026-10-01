import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ConsultationCTA from '../components/ConsultationCTA';
import VideoCard from '../components/VideoCard';
import { videosData } from '../data/videos';
import { PlayCircle, BookOpen, GraduationCap } from 'lucide-react';

export default function MaxClass() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded-full border border-amber-500/30">
            MAX CLASS ACADEMY
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            MAX CLASS <span className="gold-gradient-text">교육 & 설명 콘텐츠</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            상담받기 전! 상품 구조와 핵심 혜택을 5분 영상으로 시청하고 스마트하게 준비하세요.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="전체 영상 라이브러리"
          title="MAX CLASS 시청 가능한 영상 목록"
          subtitle="카테고리별 전문 영상을 선택하여 시청하실 수 있습니다."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videosData.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </section>

      <ConsultationCTA />
    </div>
  );
}
