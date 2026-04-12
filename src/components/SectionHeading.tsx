import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: Props) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    className="text-center mb-16 relative"
  >
    {/* Decorative background element for heading */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/5 blur-3xl rounded-full sm:block hidden" />
    
    <div className="relative z-10">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
          }
        }}
      >
        <span className="block text-[10px] uppercase font-black tracking-[0.5em] text-primary/60 mb-3 ml-[0.5em]">
          Portfolio Section
        </span>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black gradient-text inline-block mb-4 leading-none">
          {title}
        </h2>
      </motion.div>
      
      {subtitle && (
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6, delay: 0.2 }
            }
          }}
          className="text-muted-foreground text-sm uppercase font-bold tracking-[0.2em] max-w-xl mx-auto opacity-70"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Modern line design */}
      <div className="flex items-center justify-center gap-2 mt-8">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "3rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-px bg-gradient-to-r from-transparent to-primary/40" 
        />
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="w-1.5 h-1.5 rounded-full bg-primary" 
        />
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "3rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-px bg-gradient-to-l from-transparent to-primary/40" 
        />
      </div>
    </div>
  </motion.div>
);

export default SectionHeading;
