import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";
import "../css/globals.css";
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Volunteering from "./Volunteering";

export default function Home() {
  return (
    <div className="root">
      <Header />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Volunteering />
      <Contact />
      <Footer />
    </div>
  );
}
