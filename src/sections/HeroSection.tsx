import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  Code2,
  Terminal,
  Cpu,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon, YoutubeIcon, LeetcodeIcon } from "@/components/SocialIcons";
import profileImg from "@/assets/profile.jpg";

/* ─── Social Links Data ─── */
const socialLinks = [
  { icon: GithubIcon,   href: "https://github.com/prathameshpimpale07-byte" },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/prathamesh-pimpale-0b079a378/" },
  { icon: TwitterIcon,  href: "https://x.com/Prathamesh74558" },
  { icon: YoutubeIcon,  href: "https://www.youtube.com/@PrathameshTechCode" },
  { icon: LeetcodeIcon, href: "https://leetcode.com/u/Prathameshpimaple/" },
];

/* ─── Orbital Tech Data ─── */
const orbitingTech = [
  { name: "React",       icon: "⚛️", ring: 1, angle: 0 },
  { name: "Java",        icon: "☕", ring: 2, angle: 45 },
  { name: "SpringBoot",  icon: "🍃", ring: 1, angle: 120 },
  { name: "Next.js",     icon: "▲", ring: 2, angle: 135 },
  { name: "Node.js",     icon: "🟢", ring: 1, angle: 240 },
  { name: "Express",     icon: "🚀", ring: 2, angle: 225 },
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["Full Stack Developer", "Software Engineer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-background pt-24 pb-12 lg:pt-0 lg:pb-0">
      {/* ── Geometric Background ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Futuristic Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        {/* Glow Spheres */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 blur-[120px] rounded-full animate-pulse-slow" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-accent/10 blur-[120px] rounded-full animate-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* ── Left Content: The Text ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div 
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Developer Module Active
            </motion.div>

            <h1 className="flex flex-col gap-2 mb-6">
              <span className="text-muted-foreground text-sm md:text-base font-bold uppercase tracking-[0.5em] ml-1">
                I am
              </span>
              <span className="text-5xl md:text-6xl lg:text-7xl font-display font-black leading-[1.1] tracking-tight">
                <span className="text-foreground">Prathamesh</span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-shimmer">
                  Pimpale
                </span>
              </span>
            </h1>

            {/* Premium Role Slider */}
            <div className="h-12 overflow-hidden mb-8 flex justify-center lg:justify-start items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={roles[roleIndex]}
                  initial={{ y: 30, opacity: 0, scale: 0.9 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  exit={{ y: -30, opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                  transition={{ duration: 0.5, ease: "backOut" }}
                  className="text-xl md:text-3xl font-display font-bold text-accent tracking-tighter"
                >
                  <span className="hidden md:inline-block mr-3 text-primary/30">/</span>
                  {roles[roleIndex]}
                </motion.div>
              </AnimatePresence>
            </div>

            <p className="text-muted-foreground/70 text-sm md:text-base max-w-sm mx-auto lg:mx-0 mb-10 leading-relaxed font-medium tracking-wide">
              Forging resilient software solutions with state-of-the-art technologies and industrial-grade scalability.
            </p>

            {/* Structured CTAs */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 bg-primary text-primary-foreground font-black text-xs rounded-xl flex items-center gap-2 shadow-2xl shadow-primary/20 transition-all uppercase tracking-[0.2em] group"
              >
                PROJECTS <Code2 size={16} />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 bg-white/5 border border-white/10 text-foreground font-black text-xs rounded-xl hover:bg-white/10 transition-all uppercase tracking-[0.2em]"
              >
                CONTACT
              </motion.button>

              <motion.a 
                href="https://drive.google.com/file/d/18NaqBpv-7MIUjSQWpEdAtCPStaFCbKcX/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 bg-white/5 border border-white/10 text-foreground/50 font-black text-xs rounded-xl hover:text-foreground transition-all uppercase tracking-[0.2em] flex items-center gap-2"
              >
                RESUME <Download size={16} />
              </motion.a>
            </div>

            {/* Social Connectors */}
            <div className="flex flex-col md:flex-row items-center gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-3">
                <span className="text-[10px] uppercase font-black tracking-[0.3em] text-primary whitespace-nowrap">Connect with me —</span>
                <div className="h-[1px] w-8 bg-primary/30 hidden md:block" />
              </div>
              <div className="flex items-center gap-3">
                {socialLinks.map(({ icon: Icon, href }) => (
                  <motion.a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.2, y: -5, color: 'var(--primary)' }}
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-muted-foreground transition-all shadow-lg hover:border-primary/20"
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right Content: The Core ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex-1 relative flex items-center justify-center p-12"
          >
            <div className="relative group w-full max-w-[350px]">
              {/* Spinning Scaffolding */}
              <div className="absolute inset-[-20px] md:inset-[-40px] border border-primary/20 rounded-full animate-spin-slow" />
              <div className="absolute inset-[-50px] md:inset-[-90px] border border-white/5 rounded-full animate-reverse-spin-slow" />
              
              {/* Circular Professional Hub */}
              <div className="relative z-20 w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] md:w-[320px] md:h-[320px] rounded-full p-1.5 bg-gradient-to-tr from-primary via-accent to-primary shadow-[0_0_50px_rgba(var(--primary-rgb),0.2)] mx-auto animate-float">
                <div className="absolute inset-0.5 bg-background rounded-full m-1" />
                <img 
                  src={profileImg} 
                  alt="Prathamesh" 
                  className="relative z-10 w-full h-full object-cover rounded-full mix-blend-screen grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Precise Language Orbiters */}
              {orbitingTech.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  animate={{ rotate: 360 }}
                  transition={{ 
                    duration: tech.ring === 1 ? 25 : 45, 
                    repeat: Infinity, 
                    ease: "linear",
                    delay: i * -4 
                  }}
                  className="absolute inset-0 pointer-events-none"
                >
                   <motion.div 
                     animate={{ rotate: -360 }}
                     transition={{ 
                       duration: tech.ring === 1 ? 25 : 45, 
                       repeat: Infinity, 
                       ease: "linear",
                       delay: i * -4 
                     }}
                     className="absolute left-1/2 -translate-x-1/2 pointer-events-auto"
                     style={{ 
                        top: tech.ring === 1 ? '-20px' : '-55px', // Adjusted for mobile
                     }}
                   >
                      <motion.div 
                        whileHover={{ scale: 1.25 }}
                        className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 glass shadow-2xl flex flex-col items-center justify-center rounded-2xl sm:rounded-3xl border border-white/10 group/item cursor-pointer hover:border-primary/40 transition-all"
                      >
                         <span className="text-sm sm:text-2xl md:text-3xl mb-1">{tech.icon}</span>
                         <span className="text-[5px] sm:text-[7px] md:text-[8px] font-black uppercase tracking-[0.2em] text-muted-foreground group-hover/item:text-primary transition-colors">{tech.name}</span>
                      </motion.div>
                   </motion.div>
                </motion.div>
              ))}

              {/* Technical Badges */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground text-[8px] font-black px-3 py-1.5 rounded-lg shadow-2xl tracking-[0.2em] z-30 animate-bounce-slow">
                ACTIVE_NODE:01
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Modern UI Footer Link */}
      <div className="absolute bottom-10 left-10 hidden lg:block">
        <div className="flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.4em] text-muted-foreground/30">
          <span>Ver 3.0.4</span>
          <div className="w-16 h-[1px] bg-white/10" />
          <span>EST 2024</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

