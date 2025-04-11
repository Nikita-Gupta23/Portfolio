import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <div className="hero-container">
            <div className="desc-container">
                <div className="intro">Hi, I am <br></br> Nikita Gupta</div>
                <div className="intro-line">An Aspiring Front-End Developer, Passionate about contributing to the world of Web and Technology!</div>
                <div className="profiles">
                    <button className="contact-btn1">Contact Me
                        <div className="dot"></div>
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
        </div>
    );
}