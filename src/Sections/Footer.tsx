import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Footer() {
    const [isDesktop, setIsDesktop] = useState<boolean>(true);
    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
            
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <footer className="bg-[color:#FFFFFF] flex-col text-black py-4 justify-center">
            <div className={`flex ${isDesktop? "flex-row" : "flex-col"} justify-center items-center mb-4`}>
                <div className="flex flex-col mx-auto">
                    <Link href="/" className={`text-2xl font-bold mb-2 ${isDesktop ? "self-start" : "self-center"}`}>
                        <Image src="/Logo.png" alt="LUXE REO Logo" width={100} height={50} />
                    </Link>
                    <p className="text-xs mb-2">Be the first to know about new styles and special offers.</p>
                </div>
                {isDesktop && <div className="mx-auto" />}
            </div>
            <div className={`flex ${isDesktop? "flex-row" : "flex-col"} justify-center`}>
                <div className="mx-auto" />
                <div className={`flex ${isDesktop? "mx-auto" : ""}`}>
                    <div className={`flex flex-col ml-auto`}>
                        <p className="text-lg font-bold mb-2">Sections</p>
                        <Link href="/" className="text-black py-2 hover:underline">
                            Home
                        </Link>
                        <Link href="/Categories" className="text-black py-2 hover:underline">
                            Categories
                        </Link>
                        <Link href="/Catalog" className="text-black py-2 hover:underline">
                            Catalog
                        </Link>
                        <Link href="/" className="text-black py-2 hover:underline">
                            Warranty
                        </Link>
                    </div>
                    {!isDesktop && <div className="mx-auto" />}
                    <div className="flex flex-col ml-10 mr-auto">
                        <p className="text-lg font-bold mb-2">About</p>
                        <Link href="/Social" className="text-black py-2 hover:underline">
                            Social Media
                        </Link>
                        <Link href="/Location" className="text-black py-2 hover:underline">
                            Location
                        </Link>
                    </div>
                    
                    {isDesktop && <div className="mr-10" />}
                </div>
            </div>
            <p className="text-center text-xs mt-4">
                All rights reserved LUXE REO &copy; {new Date().getFullYear()} 
            </p>
        </footer>
    );
}
