import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function CVModal({ onClose }) {
  const [isMobile, setIsMobile] = useState(false);

  // Detectar tamaño de pantalla
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Tamaños dinámicos
  const buttonSize = isMobile ? 35 : 50;
  const iconSize = isMobile ? 1.2 : 1.5;
  const closeFontSize = isMobile ? "1.5rem" : "2rem";

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.85)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        animation: "fadeIn 0.3s ease",
      }}
    >
      <div
        style={{
          backgroundColor: "#0a0a0a",
          padding: isMobile ? "1rem" : "2rem",
          borderRadius: "16px",
          width: "95%",
          maxWidth: "1000px",
          height: isMobile ? "95%" : "90%",
          overflow: "hidden",
          position: "relative",
          boxShadow: "0 0 30px #00ffea50",
          display: "flex",
          flexDirection: "column",
          animation: "slideIn 0.4s ease",
        }}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: isMobile ? "0.5rem" : "1rem",
            right: isMobile ? "0.5rem" : "1rem",
            background: "transparent",
            border: "none",
            fontSize: closeFontSize,
            color: "#00ffea",
            cursor: "pointer",
            transition: "transform 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          &times;
        </button>

        {/* Botón de descarga CV */}
        <motion.a
          href="/assets/file/cv.pdf"
          download
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{
            position: "absolute",
            top: isMobile ? "0.5rem" : "1rem",
            left: isMobile ? "0.5rem" : "1rem",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: buttonSize,
              height: buttonSize,
              borderRadius: "50%",
              border: "2px solid #00ffea",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#0a0a0a",
            }}
          >
            <FaDownload style={{ color: "#00ffea", fontSize: `${iconSize}rem` }} />
          </div>
        </motion.a>

        {/* Título */}
        <h2 style={{ color: "#00ffea", marginBottom: "1rem", textAlign: "center" }}>
          Currículum Vitae
        </h2>

        {/* Contenido del PDF */}
        <div
          style={{
            flex: 1,
            overflow: "auto",
            border: "1px solid #00ffea",
            borderRadius: "12px",
          }}
        >
          <iframe
            src="/assets/file/cv.pdf"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              borderRadius: "12px",
              minHeight: isMobile ? "500px" : "auto",
            }}
            title="CV PDF"
          ></iframe>
        </div>
      </div>

      {/* Animaciones */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideIn {
            from { transform: translateY(-20px); opacity:0; }
            to { transform: translateY(0); opacity:1; }
          }
        `}
      </style>
    </div>
  );
}