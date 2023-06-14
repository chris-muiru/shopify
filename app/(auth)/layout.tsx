"use client"
import { Inter } from "next/font/google"

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return <div>{children}</div>
}
