import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "./components/Banner";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
AOS.init();

function App() {
  return (
    <div className="">
      <Banner />
      <Skill />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
