import React, { FC, ReactNode } from "react"
import CustomHeader from "./CustomHeader"
import tw from "@/util/resource/twMerge"

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
			className={tw(
				"max-w-[76rem] overflow-hidden m-2 sm:mx-auto xl:px-0  sm:my-5",
				sectionClassName as string
			)}
		>
			{!!header && <CustomHeader header={header} />}
			{children}
		</section>
	)
}

export default SectionWrapper
