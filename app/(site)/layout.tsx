import { Inter } from "next/font/google"
import MenuBar from "../layout/MenuBar"
import Footer from "../layout/Footer"

export default function SiteLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div>
			<MenuBar />
			{children}

			<Footer />
		</div>
	)
}
