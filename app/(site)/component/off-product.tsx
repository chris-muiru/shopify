import React from "react"
import Image from "next/image"
const OffProducts = () => {
	return (
<div className="bg-slate-100 w-full rounded-xl">
			<div className="p-6 min-h-[100px]">
				<p className="font-bold text-xl">Save</p>
				<p className="text-6xl text-yellow-500 font-bold">100</p>
				<p>Explore Our Furniture & Home Furnishing Range</p>
			</div>
			<div className="w-full h-[300px] relative rounded-xl">
				<Image src="/bag.png" className="object-fit" alt="product" fill />
			</div>
		</div>
	)
}

export default OffProducts
