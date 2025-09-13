import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [purpose, setPurpose] = useState(""); // track purpose for thank-you msg

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.currentTarget);
    const entry = Object.fromEntries(form.entries());

    try {
      // store locally
      const msgs = JSON.parse(localStorage.getItem("messages") || "[]");
      msgs.push({ ...entry, ts: new Date().toISOString() });
      localStorage.setItem("messages", JSON.stringify(msgs));

      setPurpose(entry.purpose); // store purpose for thank-you message
      setSent(true);
      e.currentTarget.reset();

      // auto-hide success message after 4s
      setTimeout(() => setSent(false), 4000);
    } catch (err) {
      console.error("Failed to save message:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold">Contact Us</h2>
      <p className="text-slate-700 mt-2">
        Tell us about your project and we’ll get back to you.
      </p>

      <form
        onSubmit={submit}
        className="mt-8 grid md:grid-cols-2 gap-6 bg-white border rounded-2xl p-6 shadow-soft"
      >
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label className="text-sm">Name</label>
          <input
            name="name"
            required
            className="rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-sm">Email</label>
          <input
            type="email"
            name="email"
            required
            className="rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Mobile Number */}
        <div className="flex flex-col gap-2">
          <label className="text-sm">Mobile Number</label>
          <input
            type="tel"
            name="mobile"
            required
            pattern="[0-9]{10}"
            placeholder="e.g. 9876543210"
            className="rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Purpose Dropdown */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">Purpose of Message</label>
          <div className="relative">
            <select
              name="purpose"
              required
              className="appearance-none w-full rounded-lg border px-3 py-2 pr-10 outline-none 
                 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                 bg-white shadow-sm text-slate-700"
            >
              <option value="">Select Purpose</option>
              <option value="Inquiry">Inquiry</option>
              <option value="Making Website">Making Website</option>
              <option value="Application">Application</option>
              <option value="Software">Software</option>
            </select>
          </div>
        </div>
        {/* Message */}
        <div className="md:col-span-2 flex flex-col gap-2">
          <label className="text-sm">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            className="rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Submit */}
        <motion.button
          whileTap={{ scale: 0.98 }}
          whileHover={{ scale: 1.01 }}
          type="submit"
          disabled={loading}
          className={`md:col-span-2 justify-self-start px-6 py-3 rounded-xl text-white bg-gradient-to-r from-indigo-600 to-pink-600 shadow-soft ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </motion.button>

        {/* Success message */}
        <AnimatePresence>
          {sent && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="md:col-span-2 text-green-600 text-sm"
            >
              {purpose
                ? `Thanks! We received your ${purpose} message.`
                : "Thanks! We received your message."}
            </motion.div>
          )}
        </AnimatePresence>
      </form>

      {/* Google Map Embed */}
      <div className="mt-8 rounded-2xl overflow-hidden border shadow-soft">
        <iframe
          title="map"
          width="100%"
          height="360"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609607913!2d72.71637322499998!3d19.0821978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63c2988b6f9%3A0x8f6df52c6e3a0!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710000000000"
        />
      </div>
    </section>
  );
}
