import { axiosPublic } from "@/util/config/axiosInstance";
import { brandsJson, productJson, productOffjson } from "./dummy";

export async function getProducts() {
    return await Promise.resolve(productJson);
    // axiosPublic.get()
}
export async function getBrands() {
    return await Promise.resolve(brandsJson);
}
export async function getProductOff() {
    return await Promise.resolve(productOffjson)
}