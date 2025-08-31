import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const entry = Object.fromEntries(form.entries());
    // store locally (no backend)
    const msgs = JSON.parse(localStorage.getItem("messages") || "[]");
    msgs.push({ ...entry, ts: Date.now() });
    localStorage.setItem("messages", JSON.stringify(msgs));
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold">Contact Us</h2>
      <p className="text-slate-700 mt-2">Tell us about your project and we’ll get back to you.</p>

      <form onSubmit={submit} className="mt-8 grid md:grid-cols-2 gap-6 bg-white border rounded-2xl p-6 shadow-soft">
        <div className="flex flex-col gap-2">
          <label className="text-sm">Name</label>
          <input name="name" required className="rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm">Email</label>
          <input type="email" name="email" required className="rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <div className="md:col-span-2 flex flex-col gap-2">
          <label className="text-sm">Message</label>
          <textarea name="message" rows="5" required className="rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
        <motion.button
          whileTap={{ scale: 0.98 }}
          whileHover={{ scale: 1.01 }}
          type="submit"
          className="md:col-span-2 justify-self-start px-6 py-3 rounded-xl text-white bg-gradient-to-r from-indigo-600 to-pink-600 shadow-soft"
        >
          Send Message
        </motion.button>
        {sent && <div className="md:col-span-2 text-green-600 text-sm">Thanks! We received your message.</div>}
      </form>

      {/* Google Map Embed (replace with your location if desired) */}
      <div className="mt-8 rounded-2xl overflow-hidden border shadow-soft">
        <iframe
          title="map"
          width="100%" height="360" style={{ border: 0 }}
          loading="lazy" allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609607913!2d72.71637322499998!3d19.0821978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63c2988b6f9%3A0x8f6df52c6e3a0!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710000000000"
        />
      </div>
    </section>
  );
}
