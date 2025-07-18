"use client";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header id="00" className="header-container">
            <Link href="/" className="logo-name">Nikita Gupta</Link>

            <div className={`links ${menuOpen ? "open" : ""}`}>
                <Link href="#02" onClick={() => setMenuOpen(false)}>Work</Link>
                <Link href="#03" onClick={() => setMenuOpen(false)}>About</Link>
                <Link href="#04" onClick={() => setMenuOpen(false)}>Contact</Link>
            </div>

            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <HiOutlineX size={30} /> : <HiOutlineMenu size={30} />}
            </div>
        </header>
    );
}
