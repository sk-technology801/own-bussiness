'use client';
import { motion } from 'framer-motion';
import { Code2, Smartphone, BarChart4, Cloud, Paintbrush, Shield } from 'lucide-react';

const services = [
  { title: 'Web Development', icon: <Code2 size={32} />, description: 'Custom websites & apps with high performance and clean code.' },
  { title: 'Mobile Apps', icon: <Smartphone size={32} />, description: 'Build native & hybrid mobile experiences that scale globally.' },
  { title: 'UI/UX Design', icon: <Paintbrush size={32} />, description: 'Intuitive user experiences and modern design systems.' },
  { title: 'Cloud Services', icon: <Cloud size={32} />, description: 'Deploy & scale apps using AWS, Vercel, DigitalOcean & more.' },
  { title: 'Data Analytics', icon: <BarChart4 size={32} />, description: 'Turn raw data into real-time insights & visualizations.' },
  { title: 'Cyber Security', icon: <Shield size={32} />, description: 'Security audits, encryption, and safe deployment pipelines.' },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0f0c29] text-white px-6 py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-96 h-96 bg-[#e94560] opacity-20 blur-3xl rounded-full top-[-100px] left-[-100px] animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-[#302b63] opacity-20 blur-2xl rounded-full bottom-[-100px] right-[-100px] animate-ping"></div>
      </div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold text-center neon-glow mb-16"
      >
        Our <span className="text-[#e94560]">Services</span>
      </motion.h1>

      {/* Service Cards */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group relative p-[2px] rounded-xl bg-gradient-to-br from-[#e94560] to-[#302b63] hover:shadow-[0_0_30px_#e94560] transition"
          >
            <div className="bg-[#0f0c29] p-6 rounded-[10px] flex flex-col gap-4 group-hover:-translate-y-2 group-hover:scale-[1.02] transition-transform duration-300">
              <div className="w-14 h-14 rounded-full bg-[#e9456033] flex items-center justify-center text-[#e94560]">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-sm text-white/80 leading-relaxed">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Why Choose Us */}
      <section className="max-w-5xl mx-auto text-center mb-28">
        <h2 className="text-4xl font-bold mb-6">Why Choose <span className="text-[#e94560]">SardarSoft?</span></h2>
        <p className="text-white/70 text-lg">
          We're not just developers. We're problem solvers, design thinkers, and product strategists.
          With end-to-end delivery and a user-first mindset, we help you build things that actually matter.
        </p>
      </section>

      {/* Workflow Timeline */}
      <section className="max-w-6xl mx-auto text-center mb-28">
  <h2 className="text-3xl font-bold mb-10">Our Workflow</h2>
  <div className="grid md:grid-cols-4 gap-6 text-left">
    {['Discovery', 'Design', 'Development', 'Deployment'].map((step, index) => (
      <motion.div
        key={step}
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 }}
        whileHover={{ scale: 1.05, boxShadow: '0 0 24px #e94560' }}
        className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-md transition-transform duration-300"
      >
        <span className="text-[#e94560] text-2xl font-bold block mb-2">Step {index + 1}</span>
        <h3 className="text-xl font-semibold">{step}</h3>
        <p className="text-sm text-white/70 mt-1">
          {step === 'Discovery' && 'We understand your goals, users, and market.'}
          {step === 'Design' && 'We craft clean, intuitive and delightful UI/UX.'}
          {step === 'Development' && 'We build powerful backend + frontend experiences.'}
          {step === 'Deployment' && 'We launch & monitor with full DevOps & CI/CD.'}
        </p>
      </motion.div>
    ))}
  </div>
</section>


      {/* Tools / Tech Stack */}
      <section className="max-w-6xl mx-auto text-center mb-28">
        <h2 className="text-3xl font-bold mb-6">Our Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            '/nextjs-icon.svg',
            '/tailwind-icon.svg',
            '/mongodb-icon.svg',
            '/react-icon.svg',
            '/nodejs-icon.svg',
            '/vercel-icon.svg',
          ].map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt="tech"
              className="w-16 h-16 object-contain grayscale hover:grayscale-0 transition"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 border-t border-white/10 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]">
        <h2 className="text-4xl font-bold mb-6">Let’s Build Something <span className="text-[#e94560]">Extraordinary</span></h2>
        <p className="text-white/70 text-lg mb-8">
          Whether it’s a startup idea or enterprise solution — we’ll make it real.
        </p>
        <a href="/contact" className="inline-block px-8 py-4 bg-[#e94560] hover:bg-white hover:text-[#e94560] rounded-lg text-lg font-semibold transition">
          Contact Our Team
        </a>
      </section>
    </main>
  );
}
