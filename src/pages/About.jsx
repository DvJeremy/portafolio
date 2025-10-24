import Section from "../components/Section";
import PersonalData from "./AboutPersonalData";
import AboutSkills from "./AboutSkills";
import SectionTitle from "../components/SectionTitle";
import { FaUser } from "react-icons/fa";

export default function About() {
  return (
    <Section id="about" background="#112240">
      
      <SectionTitle text="Sobre mí" icon={<FaUser />} />

      <div style={{ display: "flex", flexDirection: "column", gap: "2rem", width: "100%" }}>
        {/* Fila 1: PersonalData */}
        <PersonalData />

        {/* Fila 2: AboutSkills */}
        <AboutSkills />
      </div>
    </Section>
  );
}