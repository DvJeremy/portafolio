import { useRef, useEffect, useState } from "react";
import "../styles/section.css";

function Section({ id, children, background }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // solo animar una vez
        }
      },
      {
        threshold: 0.1, // 10% visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`section ${isVisible ? "section-visible" : ""}`}
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "visible",
        background: background || "#112240",
        color: "#fff",
        padding: "5rem 5vw",
        boxSizing: "border-box",
      }}
    >
      <div className="section-bg">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>

      <div className="section-inner" style={{ width: "100%" }}>
        {children}
      </div>
    </section>
  );
}

export default Section;