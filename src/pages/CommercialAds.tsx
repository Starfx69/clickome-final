import { motion } from 'motion/react';
import { MonitorPlay, CheckCircle2, ArrowRight } from 'lucide-react';

export default function CommercialAds() {
  return (
    <main className="min-h-screen bg-brand-black text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="w-20 h-20 mx-auto rounded-full bg-brand-gold/10 flex items-center justify-center mb-8">
            <MonitorPlay className="w-10 h-10 text-brand-gold" />
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Commercial Ads</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            High-impact commercials designed for TV and digital platforms. We craft visually stunning advertisements that capture attention and drive action.
          </p>
        </motion.div>

        {/* Process Section */}
        <div className="mb-32">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">Our Production Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Strategy & Concept", desc: "Developing a creative concept and script that aligns perfectly with your campaign goals." },
              { step: "02", title: "Casting & Locations", desc: "Sourcing the perfect talent and settings to bring the creative vision to life." },
              { step: "03", title: "Production", desc: "Executing a high-end shoot with a full crew, cinema cameras, and professional lighting." },
              { step: "04", title: "Post & VFX", desc: "Editing, color grading, sound design, and visual effects for a polished final product." }
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
        <div className="mb-32">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">Featured Commercials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1535016120720-40c746a6580c?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1540655037529-dec9e15436f8?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1528109966604-5a6a4a964e8d?q=80&w=800&auto=format&fit=crop"
            ].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="aspect-video rounded-xl overflow-hidden group relative"
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
                </div>
                <img src={img} alt="Featured Commercial Video" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-brand-black bg-gradient-to-r from-brand-gold to-brand-gold-light rounded-full hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300"
          >
            Start a Commercial Project <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </main>
  );
}
