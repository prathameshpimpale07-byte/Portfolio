import { motion } from "framer-motion";

const BackgroundGradient = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      
      {/* Animated orbs */}
      <motion.div
        animate={{ x: [0, 50, -30, 0], y: [0, -40, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] -left-[10%] w-[600px] h-[600px] rounded-full bg-primary/8 blur-[150px]"
      />
      <motion.div
        animate={{ x: [0, -60, 40, 0], y: [0, 50, -30, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[30%] -right-[10%] w-[700px] h-[700px] rounded-full bg-accent/8 blur-[150px]"
      />
      <motion.div
        animate={{ x: [0, 40, -50, 0], y: [0, -30, 40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute bottom-[-5%] left-[20%] w-[500px] h-[500px] rounded-full bg-[hsl(330,80%,60%)]/8 blur-[150px]"
      />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      {/* Radial fade at edges */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at center, transparent 0%, hsl(230 25% 7%) 70%)',
      }} />
    </div>
  );
};

export default BackgroundGradient;
