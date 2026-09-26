import { motion } from 'motion/react';
import { Users, Target, Award, Rocket } from 'lucide-react';

export default function About() {
  return (
    <main className="min-h-screen bg-brand-black text-white pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1)_0%,transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              About Clicko<span className="text-brand-gold">me.co</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              We are a premium creative agency dedicated to transforming brands through exceptional visual storytelling and strategic digital marketing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-brand-charcoal/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-brand-gold">Our Story</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Founded with a vision to redefine visual excellence, Clickome.co has grown into a full-service creative powerhouse. We believe that every brand has a unique story waiting to be told, and we have the tools, expertise, and passion to tell it in the most compelling way possible.
              </p>
              <p className="text-gray-300 leading-relaxed">
                From high-end commercial photography to cinematic videography and cutting-edge digital strategies, we provide end-to-end solutions that drive real business results.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" 
                  alt="Our Team Working" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-gold rounded-2xl -z-10 opacity-20 blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold tracking-widest text-brand-gold uppercase mb-4">What Drives Us</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">Our Core Values</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Target, title: "Precision", desc: "Attention to every pixel and every detail." },
              { icon: Rocket, title: "Innovation", desc: "Pushing the boundaries of creative technology." },
              { icon: Users, title: "Collaboration", desc: "Working as an extension of your team." },
              { icon: Award, title: "Excellence", desc: "Delivering nothing less than world-class quality." }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-gold/30 transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-brand-gold" />
                </div>
                <h4 className="text-xl font-display font-bold mb-3">{value.title}</h4>
                <p className="text-gray-400 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-32 bg-brand-charcoal/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold tracking-widest text-brand-gold uppercase mb-4">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-4">Contact Information</h3>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 text-gray-300 font-medium text-xl md:text-2xl">
            <a href="tel:+917757947008" className="hover:text-brand-gold transition-colors block text-center">
              <span className="block text-xs md:text-sm text-gray-500 mb-2 uppercase tracking-widest">Phone 1</span>
              +91 77579 47008
            </a>
            <span className="hidden md:inline text-brand-gold text-4xl">•</span>
            <a href="tel:+919518308824" className="hover:text-brand-gold transition-colors block text-center">
              <span className="block text-xs md:text-sm text-gray-500 mb-2 uppercase tracking-widest">Phone 2</span>
              +91 95183 08824
            </a>
            <span className="hidden md:inline text-brand-gold text-4xl">•</span>
            <a href="tel:+919158051045" className="hover:text-brand-gold transition-colors block text-center">
              <span className="block text-xs md:text-sm text-gray-500 mb-2 uppercase tracking-widest">Phone 3</span>
              +91 91580 51045
            </a>
            <span className="hidden md:inline text-brand-gold text-4xl">•</span>
            <a href="mailto:clickome.co@gmail.com" className="hover:text-brand-gold transition-colors block text-center">
              <span className="block text-xs md:text-sm text-gray-500 mb-2 uppercase tracking-widest">Email</span>
              clickome.co@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative z-10 overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-10">Ready to work with us?</h2>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-brand-black bg-gradient-to-r from-brand-gold to-brand-gold-light rounded-full hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </main>
  );
}
