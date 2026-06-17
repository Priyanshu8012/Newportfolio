import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Timeline from "./components/Timeline";
import Testimonials from "./components/Testinomials";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Sidebar />
      <div className="ml-20">
        <Hero id="home" />
        <About id="about"/>
        <Services id="services"/>
        <Timeline id="timeline"/>
        <Projects id="projects"/>
        <Testimonials id="testimonials"/>
        <Contact id="contact"/>
      </div>
    </>
  );
}

export default App;