import React from "react"
import ProductCategoryCard from "./ProductCategoryCard"

const ProductCategory = () => {
	return (
		<div className="containerClassName={`grid grid-cols-2 gap-2 sm:grid-cols-3`}">
			<ProductCategoryCard />
			<ProductCategoryCard />
			<ProductCategoryCard />
			<ProductCategoryCard />
			<ProductCategoryCard />
			<ProductCategoryCard />
		</div>
	)
}

export default ProductCategory
