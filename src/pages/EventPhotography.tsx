import { motion } from 'motion/react';
import { Camera, ArrowRight } from 'lucide-react';
import ProcessSection from '../components/ProcessSection';

export default function EventPhotography() {
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
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-brand-gold uppercase bg-brand-gold/10 border border-brand-gold/30 rounded-full">
            Coming Soon
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold mb-6">Event Photography</h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            We are currently refining our event photography packages to bring you extraordinary coverage for corporate and private events. Stay tuned!
          </p>
        </motion.div>

        {/* Process Section with Horizontal Swiping on Mobile */}
        <ProcessSection
          title="Our Process"
          subtitle="Event Coverage"
          steps={[
            { step: "01", title: "Pre-Event Briefing", desc: "Understanding the schedule, key moments, VIPs, and the specific style of coverage you need." },
            { step: "02", title: "Coverage", desc: "Comprehensive documentation of the event, capturing everything from candid interactions to keynote speeches." },
            { step: "03", title: "Rapid Turnaround", desc: "Quick delivery of highlight images for immediate press releases or social media posting." },
            { step: "04", title: "Final Gallery", desc: "A complete, curated, and fully edited collection of high-resolution event photos." }
          ]}
        />

        {/* Coming Soon Announcement Banner */}
        <div className="mb-20 p-12 rounded-3xl bg-brand-charcoal border border-brand-gold/20 text-center max-w-4xl mx-auto shadow-[0_0_40px_rgba(212,175,55,0.08)]">
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-brand-gold">
            New Event Packages Launching Soon
          </h3>
          <p className="text-gray-300 max-w-xl mx-auto font-light leading-relaxed mb-6">
            We are curating custom event coverage plans for corporate galas, private celebrations, and brand launches. Contact us directly to reserve early event dates.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 text-xs font-bold text-brand-black bg-gradient-to-r from-brand-gold to-brand-gold-light rounded-full uppercase tracking-wider hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-all duration-300"
          >
            Inquire About Event Dates <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>

        <div className="text-center">
          <a
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-brand-black bg-gradient-to-r from-brand-gold to-brand-gold-light rounded-full hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300"
          >
            Book Event Coverage <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </main>
  );
}
