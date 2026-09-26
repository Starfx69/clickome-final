import { motion } from 'motion/react';
import { MonitorSmartphone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SmartVideo from '../components/SmartVideo';

export default function DigitalMarketing() {
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
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold mb-6">Digital Marketing</h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Content creation, social media handling, and growth marketing. We build strategies that drive engagement and ROI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 md:mb-32">
          {[
            { title: "Content Creation", desc: "Engaging, high-quality content tailored for your target audience across all platforms.", link: "/content-creation" },
            { title: "Social Media Marketing & Handling", desc: "Data-driven campaigns and comprehensive management to maximize reach and community loyalty.", link: "/social-media-marketing" }
          ].map((service, idx) => {
            const CardContent = (
              <>
                <h3 className="text-2xl font-display font-bold mb-4 text-brand-gold">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
              </>
            );

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                {service.link ? (
                  <Link
                    to={service.link}
                    className="block p-8 rounded-2xl bg-brand-charcoal border border-white/5 hover:border-brand-gold/30 transition-colors h-full"
                  >
                    {CardContent}
                  </Link>
                ) : (
                  <div className="p-8 rounded-2xl bg-brand-charcoal border border-white/5 hover:border-brand-gold/30 transition-colors h-full">
                    {CardContent}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="mb-20 md:mb-32">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">Featured Digital Marketing</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { type: 'video', src: "/reels/anand resort vibe final.mp4" },
              { type: 'image', src: "/screenshot-sm/mt.png" },
              { type: 'image', src: "/screenshot-sm/os.png" },
              { type: 'video', src: "/reels/resort aug 1 final.mp4" },
              { type: 'video', src: "/reels/new 1 reel.mp4" },
              { type: 'video', src: "/reels/reel aesthetic wed.mp4" }
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
                  <img src={media.src} alt="Instagram Screenshot" className="w-full h-full object-cover" />
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
            Grow Your Brand <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </main>
  );
}
