"use client";
import Navbar from "@/Components/desktop/Navbar";
import NavbarPhone from "@/Components/phone/NavbarPhone";

export default function Home() {
  const IsDesktop= typeof window !== "undefined" && window.innerWidth >= 768;
    return (
      <div>

        {IsDesktop ? <Navbar /> : <NavbarPhone />}
      </div>
    );
}
