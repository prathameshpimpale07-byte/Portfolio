import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { GraduationCap, Calendar, MapPin, Server, School, Award, CheckCircle2 } from "lucide-react";

const timeline = [
  {
    period: "2025 – Present",
    title: "B.Tech Computer Science",
    institution: "Rai University, Ahmedabad",
    location: "Ahmedabad, Gujarat",
    grade: "Pursuing",
    score: "N/A",
    icon: GraduationCap,
    color: "#3b82f6",
    desc: "Spearheading advanced research in cloud-native applications and AI-driven systems. Exploring the frontiers of high-performance computing.",
    highlights: ["MERN Stack", "Spring Boot", "DevOps Pipeline", "Cloud Arch"],
  },
  {
    period: "2022 – 2025",
    title: "Diploma in Computer Engineering",
    institution: "Jaihind Polytechnic, Kuran",
    location: "Maharashtra, India",
    grade: "Distinction",
    score: "80%",
    icon: Server,
    color: "#10b981",
    desc: "Mastered the core principles of software engineering, networking, and security. Built 10+ academic projects from CLI tools to full-stack apps.",
    highlights: ["Java Core", "DBMS", "Networking", "Python Dev"],
  },
  {
    period: "2016 – 2022",
    title: "Secondary Education",
    institution: "Shri Vighnhar Vidyalay",
    location: "Maharashtra, India",
    grade: "Excellent",
    score: "90%",
    icon: School,
    color: "#f59e0b",
    desc: "Laid the mathematical and logical foundation for a career in engineering. Consistently ranked in top percentiles for science and logic.",
    highlights: ["Math", "Physics", "Logic", "Computer Org"],
  },
];

const EducationSection = () => (
  <section id="education" className="py-24 relative overflow-hidden">
    {/* Animated Central Path */}
    <div className="absolute left-1/2 -translate-x-1/2 top-40 bottom-40 w-[2px] bg-white/5 overflow-hidden hidden md:block">
      <motion.div 
        animate={{ y: ["-100%", "100%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="w-full h-64 bg-gradient-to-b from-transparent via-primary/50 to-transparent"
      />
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <SectionHeading title="Education" subtitle="My academic timeline and technical foundation" />
      
      <div className="max-w-6xl mx-auto mt-20 space-y-24 relative">
        {timeline.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`flex flex-col md:flex-row gap-12 items-center ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Timeline Node */}
            <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center">
               <motion.div 
                  className="w-5 h-5 rounded-full bg-background border-[4px] border-primary z-50 shadow-[0_0_20px_rgba(var(--primary-rgb),0.5)]"
                  animate={{ scale: [1, 1.2, 1], borderColor: ["var(--primary)", "var(--accent)", "var(--primary)"] }}
                  transition={{ duration: 3, repeat: Infinity }}
               />
            </div>

            {/* Main Card */}
            <div className="w-full md:w-[46%] perspective-1000">
              <motion.div
                whileHover={{ rotateY: i % 2 === 0 ? 5 : -5, y: -10 }}
                className="glass-card p-8 md:p-10 rounded-[40px] border border-white/5 relative overflow-hidden group hover:border-primary/40 transition-all duration-500 shadow-2xl"
              >
                {/* Decorative Elements */}
                <div 
                  className="absolute -top-20 -right-20 w-40 h-40 blur-[80px] opacity-10 group-hover:opacity-25 transition-opacity duration-700"
                  style={{ backgroundColor: item.color }}
                />

                <div className="flex justify-between items-start mb-8">
                  <div className="flex flex-col gap-4">
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-500"
                      style={{ background: `linear-gradient(135deg, ${item.color}20, ${item.color}10)`, border: `1px solid ${item.color}30` }}
                    >
                      <item.icon className="text-white" size={26} style={{ filter: `drop-shadow(0 0 10px ${item.color})` }} />
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2 text-right">
                    <span className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black uppercase tracking-widest text-primary">
                      {item.period}
                    </span>
                    <div className="flex items-baseline gap-2">
                       <span className="text-[8px] uppercase font-black tracking-widest text-muted-foreground/60 leading-none">Result</span>
                       <span className="text-2xl font-display font-black italic tracking-tighter" style={{ color: item.color }}>{item.grade}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <h3 className="text-2xl font-display font-black text-foreground group-hover:text-primary transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-muted-foreground font-bold text-xs opacity-70">
                    <div className="flex items-center gap-1.5"><School size={14} className="text-primary/60" /> {item.institution}</div>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <div className="flex items-center gap-1.5"><MapPin size={14} className="text-primary/60" /> {item.location}</div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground/80 leading-relaxed mb-8 border-l-2 border-primary/20 pl-5 italic">
                  "{item.desc}"
                </p>

                {/* Score & Highlights Row */}
                <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-white/5">
                   <div className="flex flex-wrap gap-2">
                      {item.highlights.map(h => (
                        <span 
                          key={h} 
                          className="text-[9px] px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-muted-foreground font-black uppercase tracking-widest whitespace-nowrap flex items-center gap-1.5 group-hover:border-primary/20 transition-colors"
                        >
                           <CheckCircle2 size={10} className="text-primary/50" /> {h}
                        </span>
                      ))}
                   </div>

                   {item.score !== "N/A" && (
                     <div className="flex flex-col items-center gap-1 glass px-4 py-2 rounded-2xl border border-primary/20 shadow-glow">
                        <span className="text-[7px] font-black uppercase tracking-[0.2em] text-primary/70">Final Score</span>
                        <div className="text-xl font-black font-display italic text-primary">{item.score}</div>
                     </div>
                   )}
                </div>
              </motion.div>
            </div>

            {/* Spacer for structure */}
            <div className="hidden md:block w-[8%]" />
            <div className="md:hidden h-20 w-px bg-gradient-to-b from-primary/30 to-transparent" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
