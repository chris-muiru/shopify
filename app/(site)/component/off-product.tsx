import React from "react"
import Image from "next/image"
const OffProducts = () => {
	return (
		<section className="bg-slate-100 m-auto rounded-xl h-[24rem] sm:h-[28rem] flex flex-col max-w-[20rem] overflow-hidden">
			<div className="p-6 grow space-y-3">
				<p className="font-bold text-md xl:text-xl">Save</p>
				<p className="text-5xl sm:text-6xl text-yellow-500 font-bold">
					<sup className=" text-2xl sm:text-4xl">$</sup>
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
