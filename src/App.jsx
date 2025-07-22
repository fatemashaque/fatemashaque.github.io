import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main className="pt-0">
        <Hero />
        <Work />
        
      </main>
    </div>
  );
}

export default App;
