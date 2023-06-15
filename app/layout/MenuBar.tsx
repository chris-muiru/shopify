import React from "react"
import { AiOutlineMenu } from "react-icons/ai"
import OrgDetail from "../(site)/component/OrgDetail"
import SectionWrapper from "../sharedComponent/SectionWrapper"
const MenuBar = () => {
	return (
		<div>
			<SectionWrapper>
				<div className="flex flex-row justify-between w-full h-12 items-center py-10 ">
					<OrgDetail />
					<div className="">
						<AiOutlineMenu className="text-2xl" />
					</div>
				</div>
			</SectionWrapper>
		</div>
	)
}

export default MenuBar
