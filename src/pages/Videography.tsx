import { motion } from 'motion/react';
import { Video, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SmartVideo from '../components/SmartVideo';

export default function Videography() {
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
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold mb-6">Videography</h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            High-quality video production for branding and products. We create cinematic visuals that engage and inspire.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 md:mb-32 max-w-4xl mx-auto">
          {[
            { title: "Brand Videos", desc: "Compelling brand stories that connect with your audience on an emotional level.", link: "/brand-videos" },
            { title: "Product Videos", desc: "Dynamic product showcases that highlight features and drive conversions.", link: "/product-videos" }
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
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">Featured Videography</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "/reels/BTS clickome.mp4",
              "/reels/Diamond reeel.mp4",
              "/reels/anand resort vibe final.mp4",
              "/reels/reel aesthetic wed.mp4",
              "/food/Mocktail.mp4",
              "/food/final ice -1.mp4",
              "/product/clickome.co aug.mp4",
              "/reels/resort aug 1 final.mp4"
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
            Start a Video Project <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </main>
  );
}
