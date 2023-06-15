import React from "react"
import Image from "next/image"
import SectionWrapper from "@/app/sharedComponent/SectionWrapper"

const HeroSection = () => {
	return (
		<div className="min-h-[500px] w-full relative">
			<Image src={"/waves.svg"} className="object-cover" alt="waves" fill />

			<SectionWrapper>
				<div className="md:w-[600px] space-y-10 relative z-20 text-black">
					<h2 className="text-4xl mt-10 font-bold sm:text-6xl">
						Shopping And Department Store
					</h2>
					<p className="md:text-2xl">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						Accusamus
					</p>
					<button className="bg-green-800 py-3 px-6 text-2xl  rounded-md text-white font-bold">
						Learn more
					</button>
				</div>
			</SectionWrapper>
		</div>
	)
}

export default HeroSection
