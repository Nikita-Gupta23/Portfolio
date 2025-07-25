"use client"
import Image from "next/image";
import Link from "next/link";
import HoverEffect from "../hoverEffect/HoverEffect";
import { useState } from 'react'
import toast from "react-hot-toast";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        console.log("first")
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            toast.error("Please fill out all fields.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error("Please enter a valid email address.");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("https://formspree.io/f/xpwlpjzl", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            console.log("🚀 ~ handleSubmit ~ response:", response)

            if (response.ok) {
                toast.success("Message sent!");
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                toast.error("Failed to send. Please try again.");
            }
        } catch (error) {
            console.log("🚀 ~ handleSubmit ~ error:", error)
            toast.error("Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (<>
        <section className="contact-container" id="04">
            <div className="left-section section ">
                <div className="connect"><HoverEffect text="Let's Connect" /></div>
                <div className="text">Say hello at    <Link href="mailto:nik23.gupta@gmail.com">nik23.gupta@gmail.com</Link></div>
                <div className="text">For more info, here’s my  <Link href="/NikitaGupta.pdf" target="_blank" rel="noopener noreferrer">resume</Link></div>
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
                    <input name="name" type="text" placeholder="Please Enter Your Name" onChange={handleChange} value={formData.name} />

                    <label htmlFor="Email">Email</label>
                    <input name="email" type="email" placeholder="Please Enter Your Email" onChange={handleChange} value={formData.email} />

                    <label htmlFor="Subject">Subject</label>
                    <input name="subject" type="text" placeholder="Please Enter Your Subject" onChange={handleChange} value={formData.subject} />

                    <label htmlFor="Message">Message</label>
                    <textarea name="message" rows={5} placeholder="Please Enter Your Message" onChange={handleChange} value={formData.message} />

                    <input type="text" name="_gotcha" style={{ display: "none" }} />

                    <button type="submit" disabled={loading}> {loading ? "Sending..." : "Submit"}</button>
                </form>
            </div>

        </section>
        <footer> <div className="copyright">© 2025 Nikita Gupta</div></footer>
    </>
    )
}
