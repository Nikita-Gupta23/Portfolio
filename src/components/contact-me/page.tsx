"use client"
import Image from "next/image";
import Link from "next/link";
import HoverEffect from "../hoverEffect/HoverEffect";
import { useState } from 'react'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e: any) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        alert("Form submitted!");
    };

    return (<>
        <section className="contact-container" id="04">
            <div className="left-section section ">
                <div className="connect"><HoverEffect text="Let's Connect"></HoverEffect></div>
                <div className="text">Say hello at    <Link href="mailto:nik23.gupta@gmail.com">nik23.gupta@gmail.com</Link></div>
                <div className="text">For more info, here’s my  <Link href="/NikitaGupta.pdf" target="_blank">resume</Link></div>
                <div className="links">
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
            <div className="right-section section">
                <form className="form" onSubmit={handleSubmit}>
                    <label htmlFor="Name">Name</label>
                    <input name="name" type="text" placeholder="Please Enter Your Name" onChange={handleChange} />

                    <label htmlFor="Email">Email</label>
                    <input name="email" type="email" placeholder="Please Enter Your Email" onChange={handleChange} />

                    <label htmlFor="Subject">Subject</label>
                    <input name="subject" type="text" placeholder="Please Enter Your Subject" onChange={handleChange} />

                    <label htmlFor="Message">Message</label>
                    <textarea name="message" rows={5} placeholder="Please Enter Your Message" onChange={handleChange} />

                    <button type="submit">Submit</button>
                </form>
            </div>

        </section>
        <footer> <div className="copyright">© 2025 Nikita Gupta</div></footer>
    </>
    )
}
