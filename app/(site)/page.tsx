"use client";

import { useState, useEffect } from "react";

import { HeroSection } from "@/components/sections/hero-section";
import { Header } from "@/components/header";
import { ProjectSection } from "@/components/sections/project-section";
import { SkillSection } from "@/components/sections/skill-section";
import { FactSection } from "@/components/sections/fact-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
	const [mounted, setMounted] = useState(false);
	const [activeSection, setActiveSection] = useState("home");

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const sections = ["home", "projects", "skills", "contact"];
			const scrollPosition = window.scrollY + window.innerHeight / 2; // Adjusted to use the middle of the viewport

			// Special case for the "home" section when at the top of the page
			if (window.scrollY === 0) {
				setActiveSection("home");
				return; // Exit early since "home" is active
			}

			sections.forEach((section, index) => {
				const element = document.getElementById(section);
				if (element) {
					const offsetTop = element.offsetTop;
					const offsetHeight = element.offsetHeight;

					// Check if the scroll position is within the section
					if (
						scrollPosition >= offsetTop &&
						scrollPosition < offsetTop + offsetHeight
					) {
						setActiveSection(section);
					}

					// Special case for the last section ("contact")
					if (index === sections.length - 1 && scrollPosition >= offsetTop) {
						setActiveSection(section);
					}
				}
			});
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	if (!mounted) return null;

	return (
		<div className="min-h-screen bg-background transition-colors duration-300">
			<Header activeSection={activeSection} />

			<main>
				{/* Hero Section */}
				<HeroSection />

				{/* Projects Section */}
				<ProjectSection />

				{/* Skills Section */}
				<SkillSection />

				{/* Fun Facts Section */}
				<FactSection />

				{/* Contact Section */}
				<ContactSection />
			</main>

			<Footer />
		</div>
	);
}
