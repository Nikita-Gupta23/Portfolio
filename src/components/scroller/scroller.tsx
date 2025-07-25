"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./scroller.scss";

gsap.registerPlugin(ScrollTrigger);

const Scroller = () => {
  useEffect(() => {
    const thumb: any = document.getElementById("scrollThumb");
    const track: any = document.querySelector(".track-line");

    const updateThumbPosition = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      const trackHeight = track.offsetHeight - thumb.offsetHeight;

      const thumbY = (scrollTop / scrollHeight) * trackHeight;
      gsap.set(thumb, { y: thumbY });
    };

    const updateScrollFromThumb = (thumbY: any) => {
      const trackHeight = track.offsetHeight - thumb.offsetHeight;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      const scrollY = (thumbY / trackHeight) * scrollHeight;
      window.scrollTo(0, scrollY);
    };

    // ScrollTrigger: scroll affects thumb
    gsap.to(thumb, {
      y: () => {
        const trackHeight = track.offsetHeight - thumb.offsetHeight;
        return trackHeight;
      },
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    // Thumb drag logic (native)
    let isDragging = false;
    let startY = 0;
    let startThumbY = 0;

    const onPointerDown = (e: any) => {
      isDragging = true;
      startY = e.clientY;
      startThumbY = parseFloat(getComputedStyle(thumb).transform.split(',')[5]) || 0;
      thumb.setPointerCapture(e.pointerId);
      thumb.style.cursor = "grabbing";
    };

    const onPointerMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isDragging) return;
      const dy = e.clientY - startY;
      const newY = Math.min(
        Math.max(startThumbY + dy, 0),
        track.offsetHeight - thumb.offsetHeight
      );
      gsap.set(thumb, { y: newY });
      updateScrollFromThumb(newY);
    };

    const onPointerUp = (e: any) => {
      isDragging = false;
      thumb.releasePointerCapture(e.pointerId);
      thumb.style.cursor = "grab";
    };

    thumb.addEventListener("pointerdown", onPointerDown);
    thumb.addEventListener("pointermove", onPointerMove);
    thumb.addEventListener("pointerup", onPointerUp);

    window.addEventListener("resize", updateThumbPosition);

    const labelSpans = document.querySelectorAll(".labels span");
    const sectionIds = ["00", "01", "02", "03", "04"];

    const updateActiveLabel = () => {
      let activeIndex = 0;
      sectionIds.forEach((id, index) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          activeIndex = index;
        }
      });

      labelSpans.forEach((span, i) => {
        span.classList.toggle("active", i === activeIndex);
      });
    };

    window.addEventListener("scroll", updateActiveLabel);
    updateActiveLabel(); // Initial call


    return () => {
      thumb.removeEventListener("pointerdown", onPointerDown);
      thumb.removeEventListener("pointermove", onPointerMove);
      thumb.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("resize", updateThumbPosition);
      window.removeEventListener("scroll", updateActiveLabel);

    };
  }, []);

  const scrollToSection = (id: any) => {
    const target = document.getElementById(id);
    if (target) {
      const top = target.offsetTop;
      window.scrollTo({
        top,
        behavior: "smooth", // for smooth scroll
      });
    }
  };


  return (
    <div className="scroll-indicator">
      <div className="labels">
        <span onClick={() => scrollToSection("00")}>00</span>
        <span onClick={() => scrollToSection("01")}>01</span>
        <span onClick={() => scrollToSection("02")}>02</span>
        <span onClick={() => scrollToSection("03")}>03</span>
        <span onClick={() => scrollToSection("04")}>04</span>
      </div>
      <div className="line-wrapper">
        <div className="track-line"></div>
        <div id="scrollThumb" className="scroll-thumb" style={{ cursor: "grab" }}></div>
      </div>
    </div>
  );
};

export default Scroller;
