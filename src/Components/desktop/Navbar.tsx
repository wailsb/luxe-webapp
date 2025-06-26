import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [widthNav, setWidth] = useState(0);
    const [heightNav, setHeight] = useState(0);
    function calculateWidth() {
        console.log("Calculating width");
        const ScreenWidth = window.innerWidth;
        setHeight((ScreenWidth * 5) / 100);
        console.log("ScreenWidth: ", ScreenWidth);
        console.log("HeightNav: ", (ScreenWidth * 20) / 100);
        console.log("WidthNav: ", (ScreenWidth * 36) / 100);
        return (ScreenWidth * 10) / 100;
    }


    useEffect(() => {
    
        setWidth(calculateWidth());
        const handleResize = () => {
            setWidth(calculateWidth());
        };
        window.addEventListener("resize", handleResize);
    }, []);
    return (
        <nav className="flex justify-center">
            <div className="flex flex-1 justify-around items-center">
                <div className="flex-2"/>
                <Link href="/" className="text-black text-lg font-semibold">
                    Home
                </Link>
                <div className="flex-1"/>
                <Link href="/Catalog" className="text-black text-lg font-semibold">
                    Catalog
                </Link>
                <div className="flex-1"/>
                <Link href="/About" className="text-black text-lg font-semibold">
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