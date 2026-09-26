import { motion, AnimatePresence } from 'motion/react';
import { X, QrCode, Sparkles, ExternalLink, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QRCodeModal({ isOpen, onClose }: QRCodeModalProps) {
  if (!isOpen) return null;

  const cardUrl = typeof window !== 'undefined' ? `${window.location.origin}/visiting-card` : "https://clickome.co/visiting-card";
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(cardUrl)}&color=D4AF37&bgcolor=121212`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative max-w-sm w-full bg-brand-charcoal border border-brand-gold/30 rounded-3xl p-8 text-center shadow-[0_0_50px_rgba(212,175,55,0.2)]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs uppercase font-semibold tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Digital Business Card
          </div>

          <h3 className="text-2xl font-display font-bold text-white mb-2">Scan QR Code</h3>
          <p className="text-gray-400 text-sm mb-6">
            Scan with your mobile camera to open Clickome.co official digital visiting card.
          </p>

          {/* QR Container */}
          <div className="p-4 bg-brand-black border border-brand-gold/30 rounded-2xl inline-block mb-6 shadow-inner">
            <img src={qrApiUrl} alt="Clickome QR Code" className="w-48 h-48 rounded-lg mx-auto" />
          </div>

          <div className="flex flex-col gap-3">
            <Link
              to="/visiting-card"
              onClick={onClose}
              className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-gradient-to-r from-brand-gold to-brand-gold-light text-brand-black font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all"
            >
              Open Digital Card <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
