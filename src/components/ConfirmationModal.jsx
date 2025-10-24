import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

export default function ConfirmationModal({ isOpen, onClose, onConfirm }) {
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
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999, // alto valor para encima de todo
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
              color: "#ccd6f6",
              width: "90%",
              maxWidth: "400px",
              textAlign: "center",
              boxShadow: "0 0 15px rgba(0, 255, 234, 0.3)",
            }}
          >
            <h3 style={{ color: "#00ffea", marginBottom: "1rem", fontWeight: 400 }}>
              Confirmar envío
            </h3>
            <p style={{ fontSize: "0.95rem", marginBottom: "2rem", lineHeight: "1.4rem" }}>
              ¿Estás seguro de que deseas enviar este mensaje?
            </p>

            <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
              <button
                onClick={onConfirm}
                style={{
                  padding: "0.6rem 1.5rem",
                  backgroundColor: "#00ffea",
                  color: "#0a192f",
                  border: "none",
                  borderRadius: "8px",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#00c8b3")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#00ffea")}
              >
                Sí, enviar
              </button>

              <button
                onClick={onClose}
                style={{
                  padding: "0.6rem 1.5rem",
                  backgroundColor: "transparent",
                  border: "1px solid #00ffea",
                  color: "#00ffea",
                  borderRadius: "8px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#00ffea20";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                Cancelar
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}