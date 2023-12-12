import "./App.css";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Projects from "./Pages/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-site">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
