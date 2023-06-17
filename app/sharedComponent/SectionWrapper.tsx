import React, { FC, ReactNode } from "react"
import CustomHeader from "./CustomHeader"

interface SectionWrapperInterface {
	children: ReactNode
	header?: string
	sectionClassName?: string
}

const SectionWrapper: FC<SectionWrapperInterface> = ({
	children,
	header,
	sectionClassName,
}) => {
	return (
		<section
			className={`max-w-[90rem] px-5 sm:mx-auto  sm:my-5  ${sectionClassName}`}
		>
			{!!header && <CustomHeader header={header} />}
			{children}
		</section>
	)
}

export default SectionWrapper
