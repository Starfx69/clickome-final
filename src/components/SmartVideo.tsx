import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Maximize2, Volume2 } from 'lucide-react';
import VideoModal from './VideoModal';

interface SmartVideoProps {
  src: string;
  poster?: string;
  title?: string;
  className?: string;
  aspectRatio?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  controls?: boolean;
  allowModalExpand?: boolean;
  onClick?: () => void;
}

export default function SmartVideo({
  src,
  poster,
  title,
  className = '',
  aspectRatio = 'aspect-[9/16]',
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  controls = false,
  allowModalExpand = true,
  onClick,
}: SmartVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Derive poster path if not explicitly provided (.mp4 -> .jpg)
  const posterSrc = poster || src.replace(/\.mp4$/i, '.jpg');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (!('IntersectionObserver' in window)) {
      // Fallback for legacy browsers without IntersectionObserver
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.1, // 10% visible in viewport
        rootMargin: '100px 0px 100px 0px', // preload slightly before entering viewport
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isIntersecting && autoPlay && !isModalOpen) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            setIsPlaying(false);
          });
      }
    } else {
      if (!video.paused) {
        video.pause();
        setIsPlaying(false);
      }
    }
  }, [isIntersecting, autoPlay, isModalOpen]);

  const handleContainerClick = (e: React.MouseEvent) => {
    if (onClick) onClick();

    if (allowModalExpand) {
      // Pause inline video preview and open standalone Video Modal with sound
      if (videoRef.current && !videoRef.current.paused) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
      setIsModalOpen(true);
    }
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <div
        ref={containerRef}
        onClick={handleContainerClick}
        className={`relative overflow-hidden bg-brand-charcoal cursor-pointer group ${aspectRatio} ${className}`}
      >
        {/* Poster Image (Displays immediately, preventing black screen) */}
        {posterSrc && (
          <img
            src={posterSrc}
            alt="Video thumbnail poster"
            loading="lazy"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 pointer-events-none ${
              isLoaded ? 'opacity-0' : 'opacity-100'
            }`}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        )}

        {/* Actual Video Element (Only rendered into DOM when near viewport) */}
        {isIntersecting && (
          <video
            ref={videoRef}
            src={src}
            poster={posterSrc}
            loop={loop}
            muted={muted}
            playsInline={playsInline}
            {...({ 'webkit-playsinline': 'true' } as any)}
            controls={controls}
            preload="metadata"
            onLoadedData={() => setIsLoaded(true)}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Center Hover / Touch Overlay */}
        {allowModalExpand && (
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center pointer-events-none">
            <div className="w-12 h-12 rounded-full bg-brand-black/70 backdrop-blur-md border border-brand-gold/40 flex items-center justify-center text-brand-gold group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-brand-black transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)]">
              <Play className="w-5 h-5 ml-0.5 fill-current" />
            </div>
          </div>
        )}

        {/* Inline play/pause quick toggle if modal expand is disabled */}
        {!allowModalExpand && !controls && isLoaded && (
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
            className="absolute bottom-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/90 opacity-80 hover:opacity-100 hover:scale-105 transition-all shadow-md"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 text-brand-gold" />
            ) : (
              <Play className="w-4 h-4 text-white ml-0.5" />
            )}
          </button>
        )}
      </div>

      {/* Standalone Fullscreen Video Player Modal */}
      {allowModalExpand && (
        <VideoModal
          isOpen={isModalOpen}
          src={src}
          title={title}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
