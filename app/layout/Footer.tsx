import React from "react"
import SectionWrapper from "../sharedComponent/SectionWrapper"
import Image from "next/image"
import { MdOutlineHelpOutline } from "react-icons/md"
import { BsBagCheckFill } from "react-icons/bs"
const Footer = () => {
	return (
		<SectionWrapper>
			<footer className="space-y-4 mt-20">
				<hr className="" />
				<div className="grid grid-cols-4 gap-6 sm:grid-cols-3 lg:grid-cols-5 lg:row-span-1">
					<div className="col-span-4 sm:col-start-1 sm:col-span-2 lg:row-span-1 lg:col-span-2 lg:col-start-1 lg:row-start-1 space-y-3 lg:self-start">
						<div>
							<div className="w-[200px] h-[50px] relative">
								<Image
									src={
										"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e86ab4c21faa7bc0bd90dd_Logo.svg"
									}
									alt="companyLogo"
									fill
								/>
							</div>
							<div>
								Amet minim mollit non deserunt ullamco est sit aliqua
								dolor do amet sint. Velit officia consequat duis enim
								velit mollit.
							</div>
						</div>
					</div>

					<div className="row-start-5 col-span-4  sm:row-span-1 sm:col-span-2 lg:col-span-2 lg:col-start-1">
						<p className="font-semibold">Accepted Payments</p>
						<div className="flex flex-row flex-wrap gap-2">
							<div className="border w-[60px] relative p-4 border-black rounded-md"></div>
							<div className="border w-[60px] relative p-4 border-black rounded-md"></div>
							<div className="border w-[60px] relative p-4 border-black rounded-md"></div>
							<div className="border w-[60px] relative p-4 border-black rounded-md"></div>
							<div className="border w-[60px] relative p-4 border-black rounded-md"></div>
							<div className="border w-[60px] relative p-4 border-black rounded-md"></div>
							<div className="border w-[60px] relative p-4 border-black rounded-md"></div>
							<div className="border w-[60px] relative p-4 border-black rounded-md"></div>
						</div>
					</div>
					<div className="col-span-2 sm:col-span-1 sm:col-start-3 sm:row-span-3 sm:row-start-1  lg:row-span-full lg:col-span-1">
						<p className="font-bold mb-3">DepartMent</p>
						<p>Fasshion</p>
						<p>Fasshion</p>
						<p>Fasshion</p>
						<p>Fasshion</p>
						<p>Fasshion</p>
						<p>Fasshion</p>
						<p>Fasshion</p>
						<p>Fasshion</p>
						<p>Fasshion</p>
						<p>Fasshion</p>
						<p>Fasshion</p>
					</div>
					<div className="col-span-2 sm:col-span-1 lg:row-span-full lg:col-span-1">
						<p className="font-bold mb-3">About Us</p>

						<p>Fasshion</p>
						<p>Fasshion</p>
						<p>Fasshion</p>
						<p>Fasshion</p>
						<p>Fasshion</p>
						<p>Fasshion</p>
					</div>
					<div className="col-span-2 sm:col-span-1  lg:row-span-full lg:col-span-1">
						<p className="font-bold mb-3">Services</p>
						<p>Fasshion</p>
						<p>Fasshion</p>
						<p>Fasshion</p>
						<p>Fasshion</p>
						<p>Fasshion</p>
					</div>
					<div className="col-span-2 sm:col-span-1  lg:row-span-full lg:col-span-1">
						<p className="font-bold mb-3">Help</p>
						<p>Fasshion</p>
						<p>Fasshion</p>
						<p>Fasshion</p>
						<p>Fasshion</p>
						<p>Fasshion</p>
						<p>Fasshion</p>
					</div>
				</div>

				<hr className="" />
				<div className="flex flex-row flex-wrap w-full justify-between">
					<div className="flex flex-row gap-5">
						<div>
							<BsBagCheckFill className="inline" />
							<p className="inline">Become Seller</p>
						</div>
						<div>
							<MdOutlineHelpOutline className="inline" />
							<p className="inline">Help Center</p>
						</div>
						<div>
							<MdOutlineHelpOutline className="inline" />
							<p className="inline">Help Center</p>
						</div>
					</div>
					<p>Terms of Service</p>
					<p>Privacy &amp; Policy </p>
					<p>All rights reserved by Kris</p>
				</div>
			</footer>
		</SectionWrapper>
	)
}

export default Footer
