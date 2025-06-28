import { createClient,groq } from "next-sanity";
const config= {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: "production",
    apiVersion: "2023-10-16",
}
export default async function getCategories(){
    const client=createClient(config);
    return client.fetch(
        groq`*[_type == "category"]{
            _id,
            title,
            description,
            image{
                asset->{
                    _id,
                    url
                }
            }
        }`
    );
}
export async function getProductsByCategory(categoryId: string) {
    const client = createClient(config);
    return client.fetch(
        groq`*[_type == "product" && references($categoryId)]{
            _id,
            title,
            price,
            isBestSeller,
            isPriceShown,
            category->{
                _id,
                title
            },
            description,
            images[] {
                asset->{
                  _id,
                  url
                    }
                }
            }`,
        { categoryId }
    );
}
export async function getProductById(productId: string) {
    const client = createClient(config);
    return client.fetch(
        groq`*[_type == "product" && _id == $productId]{
            _id,
            title,
            price,
            isBestSeller,
            isPriceShown,
            category->{
                _id,
                title
            },
            description,
            images[] {
                asset->{
                  _id,
                  url
                }
            }
        }`,
        { productId }
    );
}
export async function getAllProducts() {
    const client = createClient(config);
    return client.fetch(
        groq`*[_type == "product"]{
            _id,
            title,
            price,
            isBestSeller,
            isPriceShown,
            category->{
                _id,
                title
            },
            description,
            images[] {
                asset->{
                  _id,
                  url
                }
            }
        }`
    );
}
export async function getBestSellers() {
    const client = createClient(config);
    return client.fetch(
        groq`*[_type == "product" && isBestSeller == true]{
            _id,
            title,
            price,
            isBestSeller,
            isPriceShown,
            category->{
                _id,
                title
            },
            description,
            images[] {
                asset->{
                    _id,
                    url
                }
            }
        }`,
    );
}