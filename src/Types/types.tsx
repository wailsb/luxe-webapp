export interface CategElem{
    title:string;
    imageUrl:string;
    dimentions?:Array<string>
}
export interface BestSellerElemProps {
    title: string;
    imageUrl: string;
    price?: number|null;
    dimentions?:Array<string>;
    category?: string;
}