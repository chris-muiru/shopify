import React, { FC } from "react"
import Image from "next/image"
import { CiDeliveryTruck } from "react-icons/ci"
interface StoreCardProps {
	storeProductImageSample: string
	storeName: string
	storeLogo: string
	storeDeliveryTime: string
	storeProductCategory: string
	cardClassName?: string
}
const StoreCard: FC<StoreCardProps> = ({
	storeProductImageSample,
	storeDeliveryTime,
	storeLogo,
	storeName,
	storeProductCategory,
	cardClassName,
}) => {
	return (
		<div
			className={`flex flex-col space-y-7 overflow-hidden max-w-[300px] ${cardClassName}`}
		>
			<div className="w-full h-[270px] relative">
				<Image
					src={storeProductImageSample}
					alt="store product image sample"
					fill
				/>
				<div className="absolute rounded-full w-16 h-16 -bottom-7 left-3 bg-red-400">
					{/* <Image src={storeLogo} alt="store product image sample" fill /> */}
				</div>
			</div>
			<div className="space-y-3">
				<p className="font-bold">{storeName}</p>
				<p className="opacity-50">Bag.{storeProductCategory}</p>
				<p className="text-red-700 text-sm flex flex-row space-x-3">
					<CiDeliveryTruck className="text-xl" />
					<p>Delivery within {storeDeliveryTime} hours</p>
				</p>
			</div>
		</div>
	)
}

export default StoreCard
