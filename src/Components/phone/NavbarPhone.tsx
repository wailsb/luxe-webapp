"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function NavbarPhone() {
    const [widthNav, setWidth] = useState(0);
    const [heightNav, setHeight] = useState(0);
    const [mounted, setMounted] = useState(false);
    const [sideOpen, setSideOpen] = useState(false);

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

    return (
        <nav className="flex flex-col justify-center">
            <div className="flex justify-center">
                <div className="flex flex-1 justify-start items-center">
                    <div className="ml-5" onClick={() => setSideOpen(true)}>
                        <Image src="/icons/list.png" alt="Menu" style={{ objectFit: "contain", width: `15px`, height: `15px` }} width={15} height={15} />
                    </div>
                </div>
                <Link href="/" className="items-center">
                    <Image src="/logo.png" alt="Description" style={{ objectFit: "contain", width: `${widthNav}px`, height: `${heightNav}px` }} width={widthNav} height={heightNav} />
                </Link>
                <div className="flex flex-1"/>
            </div>
            {/* Side Navbar */}
            <div
                className={`fixed top-0 left-0 h-full w-2/3 max-w-xs bg-white shadow-lg z-50 transform transition-transform duration-300 ${
                    sideOpen ? "translate-x-0" : "-translate-x-full"
                } flex flex-col pt-20`}
                style={{ minWidth: "200px" }}
            >
                <button className="self-end mr-4 mb-4" onClick={() => setSideOpen(false)}>
                    <span className="text-2xl">&times;</span>
                </button>
                <Link className="py-2 px-5 text-black" href="/Products" onClick={() => setSideOpen(false)}>Catalog</Link>
                <Link className="py-2 px-5 text-black" href="/" onClick={() => setSideOpen(false)}>Tos</Link>
                <Link className="py-2 px-5 text-black" href="/Contact" onClick={() => setSideOpen(false)}>Contact</Link>
            </div>
            {/* Optional overlay */}
            {sideOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-30 z-40"
                    onClick={() => setSideOpen(false)}
                />
            )}
        </nav>
    );
}