import { ProductsElemProps } from "@/Types/types";


export default function ProductCard({title,imageUrl,price,category,dimentions=["200px","300px"]}:ProductsElemProps) {
    return (
        <div className="flex flex-col">
            <div style={{backgroundImage:`url(${imageUrl})`,width:dimentions[0],height:dimentions[1]}} className="bg-cover bg-center shrink-0"/>
            <p className="text-xs text-center">{category}</p>
            <h1 className="text-lg text-center">{title}</h1>
            {price!=null?<p className="text-md text-center">${price}</p>:<></>}

        </div>
    );
}