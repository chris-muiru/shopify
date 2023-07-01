import React from "react"
import Image from "next/image"
const ProductCategoryCard = () => {
	return (
		<div className="mx-auto max-w-[12rem] h-[17rem] sm:w-[20rem] xl:w-[13.7rem]  relative rounded-none  sm:rounded-xl">
			<Image
				src="/bag.png"
				className="object-cover rounded-xl"
				alt="product"
				fill
			/>

			<div className="absolute w-full">
				<p className="text-center text-white font-bold text-bold sm:text-[1.5em]">
					Hello world
				</p>
			</div>
		</div>
	)
}

export default ProductCategoryCard
