import ProductCard from "@/Components/shared/ProductCard";
import { ProductsElemProps } from "@/Types/types";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BestSeller() {
    const [mounted, setMounted] = useState(false);
    const [isDesktop, setIsDesktop] = useState<boolean>(true);

    const bestSellers: ProductsElemProps[] = [
    {
        title: "Classic Tee",
        imageUrl: "/Banner.png",
        price: null,
        category: "T-Shirts"
    },
    {
        title: "Denim Jeans",
        imageUrl: "/Banner.png",
        price: null,
        category: "Jeans"
    },
    {
        title: "Cozy Hoodie",
        imageUrl: "/Banner.png",
        price: 39.99,
        category: "Hoodies"
    },
    {
        title: "Sport Sneakers",
        imageUrl: "/Banner.png",
        price: 59.99,
        category: "Sneakers"
    },
    {
        title: "Sport try",
        imageUrl: "/Banner.png",
        price: 59.99,
        category: "Sneakers"
    },
    {
        title: "Sport test",
        imageUrl: "/Banner.png",
        price: 59.99,
        category: "Sneakers"
    }];
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
        <div className={`flex flex-col mx-[10%] mb-40 ${isDesktop?"mt-5":"mt-2"}`}>
            <h1 className="text-2xl font-bold text-center">Explore our best seller</h1>
            <div className="overflow-x-scroll flex space-x-3 mt-5 mb-10 mx-auto max-w-full">
                {bestSellers.map((i)=>{
                    return (
                        <ProductCard key={i.title} imageUrl={i.imageUrl} price={i.price} title={i.title} category={i.category}/>
                    );
                })}
            </div>
            <div className="flex justify-center">
                <Link href="/Catalog" className="text-sm px-5 border border-b-slate-950 font-semibold rounded-sm">
                        see all
                </Link>
            </div>
        </div>
    );
}
