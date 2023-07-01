import React from "react"
import Image from "next/image"
const OffProducts = () => {
	return (
		<section className="bg-slate-100 rounded-xl m-2  h-[28rem] flex flex-col md:w-[288px] overflow-hidden">
			<div className="p-6 grow">
				<p className="font-bold text-xl">Save</p>
				<p className="text-6xl text-yellow-500 font-bold">
					<sup className="text-4xl">$</sup>
					100
				</p>
				<p>Explore Our Furniture & Home Furnishing Range</p>
			</div>
			<div className="w-full h-1/2 relative">
				<Image src="/bag.png" className="object-cover" alt="product" fill />
			</div>
		</section>
	)
}

export default OffProducts
