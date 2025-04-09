"use client";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	// State to track if the component has mounted
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);
	// If the component hasn't mounted yet, return null to avoid flickering
	if (!mounted) {
		return null;
	}
	return (
		<ThemeProvider attribute="class" defaultTheme="system">
			{children}
		</ThemeProvider>
	);
}
