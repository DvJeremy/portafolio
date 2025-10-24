import { FaLinkedin, FaGithub } from "react-icons/fa";
import AvatarPixel from "../components/AvatarPixel";

export default function AboutPersonalDataCol1({ values, iconStyle, handleHover, handleLeave }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <AvatarPixel size={250} borderColor="#00ffea" />

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

      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        <a href="https://www.linkedin.com/in/bustamante-rojas-jeremy-b029aa252"
           target="_blank" rel="noopener noreferrer"
           style={iconStyle}
           onMouseEnter={handleHover}
           onMouseLeave={handleLeave}>
          <FaLinkedin />
        </a>
        <a href="https://github.com/DvJeremy"
           target="_blank" rel="noopener noreferrer"
           style={iconStyle}
           onMouseEnter={handleHover}
           onMouseLeave={handleLeave}>
          <FaGithub />
        </a>
      </div>
    </div>
  );
}