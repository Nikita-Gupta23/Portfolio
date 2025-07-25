
import HoverEffect from "../hoverEffect/HoverEffect";


export default function About() {
    return (
        <>
            <section className="about-container" id="03">
                <div className="about-title"><HoverEffect text="ABOUT ME"></HoverEffect></div>
                <div className="about-box">
                    <div className="about-header">Crafting Intuitive Interfaces with Clean Code and Coffee</div>
                    <div className="about-text">
                        I’m a final-year BTech student, diving deep into the world of software development. With a growing skillset in frontend, backend, and full-stack development (A One-Woman Tech Army), I’ve been building projects that reflect my curiosity and dedication to learning. I’m actively exploring frameworks like React, Next.js, and Django, while also brushing up on Data Structures and Algorithms to strengthen my problem-solving mindset. Like many freshers, I’m on a journey — learning every day, building things that work (eventually), and seeking opportunities to contribute meaningfully in the IT industry.
                    </div>
                    {/* <Link href="#more-about-me" >More About Me</Link> */}

                </div>

            </section>

        </>
    );
}