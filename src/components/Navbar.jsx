import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Home, User, Code, Folder } from "lucide-react";
import "../styles/Navbar.css"; // 👈 importamos el CSS separado

const sections = [
  { id: "home", icon: Home },
  { id: "about", icon: User },
  { id: "projects", icon: Folder },
  { id: "skills", icon: Code },
];

// 🎬 Variants para animación de entrada
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
      ease: "easeOut",
      duration: 0.6,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const isAutoScrolling = useRef(false);

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        if (isAutoScrolling.current) return;

        let maxRatio = 0;
        let mostVisibleId = activeSection;

        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisibleId = entry.target.id;
          }
        }

        if (mostVisibleId !== activeSection) {
          setActiveSection(mostVisibleId);
        }
      },
      {
        root: null,
        threshold: [0.1, 0.25, 0.5],
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeSection]);

  const scrollToSection = (id) => {
    setActiveSection(id);
    isAutoScrolling.current = true;

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setTimeout(() => {
      isAutoScrolling.current = false;
    }, 700);
  };

  return (
    <motion.div
      className="navbar-container"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {sections.map(({ id, icon: Icon }) => (
        <motion.button
          key={id}
          variants={itemVariants}
          onClick={() => scrollToSection(id)}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className={`navbar-btn ${
            activeSection === id ? "active" : ""
          }`}
        >
          <Icon
            width={20}
            height={20}
            strokeWidth={2.2}
            color={activeSection === id ? "#0a192f" : "#fff"}
          />
        </motion.button>
      ))}
    </motion.div>
  );
}

export default Navbar;