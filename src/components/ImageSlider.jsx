import { useState, useEffect } from "react";

export default function ImageSlider({ images = [], interval = 3000 }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images, interval]);

  const goToSlide = (index) => setCurrent(index);

  return (
    <div
      className="slider-container"
      style={{
        position: "relative",
        width: "100%",
        height: "600px",
        overflow: "hidden",
        boxShadow: "0 0 20px #00ffea30",
        borderRadius: "0",
      }}
    >
      <style>
        {`
          /* 🔹 Ajustes responsivos */
          @media (max-width: 1024px) {
            .slider-container {
              height: 400px !important;
            }
          }

          @media (max-width: 768px) {
            .slider-container {
              height: 260px !important;
            }
            .slider-container img {
              object-fit: contain !important; /* 📱 Evita el zoom en móvil */
              background: #0a192f; /* Fondo oscuro para rellenar bordes vacíos */
            }
          }

          @media (max-width: 480px) {
            .slider-container {
              height: 220px !important;
            }
          }
        `}
      </style>

      {/* Imágenes */}
      {images.map((src, i) => (
        <img
          key={i}
          src={src || "/placeholder.svg"}
          alt={`slide-${i}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // 🖥️ Por defecto en desktop
            position: "absolute",
            top: 0,
            left: 0,
            opacity: i === current ? 1 : 0,
            transition: "opacity 1s ease",
          }}
        />
      ))}

      {/* 🔘 Indicadores */}
      <div
        style={{
          position: "absolute",
          bottom: "15px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
          background: "rgba(0, 0, 0, 0.5)",
          padding: "6px 12px",
          borderRadius: "12px",
          backdropFilter: "blur(4px)",
        }}
      >
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              border: "2px solid white",
              background:
                i === current ? "#00ffea" : "rgba(255, 255, 255, 0.3)",
              cursor: "pointer",
              transition: "background 0.3s ease, transform 0.2s ease",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          />
        ))}
      </div>
    </div>
  );
}