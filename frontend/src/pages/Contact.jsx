import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import api from '../supabase/axios';
import { toast } from 'react-toastify';
import { CheckCircle, XCircle, Loader } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    mobile: '',
    purpose: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' or 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    const { name, email, mobile, purpose, message } = formState;
    if (!name || !email || !mobile || !purpose || !message) {
      toast.error("Please fill in all fields.");
      return false;
    }
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobile)) {
      toast.error("Please enter a valid 10-digit mobile number.");
      return false;
    }
    return true;
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setStatus(null);

    try {
      const response = await api.post('/api/contact', formState);

      if (response.status === 200) {
        toast.success("Message sent successfully!");
        setStatus('success');
        setFormState({
          name: '',
          email: '',
          mobile: '',
          purpose: '',
          message: ''
        });
      }
    } catch (err) {
      console.error("Failed to send message:", err);
      toast.error("Failed to send message. Please try again.");
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-950 text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Get in <span className="text-teal-400">Touch</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Tell us about your project and we’ll get back to you with a tailored solution.
          </p>
        </div>

        <form
          onSubmit={submit}
          className="grid md:grid-cols-2 gap-6 bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-xl"
        >
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-slate-400 font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formState.name}
              onChange={handleChange}
              className="rounded-lg border border-gray-700 bg-gray-800 text-white px-4 py-3 outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-slate-400 font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formState.email}
              onChange={handleChange}
              className="rounded-lg border border-gray-700 bg-gray-800 text-white px-4 py-3 outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition"
            />
          </div>

          {/* Mobile Number */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-slate-400 font-medium">Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              required
              pattern="[0-9]{10}"
              placeholder="e.g. 9876543210"
              value={formState.mobile}
              onChange={handleChange}
              className="rounded-lg border border-gray-700 bg-gray-800 text-white px-4 py-3 outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition"
            />
          </div>

          {/* Purpose Dropdown */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-slate-400 font-medium">Purpose of Message</label>
            <div className="relative">
              <select
                name="purpose"
                required
                value={formState.purpose}
                onChange={handleChange}
                className="appearance-none w-full rounded-lg border border-gray-700 bg-gray-800 text-white px-4 py-3 pr-10 outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition"
              >
                <option value="" disabled>Select Purpose</option>
                <option value="Inquiry">General Inquiry</option>
                <option value="Making Website">Website Development</option>
                <option value="Application">Application Development</option>
                <option value="Software">Custom Software</option>
                <option value="Partnership">Partnership</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="md:col-span-2 flex flex-col gap-2">
            <label className="text-sm text-slate-400 font-medium">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              value={formState.message}
              onChange={handleChange}
              className="rounded-lg border border-gray-700 bg-gray-800 text-white px-4 py-3 outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition"
            />
          </div>

          {/* Submit */}
          <div className="md:col-span-2 flex flex-col sm:flex-row items-center gap-4">
            <motion.button
              whileTap={{ scale: 0.98 }}
              whileHover={{ scale: 1.01 }}
              type="submit"
              disabled={loading}
              className={`px-8 py-3 rounded-full font-semibold text-lg text-white bg-gradient-to-r from-teal-500 to-cyan-500 shadow-lg transition ${
                loading ? "opacity-60 cursor-not-allowed" : "hover:from-teal-600 hover:to-cyan-600"
              }`}
            >
              <div className="flex items-center gap-2">
                {loading && <Loader className="animate-spin" size={20} />}
                {loading ? "Sending..." : "Send Message"}
              </div>
            </motion.button>
            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex items-center text-emerald-400 font-medium gap-2"
                >
                  <CheckCircle size={20} />
                  <span>Message Sent!</span>
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex items-center text-red-500 font-medium gap-2"
                >
                  <XCircle size={20} />
                  <span>Failed to send.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </form>

        {/* Map Section */}
        <div className="mt-20">
            <h3 className="text-2xl font-bold text-center mb-6 text-white">Find Our Location</h3>
            <div className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden shadow-xl">
                <iframe
                    title="map"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13657.656991911565!2d72.81132429242619!3d18.973374157379478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce6ea1b17137%3A0xfe198eb13bcbf5e3!2sMumbai%20Central%2C%20Mumbai%2C%20Maharashtra!5e1!3m2!1sen!2sin!4v1758528108904!5m2!1sen!2sin"
                ></iframe>
            </div>
        </div>
      </div>
    </section>
  );
}