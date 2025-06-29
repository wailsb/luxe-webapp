import Link from "next/link";

export default function ProductCard({id,title,imageUrl,price,category,dimentions=["300px","400px"]}:{id?:string,title:string,imageUrl?:string,price?:number|null,category?:string|null,dimentions?:Array<string>}) {
    return (
        <Link href={`/Products/${id}`}>
            <div className="flex flex-col">
                <div style={{backgroundImage:`url(${imageUrl})`,width:dimentions[0],height:dimentions[1]}} className="bg-cover bg-center shrink-0"/>
                {category && category!==null? <p className="text-xs text-center">{category}</p>: <></>}
                <h1 className="text-lg font-bold text-center">{title}</h1>
                {price!=null && price!==undefined?<p className="text-md text-center">{price} DZD</p>:<></>}

            </div>
        </Link>
    );
}