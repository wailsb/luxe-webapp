"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function NavbarPhone() {
    const [widthNav, setWidth] = useState(0);
    const [heightNav, setHeight] = useState(0);
    const [mounted, setMounted] = useState(false);

    function calculateWidth() {
        const ScreenWidth = window.innerWidth;
        setHeight((ScreenWidth * 10) / 100);
        return (ScreenWidth * 15) / 100;
    }

    useEffect(() => {
        setMounted(true);
        setWidth(calculateWidth());
        const handleResize = () => {
            setWidth(calculateWidth());
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (!mounted) return null; // Prevent SSR mismatch
    function dropMenu() {
        const dropdown = document.getElementById("dropdown");
        if (dropdown) {
            dropdown.classList.toggle("hidden");
            dropdown.classList.toggle("flex");
        }
    }
    return (
        <nav className="flex flex-col justify-center">
            <div className="flex justify-center">
                <div className="flex flex-1 justify-start items-center">
                    <div className="ml-5" onClick={dropMenu} >
                        <Image src="/icons/list.png" alt="Menu" style={{ objectFit: "contain", width: `15px`, height: `15px` }} width={15} height={15} />
                    </div>
                </div>
                <Link href="/" className="items-center">
                    <Image src="/logo.png" alt="Description" style={{ objectFit: "contain", width: `${widthNav}px`, height: `${heightNav}px` }} width={widthNav} height={heightNav} />
                </Link>
            <div className="flex flex-1"/>
            </div>
            <ul id="dropdown" className="hidden flex-col flex-1 justify-end items-center">
                <Link className="py-2 px-5 text-black" href="/Products">Catalog</Link>
                <Link className="py-2 px-5 text-black" href="/About">About</Link>
                <Link className="py-2 px-5 text-black" href="/Contact">Contact</Link>
            </ul>
        </nav>
    );
}