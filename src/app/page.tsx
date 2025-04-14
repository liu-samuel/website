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
      {/* <main>
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>src/app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div>
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main> */}
      <Footer></Footer>
    </div>
  );
}
