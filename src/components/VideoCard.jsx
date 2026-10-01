import React, { useState } from 'react';
import { Play, Clock, Eye, X } from 'lucide-react';

export default function VideoCard({ video }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-800 flex flex-col group hover:border-amber-400/50 transition-all duration-300">
        
        {/* Thumbnail Area */}
        <div 
          onClick={() => setIsPlaying(true)}
          className="relative h-48 sm:h-52 overflow-hidden bg-slate-950 cursor-pointer group/thumb"
        >
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-500 opacity-90 group-hover/thumb:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

          {/* Category Badge */}
          <span className="absolute top-3 left-3 px-2.5 py-1 text-xs font-bold bg-slate-900/90 text-amber-400 rounded-md backdrop-blur-sm border border-amber-400/30">
            {video.category}
          </span>

          {/* Duration Badge */}
          {video.duration && (
            <span className="absolute bottom-3 right-3 px-2 py-0.5 text-[11px] font-semibold bg-slate-950/80 text-slate-300 rounded flex items-center">
              <Clock className="w-3 h-3 mr-1 text-slate-400" />
              {video.duration}
            </span>
          )}

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-amber-400/90 text-slate-950 flex items-center justify-center shadow-xl group-hover/thumb:scale-110 group-hover/thumb:bg-amber-400 transition-all duration-300">
              <Play className="w-6 h-6 fill-slate-950 ml-1" />
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-2">
              {video.title}
            </h4>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
              {video.description}
            </p>
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center space-x-3">
              {video.views && (
                <span className="flex items-center">
                  <Eye className="w-3.5 h-3.5 mr-1 text-slate-400" />
                  조회수 {video.views}회
                </span>
              )}
            </div>
            <button
              onClick={() => setIsPlaying(true)}
              className="text-amber-400 font-bold hover:underline flex items-center"
            >
              <span>영상 시청</span>
              <Play className="w-3 h-3 ml-1 fill-amber-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal Player (Placeholder Ready for Real YouTube Embed) */}
      {isPlaying && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-950">
              <div>
                <span className="text-xs text-amber-400 font-bold uppercase">{video.category}</span>
                <h3 className="text-base font-bold text-white">{video.title}</h3>
              </div>
              <button
                onClick={() => setIsPlaying(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Video Container */}
            <div className="relative aspect-video bg-black flex items-center justify-center">
              {video.youtubeId ? (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="text-center p-8 text-slate-400">
                  <Play className="w-12 h-12 text-amber-400 mx-auto mb-3 animate-bounce" />
                  <p className="text-sm font-semibold text-white">향후 유튜브 ID 입력 시 영상이 자동 연동됩니다.</p>
                  <p className="text-xs text-slate-400 mt-1">현재 상태: 시청 모달 레이아웃 정상 동작 중</p>
                </div>
              )}
            </div>

            {/* Modal Footer Description */}
            <div className="p-4 bg-slate-900 border-t border-slate-800">
              <p className="text-xs sm:text-sm text-slate-300">{video.description}</p>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
