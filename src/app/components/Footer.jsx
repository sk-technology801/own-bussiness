'use client';
import { motion } from 'framer-motion';
import {
  Facebook,
  Instagram,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const fadeIn = (direction = 'up', delay = 0) => ({
  hidden: {
    opacity: 0,
    y: direction === 'up' ? 30 : 0,
    x: direction === 'left' ? -30 : direction === 'right' ? 30 : 0,
  },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.6,
      delay,
    },
  },
});

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeIn('up', 0)}
      className="bg-[#0f0c29] text-white py-16 px-6 border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
        {/* Brand */}
        <motion.div variants={fadeIn('left', 0.1)}>
          <h2 className="text-3xl font-extrabold neon-glow">YourCompany</h2>
          <p className="mt-4 text-white/70">
            Building smart digital products that empower your vision and scale your business.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={fadeIn('up', 0.2)}>
          <h3 className="text-xl font-semibold text-[#e94560] mb-4">Quick Links</h3>
          <ul className="space-y-2 text-white/80">
            <li><a href="/" className="hover:text-[#e94560] transition">Home</a></li>
            <li><a href="/services" className="hover:text-[#e94560] transition">Services</a></li>
            <li><a href="/contact" className="hover:text-[#e94560] transition">Contact</a></li>
            <li><a href="/login" className="hover:text-[#e94560] transition">Login</a></li>
            <li><a href="/signup" className="hover:text-[#e94560] transition">Signup</a></li>
          </ul>
        </motion.div>

        {/* Contact & Socials */}
        <motion.div variants={fadeIn('right', 0.3)}>
          <h3 className="text-xl font-semibold text-[#e94560] mb-4">Contact</h3>
          <ul className="space-y-3 text-white/80">
            <li className="flex items-center gap-2"><Mail size={18} /> info@yourcompany.com</li>
            <li className="flex items-center gap-2"><Phone size={18} /> +92 300 1234567</li>
            <li className="flex items-center gap-2"><MapPin size={18} /> Lahore, Pakistan</li>
          </ul>
          <div className="flex gap-4 mt-6 text-white text-xl">
            {[Linkedin, Github, Instagram, Facebook].map((Icon, i) => (
              <motion.a
                key={i}
                whileHover={{ scale: 1.2, color: '#e94560' }}
                className="hover:text-[#e94560] transition"
                href="#"
                target="_blank"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        variants={fadeIn('up', 0.5)}
        className="mt-16 border-t border-white/10 pt-6 text-center text-white/60 text-sm"
      >
        © {new Date().getFullYear()} YourCompany. All rights reserved.
      </motion.div>
    </motion.footer>
  );
}
