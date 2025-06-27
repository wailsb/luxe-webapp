"use client";
import React from "react";
import Navbar from "@/Components/desktop/Navbar";
import NavbarPhone from "@/Components/phone/NavbarPhone";
import Banner from "@/Components/shared/Banner";
import Categories from "@/Sections/Categories";
import BestSeller from "@/Sections/BestSeller";

export default function Home() {
  const [IsDesktop, setIsDesktop] = React.useState<boolean>(true);
  React.useEffect(() => {
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
        <Banner imageUrl="/Banner.png" />
        <Categories />
        <BestSeller/>
      </div>
    );
}
