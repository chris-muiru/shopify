import { useQuery } from "react-query";
import { getBrands, getProductCategories, getProductOff, getProducts } from "./siteTrans";

export function useProduct() {
    return useQuery("products", getProducts)
}
export function useBrand() {
    return useQuery("brands", getBrands)
}

export function useProductOff() {
    return useQuery("productOff", getProductOff)
}

export function useProductCategory() {
    return useQuery("productCategory", getProductCategories)
}