"use client";
import CategElement from "@/Components/shared/CategElement";
import getCategories from "@/sanity/sanity-tools";
import { CategElem } from "@/Types/types";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Categories() {
    const [mounted, setMounted] = useState(false);
    const [isDesktop, setIsDesktop] = useState<boolean>(true);
    const [dataArray, setDataArray] = useState<CategElem[]>([]);
    async function fetchCategories() {
        const data = await getCategories();
        setDataArray(data);
    }
    useEffect(() => {
        setMounted(true);
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };
        window.addEventListener("resize", handleResize);
        if (mounted) {
            handleResize();
        }
        fetchCategories();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
 // Initial check
    }, []);
    return (
        <div className={`flex flex-col mx-[10%] ${isDesktop?"mt-5":"mt-2"}`}>
            <div className="flex items-center mb-2">
                <h1 className="text-4xl">Categories</h1>
                <div className="flex-1"/>
                <Link href="/Categories" className="text-sm px-5 border border-b-slate-950 rounded-sm">
                    see all
                </Link>
            </div>
            <p className="text-xs">see all collection we have offer for you</p>
            <div className="max-w-full overflow-x-scroll flex space-x-3 mt-5 mx-auto">
                {dataArray.map((i)=>{
                    return (
                            <CategElement key={i._id} imageUrl={i.image.asset.url} title={i.title} dimentions={["200px", "300px"]}/>
                        );
                    
                })}
            </div>
        </div>
    );
}
