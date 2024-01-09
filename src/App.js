import "./App.css";
import Intro from "./componets/Intro/Intro";
import Navbar from "./componets/Navbar/Navbar";
import Project from "./componets/Projects/Project";
import Skills from "./componets/skills/Skills";

function App() {
  return (
    <div className="app">
      <div className="first-view">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="intro">
          <Intro />
        </div>
      </div>
      <div className="skills" id="skills">
        <Skills />
      </div>
      <div className="projects" id="projects">
        <Project />
      </div>
    </div>
  );
}

export default App;
