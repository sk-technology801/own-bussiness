'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setStatus(data.success ? 'Message sent!' : 'Error sending message.');
  };

  return (
    <main className="p-8 max-w-xl mx-auto text-white">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-[#1f1f2f] p-6 rounded-lg">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-2 rounded bg-[#2a2a3b] text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-2 rounded bg-[#2a2a3b] text-white"
        />
        <textarea
          name="message"
          placeholder="Your message"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full p-2 rounded bg-[#2a2a3b] text-white"
        ></textarea>
        <button
          type="submit"
          className="bg-[#e94560] hover:bg-white hover:text-[#e94560] font-bold py-2 px-4 rounded"
        >
          Send
        </button>
        <p className="mt-2 text-sm text-green-400">{status}</p>
      </form>
    </main>
  );
}
