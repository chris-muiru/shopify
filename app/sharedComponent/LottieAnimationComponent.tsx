import React, { FC } from "react"
import Lottie from "react-lottie"
interface LottieProps {
	customSettings?: any
	animationData: any
}

const LottieAnimationComponent: FC<LottieProps> = ({
	customSettings,
	animationData,
}) => {
	const defaultSettings = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	}
	let settings = defaultSettings ?? customSettings
	return (
		<div className="hidden md:block relative">
			<Lottie options={settings} height={500} width={500} />
		</div>
	)
}

export default LottieAnimationComponent
