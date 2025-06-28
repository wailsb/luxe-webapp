import ProductCard from "@/Components/shared/ProductCard";
import { getBestSellers } from "@/sanity/sanity-tools";
import { ProductsElemProps } from "@/Types/types";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BestSeller() {
    const [mounted, setMounted] = useState(false);
    const [isDesktop, setIsDesktop] = useState<boolean>(true);
    const [dataArray, setDataArray] = useState<ProductsElemProps[]>([]);
    async function fetchBestSellers() {
        const data=await getBestSellers();
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
            fetchBestSellers();
            return () => {
                window.removeEventListener("resize", handleResize);
            };
     // Initial check
        }, []);

    return (
        <div className={`flex flex-col mx-[10%] mb-40 ${isDesktop?"mt-5":"mt-2"}`}>
            <h1 className="text-2xl font-[500] text-center">Explore our best seller</h1>
            <div className="overflow-x-scroll flex space-x-3 mt-5 mb-10 mx-auto max-w-full">
                {dataArray.map((i)=>{
                    if(i.isBestSeller){
                        return (<ProductCard key={i._id} id={i._id} imageUrl={(i.images!=null ? i.images[0].asset.url : "")} price={i.isPriceShown==true ? i.price : null} title={i.title} category={(i.category? i.category.title : null)} dimentions={["300px", "200px"]} />);
                    }
                })}
            </div>
            <div className="flex justify-center">
                <Link href="/Products" className="text-sm px-5 border border-b-slate-950 rounded-sm">
                        see all
                </Link>
            </div>
        </div>
    );
}
