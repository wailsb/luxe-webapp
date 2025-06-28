import Image from "next/image";

export default function StatusBar() {
    return (
        <div className="bg-black text-white h-5 flex align-center justify-center gap-4 items-center">
            <span className=""><Image src="/icons/left.png" alt="Left Arrow" width={4} height={4} /></span>
            <p className="text-xs text-center">Free Delivery 40 Wilayas</p>
            <span className=""><Image src="/icons/right.png" alt="Right Arrow" width={4} height={4} /></span>
        </div>
    );
}
