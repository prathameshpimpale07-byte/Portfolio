import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { ExternalLink, FolderGit2, Globe } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

const projects = [
  {
    title: "Expense Tracker",
    desc: "A full-stack application to track daily expenses with categorization, visual analytics, budget management, and monthly reports. Features include user authentication, spending trends, and export functionality.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
    github: "https://github.com/prathameshpimpale07-byte/Expense-Tracker",
    live: "https://expense-tracker-app-07.vercel.app/",
    image: "/projects/expense_tracker.png",
  },
  {
    title: "Job Portal System",
    desc: "A comprehensive job portal with separate employer and candidate dashboards, advanced job search with filters, application tracking, resume upload, and real-time notifications.",
    tech: ["Java", "Spring Boot", "MySQL", "REST API", "JWT"],
    github: "https://github.com/prathameshpimpale07-byte/Job-Portal-System",
    live: "",
    image: "/projects/job_portal.png",
  },
  {
    title: "Finance Management",
    desc: "Personal finance management tool featuring income/expense tracking, interactive dashboards with charts, financial goal setting, bill reminders, and comprehensive reporting.",
    tech: ["React", "Express", "MongoDB", "Tailwind", "Node.js"],
    github: "https://github.com/prathameshpimpale07-byte/Finance-Mangement",
    live: "https://equal-trip-backend.vercel.app/",
    image: "/projects/finance_management.png",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24">
    <div className="container mx-auto px-6">
      <SectionHeading title="Projects" subtitle="Featured work that showcases my skills" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
            whileHover={{ y: -10 }}
            className="group"
          >
            <div className="glass-card rounded-[32px] overflow-hidden h-full flex flex-col border border-white/5 group-hover:border-primary/40 transition-all duration-500 group-hover:shadow-[0_20px_60px_-15px_hsla(var(--primary)/0.2)]">
              {/* Project Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                />
                {/* Overlay with glass look */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
                
                <div className="absolute top-6 left-6 w-12 h-12 rounded-2xl bg-background/80 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:glow-primary transition-all duration-500">
                  <FolderGit2 className="text-primary" size={24} />
                </div>
                
                {/* Floating Tech Count */}
                <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-[9px] font-black uppercase tracking-widest text-primary">
                  {project.tech.length} Technologies
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1 relative">
                {/* Accent line */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

                <h3 className="text-2xl font-bold font-display text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-1 opacity-80 group-hover:opacity-100 transition-opacity">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, idx) => (
                    <motion.span 
                       key={t}
                       initial={{ opacity: 0, scale: 0 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       transition={{ delay: i * 0.1 + idx * 0.05 }}
                       className="text-[9px] px-3 py-1.5 rounded-lg bg-white/5 text-muted-foreground font-black uppercase tracking-widest border border-white/10 group-hover:border-primary/20 group-hover:text-foreground transition-all"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>

                <div className="flex items-center gap-6 pt-4 border-t border-white/5">
                  <motion.a
                    whileHover={{ x: 3, color: "hsl(var(--primary))" }}
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-muted-foreground transition-all group/link"
                  >
                    <GithubIcon size={18} />
                    <span>View Repository</span>
                  </motion.a>
                  {project.live && (
                    <motion.a
                      whileHover={{ x: 3, color: "hsl(var(--primary))" }}
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-muted-foreground transition-all group/link"
                    >
                      <Globe size={18} />
                      <span>Live Site</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    <div className="section-divider mt-24 max-w-md mx-auto" />
  </section>
);

export default ProjectsSection;
