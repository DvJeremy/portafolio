import Section from "../components/Section";
import ImageSlider from "../components/ImageSlider";
import projectsData from "../data/projects.json";
import skillsData from "../data/skills.json";
import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

const getTecnologias = (tecnologias) => {
  const allSkills = Object.values(skillsData).flat();
  return allSkills.filter((skill) => tecnologias.includes(skill.id));
};

function Projects() {
  const getIconComponent = (iconName) => {
    if (!iconName) return null;
    if (iconName.startsWith("Fa") && FaIcons[iconName]) return FaIcons[iconName];
    if (iconName.startsWith("Si") && SiIcons[iconName]) return SiIcons[iconName];
    return null;
  };

  return (
    <Section id="projects" background="#020c1b">
      <h2
        style={{
          color: "#00ffea",
          fontSize: "2.5rem",
          fontWeight: 600,
          textAlign: "center",
          marginBottom: "4rem",
          letterSpacing: "-0.5px",
        }}
      >
        Proyectos
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
          alignItems: "center",
          color: "#ccd6f6",
          width: "100%",
        }}
      >
        {projectsData.map((proj, index) => (
          <motion.div
            key={proj.id}
            style={{
              display: "flex",
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
              alignItems: "stretch",
              justifyContent: "space-between",
              gap: "3rem",
              border: "1px solid #00ffea40",
              padding: "2.5rem",
              background: "linear-gradient(135deg, #0a192f60 0%, #0f284760 100%)",
              width: "100%",
              maxWidth: "1400px",
              boxSizing: "border-box",
              boxShadow: "0 8px 32px rgba(0, 255, 234, 0.05)",
            }}
            whileHover={{
              scale: 1.01,
              boxShadow: "0 12px 48px rgba(0, 255, 234, 0.1)",
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Left column: text content */}
            <div
              style={{
                flex: "0 0 25%", // 🔹 Reducido de 35% a 25%
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                minWidth: "250px",
              }}
            >
              <h3
                style={{
                  color: "#00ffea",
                  fontWeight: 600,
                  fontSize: "1.8rem",
                  margin: 0,
                  letterSpacing: "-0.5px",
                }}
              >
                {proj.nombre}
              </h3>

              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.8",
                  textAlign: "left",
                  fontWeight: 400,
                  color: "#b0bec5",
                  margin: 0,
                }}
              >
                {proj.descripcion}
              </p>

              <div
                style={{
                  marginTop: "0.5rem",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.7rem",
                  alignItems: "center",
                }}
              >
                {getTecnologias(proj.tecnologias).map((tech) => {
                  const Icon = getIconComponent(tech.icono);
                  return (
                    <span
                      key={tech.id}
                      style={{
                        background: "#00ffea15",
                        color: "#00ffea",
                        padding: "0.4rem 0.9rem",
                        fontSize: "0.85rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        border: "1px solid #00ffea30",
                        fontWeight: 500,
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#00ffea25";
                        e.currentTarget.style.borderColor = "#00ffea60";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "#00ffea15";
                        e.currentTarget.style.borderColor = "#00ffea30";
                      }}
                    >
                      {Icon && <Icon size={15} />}
                      {tech.nombre}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Right column: image slider */}
            <div
              style={{
                flex: "0 0 75%", // 🔹 Más espacio para el slider
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minWidth: "350px",
              }}
            >
              <ImageSlider images={proj.imagenes} interval={3000} />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export default Projects;