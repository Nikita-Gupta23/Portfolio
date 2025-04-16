import Header from "@/components/header-nav/page";
import Hero from "@/components/her-section/page";
import Project from "@/components/project-section/page";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className="dividing-line"></div>
      <Project />
      <div className="dividing-line"></div>

    </>
  );
}
