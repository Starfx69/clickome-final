import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Volume2, Maximize2 } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  src: string | null;
  title?: string;
  onClose: () => void;
}

export default function VideoModal({ isOpen, src, title, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Auto play unmuted when modal opens
      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.play().catch(() => {
          // Autoplay with sound might require user gesture on iOS, so fallback to muted if blocked
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch(() => {});
          }
        });
      }
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !src) return null;

  const posterSrc = src.replace(/\.mp4$/i, '.jpg');

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/90 backdrop-blur-2xl cursor-pointer"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-xl md:max-w-2xl bg-brand-charcoal border border-brand-gold/30 rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.9)] flex flex-col max-h-[90vh]"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-brand-black/80 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                <Volume2 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold font-display text-white">
                  {title || "Clickome.co Reel"}
                </h3>
                <span className="text-[10px] text-gray-400 font-medium">Playing with Audio</span>
              </div>
            </div>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-gold hover:text-brand-black transition-colors flex items-center justify-center text-white font-bold"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Video Player Container */}
          <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden aspect-[9/16] max-h-[70vh] mx-auto w-full">
            <video
              ref={videoRef}
              src={src}
              poster={posterSrc}
              controls
              autoPlay
              playsInline
              {...({ 'webkit-playsinline': 'true' } as any)}
              loop
              className="w-full h-full object-contain"
            />
          </div>

          {/* Footer Bar */}
          <div className="p-4 bg-brand-black/90 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
            <span className="flex items-center gap-1.5 text-brand-gold font-medium">
              <Maximize2 className="w-3.5 h-3.5" /> Tap video controls to expand or adjust volume
            </span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
