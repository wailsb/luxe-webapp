"use client";
import Navbar from "@/Components/desktop/Navbar";
import NavbarPhone from "@/Components/phone/NavbarPhone";
import CategElement from "@/Components/shared/CategElement";
import StatusBar from "@/Components/shared/StatusBar";
import getCategories from "@/sanity/sanity-tools";
import Footer from "@/Sections/Footer";
import { CategElem } from "@/Types/types";
import { useEffect, useState } from "react";

export default function Categories() {
  

  const [IsDesktop, setIsDesktop] = useState<boolean>(true);
  const [dataArray, setDataArray] = useState<CategElem[]>([]);
      async function fetchCategories() {
          const data = await getCategories();
          setDataArray(data);
      }
    useEffect(() => {
      const handleResize = () => {
        setIsDesktop(window.innerWidth >= 768);
      };
      window.addEventListener("resize", handleResize);
      handleResize(); // Initial check
      fetchCategories();
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    return (
      <div>
        
          <StatusBar />
          {IsDesktop ? <Navbar /> : <NavbarPhone />}
          <div className="mx-[10%] mb-20">
            <h1 className="text-center text-4xl font-semibold mt-10 mb-5">Categories</h1>
            <p className="text-center text-xs ">See all the collection we have offer for you</p>
            <div className={`${IsDesktop ? "grid grid-cols-2 gap-4" : "flex flex-col space-y-4"} justify-center justify-items-center mt-5 mb-10`}>
              {dataArray.map((category) => (
                <CategElement
                  key={category._id}
                  title={category.title}
                  imageUrl={category.image.asset.url} 
                  dimentions={["100%", "200px"]} 
                />
              ))}
            </div>
          </div>
          <Footer />
        </div>
      );
}