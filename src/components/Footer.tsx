import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, TwitterIcon, YoutubeIcon, LeetcodeIcon } from "./SocialIcons";
import { Heart, Mail, MapPin, ArrowUp } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: GithubIcon, href: "https://github.com/prathameshpimpale07-byte", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/prathamesh-pimpale-0b079a378/", label: "LinkedIn" },
  { icon: TwitterIcon, href: "https://x.com/Prathamesh74558", label: "Twitter" },
  { icon: YoutubeIcon, href: "https://www.youtube.com/@PrathameshTechCode", label: "YouTube" },
  { icon: LeetcodeIcon, href: "https://leetcode.com/u/Prathameshpimaple/", label: "LeetCode" },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-border/30 pt-16 pb-8 mt-8 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-display text-2xl font-bold gradient-text">{"<PP />"}</span>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-xs">
              Full Stack Developer passionate about building modern web applications and solving complex problems.
            </p>
            <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground hover:text-primary transition-colors cursor-default">
              <MapPin size={14} className="text-primary" />
              <span>Maharashtra, India</span>
            </div>
            <a href="mailto:prathameshpimpale07@gmail.com" className="flex items-center gap-2 mt-2 text-sm text-muted-foreground hover:text-primary transition-colors group cursor-pointer w-fit">
              <Mail size={14} className="text-primary group-hover:scale-110 transition-transform" />
              <span>prathameshpimpale07@gmail.com</span>
            </a>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-display font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link, i) => (
                <li key={link.href}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })}
                    className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all flex items-center gap-1 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-display font-bold text-foreground mb-4">Connect With Me</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  whileHover={{ y: -5, scale: 1.1, rotate: 5 }}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  title={label}
                  className="w-11 h-11 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-foreground transition-all border border-transparent hover:border-primary/30"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {new Date().getFullYear()} Prathamesh Pimpale. Built with{" "}
            <Heart size={14} className="text-destructive" />
          </p>
          <motion.button
            whileHover={{ y: -2 }}
            onClick={scrollToTop}
            className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            title="Back to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
