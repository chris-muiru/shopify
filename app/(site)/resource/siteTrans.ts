import { axiosPublic } from "@/util/config/axiosInstance";
import { brandsJson, productCategoryJson, productJson, productOffJson } from "./dummy";

export async function getProducts() {
    return await Promise.resolve(productJson);
    // axiosPublic.get()
}
export async function getProductCategories() {
    return await Promise.resolve(productCategoryJson)
}
export async function getBrands() {
    return await Promise.resolve(brandsJson);
}
export async function getProductOff() {
    return await Promise.resolve(productOffJson)
}