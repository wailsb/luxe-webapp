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
    images: Array<SanityImageAsset>|null;
    isPriceShown?: boolean;
    isBestSeller?: boolean;
    description?: string;
    price?: number|null;
    category?: CategElem|null;
}