import { useEffect, useRef, useState } from "react";
import "../styles/section-title.css";

export default function SectionTitle({ text, icon }) {
  const [visible, setVisible] = useState(false);
  const titleRef = useRef(null);

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

    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={titleRef}
      className={`section-title-wrapper ${visible ? "visible" : ""}`}
    >
      <div className="section-title-box">
        {icon && <span className="section-title-icon">{icon}</span>}
        <h2 className="section-title-text">{text}</h2>
      </div>
      <div className="section-title-line"></div>
    </div>
  );
}