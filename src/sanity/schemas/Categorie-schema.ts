const Category={
    name: "category",
    title: "Category",
    type: "document",
    fields: [
        {
        name: "title",
        title: "Title",
        type: "string",
        },{
            name:"description",
            title: "Description",
            type: "text",

        },
        {
        name: "image",
        title: "Image",
        type: "image",
        options: {
            hotspot: true,
        },
        },
    ],
}
export default Category;