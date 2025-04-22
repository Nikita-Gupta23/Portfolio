
"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./scroller.css";

gsap.registerPlugin(ScrollTrigger);

const Scroller = () => {
  useEffect(() => {
    gsap.to("#scrollThumb", {
      y: 280, // Adjust to match line height minus thumb height
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="scroll-indicator">
      <div className="labels">
        <span>00</span>
        <span>01</span>
        <span>02</span>
        <span>03</span>
        <span>04</span>
      </div>
      <div className="line-wrapper">
        <div className="track-line"></div>
        <div id="scrollThumb" className="scroll-thumb"></div>
      </div>
    </div>
  );
};

export default Scroller;