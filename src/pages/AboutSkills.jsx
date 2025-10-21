import { useState } from "react"
import skillsData from "../data/skills.json"
import * as FaIcons from "react-icons/fa"
import * as SiIcons from "react-icons/si"

// Devuelve el icono según su nombre o uno genérico
const getIconComponent = (iconName) => FaIcons[iconName] || SiIcons[iconName] || FaIcons.FaTools

// Colores por categoría
const categoryColors = {
  frontend: "#F16529",       // naranja HTML
  backend: "#6CC24A",        // verde Node
  basesDeDatos: "#FF6F61",   // coral
  office: "#FFD700",         // dorado
  otros: "#1DA1F2",          // azul Twitter
  hosting: "#00C9A7"         // verde agua (nuevo)
}

export default function AboutSkills() {
  const [hoverCategory, setHoverCategory] = useState(null)

  if (!skillsData) return <div>JSON no cargado</div>

  const allSkills = Object.entries(skillsData).flatMap(([category, skills]) =>
    skills.map((skill) => ({ ...skill, category })),
  )

  return (
    <div
      style={{
        color: "#ccd6f6",
        border: "2px solid #00ffea",
        borderRadius: "12px",
        padding: "2rem 1rem",
      }}
    >
      {/* Título */}
      <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
        <h2
          style={{
            color: "#00ffea",
            fontWeight: 300,
            fontSize: "2.5rem",
            margin: "0 0 1rem 0",
            textTransform: "uppercase",
            letterSpacing: "2px",
            textShadow: "0 0 20px rgba(0, 255, 234, 0.5)",
          }}
        >
          Conocimientos
        </h2>
        <div
          style={{
            width: "60px",
            height: "2px",
            background: "linear-gradient(90deg, transparent, #00ffea, transparent)",
            margin: "0 auto",
          }}
        ></div>
      </div>

      {/* Categorías */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          marginBottom: "2.5rem",
          flexWrap: "wrap",
        }}
      >
        {Object.entries(categoryColors).map(([category, color]) => (
          <div
            key={category}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              opacity: hoverCategory === null || hoverCategory === category ? 1 : 0.3,
              transition: "opacity 0.2s, transform 0.2s",
              transform: hoverCategory === null || hoverCategory === category ? "scale(1)" : "scale(0.95)",
              cursor: "default",
            }}
          >
            <div
              style={{
                width: "12px",
                height: "12px",
                background: color,
                borderRadius: "2px",
                boxShadow: `0 0 8px ${color}`,
              }}
            ></div>
            <span
              style={{
                textTransform: "capitalize",
                fontSize: "0.95rem",
                fontWeight: 400,
                letterSpacing: "0.5px",
              }}
            >
              {category}
            </span>
          </div>
        ))}
      </div>

      {/* Cards de skills */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          gap: "1rem",
          justifyItems: "center",
          paddingTop: "1rem",
          paddingBottom: "1rem",
        }}
      >
        {allSkills.map((skill) => {
          const Icon = getIconComponent(skill.icono)
          const color = categoryColors[skill.category] || "#00ffea"
          const isHovered = hoverCategory === null || hoverCategory === skill.category

          return (
            <div
              key={skill.id}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100px",
                height: "100px",
                borderRadius: "12px",
                background: isHovered ? "rgba(0,255,234,0.1)" : "rgba(0,0,0,0.05)",
                color: "#ccd6f6",
                fontSize: "0.85rem",
                textAlign: "center",
                padding: "0.5rem",
                cursor: "default",
                transition: "transform 0.2s, box-shadow 0.2s, background 0.2s",
                transform: isHovered ? "scale(1.05)" : "scale(1)",
                boxShadow: isHovered ? `0 0 15px ${color}` : "none",
              }}
              onMouseEnter={() => setHoverCategory(skill.category)}
              onMouseLeave={() => setHoverCategory(null)}
            >
              <Icon style={{ color, fontSize: "2rem", marginBottom: "0.3rem" }} />
              <span>{skill.nombre}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}