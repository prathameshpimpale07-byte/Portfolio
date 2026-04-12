import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { X, Award, Star, ZoomIn } from "lucide-react";

/* ─── Certificate data ───────────────────────────────────────────── */
const certificates = [
  {
    id: "daiict",
    title: "InnovAltion – Unstop Holiday Fest 2025",
    issuer: "DA-IICT Gandhinagar",
    desc: "Participation certificate awarded by DA-IICT in collaboration with Rai University for InnovAltion – Shaping Future Innovators at Unstop Holiday Fest 2025.",
    year: "2025",
    image: "/certificates/daiict hackathon_page-0001.jpg",
    grad1: "#1e40af",
    grad2: "#0ea5e9",
    accent: "#38bdf8",
    emoji: "🏛️",
    tags: ["Innovation", "Problem Solving", "Teamwork"],
  },
  {
    id: "synapse",
    title: "Synapse 2025 Hackathon & CTF",
    issuer: "Google Developer Group & Cyber Phantom",
    desc: "Participation certificate for Synapse 2025, an offline hackathon and red-team style CTF held at Symbiosis Skills and Professional University, Pune. 24-hour intensive event.",
    year: "2025",
    image: "/certificates/syanapse.jpg",
    grad1: "#065f46",
    grad2: "#0d9488",
    accent: "#34d399",
    emoji: "💻",
    tags: ["Hackathon", "CTF", "Cybersecurity"],
  },
  {
    id: "be10x",
    title: "AI Tools Workshop",
    issuer: "be10x",
    desc: "Certificate of Completion for the AI Tools and ChatGPT workshop. Demonstrated practical proficiency in AI-assisted productivity — presentations in 5 min, data analysis in 30 min, code & debug in 10 min.",
    year: "2026",
    image: "/certificates/be 10x.jpg",
    grad1: "#78350f",
    grad2: "#dc2626",
    accent: "#fb923c",
    emoji: "🤖",
    tags: ["AI Tools", "ChatGPT", "Productivity"],
  },
];

/* ─── tiny helper — shows real image or a styled fallback ─────────── */
function CertPreview({ src, emoji, grad1, grad2, accent }: {
  src: string; emoji: string; grad1: string; grad2: string; accent: string;
}) {
  const [err, setErr] = useState(false);

  if (!err) {
    return (
      <img
        src={src}
        alt="certificate"
        onError={() => setErr(true)}
        className="w-full h-full object-cover object-center"
        draggable={false}
      />
    );
  }

  // Fallback styled certificate preview
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center gap-3 relative overflow-hidden"
      style={{ background: `linear-gradient(135deg, ${grad1}, ${grad2})` }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/5 translate-x-8 -translate-y-8" />
      <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white/5 -translate-x-6 translate-y-6" />
      <div className="w-14 h-14 rounded-full bg-white/15 border border-white/25 flex items-center justify-center text-3xl z-10">
        {emoji}
      </div>
      <div className="flex gap-1 z-10">
        {[...Array(5)].map((_, k) => (
          <Star key={k} size={11} className="fill-white/60 text-white/60" />
        ))}
      </div>
      <p className="text-xs font-bold text-white/70 z-10 uppercase tracking-widest">Certificate</p>
      {/* diagonal lines pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)", backgroundSize: "12px 12px" }} />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════ */
export default function CertificatesSection() {
  const [selected, setSelected] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const cert = selected !== null ? certificates[selected] : null;

  return (
    <section id="certificates" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Certificates"
          subtitle="click any card to preview"
        />

        {/* ── Infinite Slider ── */}
        <div className="relative overflow-hidden py-10">
          <motion.div
            className="flex gap-8"
            animate={{
              x: isPaused ? undefined : ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{ width: "fit-content" }}
          >
            {[...certificates, ...certificates].map((c, i) => (
              <motion.div
                key={`${c.id}-${i}`}
                whileHover={{ y: -12, scale: 1.05 }}
                onClick={() => setSelected(i % certificates.length)}
                className="group glass-card rounded-3xl overflow-hidden cursor-pointer flex flex-col w-[280px] sm:w-[350px] flex-shrink-0"
                style={{ border: `1px solid ${c.accent}22` }}
              >
                {/* ── Certificate image / preview ── */}
                <div className="relative overflow-hidden" style={{ height: 190 }}>
                  <CertPreview src={c.image} emoji={c.emoji} grad1={c.grad1} grad2={c.grad2} accent={c.accent} />
                  {/* hover overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-sm font-semibold">
                    <ZoomIn size={18} /> View Details
                  </div>
                  {/* year badge */}
                  <span className="absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white border border-white/20">
                    {c.year}
                  </span>
                </div>

                {/* ── Card body ── */}
                <div className="flex flex-col flex-1 p-5 gap-2.5">
                  <div className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-xl flex-shrink-0 mt-0.5"
                      style={{ background: `${c.accent}18`, border: `1px solid ${c.accent}40` }}
                    >
                      {c.emoji}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-foreground text-sm leading-snug">{c.title}</h3>
                      <p className="text-[11px] text-muted-foreground mt-0.5 flex items-center gap-1">
                        <Award size={10} style={{ color: c.accent }} /> {c.issuer}
                      </p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                    {c.tags.map((t) => (
                      <span key={t} className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                        style={{ background: `${c.accent}15`, border: `1px solid ${c.accent}35`, color: c.accent }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        </div>

        {/* ── Detail modal (full-size certificate view) ── */}
        <AnimatePresence>
          {cert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              style={{ background: "hsla(var(--background)/0.85)", backdropFilter: "blur(12px)" }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ scale: 0.85, opacity: 0, y: 28 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.85, opacity: 0, y: 28 }}
                transition={{ type: "spring", duration: 0.5 }}
                onClick={(e) => e.stopPropagation()}
                className="glass-strong rounded-3xl max-w-lg w-full overflow-hidden"
                style={{ border: `1px solid ${cert.accent}40` }}
              >
                {/* Big certificate image */}
                <div className="relative" style={{ height: 280 }}>
                  <CertPreview src={cert.image} emoji={cert.emoji} grad1={cert.grad1} grad2={cert.grad2} accent={cert.accent} />
                  <button
                    onClick={() => setSelected(null)}
                    className="absolute top-3 right-3 w-9 h-9 rounded-xl bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Details */}
                <div className="p-7 flex flex-col gap-4">
                  <h3 className="font-display text-xl font-bold text-foreground text-center leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-semibold text-center" style={{ color: cert.accent }}>
                    {cert.issuer} • {cert.year}
                  </p>
                  <p className="text-muted-foreground text-sm text-center leading-relaxed">{cert.desc}</p>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {cert.tags.map((t) => (
                      <span key={t} className="text-xs font-semibold px-3 py-1 rounded-full"
                        style={{ background: `${cert.accent}18`, border: `1px solid ${cert.accent}50`, color: cert.accent }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <button onClick={() => setSelected(null)}
                    className="mt-1 btn-outline w-full flex items-center justify-center gap-2">
                    <X size={14} /> Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Helper note — only shown in dev */}
      </div>
      <div className="section-divider mt-24 max-w-md mx-auto" />
    </section>
  );
}
