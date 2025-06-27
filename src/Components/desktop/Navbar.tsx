"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const [widthNav, setWidth] = useState(0);
    const [heightNav, setHeight] = useState(0);
    const [mounted, setMounted] = useState(false);

    function calculateWidth() {
        const ScreenWidth = window.innerWidth;
        setHeight((ScreenWidth * 5) / 100);
        return (ScreenWidth * 10) / 100;
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
        <nav className="flex justify-center">
            <div className="flex flex-1 justify-around items-center">
                <div className="flex-2"/>
                <Link href="/" className="text-black text-sm">
                    Home
                </Link>
                <div className="flex-1"/>
                <Link href="/Products" className="text-black text-sm">
                    Catalog
                </Link>
                <div className="flex-1"/>
                <Link href="/About" className="text-black text-sm">
                    About
                </Link>
                <div className="flex-2"/>
            </div>
            <Link href="/" className="">
                <Image src="/logo.png" alt="Description" style={{ objectFit: "contain", width: `${widthNav}px`, height: `${heightNav}px` }} width={widthNav} height={heightNav} />
            </Link>
                
            <div className="flex flex-1 justify-around items-center">
                <div className="flex-8"/>
                <Link href="/#callus" className="flex items-center text-black text-lg font-semibold">
                    <Image src="/icons/telephone.png" alt="call us" style={{ objectFit: "contain", width: `20px`, height: `20px` }} width={20} height={20} />
                </Link>
                <div className="flex-1"/>
                <Link href="/#wallet" className="text-black text-lg font-semibold">
                    <Image src="/icons/wallet.png" alt="wallet" style={{ objectFit: "contain", width: `20px`, height: `20px` }} width={20} height={20} />
                </Link>
                <div className="flex-4"/>
            </div>
        </nav>
    );
}