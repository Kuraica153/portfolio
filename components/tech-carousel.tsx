"use client";

import type React from "react";

import { useEffect, useState } from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

interface TechItemProps {
	name: string;
	icon: React.ReactNode;
}

interface TechCarouselProps {
	technologies: TechItemProps[];
	colorClass: string;
}

export function TechCarousel({ technologies, colorClass }: TechCarouselProps) {
	const [api, setApi] = useState<any>(null);
	const [current, setCurrent] = useState(0);
	const plugin = useRef(
		Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true })
	);

	// Group technologies into sets of 4
	const techGroups = technologies.reduce<TechItemProps[][]>(
		(groups, tech, index) => {
			const groupIndex = Math.floor(index / 4);
			if (!groups[groupIndex]) {
				groups[groupIndex] = [];
			}
			groups[groupIndex].push(tech);
			return groups;
		},
		[]
	);

	useEffect(() => {
		if (!api) return;

		const onSelect = () => {
			setCurrent(api.selectedScrollSnap());
		};

		api.on("select", onSelect);
		api.on("reInit", onSelect);

		return () => {
			api.off("select", onSelect);
			api.off("reInit", onSelect);
		};
	}, [api]);

	return (
		<div>
			<Carousel
				setApi={setApi}
				className="w-full"
				plugins={[plugin.current]}
				opts={{
					align: "start",
					loop: true,
				}}
			>
				<CarouselContent>
					{techGroups.map((group, groupIndex) => (
						<CarouselItem key={`group-${groupIndex}`} className="basis-full">
							<div className="grid grid-cols-2 gap-4">
								{group.map((tech) => (
									<div
										key={tech.name}
										className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
									>
										<div
											className={`w-10 h-10 rounded-lg ${colorClass} flex items-center justify-center`}
										>
											{tech.icon}
										</div>
										<span className="font-medium">{tech.name}</span>
									</div>
								))}
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>

			{/* Pagination indicators */}
			<div className="flex justify-center mt-4 gap-1">
				{techGroups.map((_, i) => (
					<div
						key={i}
						className={`w-2 h-2 rounded-full transition-colors ${
							i === current ? "bg-purple-500" : "bg-gray-300 dark:bg-gray-600"
						}`}
					/>
				))}
			</div>
		</div>
	);
}
