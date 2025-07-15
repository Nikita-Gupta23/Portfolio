import Link from "next/link";

export default function Header() {
    return (
        <section id="00" className="header-container">
            <Link href="" className="logo-name">Nikita Gupta</Link>
            <div className="links">
                <Link href="#02">Work</Link>
                <Link href="#03">About</Link>
                <Link href="#04">Contact</Link>
            </div>
        </section>
    )
}