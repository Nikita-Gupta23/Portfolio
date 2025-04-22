import About from "@/components/about-me/page";
import Contact from "@/components/contact-me/page";
import Header from "@/components/header-nav/page";
import Hero from "@/components/her-section/page";
import Project from "@/components/project-section/page";
import Head from "next/head";
import Image from "next/image";
import Scroller from "@/components/scroller/scroller"
export default function Home() {
  return (
    <>
      <Scroller></Scroller>
      <Head>
        <link rel="icon" href='/favicon.ico' />
      </Head>
      <Header />
      <Hero />
      <div className="dividing-line"></div>
      <Project />
      <div className="dividing-line" ></div>
      <About />
      <div className="dividing-line" ></div>
      <Contact />
    </>
  );
}
