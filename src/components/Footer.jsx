import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaReact } from "react-icons/fa";

export default function Footer() {
  const [hovered, setHovered] = useState(false);
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      style={{
        background: "#020c1b",
        color: "#ccd6f6",
        padding: "1rem 1.5rem",
        borderTop: "1px solid rgba(0, 255, 234, 0.1)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
        position: "relative",
      }}
    >
      {/* --- Ícono React --- */}
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.div
          animate={
            hovered
              ? { rotate: 360, color: "#00ffea" }
              : { rotate: 0, color: "#00d8ff" }
          }
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          style={{
            fontSize: "2rem",
            cursor: "pointer",
            transformOrigin: "center center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
          }}
        >
          <FaReact style={{ transform: "translateY(1px)" }} />
        </motion.div>

        {/* --- Popout --- */}
        <AnimatePresence>
          {hovered && (
            <motion.span
              initial={{ opacity: 0, x: -20, y: -5 }}
              animate={{ opacity: 1, x: 10, y: -5 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{
                duration: 0.4,
                type: "spring",
                stiffness: 160,
                damping: 14,
              }}
              style={{
                position: "absolute",
                left: "100%",
                top: "38%",
                color: "#00ffea",
                fontSize: "0.85rem",
                fontWeight: 500,
                textShadow: "0 0 8px rgba(0,255,234,0.6)",
                whiteSpace: "nowrap",
                pointerEvents: "none",
              }}
            >
              Desarrollado en React ⚡
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* --- Texto central --- */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{
          fontSize: "0.95rem",
          textAlign: "center",
          flex: 1,
          minWidth: "220px",
        }}
      >
        © {year} — Desarrollado íntegramente por{" "}
        <span style={{ color: "#00ffea", fontWeight: 500 }}>
          Jeremy Guiseppe Bustamante Rojas
        </span>
      </motion.p>

      {/* --- Siglas --- */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        style={{
          fontSize: "0.9rem",
          color: "#00ffea",
          fontWeight: 500,
          whiteSpace: "nowrap",
        }}
      >
        @JGBR.Dev
      </motion.p>

      <style>
        {`
          @media (max-width: 768px) {
            footer {
              flex-direction: column;
              text-align: center;
              gap: 1rem;
            }
          }
        `}
      </style>
    </motion.footer>
  );
}