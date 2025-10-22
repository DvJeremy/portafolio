import Section from "../components/Section";
import PersonalData from "./AboutPersonalData";
import AboutSkills from "./AboutSkills";

export default function About() {
  return (
    <Section id="about" background="#112240">
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
        Sobre Mi
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem", width: "100%" }}>
        {/* Fila 1: PersonalData */}
        <PersonalData />

        {/* Fila 2: AboutSkills */}
        <AboutSkills />
      </div>
    </Section>
  );
}