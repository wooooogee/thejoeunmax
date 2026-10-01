import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import VideoCard from '../components/VideoCard';
import ConsultationCTA from '../components/ConsultationCTA';

import { servicesData } from '../data/services';
import { videosData } from '../data/videos';
import { productsData } from '../data/products';
import { cruisesData } from '../data/cruises';
import { reviewsData } from '../data/reviews';

import { ArrowRight, Star, HeartHandshake, ShieldCheck, Ship, Trophy, Video, PlayCircle, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Service Quick Menu Section */}
      <section id="quick-menu" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="통합 솔루션"
          title="맥스지사 5대 핵심 라이프 & 비즈니스"
          subtitle="당신의 삶에 필요한 프리미엄 서비스와 맞춤 콘텐츠를 경험하세요."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* 3. MAX CLASS (Featured Video Content Section) */}
      <section className="py-16 md:py-24 bg-slate-950 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="MAX CLASS"
            title="영상으로 미리 보는 맞춤 미디어 콘텐츠"
            subtitle="궁금한 서비스를 영상으로 쉽고 명쾌하게 설명해 드립니다."
            light={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {videosData.slice(0, 3).map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/class"
              className="inline-flex items-center px-6 py-3 bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold rounded-xl border border-slate-800 transition-colors"
            >
              <span>더 많은 MAX CLASS 영상 보기</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Life Care Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold">
              <HeartHandshake className="w-4 h-4 text-blue-600" />
              <span>라이프케어 솔루션</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              상조부터 전환 혜택까지 <br />
              <span className="text-amber-600">더좋은 라이프 서비스</span>
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              더좋은하이브리드698과 더좋은프리미엄540을 통해 든든한 상조 보장은 물론, 웨딩/크루즈/골프 등 필요한 순간 원하는 서비스로 100% 라이프 전환이 가능합니다.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                to="/life/hybrid698"
                className="px-4 py-2.5 bg-slate-900 text-white font-bold text-xs rounded-xl hover:bg-slate-800 transition-colors"
              >
                더좋은하이브리드698
              </Link>
              <Link
                to="/life/premium540"
                className="px-4 py-2.5 bg-slate-100 text-slate-900 font-bold text-xs rounded-xl hover:bg-slate-200 transition-colors"
              >
                더좋은프리미엄540
              </Link>
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {productsData.filter(p => p.category === '라이프케어').map((prod) => (
              <div key={prod.id} className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 hover:border-amber-400 transition-colors">
                <span className="text-xs font-bold text-amber-600 bg-amber-100 px-2.5 py-0.5 rounded">{prod.name}</span>
                <h4 className="text-base font-bold text-slate-900 mt-2">{prod.tagline}</h4>
                <ul className="mt-3 space-y-1.5 text-xs text-slate-600">
                  {prod.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-emerald-600 shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link to={prod.link} className="mt-4 block text-xs font-bold text-slate-900 hover:text-amber-600">
                  상세보기 &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Insurance & Analysis Section */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-bold rounded-full mb-3">
                신한라이프 연계 보장분석
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold mb-4 leading-snug">
                새어나가는 보험료는 잡고 <br />
                <span className="gold-gradient-text">보장은 든든하게 MAX!</span>
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                복잡한 보험 증권도 간편하게 분석해 드립니다. 전문 보장분석 시스템을 통해 중복되는 보장은 줄이고, 꼭 필요한 보장 위주로 1:1 맞춤 설계를 제안합니다.
              </p>
              <div className="space-y-3 mb-8 text-xs sm:text-sm text-slate-200">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-5 h-5 text-amber-400" />
                  <span>신한라이프 맞춤 보험 설계 & 1:1 진단</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-5 h-5 text-amber-400" />
                  <span>암·뇌·심장 3대 질병 집중 보장 분석</span>
                </div>
              </div>
              <Link
                to="/insurance"
                className="inline-flex items-center px-6 py-3 bg-amber-400 text-slate-950 font-extrabold text-sm rounded-xl hover:bg-amber-300 transition-colors"
              >
                보험 보장분석 신청하기
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 space-y-4">
              <h4 className="text-lg font-bold text-amber-400">보장분석 대표 서비스</h4>
              <div className="p-4 bg-slate-900 rounded-xl border border-slate-700/80">
                <h5 className="font-bold text-white text-sm">1. 기존 가입 보험 전체 진단</h5>
                <p className="text-xs text-slate-400 mt-1">부족하거나 과다 청구되는 항목을 정밀하게 추출합니다.</p>
              </div>
              <div className="p-4 bg-slate-900 rounded-xl border border-slate-700/80">
                <h5 className="font-bold text-white text-sm">2. 맞춤형 리모델링 제안</h5>
                <p className="text-xs text-slate-400 mt-1">동일 보험료 대비 보장 범위를 최대화하는 포트폴리오를 제공합니다.</p>
              </div>
              <div className="p-4 bg-slate-900 rounded-xl border border-slate-700/80">
                <h5 className="font-bold text-white text-sm">3. 1:1 무료 상담 및 청구 지원</h5>
                <p className="text-xs text-slate-400 mt-1">전문 상담사가 직접 1:1로 가이드해드립니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Cruise Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="여행먼저 크루즈"
          title="꿈꾸던 럭셔리 크루즈 여행"
          subtitle="짐을 싸고 푸는 불편 없이, 바다 위 5성급 호텔에서 맞이하는 특별한 휴식."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cruisesData.map((c) => (
            <div key={c.id} className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100 flex flex-col justify-between">
              <div className="h-48 relative overflow-hidden">
                <img src={c.image} alt={c.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 right-3 px-2.5 py-1 bg-slate-900/90 text-amber-400 text-xs font-bold rounded">
                  {c.ship}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-blue-600">{c.destination}</span>
                  <h4 className="text-base font-bold text-slate-900 mt-1 mb-2">{c.title}</h4>
                  <p className="text-xs text-slate-500">{c.period}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-600">{c.price}</span>
                  <Link to="/cruise" className="text-xs font-bold text-slate-900 hover:text-amber-600">
                    상세 일정 &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Golf & MAX Business Section Grid */}
      <section className="py-16 md:py-24 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Golf */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-amber-100 text-amber-800 rounded-2xl flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded">골프 콘텐츠 & 레슨</span>
              <h3 className="text-2xl font-bold text-slate-900 mt-3 mb-2">골프 레슨 · 스윙 교정 미디어</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                골프 원포인트 레슨 영상부터 필드 가이드까지! 골퍼들을 위한 실용적인 콘텐츠를 감상하세요.
              </p>
            </div>
            <Link
              to="/golf"
              className="inline-flex items-center text-sm font-bold text-slate-900 hover:text-amber-600"
            >
              <span>골프 영상 둘러보기</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          {/* MAX BUSINESS */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-md border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-purple-500/20 text-purple-400 rounded-2xl flex items-center justify-center mb-4 border border-purple-500/30">
                <Video className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-purple-300 bg-purple-900/50 px-2.5 py-1 rounded">MAX BUSINESS</span>
              <h3 className="text-2xl font-bold text-white mt-3 mb-2">홍보영상 제작 솔루션</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                요양원, 요양교육원, 골프장, 자영업자를 위한 전문 고화질 유튜브 홍보영상 제작 및 미디어 마케팅 지원.
              </p>
            </div>
            <Link
              to="/business"
              className="inline-flex items-center text-sm font-bold text-amber-400 hover:text-amber-300"
            >
              <span>비즈니스 영상 제작 문의</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

        </div>
      </section>

      {/* 8. Customer Reviews Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="고객 후기"
          title="맥스지사 이용 고객들의 생생한 후기"
          subtitle="실제 서비스를 경험하신 고객님들의 솔직한 평가입니다."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviewsData.map((rev) => (
            <div key={rev.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex text-amber-400 space-x-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs text-slate-400">{rev.date}</span>
              </div>
              <h4 className="text-base font-bold text-slate-900">{rev.title}</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{rev.content}</p>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span className="font-semibold text-slate-700">{rev.author}</span>
                <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-600">{rev.serviceUsed}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Consultation CTA Section */}
      <ConsultationCTA />

    </div>
  );
}
