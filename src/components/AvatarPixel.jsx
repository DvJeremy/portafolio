import { useRef, useState, useEffect } from "react";
import avatarPixel from "../assets/avatar8bit.jpeg";
import avatarReal from "../assets/avatar.jpeg";

export default function AvatarPixel({ size = 250, borderColor = "#00ffea" }) {
  const pixelImgRef = useRef(null);
  const realImgRef = useRef(null);

  const [avatarSize, setAvatarSize] = useState(size);

  // Ajusta tamaño en móvil
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setAvatarSize(size * 0.6); // 60% del tamaño original en móvil
      } else if (window.innerWidth <= 768) {
        setAvatarSize(size * 0.8); // 80% para tablet
      } else {
        setAvatarSize(size);
      }
    };

    handleResize(); // inicial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [size]);

  const handleEnter = () => {
    const pixelImg = pixelImgRef.current;
    const realImg = realImgRef.current;
    if (pixelImg && realImg) {
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
        width: `${avatarSize}px`,
        height: `${avatarSize}px`,
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