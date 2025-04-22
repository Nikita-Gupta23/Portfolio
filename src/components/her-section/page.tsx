import Image from "next/image";
import Link from "next/link";
import HoverEffect from "../hoverEffect/HoverEffect";

export default function Hero() {
    return (
        <div className="hero-container">
            <div className="desc-container">
                <div className="intro"><HoverEffect text="Hi, I am"></HoverEffect> <br></br><HoverEffect text="Nikita Gupta"></HoverEffect></div>
                <div className="intro-line">An Aspiring Front-End Developer, Passionate about contributing to the world of Web and Technology!</div>
                <div className="profiles">
                    <button className="contact-btn1">Contact Me
                        <div className="dot">
                            <div className="arrow">	&#x2197;
                                {/* <Image src="" alt="" height={8} width={8}></Image> */}
                            </div>
                        </div>
                    </button>
                    <Link href="#linkedin">
                        <div className="profile-btn">
                            <Image src="/linkedin.png" alt="linkedin" height={24} width={24}></Image>
                        </div>
                    </Link>
                    <Link href="#github">
                        <div className="profile-btn">
                            <Image src="/github.png" alt="github" height={24} width={24}></Image>
                        </div>
                    </Link>
                </div>
            </div>
            {/* <Image src="/nik.png" alt="Hi! Its me" width={300} height={300}></Image> */}
            {/* <div className="img-card">
                <div className="card-inner">
                    <div className="card-front"><Image src="/nik.png" alt="Hi! Its me" width={300} height={300}></Image></div>
                    <div className="card-back"><Image src="/nik.png" alt="Hi! Its me" width={300} height={300}></Image></div>
                </div>
            </div> */}
        </div>
    );
}