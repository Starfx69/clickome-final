import { motion } from 'motion/react';
import { Video, CheckCircle2, ArrowRight } from 'lucide-react';
import SmartVideo from '../components/SmartVideo';

export default function ProductVideos() {
  return (
    <main className="min-h-screen bg-brand-black text-white pt-24 md:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <div className="w-20 h-20 mx-auto rounded-full bg-brand-gold/10 flex items-center justify-center mb-8">
            <Video className="w-10 h-10 text-brand-gold" />
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold mb-6">Product Videos</h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Dynamic product showcases that highlight features and drive conversions. We create engaging videos that make your products irresistible.
          </p>
        </motion.div>

        {/* Process Section */}
        <div className="mb-20 md:mb-32">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">Our Production Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Concept & Storyboarding", desc: "Planning the visual flow to highlight key features, benefits, and the unique selling proposition." },
              { step: "02", title: "Studio Setup", desc: "Designing custom sets, lighting, and styling specifically tailored for your product." },
              { step: "03", title: "Filming", desc: "Capturing high-quality footage, including macro shots, slow-motion, and dynamic movements." },
              { step: "04", title: "Editing & Graphics", desc: "Adding motion graphics, text overlays, and a compelling soundtrack to drive engagement." }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-brand-charcoal border border-white/5 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 -mt-4 -mr-4 text-8xl font-display font-bold text-white/5 group-hover:text-brand-gold/5 transition-colors duration-500">
                  {item.step}
                </div>
                <CheckCircle2 className="w-8 h-8 text-brand-gold mb-6 relative z-10" />
                <h3 className="text-xl font-bold mb-4 relative z-10">{item.title}</h3>
                <p className="text-gray-400 relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Featured Work */}
        <div className="mb-20 md:mb-32">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">Featured Product Videos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "/product/clickome.co aug.mp4",
              "/food/final ice -1.mp4",
              "/food/Mocktail.mp4",
              "/reels/Diamond reeel.mp4",
              "/reels/BTS clickome.mp4",
              "/reels/bts ocean shop 1-1.mp4"
            ].map((videoSrc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="aspect-[9/16] rounded-xl overflow-hidden group relative bg-brand-charcoal border border-white/10"
              >
                <SmartVideo
                  src={videoSrc}
                  aspectRatio="aspect-[9/16]"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-brand-black bg-gradient-to-r from-brand-gold to-brand-gold-light rounded-full hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300"
          >
            Start a Product Video <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </main>
  );
}
