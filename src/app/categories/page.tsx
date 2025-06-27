"use client";
import Navbar from "@/Components/desktop/Navbar";
import NavbarPhone from "@/Components/phone/NavbarPhone";
import CategElement from "@/Components/shared/CategElement";
import Footer from "@/Sections/Footer";
import { CategElem } from "@/Types/types";
import { useEffect, useState } from "react";

export default function Categories() {
  const sampleCategories: CategElem[] = [
    {
        title: "T-Shirts",
        imageUrl: "/Banner.png",
        dimentions: ["100%", "200px"]
    },
    {
        title: "Jeans",
        imageUrl: "/Banner.png",
        dimentions: ["100%", "200px"]
    },
    {
        title: "Hoodies",
        imageUrl: "/Banner.png",
        dimentions: ["100%", "200px"]
    },
    {
        title: "Sneakers",
        imageUrl: "/Banner.png",
        dimentions: ["100%", "200px"]
    }
];

  const [IsDesktop, setIsDesktop] = useState<boolean>(true);
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
            <h1 className="text-center text-4xl font-bold mt-10 mb-5">Categories</h1>
            <p className="text-center text-xs ">See all the collection we have offer for you</p>
            <div className={`${IsDesktop ? "grid grid-cols-2 gap-4" : "flex flex-col space-y-4"} justify-center mt-5 mb-10`}>
              {sampleCategories.map((category, index) => (
                <CategElement
                  key={index}
                  title={category.title}
                  imageUrl={category.imageUrl}
                  dimentions={(category.dimentions && category.dimentions.length > 0) ? category.dimentions : ["300px", "200px"]} // Default dimensions if not provided
                />
              ))}
            </div>
          </div>
          <Footer />
        </div>
      );
}