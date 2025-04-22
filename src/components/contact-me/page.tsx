
import Image from "next/image";
import Link from "next/link";
import Form from "next/form"
import HoverEffect from "../hoverEffect/HoverEffect";

export default function Contact() {
    return (
        <div className="contact-container" id="contact">
            <div className="left section">
                <div className="connect"><HoverEffect text="Let's Connect"></HoverEffect></div>
                <div className="text">Say hello at    <Link href="#mail">nik23.gupta@gmail.com</Link></div>
                <div className="text">For more info, here’s my  <Link href="#resume">resume</Link></div>
                <div className="links">
                    <Image height={28} width={28} src={'/linkedin.png'} alt={'linkedin'}></Image>
                    <Image height={28} width={28} src={'/github.png'} alt={'github'}></Image>
                    {/* <Image height={32} width={32} src={} alt={'x'}></Image>
                    <Image height={32} width={32} src={} alt={}></Image> */}
                </div>
                <div className="copyright">© 2025 Nikita Gupta</div>
            </div>
            <div className="right section">
                <div className="form">
                    <Form action="">
                        <label htmlFor="Name">Name</label>
                        <input type="text" placeholder="Please Enter Your Name" id="Name"></input>
                        <label htmlFor="Email">Email</label>
                        <input id="Email" type="text" placeholder="Please Enter Your Email" ></input>
                        <label htmlFor="Subject">Subject</label>
                        <input id="Subject" type="text" placeholder="Please Enter Your Subject" ></input>
                        <label htmlFor="Message">Message</label>
                        <input id="Message" type="text" placeholder="Please Enter Your Message" ></input>
                        <input type="submit"></input>
                        <input type="reset" />
                    </Form>
                </div>
            </div>
        </div>
    )
}
