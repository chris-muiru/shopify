import React, { FC, ReactNode } from "react"
import CustomHeader from "./CustomHeader"

interface SectionWrapperInterface {
	children: ReactNode
	header?: string
}

const SectionWrapper: FC<SectionWrapperInterface> = ({ children, header }) => {
	return (
		<section className="mx-auto  max-w-[90rem] px-5">
			{!!header && <CustomHeader header={header} />}
			{children}
		</section>
	)
}

export default SectionWrapper
