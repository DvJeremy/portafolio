import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import ContactForm from "./ContactForm";
import ContactExtras from "./ContactExtras"; // <-- Importa tu componente
import { FaEnvelope } from "react-icons/fa";
import "../styles/contact.css";

export default function Contact() {
  return (
    <Section id="contact" background="#1f2937">
      <SectionTitle text="Contacto" icon={<FaEnvelope />} />

      <div className="contact-content">
        {/* Columna izquierda */}
        <div className="contact-info">
          <ContactExtras />
        </div>

        {/* Columna derecha */}
        <div className="contact-form-column">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}