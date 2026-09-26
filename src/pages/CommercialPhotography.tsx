import { motion } from 'motion/react';
import { Camera, ArrowRight } from 'lucide-react';
import ProcessSection from '../components/ProcessSection';

export default function CommercialPhotography() {
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
            <Camera className="w-10 h-10 text-brand-gold" />
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold mb-6">Commercial Photography</h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Striking visuals for advertising and marketing campaigns. We create compelling imagery that captures attention and drives results for your business.
          </p>
        </motion.div>

        {/* Process Section with Horizontal Swiping on Mobile */}
        <ProcessSection
          title="Our Process"
          subtitle="Commercial Projects"
          steps={[
            { step: "01", title: "Concept & Strategy", desc: "Aligning visual goals with your marketing objectives to ensure the imagery serves a clear purpose." },
            { step: "02", title: "Pre-Production", desc: "Handling all logistics including casting, location scouting, permits, and scheduling." },
            { step: "03", title: "Execution", desc: "A high-end commercial shoot managed by a full production team to capture the perfect shots." },
            { step: "04", title: "Post-Production", desc: "Advanced retouching, compositing, and formatting for various print and digital media." }
          ]}
        />

        {/* Featured Photography */}
        <div className="mb-32">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">Featured Commercial Work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "/food/Sparkling Apple Spice.png",
              "/product/Cap (5).png",
              "/food/cupcake 2 1.jpg",
              "/product/mug (15).png",
              "/food/Gourmet Cone.png",
              "/product/BIG TUMBLER (1).png"
            ].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="aspect-square rounded-xl overflow-hidden group"
              >
                <img src={img} alt="Featured Commercial Photography" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-brand-black bg-gradient-to-r from-brand-gold to-brand-gold-light rounded-full hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300"
          >
            Book a Commercial Shoot <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </main>
  );
}
