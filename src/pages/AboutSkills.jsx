import skillsData from "../data/skills.json";

export default function AboutSkills() {
  if (!skillsData) return <div>JSON no cargado</div>;

  console.log("SkillsData:", skillsData);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem", background: "#112240", padding: "1rem" }}>
      {Object.entries(skillsData).map(([category, skillsObj]) => (
        <div
          key={category}
          style={{
            border: "2px solid #00ffea",
            borderRadius: "12px",
            padding: "1rem",
            background: "rgba(0,255,234,0.05)",
          }}
        >
          <h3 style={{ color: "#00ffea", marginBottom: "1rem", textTransform: "capitalize" }}>{category}</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {skillsObj.map((skill) => (
              <div
                key={skill.id}
                style={{
                  padding: "0.3rem 0.5rem",
                  border: "1px solid #00ffea",
                  borderRadius: "8px",
                  background: "rgba(0,255,234,0.1)",
                  color: "#ccd6f6",
                  fontSize: "0.9rem",
                }}
              >
                {skill.nombre}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}