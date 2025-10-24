import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import CVModal from "../components/CVModal";
import CVButton from "../components/CVButton";

export default function AboutPersonalDataCol2({ age }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      {/* Datos personales + Botón CV */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap", // permite que los elementos bajen de fila en móvil
          gap: "1rem",
        }}
      >
        {/* Contenedor de datos */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem", flex: 1, minWidth: "250px" }}>
          <h3
            style={{
              margin: 0,
              color: "#00ffea",
              fontWeight: 300,
              fontSize: "1.3rem",
            }}
          >
            Jeremy Guieppe Bustamante Rojas
          </h3>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap", // permite que los elementos bajen si no caben
              alignItems: "center",
              gap: "1rem",
              fontSize: "0.95rem",
              fontWeight: 300,
            }}
          >
            <div>Ingeniero de Sistemas</div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <FaMapMarkerAlt /> Lima, Perú
            </div>
            <div>{age} años</div>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              fontSize: "0.85rem",
              marginTop: "0.5rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <FaPhoneAlt /> +51 925872548
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <FaEnvelope /> jeremy.amazing.it@gmail.com
            </div>
          </div>
        </div>

        {/* Botón circular CV */}
        <div style={{ flexShrink: 0 }}>
          <CVButton onClick={() => setShowModal(true)} />
        </div>
      </div>

      {/* Sobre mí */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <h3
          style={{
            margin: 0,
            color: "#00ffea",
            fontWeight: 300,
            borderBottom: "2px solid #00ffea",
            display: "inline-block",
            fontSize: "1rem",
          }}
        >
          Sobre mí
        </h3>
        <p
          style={{
            margin: 0,
            textAlign: "justify",
            fontSize: "0.9rem",
            lineHeight: "1.5rem",
            fontWeight: 300,
          }}
        >
          Estudiante de Ingeniería de Sistemas, comprometido con alcanzar mis metas y dispuesto a aprender y adaptarme a las necesidades del área en la que participe. Me caracterizo por ser un profesional con la capacidad de superar retos, trabajar en equipo de manera proactiva, manejar situaciones bajo presión y cumplir con responsabilidad las tareas asignadas. Durante mi formación académica, he desarrollado conocimientos en programación, gestión de bases de datos y análisis de datos. Mi enfoque en el aprendizaje constante me permite mantenerse actualizado en su especialidad, asegurando que puedo contribuir de manera efectiva y aportar valor en cualquier entorno profesional.
        </p>
      </div>

      {/* Modal */}
      {showModal && <CVModal onClose={() => setShowModal(false)} />}
    </div>
  );
}