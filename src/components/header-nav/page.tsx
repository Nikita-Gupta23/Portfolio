import Link from "next/link";

export default function Header() {
    return (
        <div className="header-container">
            <div className="logo-name">Nikita Gupta</div>
            <div className="links">
                <Link href="#work">Work</Link>
                <Link href="#About">About</Link>
                <Link href="#Contact">Contact</Link>
            </div>
        </div>
    )
}