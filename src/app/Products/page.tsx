"use client";
import Navbar from "@/Components/desktop/Navbar";
import NavbarPhone from "@/Components/phone/NavbarPhone";
import ProductCard from "@/Components/shared/ProductCard";
import { getAllProducts } from "@/sanity/sanity-tools";
import Footer from "@/Sections/Footer";
import { ProductsElemProps } from "@/Types/types";
import { useEffect, useState } from "react";
export default function Products() {
    const [IsDesktop, setIsDesktop] = useState<boolean>(true);
    const [dataArray, setDataArray] = useState<ProductsElemProps[]>([]);

// Sample product data

    async function fetchProducts() {
      const allProducts = await getAllProducts();
      setDataArray(allProducts);
    }
    useEffect(() => {
      const handleResize = () => {
        setIsDesktop(window.innerWidth >= 768);
      };
      window.addEventListener("resize", handleResize);
      handleResize(); // Initial check
      fetchProducts();
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
            {dataArray.map((product, index) => (
              <ProductCard 
                key={index}
                title={product.title}
                imageUrl={product.image.asset.url}
                price={product.price}
                category={(product.category ? product.category.title : null)}
                dimentions={["300px", "200px"]} // Default dimensions if not provided
              />
            ))}
          </div>
        </div>
      <Footer />
    </div>
  );
}