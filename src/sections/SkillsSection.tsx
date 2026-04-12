import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { 
  Code, 
  Server, 
  Database, 
  ShieldCheck, 
  Cloud, 
  Wrench,
  Terminal,
} from "lucide-react";

/* ─── Expanded Skill Collection ─────────────────────────────────── */
const categories = [
  {
    name: "Frontend",
    icon: <Code size={18} />,
    skills: [
      { name: "React", emoji: "⚛️", color: "#61DAFB" },
      { name: "Next.js", emoji: "▲", color: "#ffffff" },
      { name: "TypeScript", emoji: "📘", color: "#3178C6" },
      { name: "Tailwind", emoji: "💨", color: "#38B2AC" },
      { name: "JavaScript", emoji: "💛", color: "#F7DF1E" },
      { name: "HTML5", emoji: "🧡", color: "#E34F26" },
      { name: "CSS3", emoji: "💙", color: "#1572B6" },
      { name: "Redux", emoji: "🟣", color: "#764ABC" },
      { name: "MaterialUI", emoji: "🟦", color: "#0081CB" },
      { name: "Framer", emoji: "✨", color: "#BB00FF" },
    ],
  },
  {
    name: "Backend",
    icon: <Server size={18} />,
    skills: [
      { name: "Node.js", emoji: "🟢", color: "#339933" },
      { name: "Express", emoji: "🚀", color: "#ffffff" },
      { name: "Java", emoji: "☕", color: "#007396" },
      { name: "SpringBoot", emoji: "🍃", color: "#6DB33F" },
      { name: "Python", emoji: "🐍", color: "#3776AB" },
      { name: "Django", emoji: "🎸", color: "#092E20" },
      { name: "C++", emoji: "💻", color: "#00599C" },
      { name: "PHP", emoji: "🐘", color: "#777BB4" },
    ],
  },
  {
    name: "Data Matrix",
    icon: <Database size={18} />,
    skills: [
      { name: "MongoDB", emoji: "🍃", color: "#47A248" },
      { name: "MySQL", emoji: "🐬", color: "#4479A1" },
      { name: "PostgreSQL", emoji: "🐘", color: "#336791" },
      { name: "Redis", emoji: "🔴", color: "#DC382D" },
      { name: "Firebase", emoji: "🔥", color: "#FFCA28" },
      { name: "Oracle", emoji: "🟥", color: "#F80000" },
      { name: "GraphQL", emoji: "📡", color: "#E10098" },
    ],
  },
  {
    name: "Security",
    icon: <ShieldCheck size={18} />,
    skills: [
      { name: "JWT", emoji: "🔐", color: "#d63384" },
      { name: "OAuth 2.0", emoji: "🔑", color: "#0d6efd" },
      { name: "BCrypt", emoji: "🛡️", color: "#10B981" },
      { name: "SSL/TLS", emoji: "🔒", color: "#ffffff" },
      { name: "SSH", emoji: "🗝️", color: "#ffffff" },
      { name: "CORS", emoji: "🌐", color: "#ffffff" },
    ],
  },
  {
    name: "DevOps",
    icon: <Cloud size={18} />,
    skills: [
      { name: "Docker", emoji: "🐳", color: "#2496ED" },
      { name: "Kubernetes", emoji: "☸️", color: "#326CE5" },
      { name: "AWS", emoji: "☁️", color: "#FF9900" },
      { name: "GitActions", emoji: "⚙️", color: "#2088FF" },
      { name: "Jenkins", emoji: "🤵", color: "#D24939" },
      { name: "Vercel", emoji: "▲", color: "#ffffff" },
    ],
  },
  {
    name: "Tools",
    icon: <Wrench size={18} />,
    skills: [
      { name: "Git", emoji: "📂", color: "#F05032" },
      { name: "Postman", emoji: "📮", color: "#FF6C37" },
      { name: "VS Code", emoji: "💻", color: "#007ACC" },
      { name: "npm", emoji: "📦", color: "#CB3837" },
      { name: "Figma", emoji: "🎨", color: "#F24E1E" },
      { name: "Terminal", emoji: "📁", color: "#ffffff" },
      { name: "Webpack", emoji: "📦", color: "#8DD6F9" },
    ],
  },
];

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-24 relative bg-background overflow-hidden px-6">
      {/* ── Background Ambience ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-primary/2 blur-[150px] rounded-full -z-10" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionHeading
          title="Skills"
          subtitle="A comprehensive collection of my technical domain expertise"
        />

        {/* ── Navigation Bar ── */}
        <div className="mt-8 mb-12 flex justify-center">
          <div className="inline-flex flex-wrap justify-center items-center bg-white/5 border border-white/10 p-1.5 rounded-2xl backdrop-blur-xl">
            {categories.map((cat, idx) => (
              <button
                key={cat.name}
                onClick={() => setActiveTab(idx)}
                className={`relative px-5 py-3 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] transition-all flex items-center gap-2 ${
                  activeTab === idx ? "text-primary-foreground shadow-lg shadow-primary/20" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {activeTab === idx && (
                  <motion.div
                    layoutId="skills-tab-indicator"
                    className="absolute inset-0 bg-primary rounded-xl"
                    transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{cat.icon}</span>
                <span className="relative z-10 hidden sm:inline-block">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Balanced Skill Grid ── */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.04
                  }
                },
                exit: { 
                  opacity: 0,
                  transition: { staggerChildren: 0.02, staggerDirection: -1 }
                }
              }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
            >
              {categories[activeTab].skills.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  variants={{
                    hidden: { opacity: 0, y: 20, rotateX: -15, scale: 0.9 },
                    visible: { opacity: 1, y: 0, rotateX: 0, scale: 1 },
                    exit: { opacity: 0, y: -20, scale: 0.9 }
                  }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.04,
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                  className="group perspective-1000"
                >
                  <div className="relative aspect-square glass border border-white/5 rounded-3xl flex flex-col items-center justify-center p-4 transition-all duration-500 hover:border-primary/40 hover:bg-white/[0.04] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                    
                    {/* Pulsing Aura Glow */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity rounded-3xl blur-xl" 
                      style={{ background: skill.color }}
                    />

                    {/* Icon with Floating Animation */}
                    <motion.div 
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: idx * 0.1 }}
                      className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 flex items-center justify-center text-3xl mb-3 shadow-inner relative z-10"
                    >
                       <span style={{ filter: `drop-shadow(0 4px 10px ${skill.color}60)` }}>{skill.emoji}</span>
                    </motion.div>

                    {/* Name with Letter Spacing Animation */}
                    <h4 className="text-[10px] md:text-xs font-black uppercase tracking-[0.1em] group-hover:tracking-[0.2em] text-foreground/70 group-hover:text-primary transition-all text-center px-1 relative z-10">
                      {skill.name}
                    </h4>

                    {/* Bottom Scanning Bar */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-0 group-hover:w-8 h-[1.5px] bg-primary/40 transition-all duration-300 rounded-full" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Status Footer ── */}
        <div className="mt-16 flex justify-center opacity-30">
           <div className="flex items-center gap-4 text-[8px] font-black uppercase tracking-[0.5em] text-muted-foreground whitespace-nowrap">
              <Terminal size={12} /> Technical stack fully mapped
           </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
