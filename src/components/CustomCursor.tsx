import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show on desktop
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], input, textarea, select")) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.removeEventListener("mouseleave", leave);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Outer glow ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] border border-primary/30"
        animate={{
          x: pos.x - (hovering ? 32 : 24),
          y: pos.y - (hovering ? 32 : 24),
          width: hovering ? 72 : 48,
          height: hovering ? 72 : 48,
          opacity: hovering ? 0.75 : 0.35,
        }}
        transition={{ type: "spring", stiffness: 210, damping: 18, mass: 0.65 }}
        style={{
          background: hovering
            ? "hsla(var(--primary) / 0.12)"
            : "hsla(var(--primary) / 0.04)",
          mixBlendMode: "screen",
        }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
        animate={{
          x: pos.x - 6,
          y: pos.y - 6,
          width: hovering ? 12 : 10,
          height: hovering ? 12 : 10,
          scale: hovering ? 1.1 : 1,
        }}
        transition={{ type: "spring", stiffness: 420, damping: 24 }}
        style={{
          background: "hsl(var(--primary))",
        }}
      />
    </>
  );
};

export default CustomCursor;
