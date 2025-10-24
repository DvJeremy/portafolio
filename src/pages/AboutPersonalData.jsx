import "../styles/PersonalData.css";
import AboutPersonalDataCol1 from "./AboutPersonalDataCol1";
import AboutPersonalDataCol2 from "./AboutPersonalDataCol2";

export default function PersonalData() {
  const age = new Date().getFullYear() - 2001; // cálculo simple
  const values = [
    "Aprendizaje continuo",
    "Trabajo en equipo",
    "Adaptabilidad",
    "Proactivo",
    "Integridad",
    "Responsabilidad"
  ];

  const iconStyle = {
    color: "#00ffea",
    fontSize: "1.5rem",
    transition: "transform 0.3s, color 0.3s"
  };
  const handleHover = (e) => { e.currentTarget.style.transform = "scale(1.2)"; e.currentTarget.style.color = "#ffffff"; };
  const handleLeave = (e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.color = "#00ffea"; };

  return (
    <div className="personal-data-container">
      <AboutPersonalDataCol1 values={values} iconStyle={iconStyle} handleHover={handleHover} handleLeave={handleLeave} />
      <AboutPersonalDataCol2 age={age} />
    </div>
  );
}