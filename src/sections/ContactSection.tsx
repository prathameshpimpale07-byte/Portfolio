import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Send, CheckCircle, AlertCircle, Mail, User, MessageSquare, Phone, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon, YoutubeIcon, LeetcodeIcon } from "@/components/SocialIcons";

/* ────────────────────────────────────────────────────────────────────
   Email delivery via FormSubmit.co  — NO signup, NO backend needed
   First submission → FormSubmit sends you a ONE-TIME activation email
   Click "Activate" in that email → every future submission reaches you!
   ──────────────────────────────────────────────────────────────────── */
const YOUR_EMAIL = "prathameshpimpale07@gmail.com";

const socialLinks = [
  { icon: GithubIcon,   href: "https://github.com/prathameshpimpale07-byte",               label: "GitHub"   },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/prathamesh-pimpale-0b079a378/", label: "LinkedIn" },
  { icon: TwitterIcon,  href: "https://x.com/Prathamesh74558",                             label: "Twitter"  },
  { icon: YoutubeIcon,  href: "https://www.youtube.com/@PrathameshTechCode",               label: "YouTube"  },
  { icon: LeetcodeIcon, href: "https://leetcode.com/u/Prathameshpimaple/",                 label: "LeetCode" },
];

/* ═══════════════════════════════════════════════════════════════════ */
export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const data = new FormData();
    data.append("name",    form.name);
    data.append("email",   form.email);
    data.append("message", form.message);
    data.append("_subject", `Portfolio message from ${form.name}`);
    data.append("_template", "table");        // nice formatted email
    data.append("_captcha",  "false");        // disable spam captcha

    try {
      const res = await fetch(`https://formsubmit.co/${YOUR_EMAIL}`, {
        method:  "POST",
        body:    data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        throw new Error("Network error");
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeading title="Get In Touch" subtitle="Have a project in mind? Let's talk!" />

        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8">

          {/* ── Info column ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-5"
          >
            <div className="glass-card rounded-2xl p-6 space-y-5">
              <h3 className="font-display font-bold text-foreground text-lg">Let's Connect</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of something great.
              </p>

              {/* Email */}
              <a href={`mailto:${YOUR_EMAIL}`} className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0 group-hover:glow-primary transition-shadow">
                  <Mail size={17} className="text-primary" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Email</p>
                  <p className="text-sm text-foreground font-medium group-hover:text-primary transition-colors break-all">
                    {YOUR_EMAIL}
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a href="tel:7249774558" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0 group-hover:glow-primary transition-shadow">
                  <Phone size={17} className="text-primary" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Phone</p>
                  <p className="text-sm text-foreground font-medium group-hover:text-primary transition-colors">
                    +91 7249774558
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                  <MapPin size={17} className="text-accent" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Location</p>
                  <p className="text-sm text-foreground font-medium">Maharashtra, India 🇮🇳</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="glass-card rounded-2xl p-6">
              <h4 className="font-display font-bold text-foreground mb-4 text-sm">Follow Me</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    whileHover={{ y: -3, scale: 1.06 }}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    title={label}
                    className="w-11 h-11 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors border border-transparent hover:border-primary/30"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Form ── */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="md:col-span-3 glass-card rounded-2xl p-7 space-y-5"
          >
            {/* Name */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                <User size={14} className="text-muted-foreground" /> Name
              </label>
              <input
                id="name"
                type="text"
                required
                maxLength={100}
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                disabled={status === "loading"}
                className="w-full px-4 py-3 rounded-xl bg-secondary/30 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all disabled:opacity-60"
                placeholder="Your name"
              />
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <label htmlFor="reply_email" className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                <Mail size={14} className="text-muted-foreground" /> Email
              </label>
              <input
                id="reply_email"
                type="email"
                required
                maxLength={255}
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                disabled={status === "loading"}
                className="w-full px-4 py-3 rounded-xl bg-secondary/30 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all disabled:opacity-60"
                placeholder="your@email.com"
              />
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                <MessageSquare size={14} className="text-muted-foreground" /> Message
              </label>
              <textarea
                id="message"
                required
                maxLength={1000}
                rows={5}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                disabled={status === "loading"}
                className="w-full px-4 py-3 rounded-xl bg-secondary/30 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 transition-all resize-none disabled:opacity-60"
                placeholder="Tell me about your project or idea..."
              />
            </motion.div>

            <motion.button
              type="submit"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              disabled={status === "loading" || status === "success"}
              className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed group overflow-hidden relative"
            >
              <motion.div 
                className="absolute inset-0 bg-white/20 -translate-x-full" 
                animate={status === "loading" ? { x: "100%" } : { x: "-100%" }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              {status === "loading" ? (
                <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              ) : (
                <><Send size={17} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Send Message</>
              )}
            </motion.button>

            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex items-start gap-3 text-sm p-4 rounded-xl shadow-2xl"
                  style={{
                    color: "hsl(var(--success))",
                    background: "hsla(var(--success)/0.1)",
                    border: "1px solid hsla(var(--success)/0.3)",
                  }}
                >
                  <CheckCircle size={18} className="flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Message sent successfully! 🎉</p>
                    <p className="text-xs opacity-80 mt-0.5">
                      I'll get back to you soon. Check your email for activation if this is your first time.
                    </p>
                  </div>
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex items-start gap-3 text-destructive text-sm p-4 rounded-xl bg-destructive/10 border border-destructive/25 shadow-2xl"
                >
                  <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Could not send message.</p>
                    <p className="text-xs opacity-80 mt-0.5">
                      Please try again or email me directly at <a href={`mailto:${YOUR_EMAIL}`} className="underline font-bold text-foreground">{YOUR_EMAIL}</a>
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
