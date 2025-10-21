import { useRef } from "react";
import avatarPixel from "../assets/avatar8bit.jpeg";
import avatarReal from "../assets/avatar.jpeg";

/**
 * Componente que muestra una imagen pixelada (avatar8bit)
 * y al pasar el mouse realiza un efecto de “despixelado”
 * mostrando la imagen real.
 *
 * Props:
 * - size: tamaño (ej: 250)
 * - borderColor: color del borde
 */
export default function AvatarPixel({ size = 250, borderColor = "#00ffea" }) {
  const pixelImgRef = useRef(null);
  const realImgRef = useRef(null);

  const handleEnter = () => {
    const pixelImg = pixelImgRef.current;
    const realImg = realImgRef.current;
    if (pixelImg && realImg) {
      // Despixelar: se desvanece el pixelado y se aclara la imagen real lentamente
      realImg.style.opacity = 1;
      realImg.style.filter = "blur(0px)";
      realImg.style.transform = "scale(1)";
      pixelImg.style.opacity = 0;
      pixelImg.style.filter = "blur(12px)";
      pixelImg.style.transform = "scale(1.05)";
    }
  };

  const handleLeave = () => {
    const pixelImg = pixelImgRef.current;
    const realImg = realImgRef.current;
    if (pixelImg && realImg) {
      // Reaparece el pixelado con un efecto suave
      realImg.style.opacity = 0;
      realImg.style.filter = "blur(12px)";
      realImg.style.transform = "scale(1.05)";
      pixelImg.style.opacity = 1;
      pixelImg.style.filter = "blur(0px)";
      pixelImg.style.transform = "scale(1)";
    }
  };

  return (
    <div
      style={{
        position: "relative",
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        overflow: "hidden",
        border: `2px solid ${borderColor}`,
        cursor: "pointer",
        boxShadow: `0 0 25px ${borderColor}40`,
        transition: "box-shadow 0.4s ease",
      }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Imagen pixelada (visible al inicio) */}
      <img
        ref={pixelImgRef}
        src={avatarPixel}
        alt="Avatar pixelado"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition:
            "opacity 1.5s ease, filter 1.5s ease, transform 1.5s ease",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />

      {/* Imagen real (aparece tras el efecto) */}
      <img
        ref={realImgRef}
        src={avatarReal}
        alt="Avatar real"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "blur(12px)",
          opacity: 0,
          transform: "scale(1.05)",
          transition:
            "opacity 1.8s ease, filter 1.8s ease, transform 1.8s ease",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 2,
        }}
      />
    </div>
  );
}