"use client";
import Navbar from "@/Components/desktop/Navbar";
import NavbarPhone from "@/Components/phone/NavbarPhone";
import ProductCard from "@/Components/shared/ProductCard";
import Footer from "@/Sections/Footer";
import { ProductsElemProps } from "@/Types/types";
import { useEffect, useState } from "react";
export default function Products() {
    const [IsDesktop, setIsDesktop] = useState<boolean>(true);


// Sample product data
const sampleProducts: ProductsElemProps[] = [
    {
        title: "Classic Tee",
        imageUrl: "/Banner.png",
        price: 29.99,
        category: "T-Shirts",
        dimentions: ["100%", "200px"]
    },
    {
        title: "Denim Jeans",
        imageUrl: "/Banner.png",
        price: null, // Price hidden
        category: "Jeans",
        dimentions: ["100%", "200px"]
    },
    {
        title: "Cozy Hoodie",
        imageUrl: "/Banner.png",
        price: 39.99,
        category: "Hoodies",
        dimentions: ["100%", "200px"]
    },
    {
        title: "Sport Sneakers",
        imageUrl: "/Banner.png",
        price: null, // Price hidden
        category: "Sneakers",
        dimentions: ["100%", "200px"]
    },
    {
        title: "Sport Sneakers",
        imageUrl: "/Banner.png",
        price: null, // Price hidden
        category: "Sneakers",
        dimentions: ["100%", "200px"]
    },
    {
        title: "Sport Sneakers",
        imageUrl: "/Banner.png",
        price: null, // Price hidden
        category: "Sneakers",
        dimentions: ["100%", "200px"]
    },
    {
        title: "Sport Sneakers",
        imageUrl: "/Banner.png",
        price: null, // Price hidden
        category: "Sneakers",
        dimentions: ["100%", "200px"]
    },
    {
        title: "Sport Sneakers",
        imageUrl: "/Banner.png",
        price: null, // Price hidden
        category: "Sneakers",
        dimentions: ["100%", "200px"]
    }
];
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
        {IsDesktop ? <Navbar /> : <NavbarPhone />}
        <div className="mx-[10%] mb-20">
          <h1 className="text-center text-4xl font-bold mt-10 mb-5">All Products</h1>
          <p className="text-center text-xs ">See all the products we have offer for you</p>
          <div className={`${IsDesktop ? "grid grid-cols-4 gap-4" : "grid grid-cols-2 gap-4"} justify-center mt-5 mb-10`}>
            {sampleProducts.map((product, index) => (
              <ProductCard 
                key={index}
                title={product.title}
                imageUrl={product.imageUrl}
                price={product.price}
                category={product.category}
                dimentions={(product.dimentions && product.dimentions.length > 0) ? product.dimentions : ["300px", "200px"]} // Default dimensions if not provided
              />
            ))}
          </div>
        </div>
      <Footer />
    </div>
  );
}