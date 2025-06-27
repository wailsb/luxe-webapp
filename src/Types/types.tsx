export interface CategElem{
    title:string;
    imageUrl:string;
    dimentions?:Array<string>
}
export interface ProductsElemProps {
    title: string;
    imageUrl: string;
    price?: number|null;
    dimentions?:Array<string>;
    category?: string;
}