import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ConsultationCTA from '../components/ConsultationCTA';
import VideoCard from '../components/VideoCard';
import { videosData } from '../data/videos';
import { Video, Building2, GraduationCap, Flag, Store, CheckCircle2 } from 'lucide-react';

export default function Business() {
  const businessVideo = videosData.find(v => v.id === 'vid-5') || videosData[4] || videosData[0];

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-bold rounded-full border border-purple-500/30">
            MAX BUSINESS MEDIA
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            비즈니스 <span className="gold-gradient-text">홍보영상 제작 솔루션</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            요양원, 요양교육원, 골프장, 자영업 사장님을 위한 유튜브 영상 기획 및 전문 제작 서비스.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div>
          <SectionTitle
            badge="제작 분야"
            title="MAX BUSINESS 전문 미디어 커버리지"
            subtitle="업종별 특성에 맞춘 고화질 영상 연출로 고객의 마음을 사로잡습니다."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
              <Building2 className="w-10 h-10 text-purple-600 mx-auto mb-3" />
              <h3 className="font-bold text-slate-900 text-base mb-1">요양원 홍보영상</h3>
              <p className="text-xs text-slate-500">시설 안전성, 케어 프로그램, 신뢰도 중심 연출</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
              <GraduationCap className="w-10 h-10 text-purple-600 mx-auto mb-3" />
              <h3 className="font-bold text-slate-900 text-base mb-1">요양교육원 홍보영상</h3>
              <p className="text-xs text-slate-500">수강생 모집, 커리큘럼 소개, 실습 현장 제작</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
              <Flag className="w-10 h-10 text-purple-600 mx-auto mb-3" />
              <h3 className="font-bold text-slate-900 text-base mb-1">골프장 홍보영상</h3>
              <p className="text-xs text-slate-500">드론 항공 촬영, 코스 전경, 클럽하우스 스케치</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
              <Store className="w-10 h-10 text-purple-600 mx-auto mb-3" />
              <h3 className="font-bold text-slate-900 text-base mb-1">자영업자 유튜브</h3>
              <p className="text-xs text-slate-500">매장 브랜딩, 대표 인터뷰, 숏폼/릴스 제작 지원</p>
            </div>
          </div>
        </div>

        {/* Video Example */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white p-8 sm:p-12 rounded-3xl border border-slate-200">
          <div>
            <span className="text-xs font-bold text-purple-600 uppercase">Production Portfolio</span>
            <h3 className="text-2xl font-bold text-slate-900 mt-2 mb-4">홍보영상 제작 실제 참고 샘플</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              실제 맥스 비즈니스 미디어팀이 기획·촬영·편집한 고품질 영상 샘플입니다. 유튜브 채널 마케팅까지 한 번에 지원해 드립니다.
            </p>
          </div>
          <div>
            <VideoCard video={businessVideo} />
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </div>
  );
}
