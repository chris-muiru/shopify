import React from "react"
import Image from "next/image"
const ProductCategoryCard = () => {
	return (
		<div className="w-screen h-[20rem] sm:w-[20rem] sm:h-[20rem]  xl:w-[13.5rem] xl:h-[20rem] relative rounded-none  sm:rounded-xl  md:h-[20rem]">
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
