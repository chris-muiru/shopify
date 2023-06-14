import React from "react"
import { AiOutlineMenu } from "react-icons/ai"
import OrgDetail from "../(site)/component/OrgDetail"
const MenuBar = () => {
	return (
		<div className="">
			<div className="flex flex-row justify-between w-full h-12 items-center py-10 bg-slate-200">
				<OrgDetail />
				<div className="">
					<AiOutlineMenu className="text-2xl" />
				</div>
			</div>
		</div>
	)
}

export default MenuBar
