"use client"
import { Inter, Nunito, Roboto } from "next/font/google"

import "./globals.css"
import { QueryClient, QueryClientProvider } from "react-query"
const roboto = Roboto({ weight: "400", subsets: ["latin"] })
export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const queryClient = new QueryClient()
	return (
		<html lang="en">
			<head></head>
			<body className={roboto.className}>
				<QueryClientProvider client={queryClient}>
					{children}
				</QueryClientProvider>
			</body>
		</html>
	)
}
