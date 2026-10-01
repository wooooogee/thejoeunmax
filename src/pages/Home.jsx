import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import VideoCard from '../components/VideoCard';
import MaxPicks from '../components/MaxPicks';
import ConsultationCTA from '../components/ConsultationCTA';

import { needsData } from '../data/services';
import { videosData } from '../data/videos';
import { productsData } from '../data/products';
import { cruisesData } from '../data/cruises';
import { consultingCasesData } from '../data/reviews';

import { 
  ArrowRight, 
  HeartHandshake, 
  ShieldCheck, 
  Ship, 
  Trophy, 
  Video, 
  PlayCircle, 
  CheckCircle2,
  HelpCircle,
  FileText,
  UserCheck,
  Zap,
  Layers
} from 'lucide-react';

const iconMap = {
  HeartHandshake: HeartHandshake,
  ShieldCheck: ShieldCheck,
  Ship: Ship,
  Trophy: Trophy,
  Video: Video,
};

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState('전체');

  // Filter videos based on category
  const filteredVideos = selectedFilter === '전체' 
    ? videosData 
    : videosData.filter(v => v.category === selectedFilter);

  const filterOptions = ['전체', '라이프케어', '보험', '크루즈', '골프', '비즈니스'];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Customer Needs Question Cards Section (#needs) */}
      <section id="needs" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="FIND YOUR INTEREST"
          title="지금 어떤 정보가 궁금하세요?"
          subtitle="상품명부터 찾지 않아도 괜찮습니다. 궁금한 분야부터 편하게 확인해보세요."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {needsData.map((item) => {
            const IconComponent = iconMap[item.icon] || HelpCircle;
            return (
              <div 
                key={item.id}
                className={`bg-white rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 border ${item.color} flex flex-col justify-between group transform hover:-translate-y-1`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 text-xs font-black rounded-full bg-slate-900 text-amber-400">
                      {item.categoryTag}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 leading-snug group-hover:text-slate-950">
                    "{item.question}"
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {item.relatedProducts && (
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {item.relatedProducts.map((p, idx) => (
                        <span key={idx} className="text-[11px] font-semibold bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-md">
                          ✓ {p}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={item.link}
                    className="inline-flex items-center text-sm font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors"
                  >
                    <span>[{item.btnText}]</span>
                    <ArrowRight className="w-4 h-4 ml-1 text-amber-500 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. MAX CLASS (Featured Video Content Section) [Moved right after Needs Selection] */}
      <section id="max-class" className="py-16 md:py-24 bg-slate-950 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionTitle
            badge="WATCH FIRST"
            title="설명 듣기 전에 영상으로 먼저 확인하세요"
            subtitle="복잡한 상품과 서비스를 짧은 영상으로 쉽게 설명합니다."
            light={true}
          />

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-2 mb-10">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setSelectedFilter(opt)}
                className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl border transition-all cursor-pointer ${
                  selectedFilter === opt
                    ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-md shadow-amber-400/20'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          {/* Video Grid (At least 4 videos) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/class"
              className="inline-flex items-center px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-amber-400 font-extrabold text-sm rounded-xl border border-slate-800 transition-colors"
            >
              <span>[MAX CLASS 전체보기]</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. MAX PICKS Section (Newly Added Editorial Section) */}
      <MaxPicks />

      {/* 5. Life Care Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold">
              <HeartHandshake className="w-4 h-4 text-blue-600" />
              <span>LIFE CARE</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              상조부터 100% 라이프 전환까지 <br />
              <span className="text-amber-600">더좋은 라이프케어 플랜</span>
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              더좋은하이브리드698과 더좋은프리미엄540을 통해 든든한 상조 보장은 물론, 원하는 라이프 서비스로 100% 자율 전환이 가능합니다.
            </p>
            
            {/* Custom Action Buttons for Life Care */}
            <div className="pt-4 flex flex-wrap gap-3">
              <Link
                to="/contact?interest=life"
                className="px-5 py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-xs rounded-xl shadow hover:brightness-110 transition-all"
              >
                [상품 구성 확인하기]
              </Link>
              <Link
                to="/life"
                className="px-5 py-3 bg-slate-900 text-white font-bold text-xs rounded-xl hover:bg-slate-800 transition-colors"
              >
                [두 상품 비교하기]
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {productsData.filter(p => p.category === '라이프케어').map((prod) => (
              <div key={prod.id} className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 hover:border-amber-400 transition-colors flex flex-col justify-between">
                <div>
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
                </div>
                <Link to={`/contact?interest=life`} className="mt-4 block text-xs font-bold text-slate-900 hover:text-amber-600">
                  상담 신청하기 &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Insurance Section */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-bold rounded-full mb-3 uppercase">
                INSURANCE
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold mb-4 leading-snug">
                내 보험, 제대로 가입되어 있을까요? <br />
                <span className="gold-gradient-text">신한라이프 1:1 보장분석</span>
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                매달 나가는 보험료 중 중복되는 항목은 줄이고, 부족한 암·뇌·심장 진단비 보장은 꼼꼼하게 채워드립니다.
              </p>
              
              {/* Differentiated CTA for Insurance */}
              <Link
                to="/contact?interest=insurance"
                className="inline-flex items-center px-6 py-3.5 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 text-slate-950 font-black text-sm rounded-xl shadow-lg hover:brightness-110 transition-all"
              >
                [무료 보장분석 신청]
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 space-y-4">
              <h4 className="text-lg font-bold text-amber-400">보장분석 핵심 점검 포인트</h4>
              <div className="p-4 bg-slate-900 rounded-xl border border-slate-700/80">
                <h5 className="font-bold text-white text-sm">1. 중복 가입 보험 정리</h5>
                <p className="text-xs text-slate-400 mt-1">쓸데없이 두 번 내는 보험료를 파악하여 절감해 드립니다.</p>
              </div>
              <div className="p-4 bg-slate-900 rounded-xl border border-slate-700/80">
                <h5 className="font-bold text-white text-sm">2. 3대 질병 진단비 보강</h5>
                <p className="text-xs text-slate-400 mt-1">암, 뇌혈관, 허혈성 심장질환 보장 범위 정밀 진단</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Cruise Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="text-xs font-bold text-cyan-600 uppercase tracking-wider">CRUISE</span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mt-1">
              여행 영상부터 출항 일정까지
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-3">
            <Link
              to="/cruise"
              className="px-4 py-2.5 bg-slate-900 text-white font-bold text-xs rounded-xl hover:bg-slate-800 transition-colors"
            >
              [출항 일정 확인하기]
            </Link>
            <Link
              to="/contact?interest=cruise"
              className="px-4 py-2.5 bg-amber-400 text-slate-950 font-black text-xs rounded-xl hover:bg-amber-300 transition-colors"
            >
              [크루즈 상담]
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cruisesData.map((c) => (
            <div key={c.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 flex flex-col justify-between">
              <div className="h-48 relative">
                <img src={c.image} alt={c.title} loading="lazy" className="w-full h-full object-cover" />
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
                  <Link to="/contact?interest=cruise" className="text-xs font-extrabold text-amber-600 hover:underline">
                    상담 문의 &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Golf & Business Section */}
      <section className="py-16 md:py-24 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Golf Card */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded">GOLF</span>
              <h3 className="text-2xl font-bold text-slate-900 mt-3 mb-2">골프 스윙 교정 & 레슨</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                드라이버 비거리 향상 및 원포인트 스윙 분석 영상 콘텐츠와 레슨 솔루션.
              </p>
            </div>
            <Link
              to="/contact?interest=golf"
              className="inline-flex items-center px-5 py-3 bg-slate-900 text-amber-400 font-black text-xs rounded-xl hover:bg-slate-800 transition-colors w-fit"
            >
              <span>[골프 레슨 상담]</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          {/* MAX BUSINESS Card */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-md border border-slate-800 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-purple-300 bg-purple-900/50 px-2.5 py-1 rounded">BUSINESS</span>
              <h3 className="text-2xl font-bold text-white mt-3 mb-2">사업자 유튜브 & 홍보영상 제작</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                요양원, 요양교육원, 골프장, 자영업 사장님을 위한 유튜브 영상 제작 및 브랜드 홍보.
              </p>
            </div>
            <Link
              to="/contact?interest=business"
              className="inline-flex items-center px-5 py-3 bg-amber-400 text-slate-950 font-black text-xs rounded-xl hover:bg-amber-300 transition-colors w-fit"
            >
              <span>[우리 사업장 영상 상담]</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

        </div>
      </section>

      {/* 9. CONSULTING CASE (Real Consulting Cases replacing generic fake reviews) */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="CONSULTING CASE"
          title="실제 상담 진행 사례"
          subtitle="고객님의 궁금증과 상황에 맞춰 진행된 1:1 맞춤 상담 사례입니다."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {consultingCasesData.map((c) => (
            <div key={c.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/90 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-black text-amber-600 bg-amber-100 px-2.5 py-0.5 rounded">
                    {c.caseNo}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold">{c.category}</span>
                </div>
                <h4 className="text-base font-bold text-slate-900 mt-2">{c.title}</h4>
                <p className="text-xs font-semibold text-slate-700 mt-1">{c.summary}</p>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">{c.details}</p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400">{c.date}</span>
                <Link to={`/contact?interest=${c.interestParam}`} className="font-bold text-slate-900 hover:text-amber-600">
                  유사 사례 상담신청 &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. WHY THE JOEUN MAX? (Value Proposition Section) */}
      <section className="py-16 md:py-24 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="WHY THE JOEUN MAX?"
            title="한 번에 판매하기보다 먼저 이해할 수 있도록 돕습니다."
            subtitle="THE JOEUN MAX가 고객과 소통하는 4가지 약속"
            light={true}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/80 text-left">
              <span className="text-2xl font-black text-amber-400 mb-2 block">01</span>
              <h4 className="font-bold text-white text-base mb-2">영상으로 먼저 확인</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                복잡한 설명을 상담받기 전 콘텐츠로 명쾌하게 미리 확인하실 수 있습니다.
              </p>
            </div>
            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/80 text-left">
              <span className="text-2xl font-black text-amber-400 mb-2 block">02</span>
              <h4 className="font-bold text-white text-base mb-2">관심 분야만 선택</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                필요 없는 상품까지 볼 필요 없이 나에게 진짜 필요한 서비스부터 확인합니다.
              </p>
            </div>
            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/80 text-left">
              <span className="text-2xl font-black text-amber-400 mb-2 block">03</span>
              <h4 className="font-bold text-white text-base mb-2">상담으로 바로 연결</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                영상으로 먼저 이해한 뒤 궁금한 부분만 1:1 맞춤 상담으로 해결합니다.
              </p>
            </div>
            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/80 text-left">
              <span className="text-2xl font-black text-amber-400 mb-2 block">04</span>
              <h4 className="font-bold text-white text-base mb-2">다양한 라이프 서비스</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                라이프케어부터 보험, 여행, 골프, 비즈니스 미디어까지 한곳에서 연결합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Final Integrated Consultation CTA */}
      <ConsultationCTA />

    </div>
  );
}
