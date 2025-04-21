
import Image from "next/image";
import Link from "next/link";
import Form from "next/form"

export default function Contact() {
    return (
        <div className="contact-container">
            <div className="left section">
                <div className="connect">Let's Connect</div>
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
                        <label id="Name">Name</label>
                        <input type="text" placeholder="Please Enter Your Name" ></input>
                        <label id="Email">Email</label>
                        <input type="text" placeholder="Please Enter Your Email" ></input>
                        <label id="Subject">Subject</label>
                        <input type="text" placeholder="Please Enter Your Subject" ></input>
                        <label id="Message">Message</label>
                        <input type="text" placeholder="Please Enter Your Message" ></input>
                    </Form>
                </div>
            </div>
        </div>
    )
}
