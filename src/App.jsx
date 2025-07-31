import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Game from "./components/Game";
import Community from "./components/Community";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main className="pt-0">
        <Hero />
        <Work />
        <Game />
        <Projects />
        <Community/>
        <Contact/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
