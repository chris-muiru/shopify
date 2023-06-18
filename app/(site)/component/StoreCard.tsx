import React, { FC } from "react"
import Image from "next/image"
import { CiDeliveryTruck } from "react-icons/ci"
import tw from "@/util/resource/twMerge"
interface StoreCardProps {
	storeProductImageSample: string
	storeName: string
	storeLogo: string
	storeDeliveryTime: string
	storeProductCategory: string
}
const StoreCard: FC<StoreCardProps> = ({
	storeProductImageSample,
	storeDeliveryTime,
	storeLogo,
	storeName,
	storeProductCategory,
}) => {
	return (
		<div className="bg-slate-100 w-screen sm:w-[20rem] xl:w-[20.5rem]rounded-none  sm:rounded-xl">
			<div className="w-full h-[270px] relative">
				<Image
					src={storeProductImageSample}
					className="object-contain"
					alt="store product image sample"
					fill
				/>
				<div className="absolute rounded-full w-16 h-16 -bottom-6 left-3 bg-red-400">
					{/* <Image src={storeLogo} alt="store product image sample" fill /> */}
				</div>
			</div>
			<div className="space-y-3 mt-8 p-5">
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
