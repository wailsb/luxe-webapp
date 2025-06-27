"use client";
import CategElement from "@/Components/shared/CategElement";
import { CategElem } from "@/Types/types";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Categories() {
    const [mounted, setMounted] = useState(false);
    const [isDesktop, setIsDesktop] = useState<boolean>(true);

    const sampleList:Array<CategElem>=[
        {
        title: "T-Shirts",
        imageUrl: "/Banner.png",
        dimentions: ["300px", "400px"]
    },
    {
        title: "Jeans",
        imageUrl: "/Banner.png",
        dimentions: ["300px", "400px"]
    },
    {
        title: "Hoodies",
        imageUrl: "/Banner.png",
        dimentions: ["300px", "400px"]
    },
    {
        title: "Sneakers",
        imageUrl: "/Banner.png",
        dimentions: ["300px", "400px"]
    },
    {
        title: "test",
        imageUrl: "/Banner.png",
        dimentions: ["300px", "400px"]
    },
    {
        title: "testing",
        imageUrl: "/Banner.png",
        dimentions: ["300px", "400px"]
    }

    ]
    useEffect(() => {
        setMounted(true);
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };
        window.addEventListener("resize", handleResize);
        if (mounted) {
            handleResize();
        }
        return () => {
            window.removeEventListener("resize", handleResize);
        };
 // Initial check
    }, []);
    return (
        <div className={`flex flex-col mx-[10%] ${isDesktop?"mt-5":"mt-2"}`}>
            <div className="flex items-center mb-2">
                <h1 className="text-2xl font-bold">Categories</h1>
                <div className="flex-1"/>
                <Link href="/Categories" className="text-sm px-5 border border-b-slate-950 font-semibold rounded-sm">
                    see all
                </Link>
            </div>
            <p className="text-xs">see all collection we have offer for you</p>
            <div className="max-w-full overflow-x-scroll flex space-x-3 mt-5 mx-auto">
                {sampleList.map((i)=>{
                    return (
                            <CategElement key={i.title} imageUrl={i.imageUrl} title={i.title} dimentions={["200px", "300px"]}/>
                        );
                    
                })}
            </div>
        </div>
    );
}
