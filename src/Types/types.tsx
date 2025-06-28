export interface SanityImageAsset {
    asset: {
        _ref?: string;
        _type?: string;
        url?: string;
    };
}

export interface CategElem{
    _id?: string;
    title:string;
    image:SanityImageAsset;
    Description?:string;
}
export interface ProductsElemProps {
    _id?: string;
    title: string;
    image: SanityImageAsset;
    price?: number|null;
    category?: CategElem|null;
}