import Link from "next/link";


export default function About() {
    return (
        <>
            <div className="about-container">
                <div className="about-title">ABOUT ME</div>
                <div className="about-box">
                    <div className="about-header">I am a front-end developer based in Sydney. <br></br>Has Mechanical Engineering background. </div>
                    <div className="about-text">
                        I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill.
                    </div>
                    <Link href="#more-about-me" >More About Me</Link>

                </div>

            </div>

        </>
    );
}