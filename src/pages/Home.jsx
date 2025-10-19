import Section from "../components/Section";
import "../styles/Home.css";

function Home() {
  return (
    <Section id="home" background="transparent">
      <div className="home-content">
        <h1 className="home-title animate-fade">
          Hola, soy <span>Jeremy.</span>
        </h1>
        <p className="home-subtitle typing-animation">
          Desarrollador apasionado por la tecnología y la innovación.
        </p>
      </div>
    </Section>
  );
}

export default Home;