import "./App.css";
import Contactus from "./componets/Contactus/Contactus";
import Education from "./componets/Education/Education";
import Intro from "./componets/Intro/Intro";
import Navbar from "./componets/Navbar/Navbar";
import Project from "./componets/Projects/Project";
import Expreince from "./componets/experince/Expreince";
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
      <div className="education">
        <Education/>
      </div>
      <div className="intro">
        <Expreince/>
      </div>
      <div className="contact" id="contact">
        <Contactus/>
      </div>
    </div>
  );
}

export default App;
