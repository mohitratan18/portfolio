import "./App.css";
import Intro from "./componets/Intro/Intro";
import Navbar from "./componets/Navbar/Navbar";
import Skills from "./componets/skills/Skills";

function App() {
  return (
    <div className="app">
      <div className="first-view">
        <Navbar />
        <div className="intro">
          <Intro />
        </div>
      </div>
      <div className="skills" id="skills">
        <Skills />
      </div>
    </div>
  );
}

export default App;
