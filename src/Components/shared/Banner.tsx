import Link from "next/link";
import { useEffect, useState } from "react";

export default function Banner({ imageUrl }: { imageUrl: string }) {
    const [windowHeight, setWindowHeight] = useState<number | null>(null);
    const [IsDesktop, setIsDesktop] = useState<boolean>(true);
    useEffect(() => {
        const handleResize = () => {
            setWindowHeight(window.innerHeight * 0.8); // Set height to 80% of the window height
            setIsDesktop(window.innerWidth >= 1024);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    if (windowHeight === null) return null; // Prevent SSR mismatch

    return (
        <div
            style={{ backgroundImage: `url(${imageUrl})`, height: `${windowHeight}px` }}
            className="bg-cover bg-center bg-gray-200 p-4 text-center relative"
        >
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                <h1 className={`text-${IsDesktop ? 4 : 2}xl font-bold text-white mb-4`}>Soft, Smooth & comfy</h1>
                <Link href="/Catalog" className="text-black py-2.5 px-5 bg-white rounded-sm text-sm">
                    shop now
                </Link>
            </div>
        </div>
    );
}