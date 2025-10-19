import Section from "../components/Section";
import PersonalData from "../components/PersonalData";
import AboutSkills from "./AboutSkills";

export default function About() {
  return (
    <Section id="about" background="#112240">
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem", width: "100%" }}>
        {/* Fila 1: PersonalData */}
        <PersonalData />

        {/* Fila 2: AboutSkills */}
        <AboutSkills />
      </div>
    </Section>
  );
}