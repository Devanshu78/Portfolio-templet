import "./App.css";
import Home from "./Sections/Home/Home";
import About from "./Sections/About/About";
import Services from "./Sections/Services/Services";
import Work from "./Sections/LatestWork/Work";
import Contact from "./Sections/Contact/Contact";
import Footer from "./Sections/Footer/Footer";

function App() {
  return (
    <div className="text-white">
      <Home />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
