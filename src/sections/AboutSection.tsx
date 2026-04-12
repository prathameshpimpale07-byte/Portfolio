import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import SectionHeading from "@/components/SectionHeading";
import { Zap, Shield, Rocket } from "lucide-react";

/* ─── Animated counter ─────────────────────────────────────────── */
function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let cur = 0;
    const step = Math.max(1, Math.floor(to / 40));
    const iv = setInterval(() => {
      cur += step;
      if (cur >= to) { setN(to); clearInterval(iv); }
      else setN(cur);
    }, 28);
    return () => clearInterval(iv);
  }, [inView, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

/* ─── Data ─────────────────────────────────────────────────────── */
const stats = [
  { value: 3, suffix: "+", label: "Projects\nBuilt", color: "#fbbf24" },
  { value: 15, suffix: "+", label: "Technologies\nMastered", color: "#34d399" },
  { value: 50, suffix: "+", label: "Git\nCommits", color: "#a78bfa" },
  { value: 2, suffix: "+", label: "Hackathons\nParticipated", color: "#f472b6" },
];

/* ═══════════════════════════════════════════════════════════════ */
export default function AboutSection() {
  return (
    <section id="about" className="py-28 relative overflow-hidden bg-secondary/5">

      {/* ── ambient blobs ── */}
      <div className="pointer-events-none absolute top-40 right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] animate-pulse" />
      <div className="pointer-events-none absolute bottom-40 left-[-10%] w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px] animate-pulse" />

      <div className="container mx-auto px-6 relative z-10 font-sans">
        <SectionHeading title="About Me" subtitle="The person behind the console and the vision ahead" />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16 max-w-7xl mx-auto">

          {/* Main Bio - Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-2 glass-card p-10 rounded-[40px] border border-white/5 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-6 border border-primary/20">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                The Story
              </div>
              <h3 className="text-4xl font-bold font-display leading-[1.1] mb-6">
                Bridging the gap between <span className="gradient-text">Logic</span> and <span className="text-foreground">Creativity</span>.
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                I'm Prathamesh Pimpale, a Computer Science Engineering student obsessed with the tiny details that make a big difference. I build products that don't just work, but feel right.
              </p>
            </div>
            {/* Visual Decoration */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/20 blur-[100px] rounded-full opacity-10 group-hover:opacity-30 transition-opacity" />
          </motion.div>

          {/* Core Values - Vertical Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-8 rounded-[40px] border border-white/5 flex flex-col gap-6"
          >
            <div className="text-3xl">🎯</div>
            <h4 className="text-xl font-bold font-display">Core Mission</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              To build software that empowers users through intuitive design and robust infrastructure. Every line of code I write is a step towards more accessible technology.
            </p>
            <div className="mt-auto pt-4 border-t border-white/5">
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Efficiency • Scalability • UX</span>
            </div>
          </motion.div>

          {/* Quick Stats - Interactive Grid */}
          <div className="grid grid-cols-2 gap-4 md:col-span-3 lg:col-span-1">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, borderColor: `${s.color}30` }}
                className="glass-card p-6 rounded-[30px] border border-white/5 flex flex-col items-center justify-center text-center group"
              >
                <div className="text-2xl font-black font-display mb-1" style={{ color: s.color }}>
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <p className="text-[9px] uppercase font-bold tracking-widest text-muted-foreground opacity-50 group-hover:opacity-100">{s.label.replace('\n', ' ')}</p>
              </motion.div>
            ))}
          </div>

          {/* Current Focus - Horizontal Wide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-3 lg:col-span-3 glass-card p-8 rounded-[40px] border border-white/5 flex flex-col md:flex-row items-center gap-10 overflow-hidden relative group"
          >
            <div className="relative z-10 space-y-4 md:w-2/3">
              <h4 className="text-2xl font-bold font-display flex items-center gap-3">
                <span className="animate-pulse">⚡</span> Current Focus
              </h4>
              <p className="text-muted-foreground">
                Deep-diving into <span className="text-foreground font-semibold">DevOps Automation</span> and <span className="text-foreground font-semibold">Microservices Architecture</span>. Building a resilient environment for the next generation of web apps.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {["Docker", "K8s", "CI/CD", "AWS"].map(tech => (
                  <span key={tech} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider">{tech}</span>
                ))}
              </div>
            </div>

            {/* Action Card */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="md:w-1/3 w-full p-6 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10 flex flex-col items-center justify-center text-center backdrop-blur-md cursor-pointer group"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <p className="text-xs font-bold uppercase tracking-widest mb-1 opacity-70">Ready to build?</p>
              <p className="text-lg font-black font-display mb-4">Start a Project</p>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-transform group-hover:translate-x-1">→</div>
            </motion.div>
          </motion.div>

          {/* Performance Focus Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass-card p-8 rounded-[40px] border border-white/5 flex flex-col justify-center items-center gap-6 group hover:border-primary/40 transition-all duration-500"
          >
            <div className="flex -space-x-3">
              {[Zap, Shield, Rocket].map((Icon, i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-primary/20 flex items-center justify-center text-primary shadow-glow">
                  <Icon size={18} />
                </div>
              ))}
            </div>
            <div className="text-center">
               <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary group-hover:scale-110 transition-transform">Built for Speed</p>
               <p className="text-[8px] font-bold text-muted-foreground mt-1 opacity-60">High Performance Engineering</p>
            </div>
          </motion.div>

        </div>
      </div>
      <div className="section-divider mt-24 max-w-md mx-auto" />
    </section>
  );
}
