import { axiosPublic } from "@/util/config/axiosInstance";
import { bestStoreJson, brandsJson, popularProductJson, productCategoryJson, productJson, productOffJson } from "./dummy";

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

export async function getPopularProduct() {
    return await Promise.resolve(popularProductJson)
}

export async function getBestStore() {
    return await Promise.resolve(bestStoreJson)
}