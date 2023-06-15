import React from "react"
import Image from "next/image"
const ProductCategoryCard = () => {
	return (
		<div className="h-[200px] w-[155px] gap-2 sm:w-[280px] sm:h-[290px] xl:w-[200px] xl:h-[260px] m-2 rounded-xl relative md:h-[350px]">
			<Image
				src="/bag.png"
				className="object-cover rounded-xl"
				alt="product"
				fill
			/>
			<div className="absolute w-full">
				<p className="text-center text-white font-bold text-bold text-[1.5em]">
					Hello world
				</p>
			</div>
		</div>
	)
}

export default ProductCategoryCard
