"use client"

import ProjectCard from "./card";
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
    {
        title: "My Portfolio",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum odio beatae doloribus, sit sint, alias molestias omnis cupiditate necessitatibus molestiae nemo impedit voluptatibus quibusdam earum vitae consequatur aliquid quasi error.",
        year: "2022",
        role: "Developer"
    },
    {
        title: "Weather App",
        description: "Real-time weather data using OpenWeatherMap API.Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aspernatur itaque laborum natus alias ipsa obcaecati rerum rem sapiente nemo!",
        year: "2022",
        role: "Developer"
    },
    {
        title: "Task Manager",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum odio beatae doloribus, sit sint, alias molestias omnis cupiditate necessitatibus molestiae nemo impedit voluptatibus quibusdam earum vitae consequatur aliquid quasi error.",
        year: "2022",
        role: "Developer"
    },
];

export default function Project() {
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    pin: true,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1,
                }
            })

            tl.to('.card .card-content', {
                height: 0,
                paddingBottom: 0,
                opacity: 0,
                stagger: 0.5
            })

            tl.to('.card', {
                marginBottom: -15,
                stagger: 0.5
            }, '<')
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <div className="project-container">
            <div className="project-header-box ">
                <div className="project-header">Featured Projects</div>
                <div className="project-desc">Here are some of the selected projects that showcase my passion for front-end development.</div>
            </div>
            <div className="project-card-container" ref={sectionRef}>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        desc={project.description}
                        year={project.year}
                        role={project.role}>
                    </ProjectCard>
                ))}
            </div>
        </div>
    );
}