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
        setHeight((ScreenWidth * 22) / 100); // Even bigger logo height
        return (ScreenWidth * 32) / 100;     // Even bigger logo width
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
            <div className="flex justify-center h-32"> {/* Even bigger navbar height */}
                <div className="flex flex-1 justify-start items-center">
                    <div className="ml-12" onClick={() => setSideOpen(true)}>
                        <Image
                            src="/icons/list.png"
                            alt="Menu"
                            style={{ objectFit: "contain", width: `48px`, height: `48px` }}
                            width={48}
                            height={48}
                        />
                    </div>
                </div>
                <Link href="/" className="items-center flex">
                    <Image
                        src="/logo.png"
                        alt="Description"
                        style={{
                            objectFit: "contain",
                            width: `${widthNav}px`,
                            height: `${heightNav}px`
                        }}
                        width={widthNav}
                        height={heightNav}
                    />
                </Link>
                <div className="flex flex-1"/>
            </div>
            {/* Side Navbar */}
            <div
                className={`fixed top-0 left-0 h-full w-[90vw] max-w-xl bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
                    sideOpen ? "translate-x-0" : "-translate-x-full"
                } flex flex-col pt-40`} // More padding top for bigger navbar
                style={{ minWidth: "320px" }}
            >
                <button className="self-end mr-12 mb-12" onClick={() => setSideOpen(false)}>
                    <span className="text-5xl">&times;</span>
                </button>
                <Link className="py-7 px-12 text-2xl text-black" href="/Products" onClick={() => setSideOpen(false)}>Catalog</Link>
                <Link className="py-7 px-12 text-2xl text-black" href="/" onClick={() => setSideOpen(false)}>Tos</Link>
                <Link className="py-7 px-12 text-2xl text-black" href="/Contact" onClick={() => setSideOpen(false)}>Contact</Link>
            </div>
            {/* Optional overlay */}
            {sideOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-40 z-40"
                    onClick={() => setSideOpen(false)}
                />
            )}
        </nav>
    );
}