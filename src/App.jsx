import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Tools from "./pages/Tools";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
// import "./App.css";

function App() {

  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto">

        <Home />
        <About />
        <Tools />
        <Projects />
        <Services />
        <Contact />

      </main>
    </>
  );
}

export default App;
