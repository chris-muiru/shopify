import React, { FC } from "react"
import Image from "next/image"
import { AiOutlineHeart } from "react-icons/ai"
import { repeat } from "@/util/resource/arrayRepeater"

interface ProductCardProps {
	productName: string
	productShtDesc: string
	productCost: string
	productImage: string
	productRating: number
	productId: string
}
const ProductCard: FC<ProductCardProps> = ({
	productCost,
	productName,
	productShtDesc,
	productImage,
	productId,
	productRating,
}) => {
	return (
		<div className="flex flex-col min-w-[20rem] w-full h-[27rem] m-3">
			<div className="relative w-full h-full bg-[#F5F6F6]">
				<Image
					src={productImage}
					className="object-scale-down"
					fill
					alt="ad product"
				/>
				<div className="absolute top-3 right-5">
					<AiOutlineHeart />
				</div>
			</div>
			<div className="relative p-5">
				<div className="space-y-2">
					<h2 className="font-semibold">{productName}</h2>
					<small>{productShtDesc}</small>
					<div className="flex flex-row">
						{repeat(
							new Array(
								(
									<svg
										aria-hidden="true"
										className="w-5 h-5 text-green-600"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<title>First star</title>
										<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
									</svg>
								)
							),
							productRating
						)}{" "}
					</div>

					<h2 className="absolute -top-2 right-0">{productCost}</h2>

					<button className="border-2 px-6 p-2 rounded-xl">
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	)
}

export default ProductCard
