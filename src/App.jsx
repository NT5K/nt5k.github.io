import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Tools from "./pages/Tools";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {

  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto">

        <Home />
        <About />
        <Tools />
        <Projects />
        <Contact />

      </main>
    </>
  );
}

export default App;
