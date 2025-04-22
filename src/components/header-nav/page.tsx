import Link from "next/link";

export default function Header() {
    return (
        <div className="header-container">
            <Link href="" className="logo-name">Nikita Gupta</Link>
            <div className="links">
                <Link href="#work">Work</Link>
                <Link href="#about">About</Link>
                <Link href="#contact">Contact</Link>
            </div>
        </div>
    )
}