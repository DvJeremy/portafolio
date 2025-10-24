import { useState, useEffect } from "react";
import Section from "../components/Section";
import "../styles/home.css";

function Home() {
  const fullText = "Desarrollador apasionado por la tecnología y la innovación.";
  const [visibleText, setVisibleText] = useState("");

  useEffect(() => {
    if (window.innerWidth <= 480) {
      let index = 0;
      const interval = setInterval(() => {
        setVisibleText(fullText.slice(0, index + 1));
        index++;
        if (index === fullText.length) clearInterval(interval);
      }, 50); // velocidad de tecleo
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <Section id="home" background="transparent">
      <div
        className="home-content"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          textAlign: "center",
        }}
      >
        <h1 className="home-title animate-fade">
          Hola, soy <span>Jeremy.</span>
        </h1>

        {window.innerWidth <= 480 ? (
          <p className="home-subtitle">{visibleText}</p>
        ) : (
          <p className="home-subtitle">{fullText}</p>
        )}
      </div>
    </Section>
  );
}

export default Home;