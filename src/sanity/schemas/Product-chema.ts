const Product={
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        {
        name: "title",
        title: "Title",
        type: "string",
        },{
            name: "category",
            title: "Category",
            type: "reference",
            to: [{type: "category"}],
        },
        {
        name: "description",
        title: "Description",
        type: "text",
        },
        {
        name: "price",
        title: "Price",
        type: "number",
        },
        {
        name: "isBestSeller",
        title: "Is Best Seller",
        type: "boolean",
        },
        {
        name: "isPriceShown",
        title: "Is Price Shown",
        type: "boolean",
        },
        {
        name: "image",
        title: "Image",
        type: "image",
        },
    ],
}
export default Product;