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
				<div className="grid lg:grid-cols-5">
					<div className="w-full flex flex-col space-y-6">
						<div className="w-[200px] h-[50px] relative">
							<Image
								src={
									"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e86ab4c21faa7bc0bd90dd_Logo.svg"
								}
								alt="companyLogo"
								fill
							/>
						</div>
						<p>
							Amet minim mollit non deserunt ullamco est sit aliqua dolor
							do amet sint. Velit officia consequat duis enim velit
							mollit.
						</p>
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
					<div className="ml-10">
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
					<div>
						<p className="font-bold mb-3">About Us</p>

						<p>Fasshion</p>
						<p>Fasshion</p>
						<p>Fasshion</p>
						<p>Fasshion</p>
						<p>Fasshion</p>
						<p>Fasshion</p>
					</div>
					<div>
						<p className="font-bold mb-3">Services</p>
						<p>Fasshion</p>
						<p>Fasshion</p>
						<p>Fasshion</p>
						<p>Fasshion</p>
						<p>Fasshion</p>
					</div>
					<div>
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
