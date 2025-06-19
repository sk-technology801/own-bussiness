'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, CheckCircle } from 'lucide-react';

export default function SignupPage() {
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <main className="min-h-screen bg-[#0f0c29] text-white px-6 py-28 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-96 h-96 bg-[#e94560] opacity-20 blur-3xl rounded-full top-[-100px] left-[-80px] animate-pulse" />
        <div className="absolute w-96 h-96 bg-[#302b63] opacity-20 blur-2xl rounded-full bottom-[-100px] right-[-100px] animate-ping" />
      </div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-14"
      >
        <h1 className="text-5xl font-extrabold neon-glow">
          Create <span className="text-[#e94560]">Your Account</span>
        </h1>
        <p className="text-white/70 mt-4 max-w-xl mx-auto text-lg">
          Join our platform and unlock exclusive tools, services, and insights.
        </p>
      </motion.div>

      {/* Grid Layout */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* Signup Form */}
        <motion.form
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => {
            e.preventDefault();
            alert('Signup successful! (Backend coming next)');
          }}
          className="bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-xl shadow-xl space-y-6"
        >
          {/* Name */}
          <div className="relative group">
            <input
              type="text"
              required
              placeholder=" "
              className="peer w-full bg-[#1f1f2f] border border-white/10 rounded-md px-4 pt-6 pb-2 text-white focus:outline-none focus:ring-2 focus:ring-[#e94560]"
            />
            <label className="absolute left-4 top-2 text-white/60 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#e94560]">
              Full Name
            </label>
          </div>

          {/* Email */}
          <div className="relative group">
            <input
              type="email"
              required
              placeholder=" "
              className="peer w-full bg-[#1f1f2f] border border-white/10 rounded-md px-4 pt-6 pb-2 text-white focus:outline-none focus:ring-2 focus:ring-[#e94560]"
            />
            <label className="absolute left-4 top-2 text-white/60 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#e94560]">
              Email Address
            </label>
          </div>

          {/* Password */}
          <div className="relative group">
            <input
              type={showPass ? 'text' : 'password'}
              required
              placeholder=" "
              className="peer w-full bg-[#1f1f2f] border border-white/10 rounded-md px-4 pt-6 pb-2 text-white focus:outline-none focus:ring-2 focus:ring-[#e94560]"
            />
            <label className="absolute left-4 top-2 text-white/60 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#e94560]">
              Password
            </label>
            <div
              onClick={() => setShowPass(!showPass)}
              className="absolute top-4 right-4 text-white/60 cursor-pointer hover:text-[#e94560]"
            >
              {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
            </div>
          </div>

          {/* Confirm Password */}
          <div className="relative group">
            <input
              type={showConfirm ? 'text' : 'password'}
              required
              placeholder=" "
              className="peer w-full bg-[#1f1f2f] border border-white/10 rounded-md px-4 pt-6 pb-2 text-white focus:outline-none focus:ring-2 focus:ring-[#e94560]"
            />
            <label className="absolute left-4 top-2 text-white/60 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#e94560]">
              Confirm Password
            </label>
            <div
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute top-4 right-4 text-white/60 cursor-pointer hover:text-[#e94560]"
            >
              {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#e94560] hover:bg-white hover:text-[#e94560] font-bold rounded-lg shadow transition duration-300"
          >
            Create Account
          </button>

          {/* Bottom Link */}
          <p className="text-center text-sm text-white/60">
            Already have an account?{' '}
            <a href="/login" className="text-[#e94560] hover:underline">Login here</a>
          </p>
        </motion.form>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold mb-4 text-[#e94560]">Why Join Us?</h2>
          <div className="space-y-4 text-white/80 text-base">
            {[
              'Manage your own business dashboard',
              'Track projects, appointments & analytics',
              'Access secured cloud-based tools',
              'Collaborate with our expert team',
              'Instant updates & notifications',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="text-[#e94560] mt-1" size={20} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
