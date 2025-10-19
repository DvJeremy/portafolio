import { motion } from "framer-motion";
import "../styles/section.css";

function Section({ id, children, background, fullHeight = true }) {
  return (
    <motion.section
      id={id}
      style={{
        minHeight: fullHeight ? "100vh" : "auto",
        width: "100%",
        scrollSnapAlign: "start",
        scrollSnapStop: "normal",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          background ||
          "radial-gradient(circle at 20% 20%, #0a192f, #020c1b 80%)",
        color: "#fff",
        fontSize: "2rem",
        flexShrink: 0,
        position: "relative",
        overflow: "hidden",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.5 }}
    >
      {/* Fondo animado interno */}
      <div className="section-bg">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>

      {/* Contenido */}
      <div className="section-inner">{children}</div>
    </motion.section>
  );
}

export default Section;