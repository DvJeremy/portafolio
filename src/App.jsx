import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";

function App() {
  return (
    <div
      id="scroll-container" // 👈 ID del contenedor de scroll
      style={{
        height: "100vh",
        width: "100vw",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
        scrollBehavior: "smooth",
      }}
    >
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;