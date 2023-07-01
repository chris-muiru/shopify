"use client"
import React from "react"
import Image from "next/image"
import SectionWrapper from "@/app/sharedComponent/SectionWrapper"
import animatedTruck from "@/public/lottiefiles/50810-forklift-loading-truck.json"
import LottieAnimationComponent from "@/app/sharedComponent/LottieAnimationComponent"
const HeroSection = () => {
	return (
		<div className="min-h-[200px] w-full relative bg-[#A5D3E6]">
			<SectionWrapper>
				<div className="flex flex-row relative z-20">
					<div className="md:w-[38rem] space-y-10 relative  h-1/2 text-[#003D29]">
						<h2 className="text-4xl mt-10 font-bold sm:text-6xl">
							Shopping And Department Store
						</h2>
						<p className="md:text-2xl text-[#4E5557] h-[20rem]  break-words">
							Shopping is a bit of a relaxing hobby for me, which is
							sometimes troubling for the bank balance.
						</p>
						<button className="bg-[#003D29] py-3 px-6 text-sm  xl:text-xl rounded-full text-white absolute bottom-28">
							Learn more
						</button>
					</div>

					<div className="hidden lg:block text-blue-300 grow">
						<LottieAnimationComponent animationData={animatedTruck} />
					</div>
				</div>
			</SectionWrapper>
			<div className="h-[20rem] bottom-0 w-full absolute z-0">
				<Image
					src={"/waves.svg"}
					className="object-cover"
					alt="waves"
					fill
				/>
			</div>
		</div>
	)
}

export default HeroSection
