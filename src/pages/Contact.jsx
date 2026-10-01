import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { Phone, Mail, Clock, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const interestParam = searchParams.get('interest');

  // Map interest parameter to category string
  const categoryMap = {
    life: '라이프케어 (상조/전환)',
    insurance: '보험 보장분석',
    cruise: '여행먼저 크루즈',
    golf: '골프 레슨 콘텐츠',
    business: 'MAX BUSINESS 홍보영상',
  };

  const initialCategory = categoryMap[interestParam] || '라이프케어 (상조/전환)';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: initialCategory,
    time: '상관없음',
    message: '',
    agree: true
  });

  const [submitted, setSubmitted] = useState(false);

  // Update category if interestParam changes
  useEffect(() => {
    if (interestParam && categoryMap[interestParam]) {
      setFormData(prev => ({ ...prev, category: categoryMap[interestParam] }));
    }
  }, [interestParam]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('성함과 연락처를 입력해 주세요.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      
      {/* Banner */}
      <section className="bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="px-3 py-1 bg-amber-500/20 text-amber-300 text-xs font-bold rounded-full border border-amber-500/30 uppercase tracking-wider">
            FREE CONSULTATION
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            1:1 <span className="gold-gradient-text">무료 맞춤 상담 신청</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            관심 있는 분야를 선택해 상담 신청을 남겨주시면 전담 수석 상담사가 친절하게 안내해 드립니다.
          </p>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden grid grid-cols-1 md:grid-cols-12">
          
          {/* Left Info Panel */}
          <div className="md:col-span-5 bg-slate-900 text-white p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="text-amber-400 font-bold text-xs uppercase tracking-wider">Contact Info</span>
              <h3 className="text-2xl font-bold text-white mt-2 mb-6">맥스지사 영업 본부</h3>
              
              <div className="space-y-6 text-sm text-slate-300">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">대표 전화</strong>
                    {/* Placeholder phone number */}
                    <span>1544-XXXX (대표번호 주석: 준비중)</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">상담 가능 시간</strong>
                    <span>평일 09:00 ~ 18:00 (주말/공휴일은 온라인 접수만 가능)</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">이메일 문의</strong>
                    <span>contact@thejoeunmax.com</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-800 text-xs text-slate-400 space-y-2">
              <div className="flex items-center space-x-1.5 text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>개인정보 안전 보호 약속</span>
              </div>
              <p>입력하신 개인정보는 상담 목적으로만 안전하게 활용되며 제3자에게 절대 제공되지 않습니다.</p>
            </div>
          </div>

          {/* Right Form Panel */}
          <div className="md:col-span-7 p-8 sm:p-10">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">상담 신청이 완료되었습니다!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  접수해주신 <span className="font-bold text-amber-600">[{formData.category}]</span> 분야 내용을 바탕으로 전담 상담사가 빠른 시간 내에 연락드리겠습니다.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', phone: '', category: initialCategory, time: '상관없음', message: '', agree: true });
                  }}
                  className="mt-4 px-6 py-2.5 bg-slate-900 text-white font-bold text-xs rounded-xl hover:bg-slate-800"
                >
                  새로운 상담 신청하기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    관심 분야 선택 <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-semibold text-slate-900 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                  >
                    <option value="라이프케어 (상조/전환)">라이프케어 (더좋은하이브리드698 / 더좋은프리미엄540)</option>
                    <option value="보험 보장분석">보험 보장분석 & 신한라이프 맞춤설계</option>
                    <option value="여행먼저 크루즈">여행먼저 럭셔리 크루즈 여행</option>
                    <option value="골프 레슨 콘텐츠">골프 레슨 & 스윙 교정</option>
                    <option value="MAX BUSINESS 홍보영상">MAX BUSINESS 홍보영상 제작</option>
                    <option value="기타 문의">기타 제휴 및 통합 상담 문의</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      성함 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="홍길동"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      연락처 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="010-0000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    희망 상담 시간대
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-amber-500"
                  >
                    <option value="상관없음">상관없음 (빠른 시간 내)</option>
                    <option value="오전 (09:00 ~ 12:00)">오전 (09:00 ~ 12:00)</option>
                    <option value="오후 (13:00 ~ 18:00)">오후 (13:00 ~ 18:00)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    추가 문의사항 (선택)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="궁금하신 내용을 남겨주시면 더욱 정밀한 상담이 가능합니다."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="flex items-center space-x-2 text-xs text-slate-600">
                  <input
                    type="checkbox"
                    id="agree"
                    checked={formData.agree}
                    onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                    className="w-4 h-4 text-amber-500 rounded border-slate-300 focus:ring-amber-400"
                    required
                  />
                  <label htmlFor="agree">개인정보 수집 및 이용에 동의합니다.</label>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-base rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Send className="w-5 h-5" />
                  <span>무료 상담 신청하기</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
