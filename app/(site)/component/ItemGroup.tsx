import tw from "@/util/resource/twMerge"
import { data } from "autoprefixer"
import React, { ReactNode } from "react"
interface ItemGroupProps {
	renderItem: (item: any) => ReactNode
	keyExtractor: (item: any) => any
	containerClassName?: string
	cardClassName?: string
	data: any[]
}
const ItemGroup = ({
	renderItem,
	keyExtractor,
	data,
	containerClassName,
	cardClassName,
}: ItemGroupProps) => {
	return (
		<div
			className={tw("w-full", containerClassName ? containerClassName : "")}
		>
			{data?.map((item) => {
				return (
					<div
						className={tw("grow", cardClassName ? cardClassName : "")}
						key={keyExtractor(item)}
					>
						{renderItem(item)}
					</div>
				)
			})}
		</div>
	)
}

export default ItemGroup
