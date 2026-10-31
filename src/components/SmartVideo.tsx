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
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Derive poster path if not explicitly provided (.mp4 -> .jpg)
  const posterSrc = poster || src.replace(/\.mp4$/i, '.jpg');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (!('IntersectionObserver' in window)) {
      setShouldLoad(true);
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting) {
          setShouldLoad(true);
        }
      },
      {
        threshold: 0.05,
        rootMargin: '500px 0px 500px 0px', // preload well before entering viewport
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Ensure DOM element has muted=true for iOS / Safari autoPlay policies
  useEffect(() => {
    if (videoRef.current && muted) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
    }
  }, [shouldLoad, muted]);

  // Handle play/pause based on intersection and modal state
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad) return;

    if (isIntersecting && autoPlay && !isModalOpen) {
      // Check readyState immediately in case video is already buffered
      if (video.readyState >= 2) {
        setIsLoaded(true);
      }

      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setIsLoaded(true);
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
  }, [isIntersecting, autoPlay, isModalOpen, shouldLoad]);

  const handleVideoReady = () => {
    setIsLoaded(true);
  };

  const handleContainerClick = (e: React.MouseEvent) => {
    if (onClick) onClick();

    if (allowModalExpand) {
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
        {/* Poster Image (Displays immediately with zero delay, preventing black screens) */}
        {posterSrc && (
          <img
            src={posterSrc}
            alt={title || "Video thumbnail poster"}
            loading="eager"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 pointer-events-none ${
              isLoaded ? 'opacity-0' : 'opacity-100'
            }`}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
        )}

        {/* Video Element: Mounted once near viewport and stays in DOM to retain buffered data */}
        {shouldLoad && (
          <video
            ref={videoRef}
            src={src}
            poster={posterSrc}
            loop={loop}
            muted={muted}
            playsInline={playsInline}
            preload="metadata"
            {...({
              'webkit-playsinline': 'true',
              'x5-playsinline': 'true',
            } as any)}
            controls={controls}
            onLoadedData={handleVideoReady}
            onCanPlay={handleVideoReady}
            onPlaying={() => {
              handleVideoReady();
              setIsPlaying(true);
            }}
            onPause={() => setIsPlaying(false)}
            onTimeUpdate={(e) => {
              if (e.currentTarget.currentTime > 0) {
                handleVideoReady();
              }
            }}
            onError={() => {
              console.warn(`SmartVideo failed to play: ${src}`);
              setIsLoaded(false);
            }}
            className={`w-full h-full object-cover transition-opacity duration-500 group-hover:scale-105 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Center Hover / Touch Overlay */}
        {allowModalExpand && (
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center pointer-events-none">
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
