import { FaFileAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function CVButton({ onClick }) {
  return (
    <motion.div
      onClick={onClick}
      className="contact-item"
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      style={{
        cursor: "pointer",
        flexDirection: "row",
        alignItems: "center",
        gap: "0.5rem", // espacio entre texto y círculo
      }}
    >
      {/* Texto a la izquierda */}
      <span style={{ color: "#00ffea", fontSize: "0.9rem", fontWeight: 600 }}>CV</span>

      {/* Círculo con icono */}
      <div className="icon-circle" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <FaFileAlt className="contact-icon" style={{ fontSize: "2.5rem", color: "#00ffea" }} />
      </div>
    </motion.div>
  );
}