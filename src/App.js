import "./App.css";
import Intro from "./componets/Intro/Intro";
import Navbar from "./componets/Navbar/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="intro">
        <Intro />
      </div>
    </div>
  );
}

export default App;
