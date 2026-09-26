import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Camera, Video, MonitorSmartphone, Palette, CheckCircle2, ArrowRight } from 'lucide-react';
import SmartVideo from '../components/SmartVideo';
import ProcessSection from '../components/ProcessSection';

const heroBackgrounds = [
  "/weddings/DSC_3864.jpg",
  "/product/Chain Diamonds Close-up.png",
  "/food/Studio Lit Elixir.png",
  "/weddings/DSC_1601.jpg"
];

export default function Home() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroBackgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-brand-black text-white selection:bg-brand-gold/30">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 overflow-hidden">
        {/* Ambient Hero Background Image & Glow */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-gold/20 rounded-full blur-[150px] mix-blend-screen" />
          <img
            src="/weddings/DSC_3864.jpg"
            alt="Classy Clickome Hero Visual"
            className="w-full h-full object-cover opacity-25 filter contrast-110 saturate-125 pointer-events-none scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/60 via-brand-black/85 to-brand-black" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center my-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-brand-gold uppercase bg-brand-gold/10 border border-brand-gold/30 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.2)]">
              Premium Creative Agency
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-sans font-light tracking-tight mb-8 leading-[1.1]">
              Crafting Visual <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-gold-light font-medium">
                Experiences
              </span> That <br className="hidden md:block" />
              Elevate Brands
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-light"
          >
            Clickome.co provides high-end photography, videography, digital marketing, and design & printing services to help brands grow and stand out.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <a
              href="#portfolio"
              className="px-8 py-4 rounded-full border border-white/20 hover:border-brand-gold hover:bg-brand-gold/5 transition-all duration-300 font-medium text-sm tracking-wide uppercase"
            >
              View Our Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-brand-gold to-brand-gold-light text-brand-black font-semibold text-sm tracking-wide uppercase hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300"
            >
              Contact Us
            </a>
          </motion.div>


        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 relative z-10 bg-brand-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold tracking-widest text-brand-gold uppercase mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">Premium Services</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Camera className="w-8 h-8 text-brand-gold" />,
                title: "Photography",
                desc: "Professional photography for products, brands, commercial shoots, and events.",
                link: "/photography"
              },
              {
                icon: <Video className="w-8 h-8 text-brand-gold" />,
                title: "Videography",
                desc: "High-quality video production for branding, commercials, and products.",
                link: "/videography"
              },
              {
                icon: <MonitorSmartphone className="w-8 h-8 text-brand-gold" />,
                title: "Digital Marketing",
                desc: "Content creation, social media handling, and growth marketing.",
                link: "/digital-marketing"
              },
              {
                icon: <Palette className="w-8 h-8 text-brand-gold" />,
                title: "Designing & Printing",
                desc: "Creative solutions including packaging, T-shirt design, signage, and product prints.",
                link: "/designing",
                comingSoon: true
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative p-8 rounded-2xl bg-brand-black border border-white/5 hover:border-brand-gold/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      {service.icon}
                    </div>
                    {service.comingSoon && (
                      <span className="px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-gold bg-brand-gold/10 border border-brand-gold/30 rounded-full">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <h4 className="text-xl font-display font-bold mb-4">{service.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 h-20">
                    {service.desc}
                  </p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 text-sm font-medium text-brand-gold hover:text-brand-gold-light transition-colors"
                  >
                    Explore Service <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 relative z-10 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-brand-gold uppercase mb-4">Selected Works</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold">Our Portfolio</h3>
            </div>
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm font-medium hover:text-brand-gold transition-colors">
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                img: "/food/Blood Orange Mint Fizz.png",
                client: "Photography",
                desc: "Commercial, Product, Food, and Wedding Photography",
                link: "/photography"
              },
              {
                videoSrc: "/reels/anand resort vibe final.mp4",
                client: "Digital Marketing",
                desc: "Content Creation, Reels, and Social Media Management",
                link: "/digital-marketing"
              },
              {
                videoSrc: "/reels/Diamond reeel.mp4",
                client: "Videography",
                desc: "Reels, Commercial, and Cinematic Videography",
                link: "/videography"
              },
              {
                client: "Designing & Printing",
                desc: "Custom Apparel, Merchandise, Signage, and Packaging Design Studio",
                link: "/designing",
                comingSoon: true
              }
            ].map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link to={project.link} className="block group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-brand-charcoal border border-white/5 hover:border-brand-gold/30 transition-all duration-500">
                  {project.videoSrc ? (
                    <div className="w-full h-full relative overflow-hidden">
                      <SmartVideo
                        src={project.videoSrc}
                        aspectRatio="w-full h-full"
                        className="transition-all duration-700 group-hover:scale-110 group-hover:opacity-50"
                      />
                    </div>
                  ) : project.img ? (
                    <img
                      src={project.img}
                      alt={project.client}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-50"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-brand-charcoal via-brand-black to-brand-charcoal p-8 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-gold bg-brand-gold/10 border border-brand-gold/30 rounded-full">
                          Coming Soon
                        </span>
                      </div>
                      <div>
                        <h4 className="text-3xl font-display font-bold text-white mb-2 group-hover:text-brand-gold transition-colors">{project.client}</h4>
                        <p className="text-gray-400 text-sm font-light leading-relaxed">{project.desc}</p>
                      </div>
                    </div>
                  )}
                  {project.img || project.videoSrc ? (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                      <div className="absolute inset-0 p-8 flex flex-col justify-end">
                        <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                          <h4 className="text-2xl font-display font-bold mb-2 group-hover:text-brand-gold transition-colors duration-300">{project.client}</h4>
                          <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                            {project.desc}
                          </p>
                        </div>
                      </div>
                    </>
                  ) : null}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 relative z-10 bg-brand-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold tracking-widest text-white uppercase mb-4">The Clicko<span className="text-brand-gold">me.co</span> Advantage</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">Why Choose Clicko<span className="text-brand-gold">me.co</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Premium Visual Quality",
              "Creative Expertise",
              "Fast Delivery",
              "Business-Focused Approach"
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group flex flex-col items-center text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-brand-gold/5 hover:border-brand-gold/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]"
              >
                <div className="w-16 h-16 rounded-full bg-brand-black/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 border border-white/5 group-hover:border-brand-gold/30">
                  <CheckCircle2 className="w-8 h-8 text-brand-gold" />
                </div>
                <h4 className="text-lg font-display font-bold group-hover:text-brand-gold transition-colors duration-300">{feature}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-32 relative z-10 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6">
          <ProcessSection
            title="Our Process"
            subtitle="How We Work"
            steps={[
              { step: "01", title: "Consultation", desc: "Understanding your vision and goals." },
              { step: "02", title: "Planning", desc: "Strategizing the creative direction." },
              { step: "03", title: "Execution", desc: "Bringing ideas to life with precision." },
              { step: "04", title: "Delivery", desc: "Finalizing and launching the project." }
            ]}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-brand-purple/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/10 rounded-full blur-[120px]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-10">Let's Build Something Exceptional</h2>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-brand-black bg-gradient-to-r from-brand-gold to-brand-gold-light rounded-full hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative z-10 bg-brand-charcoal border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-brand-gold uppercase mb-4">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">Contact Us</h3>
            <p className="text-gray-400 text-lg mb-6">Have a project in mind? Let's create something powerful together.</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-gray-300 font-medium text-lg text-center">
              <a href="tel:+917757947008" className="hover:text-brand-gold transition-colors">+91 77579 47008</a>
              <span className="hidden md:inline text-brand-gold">•</span>
              <a href="tel:+919518308824" className="hover:text-brand-gold transition-colors">+91 95183 08824</a>
              <span className="hidden md:inline text-brand-gold">•</span>
              <a href="tel:+919158051045" className="hover:text-brand-gold transition-colors">+91 91580 51045</a>
              <span className="hidden md:inline text-brand-gold">•</span>
              <a href="mailto:clickome.co@gmail.com" className="hover:text-brand-gold transition-colors block md:inline mt-2 md:mt-0">clickome.co@gmail.com</a>
            </div>
          </div>

          <form className="space-y-6" action="https://formspree.io/f/meerpoep" method="POST">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-brand-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-brand-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full bg-brand-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors resize-none"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-4 rounded-full bg-gradient-to-r from-brand-gold to-brand-gold-light text-brand-black font-bold text-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
