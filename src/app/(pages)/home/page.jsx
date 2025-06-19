'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Code, Settings, ShieldCheck } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="relative bg-[#0f0c29] text-white overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-80 h-80 bg-[#e94560] opacity-20 blur-3xl rounded-full top-[-100px] left-[-100px] animate-pulse" />
        <div className="absolute w-96 h-96 bg-[#302b63] opacity-20 blur-2xl rounded-full bottom-[-100px] right-[-100px] animate-ping" />
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10"
        >
          {/* Text */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="md:w-1/2 space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold neon-glow leading-tight">
              Empowering <span className="text-[#e94560]">Digital Innovation</span>
            </h1>
            <p className="text-lg text-white/80">
              We craft high-performance software, cutting-edge design, and smart digital products for ambitious businesses.
            </p>
            <div className="flex gap-4">
              <Link href="/services" className="px-6 py-3 bg-[#e94560] hover:bg-white hover:text-[#e94560] rounded-lg text-lg font-semibold transition">
                Get Started
              </Link>
              <Link href="/contact" className="px-6 py-3 border border-[#e94560] text-[#e94560] hover:bg-[#e94560] hover:text-white rounded-lg text-lg font-semibold transition">
                Contact Us
              </Link>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="md:w-1/2"
          >
            <img
              src="https://images.pexels.com/photos/4348082/pexels-photo-4348082.jpeg?_gl=1*1cnwflq*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTAzMzI5ODckbzEkZzEkdDE3NTAzMzMwMDYkajQxJGwwJGgw"
              alt="Hero Illustration"
              className="w-full max-w-md mx-auto drop-shadow-lg"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-10">What Makes Us Different?</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: <Code size={36} />,
              title: 'Clean Code',
              desc: 'We write maintainable, scalable code that drives real business value.',
            },
            {
              icon: <Settings size={36} />,
              title: 'Automation First',
              desc: 'Modern CI/CD pipelines and workflows built right into your stack.',
            },
            {
              icon: <ShieldCheck size={36} />,
              title: 'Secure by Design',
              desc: 'We prioritize security architecture from Day 1.',
            },
          ].map(({ icon, title, desc }) => (
            <motion.div
              key={title}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg shadow-lg space-y-4"
            >
              <div className="text-[#e94560]">{icon}</div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-white/80">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-28 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] border-t border-white/10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Ready to Build Something <span className="text-[#e94560]">Exceptional?</span>
        </h2>
        <p className="text-white/70 text-lg mb-8">
          Let’s turn your vision into a product the world will love.
        </p>
        <Link href="/contact" className="inline-block px-8 py-4 bg-[#e94560] hover:bg-white hover:text-[#e94560] rounded-lg text-lg font-semibold transition">
          Book a Call Now
        </Link>
      </section>

     
    </main>
  );
}
