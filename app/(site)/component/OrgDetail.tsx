import React from "react"
import { AiOutlineUngroup } from "react-icons/ai"
const OrgDetail = () => {
	return (
		<section className="flex flex-row rounded-sm w-full space-x-1">
			<div className="">
				{/* org icon */}
				<AiOutlineUngroup className="text-3xl" />
			</div>
			<div className="relative">
				<h2 className="absolute text-2xl">
					{/* Organization header */}
					{"Shopify"}
				</h2>
			</div>
		</section>
	)
}

export default OrgDetail
