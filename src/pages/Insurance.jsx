import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ConsultationCTA from '../components/ConsultationCTA';
import VideoCard from '../components/VideoCard';
import { videosData } from '../data/videos';
import { ShieldCheck, FileSearch, CheckCircle2, UserCheck, ArrowRight } from 'lucide-react';

export default function Insurance() {
  const insuranceVideo = videosData.find(v => v.id === 'vid-2') || videosData[1];

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-bold rounded-full border border-emerald-500/30">
            INSURANCE & ANALYSIS
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            보험 <span className="gold-gradient-text">보장분석 & 맞춤설계</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            신한라이프 연계 전문 설계사 1:1 맞춤 진단으로 중복 보장은 줄이고, 부족한 3대 질병 보장은 채우세요.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle
              badge="보장분석 프로세스"
              title="왜 전문 보장분석이 필요할까요?"
              subtitle="매달 납입하는 보험료 대비 실제로 꼭 필요한 보장을 받고 계신가요?"
              center={false}
            />
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-start space-x-3">
                <FileSearch className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900 text-base">전 가입 보험 일괄 분석</h4>
                  <p className="text-xs text-slate-600 mt-1">실손, 암, 뇌/심장, 운전자 보험 등 기존 증권 정밀 분석</p>
                </div>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-start space-x-3">
                <UserCheck className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900 text-base">1:1 신한라이프 연계 맞춤 설계</h4>
                  <p className="text-xs text-slate-600 mt-1">연령, 가족력, 직업군을 고려한 최적의 1:1 맞춤 포트폴리오 제공</p>
                </div>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-start space-x-3">
                <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900 text-base">보험금 청구 대행 및 사후관리</h4>
                  <p className="text-xs text-slate-600 mt-1">가입 후에도 사고/질병 발생 시 빠른 보험금 청구를 밀착 지원합니다.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-base font-bold text-slate-900 mb-3">
              📹 영상으로 알아보는 보험 보장분석
            </h3>
            <VideoCard video={insuranceVideo} />
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </div>
  );
}
