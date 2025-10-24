import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import { FaCode } from "react-icons/fa";
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
  const basePath = import.meta.env.BASE_URL;
  const projectsWithCorrectImages = projectsData.map(proj => ({
    ...proj,
    imagenes: proj.imagenes.map(img => `${basePath}${img.replace(/^\/+/, '')}`)
  }));

  return (
    <Section id="projects" background="#020c1b">
      <SectionTitle text="Proyectos" icon={<FaCode />} />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4rem",
          alignItems: "center",
          color: "#ccd6f6",
          width: "100%",
        }}
      >
        {projectsData.map((proj) => (
          <motion.div
            key={proj.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.8rem",
              border: "1px solid #00ffea40",
              padding: "2.5rem 2rem",
              background: "linear-gradient(135deg, #0a192f60 0%, #0f284760 100%)",
              width: "100%", // 🔹 full width total
              boxSizing: "border-box",
              boxShadow: "0 8px 32px rgba(0, 255, 234, 0.05)",
            }}
            whileHover={{
              scale: 1.005,
              boxShadow: "0 12px 48px rgba(0, 255, 234, 0.1)",
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Título */}
            <h3
              style={{
                color: "#00ffea",
                fontWeight: 600,
                fontSize: "1.8rem",
                margin: 0,
                letterSpacing: "-0.5px",
                textAlign: "center",
              }}
            >
              {proj.nombre}
            </h3>

            {/* Descripción */}
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.8",
                  textAlign: "center",
                  fontWeight: 400,
                  color: "#b0bec5",
                  margin: 0,
                  maxWidth: "90%", // 🔹 centrada y con buen margen en pantallas grandes
                }}
              >
                {proj.descripcion}
              </p>
            </div>

            {/* Skills */}
            <div
              style={{
                marginTop: "0.5rem",
                display: "flex",
                flexWrap: "wrap",
                gap: "0.7rem",
                justifyContent: "center",
                width: "100%", // 🔹 ocupa todo el ancho
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
                      borderRadius: "8px",
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

            {/* Slider */}
            <div
              style={{
                width: "100%",
                marginTop: "1.5rem",
                overflow: "hidden",
                borderRadius: "0px", // 🔹 sin bordes redondeados
              }}
            >
              <ImageSlider 
                images={projectsWithCorrectImages.find(p => p.id === proj.id).imagenes}
                interval={3000}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export default Projects;