import React, { FC, ReactNode } from "react"
import Slider, { Settings } from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import SectionWrapper from "./SectionWrapper"
import tw from "@/util/resource/twMerge"

interface customSliderProps {
	settings?: Settings
	renderItem: (item: any) => React.JSX.Element
	data: any[]
	containerClassName?: string
	cardClassName?: string
	keyExtractor: (item: any) => any
}

let defaultSetting = {}

const CustomSlider = ({
	settings,
	renderItem,
	data,
	containerClassName,
	cardClassName,
	keyExtractor,
}: customSliderProps) => {
	let sliderSettings = settings ?? defaultSetting
	return (
		<Slider
			{...sliderSettings}
			className={tw("my-8", containerClassName ?? "")}
		>
			{data?.map((item) => {
				return (
					<div className={`${cardClassName}`} key={keyExtractor(item)}>
						{renderItem(item)}
					</div>
				)
			})}
		</Slider>
	)
}

export default CustomSlider
