'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Home, Briefcase, Phone } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', icon: <Home size={18} />, href: '/' },
  { name: 'Services', icon: <Briefcase size={18} />, href: '/services' },
  { name: 'Contact', icon: <Phone size={18} />, href: '/contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50">
      {/* Background Gradient with Glass Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] opacity-90"></div>

      <div className="relative backdrop-blur-xl border-b border-white/10 shadow-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-extrabold text-white neon-glow tracking-widest"
          >
            Sardar<span className="text-[#e94560]">Soft</span>
          </motion.h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-10 items-center">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Link
                  href={link.href}
                  className="group flex items-center gap-2 font-medium text-white text-lg relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#e94560] after:transition-all after:duration-300 hover:after:w-full"
                >
                  <span className="text-[#e94560] group-hover:scale-125 transition-transform">{link.icon}</span>
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="px-4 py-2 text-white bg-[#e94560] hover:bg-white hover:text-[#e94560] transition rounded-md font-semibold"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 border border-[#e94560] text-[#e94560] hover:bg-[#e94560] hover:text-white transition rounded-md font-semibold"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-white">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {open && (
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="md:hidden px-6 py-4 bg-[#0f0c29] text-white space-y-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-lg font-medium hover:text-[#e94560] transition"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="space-y-2">
              <Link href="/login" className="block text-[#e94560] font-semibold">
                Login
              </Link>
              <Link href="/signup" className="block font-semibold hover:text-[#e94560]">
                Sign Up
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}
