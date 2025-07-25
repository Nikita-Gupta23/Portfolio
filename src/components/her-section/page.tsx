import Image from "next/image";
import Link from "next/link";
import HoverEffect from "../hoverEffect/HoverEffect";

export default function Hero() {
    return (
        <section id="01" className="hero-container">
            {/* Description Section */}
            <div className="desc-container">
                <h3 className="intro">
                    <HoverEffect text="Hi, I am" />
                    <br></br>
                    <HoverEffect text="Nikita Gupta" />
                </h3>
                <p className="intro-line">
                    Frontend Developer crafting responsive, accessible, and modern web applications.
                </p>

                <div className="profiles">
                    <Link href="#04">
                        <button className="contact-btn1">Contact Me
                            <div className="dot">
                                <div className="arrow">	&#x2197;
                                </div>
                            </div>
                        </button>
                    </Link>

                    <Link
                        href="https://www.linkedin.com/in/nik23gupta"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="profile-btn">
                            <Image src="/linkedin.png" alt="LinkedIn Profile" height={24} width={24}></Image>
                        </div>
                    </Link>

                    <Link
                        href="https://github.com/Nikita-Gupta23"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="profile-btn">
                            <Image src="/github.png" alt="Github Profile" height={24} width={24}></Image>
                        </div>
                    </Link>
                </div>
            </div>

            {/* Image Section */}
            {/* <div className="img-card">
                <div className="card-inner">
                    <div className="card-front"><Image src="/nik.png" alt="Hi! Its me" width={300} height={300} ></Image></div>
                    <div className="card-back"><Image src="/nik.png" alt="Hi! Its me" width={300} height={300}></Image></div>
                </div>
            </div> */}
        </section>
    );
}