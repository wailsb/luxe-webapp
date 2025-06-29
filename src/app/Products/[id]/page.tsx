"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/Components/desktop/Navbar";
import NavbarPhone from "@/Components/phone/NavbarPhone";
import { getProductById } from "@/sanity/sanity-tools";
import { ProductsElemProps } from "@/Types/types";
import Image from "next/image";
import StatusBar from "@/Components/shared/StatusBar";
import Footer from "@/Sections/Footer";

interface ProductsPageProps {
    params: Promise<{ id: string }>;
}

export default function ProductsPage({ params }: ProductsPageProps) {
    const { id } = React.use(params);
    const [singleProduct, setSingleProduct] = useState<ProductsElemProps | null>(null);
    const [isDesktop, setIsDesktop] = useState<boolean>(true);
    const [currentChosenImage, setCurrentChosenImage] = useState<number>(0);

    async function fetchProduct(id: string) {
        const response = await getProductById(id);
        setSingleProduct(Array.isArray(response) ? response[0] : response);
    }

    useEffect(() => {
        fetchProduct(id);
    }, [id]);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };
        window.addEventListener("resize", handleResize);
        handleResize(); // Initial check
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div>
            <StatusBar />
            {isDesktop ? <Navbar /> : <NavbarPhone />}
            <div className={`mx-[10%] my-8 flex ${isDesktop ? "" : "flex-col"} gap-8`}>
                <div className="flex-4 flex flex-col gap-4">
                    <div className="featuredImage h-[400px] relative">
                        {singleProduct?.images && singleProduct.images.length > 0 ? (
                            <Image
                                src={(singleProduct.images[currentChosenImage].asset.url ? singleProduct.images[currentChosenImage].asset.url : "") || ""}
                                alt={singleProduct.title}
                                className="w-[100%] h-[100%] object-cover"
                                width={600}
                                height={400}
                            />
                        ) : null}
                    </div>
                    <div className="flex w-full gap-1 imagesGallery overflow-x-scroll">
                        {singleProduct?.images && singleProduct.images.length > 0 ? (
                            singleProduct.images.map((image, index) => (
                        <Image
                            key={index}
                            onClick={() => setCurrentChosenImage(index)}
                            src={image.asset?.url ? image.asset.url : ""}
                            alt={singleProduct.title}
                            className="h-[120px] w-[120px]"
                            width={120}
                            height={120}
                        />
                            ))
                        ) : <></>}
                        <div className="flex-1"/>
                    </div>
                
                </div>
                <div className={`flex-5 ${isDesktop ? "py-4" : "pb-4"}`}>
                    <p className={`text-sm ${isDesktop ? "my-4" : "mb-4"}`}>{singleProduct?.category?.title}</p>
                    <h1 className="text-3xl font-bold mb-4">{singleProduct?.title}</h1>
                    <div className="w-full border-y-2 border-gray-800 py-4">
                        <p className="text-sm my-4">{singleProduct?.description}</p>
                    </div>
                    <p className="text-2xl font-bold text-right mt-4">
                        {singleProduct?.price ? `${singleProduct.price.toFixed(2)} DZD` : "Price not available"}
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <button className="bg-transparent border border-black text-black px-4 py-2 rounded-md mt-4">
                            Add to Cart
                        </button>
                        <button className="bg-black text-white px-4 py-2 rounded-md mt-4 flex items-center">
                            Buy Now
                            {!isDesktop && <span className="text-xs ml-2"><Image src="/icons/whatsapp.png" alt="WhatsApp" width={16} height={16} /></span>}
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
            
        </div>
    );
}
