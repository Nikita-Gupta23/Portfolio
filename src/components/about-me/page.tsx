import Link from "next/link";
import HoverEffect from "../hoverEffect/HoverEffect";


export default function About() {
    return (
        <>
            <section className="about-container" id="03">
                <div className="about-title"><HoverEffect text="ABOUT ME"></HoverEffect></div>
                <div className="about-box">
                    <div className="about-header">I am a front-end developer based in Sydney. <br></br>Has Mechanical Engineering background. </div>
                    <div className="about-text">
                        I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill.
                    </div>
                    <Link href="#more-about-me" >More About Me</Link>

                </div>

            </section>

        </>
    );
}