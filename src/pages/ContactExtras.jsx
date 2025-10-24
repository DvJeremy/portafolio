import { FaEnvelope, FaWhatsapp } from "react-icons/fa"
import { motion } from "framer-motion"
import "../styles/contact-extras.css"

export default function ContactExtras() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const contactItems = [
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      href: "https://wa.me/925872548",
      color: "#25D366",
    },
    {
      icon: FaEnvelope,
      label: "Email",
      href: "mailto:jeremy.amazing.it@gmail.com",
      color: "#EA4335",
    },
  ]

  return (
    <motion.div
      className="contact-extras-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible" // <- Cambiado aquí
      style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}
    >
      {/* Texto arriba */}
      <motion.p
        className="extras-title"
        variants={itemVariants}
        style={{ fontSize: "1.2rem", color: "#ccd6f6", textAlign: "center" }}
      >
        Contacta conmigo también aquí
      </motion.p>

      {/* Flecha */}
      <motion.div
        className="extras-arrow"
        variants={itemVariants}
        style={{ fontSize: "2.5rem", color: "#00ffea" }}
      >
        ↓
      </motion.div>

      {/* Íconos */}
      <motion.div
        className="contact-items"
        variants={itemVariants}
        style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
      >
        {contactItems.map((item, index) => {
          const Icon = item.icon
          return (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              style={{ textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}
            >
              <div
                className="icon-circle"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  border: `2px solid ${item.color}`,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon style={{ color: item.color, fontSize: "3rem" }} />
              </div>
              <span style={{ color: "#ccd6f6", fontSize: "1rem" }}>{item.label}</span>
            </motion.a>
          )
        })}
      </motion.div>
    </motion.div>
  )
}