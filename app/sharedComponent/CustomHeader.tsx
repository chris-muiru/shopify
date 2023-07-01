import React from "react"

interface customHeaderProp {
	header: string
}
const CustomHeader = ({ header }: customHeaderProp) => {
	return <h2 className="text-xl font-semibold my-6 ml-2">{header}</h2>
}

export default CustomHeader
