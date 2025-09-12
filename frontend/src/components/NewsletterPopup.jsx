import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NewsletterPopup() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const seen = localStorage.getItem("newsletter_seen");
    if (!seen) {
      const t = setTimeout(() => setShow(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const submit = (e) => {
    e.preventDefault();
    // store locally (no backend)
    const list = JSON.parse(localStorage.getItem("subscribers") || "[]");
    list.push({ email, ts: Date.now() });
    localStorage.setItem("subscribers", JSON.stringify(list));
    localStorage.setItem("newsletter_seen", "1");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-black/40 grid place-items-center p-4"
        >
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
          >
            <h3 className="text-xl font-semibold mb-2">Join our newsletter</h3>
            <p className="text-sm text-slate-600 mb-4">
              Get updates on new case studies, features and insights.
            </p>
            <form onSubmit={submit} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="you@example.com"
              />
              <button
                type="submit"
                className="rounded-lg px-4 py-2 bg-gradient-to-r from-indigo-600 to-pink-600 text-white shadow-soft transition hover:scale-[1.02] active:scale-[0.98]"
              >
                Subscribe
              </button>
            </form>
            <button onClick={() => setShow(false)} className="mt-3 text-sm text-slate-500 hover:text-slate-700">
              No thanks
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
