"use client"

import ProjectCard from "./card";
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import HoverEffect from "../hoverEffect/HoverEffect";

gsap.registerPlugin(ScrollTrigger)

const projects = [
    {
        img: "/blog.png",
        title: "AI Blog Generator",
        description: "Full-stack AI-powered app that converts YouTube videos into structured blog articles. Built Django backend for transcript extraction, OpenAI-based summarization, and PostgreSQL storage. Designed clean, responsive UI using Tailwind CSS.Frontend deployed on Vercel, backend on Render.",
        year: "2022",
        role: "Developer",
        link: "(in progress)",
        frontendRepo: "(in progress)",
        backendRepo: "(in progress)"
    },
    {
        img: "/quotes.png",
        title: "Random Quotes Machine",
        description: "React frontend + Django backend app serving motivational quotes. Built secure REST API in Django to serve quotes stored in PostgreSQL. Added Twitter share functionality with a “Tweet This” button. Deployed with Vercel (frontend) & Render (backend).",
        year: "2022",
        role: "Developer",
        link: "https://random-quotes-frontend.vercel.app/",
        frontendRepo: "https://github.com/Nikita-Gupta23/random-quotes-frontend",
        backendRepo: "https://github.com/Nikita-Gupta23/random-quotes-backend"
    },
    {
        img: "/pokemon.png",
        title: "Pokémon Search App",
        description: "Real-time search app using PokéAPI. Implemented filter, conditional rendering, and loading states in React. Optimized user experience and performance. Fully responsive and deployed on Vercel.",
        year: "2022",
        role: "Developer",
        link: "https://pokemon-search-app-blush.vercel.app/",
        repo: "https://github.com/Nikita-Gupta23/Pokemon-search-app"

    },
    {
        img: "/mini.png",
        title: " JS Mini Project Suite",
        description: "A curated collection of small yet functional JavaScript projects built to strengthen logic building and UI fundamentals.Includes:🔢 Calculator – Handles basic arithmetic operations with clean button-based UI.🔁 Palindrome Checker – Validates live user input with instant feedback.✊🖐✌ Rock-Paper-Scissors Game – Interactive game with randomized computer moves and win-lose logic.Styled using custom CSS with a clean and responsive layout.Ideal for showcasing foundational frontend development skills.",
        year: "2022",
        role: "Developer",
        repo: "https://github.com/Nikita-Gupta23/Mini-Project-Suite"
    },
];

export default function Project() {
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.card') as HTMLElement[]
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    pin: true,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1,
                }
            })
            cards.slice(0, -1).forEach((card, i) => {
                const content = card.querySelector('.card-content')
                if (!content) return

                tl.to(content, {
                    height: 0,
                    paddingBottom: 0,
                    opacity: 0,
                    stagger: 0.5
                }, i)

                tl.to(card, {
                    marginBottom: -15,
                    stagger: 0.5
                }, i)
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])
    // ScrollTrigger.refresh();
    return (
        <section id="02" className="project-container">
            <div className="project-header-box ">
                <div className="project-header"><HoverEffect text="Featured Projects"></HoverEffect></div>
                <div className="project-desc">Here are some of the selected projects that showcase my passion for front-end development.</div>
            </div>
            <div className="project-card-container" ref={sectionRef}>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        img={project.img}
                        title={project.title}
                        desc={project.description}
                        year={project.year}
                        role={project.role}
                        link={project.link}
                        repo={project.repo}
                        frontendRepo={project.frontendRepo}
                        backendRepo={project.backendRepo}>
                    </ProjectCard>
                ))}
            </div>
        </section>
    );
}