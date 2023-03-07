import "./App.css";
import AboutMe from "./screens/AboutMe";
import Awards from "./screens/Awards";
import Education from "./screens/Education";
import GiT from "./screens/GetInTouch";
import Hero from "./screens/Hero";
import NavBar from "./screens/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutMe />
      <Education />
      <Awards />
      <GiT />
    </>
  );
}

export default App;
