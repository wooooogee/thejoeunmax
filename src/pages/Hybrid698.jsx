import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import ConsultationCTA from '../components/ConsultationCTA';
import VideoCard from '../components/VideoCard';
import { videosData } from '../data/videos';
import { ShieldCheck, HeartHandshake, CheckCircle2, ArrowRight, PlayCircle } from 'lucide-react';

export default function Hybrid698() {
  const hybridVideo = videosData.find(v => v.id === 'vid-1') || videosData[0];

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Banner */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded-full border border-amber-500/30">
            PREMIUM HYBRID
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            더좋은<span className="gold-gradient-text">하이브리드698</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            상조 혜택은 기본! 원하는 라이프 스타일 서비스로 자유롭게 전환 가능한 든든한 프리미엄 하이브리드 솔루션입니다.
          </p>
        </div>
      </section>

      {/* Main Details */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle
              badge="상품 포인트"
              title="왜 더좋은하이브리드698인가요?"
              subtitle="완벽한 장례 지원과 풍부한 전환 서비스 혜택"
              center={false}
            />
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-200 flex items-start space-x-3">
                <ShieldCheck className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900 text-base">전문 장례지도사 1:1 밀착 전담 케어</h4>
                  <p className="text-xs text-slate-600 mt-1">24시간 365일 긴급 출동 및 전국 협력 장례식장 맞춤 케어 시스템 제공</p>
                </div>
              </div>
              <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-200 flex items-start space-x-3">
                <HeartHandshake className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900 text-base">크루즈 / 웨딩 / 골프 / 연수 전환</h4>
                  <p className="text-xs text-slate-600 mt-1">장례 서비스 미이용 시 원하는 라이프케어 서비스로 100% 가치 전환</p>
                </div>
              </div>
              <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-200 flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900 text-base">만기 시 100% 환급 혜택 안내</h4>
                  <p className="text-xs text-slate-600 mt-1">서비스 미사용 상태 만기 도달 시 납입 금액 전액 환급 가능 플랜</p>
                </div>
              </div>
            </div>
          </div>

          {/* Video Demonstration Card */}
          <div>
            <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center">
              <PlayCircle className="w-5 h-5 text-amber-500 mr-2" />
              영상으로 먼저 알아보는 하이브리드698
            </h3>
            <VideoCard video={hybridVideo} />
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </div>
  );
}
