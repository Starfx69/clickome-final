import { motion } from 'motion/react';
import { MonitorSmartphone, CheckCircle2, ArrowRight } from 'lucide-react';
import SmartVideo from '../components/SmartVideo';

export default function SocialMediaMarketing() {
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
            <MonitorSmartphone className="w-10 h-10 text-brand-gold" />
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold mb-6">Social Media Marketing</h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Data-driven paid campaigns designed to maximize reach and conversions. We turn your ad spend into measurable ROI.
          </p>
        </motion.div>

        {/* Process Section */}
        <div className="mb-20 md:mb-32">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">Our Marketing Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Campaign Strategy", desc: "Goal setting and targeting." },
              { step: "02", title: "Ad Creative", desc: "Visuals and copy creation." },
              { step: "03", title: "Launch & Optimization", desc: "Testing and optimization." },
              { step: "04", title: "Scaling & Reporting", desc: "Scaling and ROI reporting." }
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

        {/* Client Sliding Marquee */}
        <div className="mb-20 md:mb-32 overflow-hidden border-y border-white/5 py-12 relative bg-brand-charcoal/50">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-black to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-black to-transparent z-10" />
          
          <h2 className="text-xl md:text-2xl font-display font-semibold mb-10 text-center text-gray-400">Our Clients</h2>
          
          <div className="flex w-max animate-marquee">
            {[...Array(2)].map((_, arrayIdx) => (
              <div key={arrayIdx} className="flex gap-8 md:gap-16 px-4 md:px-8 items-center">
                {["Ideal", "Resort", "Ocean", "Heavens", "Miracle", "Furtado"].map((client, idx) => (
                  <div key={idx} className="text-2xl md:text-4xl font-display font-bold text-white/20 hover:text-brand-gold transition-colors duration-300 whitespace-nowrap">
                    {client}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Featured Work */}
        <div className="mb-20 md:mb-32">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">Marketing Insights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { type: 'image', src: "/screenshot-sm/ss1.png" },
              { type: 'image', src: "/screenshot-sm/IMG_2626.png" },
              { type: 'image', src: "/screenshot-sm/IMG_2627.png" },
              { type: 'image', src: "/screenshot-sm/IMG_2629.png" },
              { type: 'image', src: "/screenshot-sm/IMG_2630.png" },
              { type: 'image', src: "/screenshot-sm/ideal.png" },
              { type: 'image', src: "/screenshot-sm/key.png" }
            ].map((media, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="aspect-[9/16] rounded-xl overflow-hidden group relative bg-brand-charcoal border border-white/10"
              >
                {media.type === 'video' ? (
                  <SmartVideo
                    src={media.src}
                    aspectRatio="aspect-[9/16]"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img src={media.src} alt="Instagram Screenshot" className="w-full h-full object-contain p-2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-brand-black bg-gradient-to-r from-brand-gold to-brand-gold-light rounded-full hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300"
          >
            Start a Campaign <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </main>
  );
}
