import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function NavbarPhone() {
    const [widthNav, setWidth] = useState(0);
    const [heightNav, setHeight] = useState(0);
    function calculateWidth() {
        console.log("Calculating width");
        const ScreenWidth = window.innerWidth;
        setHeight((ScreenWidth * 10) / 100);
        console.log("ScreenWidth: ", ScreenWidth);
        console.log("HeightNav: ", (ScreenWidth * 20) / 100);
        console.log("WidthNav: ", (ScreenWidth * 36) / 100);
        return (ScreenWidth * 15) / 100;
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
            <div className="flex flex-1 justify-start items-center">
                <div className="ml-5" onClick={() => {}} >
                    <Image src="/icons/list.png" alt="Menu" style={{ objectFit: "contain", width: `15px`, height: `15px` }} width={15} height={15} />
                </div>
            </div>
            <Link href="/" className="items-center">
                <Image src="/logo.png" alt="Description" style={{ objectFit: "contain", width: `${widthNav}px`, height: `${heightNav}px` }} width={widthNav} height={heightNav} />
            </Link>
                
            <div className="flex flex-1"/>
        </nav>
    );
}