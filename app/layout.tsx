import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
	title: "Christopher Kuraica",
	description: "Christopher Kuraica portfolio showcasing my work and skills.",
	keywords: [
		"Christopher Kuraica",
		"portfolio",
		"developer",
		"projects",
		"skills",
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
