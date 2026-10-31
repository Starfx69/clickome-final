import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Palette, ArrowRight } from 'lucide-react';

export default function Designing() {
  const [activeTab, setActiveTab] = useState<'designing' | 'printing'>('designing');

  return (
    <main className="min-h-screen bg-brand-black text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="w-20 h-20 mx-auto rounded-full bg-brand-gold/10 flex items-center justify-center mb-6">
            <Palette className="w-10 h-10 text-brand-gold" />
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Designing & Printing</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Creative solutions including packaging, T-shirt design, signage, branding, and high-quality physical prints. We craft visual identities that leave a lasting impression.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveTab('designing')}
              className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${
                activeTab === 'designing'
                  ? 'bg-gradient-to-r from-brand-gold to-brand-gold-light text-brand-black shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                  : 'bg-brand-charcoal text-white hover:bg-brand-gold/10 hover:text-brand-gold border border-white/5'
              }`}
            >
              Designing
            </button>
            <button
              onClick={() => setActiveTab('printing')}
              className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${
                activeTab === 'printing'
                  ? 'bg-gradient-to-r from-brand-gold to-brand-gold-light text-brand-black shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                  : 'bg-brand-charcoal text-white hover:bg-brand-gold/10 hover:text-brand-gold border border-white/5'
              }`}
            >
              Printing
            </button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === 'designing' ? (
            <motion.div
              key="designing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="mb-32">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">Featured Designs</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    "/Design-20260926T055923Z-1-001/Design/THE%20LAST%20CASE%20-%20Roshni%20Lopes%20(Cover).png",
                    "/Design-20260926T055923Z-1-001/Design/20%20by%2020.jpeg",
                    "/Design-20260926T055923Z-1-001/Design/Brochure%20FRONT%20PAGE.jpg",
                    "/Design-20260926T055923Z-1-001/Design/Brochure%20Back%20PAGE.jpg",
                    "/Design-20260926T055923Z-1-001/Design/standee%201.jpg",
                    "/Design-20260926T055923Z-1-001/Design/standee%202.jpg",
                    "/Design-20260926T055923Z-1-001/Design/standee%203.jpg",
                    "/Design-20260926T055923Z-1-001/Design/standee%204.jpg"
                  ].map((img, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.98 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "120px" }}
                      transition={{ duration: 0.3, delay: idx * 0.03, ease: "easeOut" }}
                      className="rounded-xl overflow-hidden group bg-brand-charcoal/30 border border-white/5 flex items-center justify-center p-4"
                    >
                      {img.toLowerCase().endsWith('.pdf') ? (
                        <embed src={img} type="application/pdf" className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" />
                      ) : (
                        <img src={img} alt="Featured Design" loading="lazy" decoding="async" className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105" />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="printing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="mb-20 p-16 rounded-3xl bg-brand-charcoal border border-brand-gold/20 text-center max-w-4xl mx-auto shadow-[0_0_40px_rgba(212,175,55,0.08)]">
                <span className="inline-block px-6 py-2 mb-6 text-sm font-semibold tracking-widest text-brand-gold uppercase bg-brand-gold/10 border border-brand-gold/30 rounded-full">
                  Coming Soon
                </span>
                <h3 className="text-3xl md:text-5xl font-display font-bold text-brand-gold mb-6">
                  Premium Printing Services
                </h3>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                  We are currently setting up our state-of-the-art printing facilities to bring your digital designs into the physical world with uncompromising quality. Stay tuned!
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="text-center">
          <a
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-brand-black bg-gradient-to-r from-brand-gold to-brand-gold-light rounded-full hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300"
          >
            Start Designing <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </main>
  );
}
