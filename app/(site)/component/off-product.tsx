import React from "react"
import Image from "next/image"
const OffProducts = () => {
	return (
		<section className="bg-slate-100 rounded-xl m-2  h-[400px] flex flex-col md:w-[288px]">
			<div className="p-6">
				<p className="font-bold text-xl">Save</p>
				<p className="text-6xl text-yellow-500 font-bold">100</p>
				<p>Explore Our Furniture & Home Furnishing Range</p>
			</div>
			<div className="w-full h-full relative">
				<Image src="/bag.png" className="object-cover" alt="product" fill />
			</div>
		</section>
	)
}

export default OffProducts
