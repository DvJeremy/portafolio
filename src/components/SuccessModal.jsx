import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { createPortal } from "react-dom";

export default function SuccessModal({ isOpen, onClose }) {
  if (typeof document === "undefined") return null; // SSR safe

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              backgroundColor: "#111827",
              border: "2px solid #00ffea",
              borderRadius: "12px",
              padding: "2rem",
              textAlign: "center",
              color: "#ccd6f6",
              maxWidth: "400px",
              width: "90%",
              boxShadow: "0 0 20px rgba(0,255,234,0.3)",
            }}
          >
            <FaCheckCircle
              size={60}
              color="#00ffea"
              style={{ marginBottom: "1rem" }}
            />
            <h2 style={{ color: "#00ffea", marginBottom: "1rem" }}>
              ¡Mensaje enviado!
            </h2>
            <p style={{ marginBottom: "1.5rem", color: "#8892b0" }}>
              Tu mensaje fue enviado correctamente.  
              Te responderé lo antes posible 🚀
            </p>
            <button
              onClick={onClose}
              style={{
                backgroundColor: "#00ffea",
                color: "#0a192f",
                border: "none",
                borderRadius: "8px",
                padding: "0.6rem 1.5rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#00c8b3")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#00ffea")
              }
            >
              Cerrar
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}