import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import AvatarPixel from "../components/AvatarPixel";

function calculateAge(birthday) {
  const birthDate = new Date(birthday);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) age--;
  return age;
}

export default function PersonalData() {
  const age = calculateAge("2001-05-31");
  const textColor = "#ccd6f6";
  const fontWeight = 300;
  const iconStyle = {
    color: "#00ffea",
    fontSize: "1.5rem",
    transition: "transform 0.3s, color 0.3s"
  };

  const handleHover = (e) => {
    e.currentTarget.style.transform = "scale(1.2)";
    e.currentTarget.style.color = "#ffffff";
  };
  const handleLeave = (e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.color = "#00ffea";
  };

  const values = [
    "Aprendizaje continuo",
    "Trabajo en equipo",
    "Adaptabilidad",
    "Proactivo",
    "Integridad",
    "Responsabilidad"
  ];

  return (
    <div style={{
      display: "flex",
      border: "2px solid #00ffea",
      borderRadius: "12px",
      padding: "2rem",
      width: "100%",
      boxSizing: "border-box",
      color: textColor,
      fontWeight,
      gap: "2rem"
    }}>
      {/* Columna 1: Foto + Valores + Redes */}
      <div style={{
        flex: "0 0 35%", // ahora 35%
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}>
        {/* Foto circular */}
        <AvatarPixel size={250} borderColor="#00ffea" />

        {/* Tags de valores alineados horizontalmente y con wrap */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          justifyContent: "center",
          marginTop: "1rem"
        }}>
          {values.map((val, index) => (
            <span key={index} style={{
              fontSize: "0.8rem",
              background: "#00ffea20",
              color: "#00ffea",
              padding: "0.2rem 0.5rem",
              borderRadius: "8px",
              fontWeight: 300
            }}>
              {val}
            </span>
          ))}
        </div>

        {/* Redes sociales */}
        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
          <a
            href="https://wa.me/925872548"
            target="_blank"
            rel="noopener noreferrer"
            style={iconStyle}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            <FaWhatsapp />
          </a>
          <a href="http://www.linkedin.com/in/bustamante-rojas-jeremy-b029aa252" target="_blank" rel="noopener noreferrer"
            style={iconStyle}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            <FaLinkedin />
          </a>
          <a href="https://github.com/DvJeremy" target="_blank" rel="noopener noreferrer"
            style={iconStyle}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            <FaGithub />
          </a>
          <a href="mailto:jeremy.amazing.it@gmail.com" target="_blank" rel="noopener noreferrer"
            style={iconStyle}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Columna 2: Datos y Sobre mí */}
      <div style={{ 
        flex: "0 0 65%", // ahora 65%
        display: "flex", 
        flexDirection: "column", 
        gap: "2rem", 
        paddingRight: "1rem" // evita choque con el borde derecho
      }}>
        
        {/* Fila 1: Datos personales */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <h3 style={{ margin: 0, color: "#00ffea", fontWeight: 300, fontSize: "1.3rem" }}>
            Jeremy Guieppe Bustamante Rojas
          </h3>
          <div style={{ fontSize: "0.95rem", fontWeight: 300 }}>Ingeniero de Sistemas</div>

          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", fontSize: "0.85rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <FaMapMarkerAlt /> Lima - Rímac, Perú
            </div>
            <div>{age} años</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem", fontSize: "0.85rem", marginTop: "0.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <FaPhoneAlt /> +51 925872548
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <FaEnvelope /> jeremy.amazing.it@gmail.com
            </div>
          </div>
        </div>

        {/* Fila 2: Sobre mí */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <h3 style={{ margin: 0, color: "#00ffea", fontWeight: 300, borderBottom: "2px solid #00ffea", display: "inline-block", fontSize: "1rem" }}>
            Sobre mí
          </h3>
          <p style={{ margin: 0, textAlign: "justify", fontSize: "0.9rem", lineHeight: "1.5rem", fontWeight: 300 }}>
            Estudiante de Ingeniería de Sistemas, comprometido con alcanzar mis metas y dispuesto a aprender y adaptarme a las necesidades del área en la que participe. Me caracterizo por ser un profesional con la capacidad de superar retos, trabajar en equipo de manera proactiva, manejar situaciones bajo presión y cumplir con responsabilidad las tareas asignadas. Durante mi formación académica, he desarrollado conocimientos en programación, gestión de bases de datos y análisis de datos. Mi enfoque en el aprendizaje constante me permite mantenerse actualizado en su especialidad, asegurando que puedo contribuir de manera efectiva y aportar valor en cualquier entorno profesional.
          </p>
        </div>

      </div>
    </div>
  );
}