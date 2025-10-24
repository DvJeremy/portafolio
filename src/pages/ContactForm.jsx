import { useState, useEffect, useRef } from "react";
import { FaEnvelope, FaUser, FaTag, FaCommentDots } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import ConfirmationModal from "../components/ConfirmationModal";
import SuccessModal from "../components/SuccessModal";
import "../styles/ContactForm.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [visible, setVisible] = useState(false);
  const formRef = useRef(null);

  // 👀 Detectar cuando entra en pantalla
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (formRef.current) observer.observe(formRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleOpenModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleConfirmSend = async () => {
    setIsSending(true);
    setShowModal(false);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          ...formData,
          date: new Date().toLocaleString(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setShowSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("❌ Error al enviar correo:", error);
      alert("❌ Ocurrió un error. Intenta nuevamente más tarde.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div
      ref={formRef}
      className={`contact-form-wrapper ${visible ? "visible" : ""}`}
    >
      <form onSubmit={handleOpenModal} className="contact-form">
        <InputField
          label="Nombre"
          name="name"
          icon={<FaUser />}
          value={formData.name}
          onChange={handleChange}
        />
        <InputField
          label="Asunto"
          name="subject"
          icon={<FaTag />}
          value={formData.subject}
          onChange={handleChange}
        />
        <InputField
          label="Correo"
          name="email"
          type="email"
          icon={<FaEnvelope />}
          value={formData.email}
          onChange={handleChange}
        />
        <TextAreaField
          label="Mensaje"
          name="message"
          icon={<FaCommentDots />}
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit" className="submit-button" disabled={isSending}>
          {isSending ? "Enviando..." : "Enviar mensaje"}
        </button>
      </form>

      <ConfirmationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleConfirmSend}
      />
      <SuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} />
    </div>
  );
}

/* ------------------- Subcomponentes ------------------- */

function InputField({ label, name, icon, value, onChange, type = "text" }) {
  return (
    <div className="form-field">
      <label className="form-label">
        {icon} {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="form-input"
      />
    </div>
  );
}

function TextAreaField({ label, name, icon, value, onChange }) {
  return (
    <div className="form-field">
      <label className="form-label">
        {icon} {label}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        required
        className="form-textarea"
      ></textarea>
    </div>
  );
}