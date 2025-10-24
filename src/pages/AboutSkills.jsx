import { useState, useEffect } from "react"
import skillsData from "../data/skills.json"
import * as FaIcons from "react-icons/fa"
import * as SiIcons from "react-icons/si"

const getIconComponent = (iconName) => FaIcons[iconName] || SiIcons[iconName] || FaIcons.FaTools

const categoryColors = {
  frontend: "#F16529",
  backend: "#6CC24A",
  basesDeDatos: "#FF6F61",
  office: "#FFD700",
  otros: "#1DA1F2",
  hosting: "#00C9A7"
}

export default function AboutSkills() {
  const [hoverCategory, setHoverCategory] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 480)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  if (!skillsData) return <div>JSON no cargado</div>

  const allSkills = Object.entries(skillsData).flatMap(([category, skills]) =>
    skills.map((skill) => ({ ...skill, category }))
  )

  // Mantener tamaño fijo de cards para que no se rompan
  const cardSize = isMobile ? 80 : 100
  const iconSize = isMobile ? 1.5 : 2
  const gridMin = isMobile ? "80px" : "120px"
  const fontSizeCard = isMobile ? "0.75rem" : "0.85rem"

  return (
    <div
      style={{
        color: "#ccd6f6",
        border: "2px solid #00ffea",
        borderRadius: "12px",
        padding: isMobile ? "1rem 0.5rem" : "2rem 1rem",
      }}
    >
      {/* Título */}
      <div style={{ textAlign: "center", marginBottom: isMobile ? "1.5rem" : "2.5rem" }}>
        <h2
          style={{
            color: "#00ffea",
            fontWeight: 300,
            fontSize: isMobile ? "1.8rem" : "2.5rem",
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
          gap: isMobile ? "1rem" : "2rem",
          marginBottom: isMobile ? "1.5rem" : "2.5rem",
          flexWrap: "wrap",
        }}
      >
        {Object.entries(categoryColors).map(([category, color]) => (
          <div
            key={category}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              opacity: hoverCategory === null || hoverCategory === category ? 1 : 0.3,
              transition: "opacity 0.2s, transform 0.2s",
              transform: hoverCategory === null || hoverCategory === category ? "scale(1)" : "scale(0.95)",
              cursor: "default",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                background: color,
                borderRadius: "2px",
                boxShadow: `0 0 8px ${color}`,
              }}
            ></div>
            <span
              style={{
                textTransform: "capitalize",
                fontSize: isMobile ? "0.85rem" : "0.95rem",
                fontWeight: 400,
                letterSpacing: "0.5px",
              }}
            >
              {category}
            </span>
          </div>
        ))}
      </div>

      {/* Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(auto-fit, minmax(${gridMin}, 1fr))`,
          gap: isMobile ? "0.5rem" : "1rem",
          justifyItems: "center",
          paddingTop: isMobile ? "0.5rem" : "1rem",
          paddingBottom: isMobile ? "0.5rem" : "1rem",
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
                width: `${cardSize}px`,
                height: `${cardSize}px`,
                borderRadius: "12px",
                background: isHovered ? "rgba(0,255,234,0.1)" : "rgba(0,0,0,0.05)",
                color: "#ccd6f6",
                fontSize: fontSizeCard,
                textAlign: "center",
                padding: "0.5rem",
                cursor: "default",
                transition: "transform 0.2s, box-shadow 0.2s, background 0.2s",
                transform: !isMobile && isHovered ? "scale(1.05)" : "scale(1)",
                boxShadow: !isMobile && isHovered ? `0 0 15px ${color}` : "none",
              }}
              onMouseEnter={!isMobile ? () => setHoverCategory(skill.category) : undefined}
              onMouseLeave={!isMobile ? () => setHoverCategory(null) : undefined}
            >
              <Icon style={{ color, fontSize: `${iconSize}rem`, marginBottom: "0.3rem" }} />
              <span>{skill.nombre}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}