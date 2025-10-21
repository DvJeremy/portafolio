import "../styles/section.css";

function Section({ id, children, background }) {
  return (
    <section
      id={id}
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",           // centra verticalmente
        alignItems: "center",      
        justifyContent: "center",  // centra horizontalmente
        position: "relative",
        overflow: "visible",
        background: background || "#112240",
        color: "#fff",
        padding: "5rem 5vw",
        boxSizing: "border-box",
      }}
    >
      {/* Fondo animado */}
      <div className="section-bg">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>

      {/* Contenido visible */}
      <div className="section-inner" style={{ width: "100%" }}>
        {children}
      </div>
    </section>
  );
}

export default Section;