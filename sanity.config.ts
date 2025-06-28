import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import * as dotenv from "dotenv";
import Category from "@/sanity/schemas/Categorie-schema";
import Product from "@/sanity/schemas/Product-chema";
dotenv.config({path:"./.env" });
const config = defineConfig({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID||"",
    dataset: "production",
    title: "Luxe Webapp",
    apiVersion: "2023-10-16",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: {
        types: [Category,Product],
    },
});
export default config;