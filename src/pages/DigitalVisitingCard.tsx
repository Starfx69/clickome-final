import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Camera, Mail, Instagram, Globe, Phone, Download, Share2, Sparkles, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DigitalVisitingCard() {
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("https://clickome.co/visiting-card");
  const [websiteUrl, setWebsiteUrl] = useState("https://clickome.co");

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
      setWebsiteUrl(window.location.origin);
    }
  }, []);

  const cardData = {
    name: "Clickome.co",
    role: "Visual Media & Creative Agency",
    email: "clickome.co@gmail.com",
    instagram: "https://www.instagram.com/clickome.co?igsh=OXUwem5tN2l5dTd6",
    website: websiteUrl,
  };

  // Generate vCard data string for contact download
  const handleDownloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Clickome.co
ORG:Clickome.co Creative Agency
TITLE:Visual Media & Creative Agency
EMAIL;TYPE=INTERNET,HOME:${cardData.email}
URL:${cardData.website}
X-SOCIALPROFILE;type=instagram:https://www.instagram.com/clickome.co
NOTE:High-End Photography, Videography, Digital Marketing & Design Services
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Clickome_Contact.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = async () => {
    const shareUrl = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Clickome.co - Digital Visiting Card',
          text: 'Check out Clickome.co Digital Business Card',
          url: shareUrl,
        });
      } catch (e) {
        console.log(e);
      }
    } else {
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(currentUrl)}&color=D4AF37&bgcolor=121212`;

  return (
    <main className="min-h-screen bg-brand-black text-white pt-32 pb-20 flex items-center justify-center px-4">
      <div className="max-w-md w-full relative">
        {/* Ambient Glow */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-brand-gold/15 rounded-full blur-[100px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 bg-brand-charcoal/90 backdrop-blur-xl border border-brand-gold/30 rounded-3xl p-8 shadow-[0_0_50px_rgba(212,175,55,0.15)] text-center overflow-hidden"
        >
          {/* Top Brand Banner Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs uppercase font-semibold tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" /> Official Digital Card
          </div>

          {/* Logo & Agency Header */}
          <div className="w-24 h-24 mx-auto rounded-full bg-brand-black border-2 border-brand-gold/40 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
            <Camera className="w-12 h-12 text-brand-gold" />
          </div>

          <h1 className="text-3xl font-display font-bold mb-1">
            Clicko<span className="text-brand-gold">me.co</span>
          </h1>
          <p className="text-brand-gold text-xs font-semibold uppercase tracking-wider mb-6">
            {cardData.role}
          </p>

          <p className="text-gray-300 text-sm font-light leading-relaxed mb-8 border-b border-white/10 pb-6">
            Crafting Visual Experiences That Elevate Brands. High-End Photography, Videography, Digital Marketing & Design.
          </p>

          {/* QR Code Section */}
          <div className="my-6 p-4 rounded-2xl bg-brand-black/80 border border-white/10 flex flex-col items-center">
            <p className="text-xs text-gray-400 mb-3 tracking-wide uppercase font-medium">Scan to Share / Save Card</p>
            <div className="p-3 bg-brand-black border border-brand-gold/30 rounded-xl shadow-inner mb-2">
              <img src={qrApiUrl} alt="Clickome Digital Visiting Card QR Code" className="w-44 h-44 rounded-lg" />
            </div>
            <span className="text-[11px] text-gray-500">Scan using smartphone camera</span>
          </div>

          {/* Contact Details List */}
          <div className="space-y-3 text-left mb-8">
            <a
              href={`mailto:${cardData.email}`}
              className="flex items-center gap-4 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-brand-gold/30 hover:bg-brand-gold/5 transition-all text-sm group"
            >
              <div className="w-9 h-9 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
                <Mail className="w-4 h-4" />
              </div>
              <span className="text-gray-200 group-hover:text-brand-gold transition-colors font-medium truncate">
                {cardData.email}
              </span>
            </a>

            <a
              href={cardData.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-brand-gold/30 hover:bg-brand-gold/5 transition-all text-sm group"
            >
              <div className="w-9 h-9 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
                <Instagram className="w-4 h-4" />
              </div>
              <span className="text-gray-200 group-hover:text-brand-gold transition-colors font-medium">
                @clickome.co
              </span>
            </a>

            <Link
              to="/"
              className="flex items-center gap-4 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-brand-gold/30 hover:bg-brand-gold/5 transition-all text-sm group"
            >
              <div className="w-9 h-9 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
                <Globe className="w-4 h-4" />
              </div>
              <span className="text-gray-200 group-hover:text-brand-gold transition-colors font-medium">
                www.clickome.co
              </span>
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={handleDownloadVCard}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-gradient-to-r from-brand-gold to-brand-gold-light text-brand-black font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all"
            >
              <Download className="w-4 h-4" /> Save Contact
            </button>

            <button
              onClick={handleShare}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-brand-black border border-brand-gold/40 text-brand-gold font-bold text-xs uppercase tracking-wider hover:bg-brand-gold/10 transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-400" /> Copied!
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4" /> Share Card
                </>
              )}
            </button>
          </div>

          <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-500">
            <Link to="/" className="hover:text-brand-gold transition-colors flex items-center gap-1">
              Visit Full Website <ArrowRight className="w-3 h-3" />
            </Link>
            <span>&copy; Clickome.co</span>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
