import type React from "react";
import {
	Layers,
	Code,
	Database,
	Server,
	Languages,
	SparkleIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TechCarousel } from "./tech-carousel";

interface TechItemProps {
	name: string;
	icon: React.ReactNode;
}

interface SkillCardProps {
	title: string;
	type:
		| "frontend"
		| "backend"
		| "database"
		| "devops"
		| "languages"
		| "softskills";
	technologies: TechItemProps[];
}

export function SkillCard({ title, type, technologies }: SkillCardProps) {
	const getIcon = () => {
		switch (type) {
			case "frontend":
				return <Layers className="h-6 w-6 text-amber-500" />;
			case "backend":
				return <Code className="h-6 w-6 text-stone-600" />;
			case "database":
				return <Database className="h-6 w-6 text-emerald-600" />;
			case "devops":
				return <Server className="h-6 w-6 text-purple-600" />;
			case "languages":
				return <Languages className="h-6 w-6 text-pink-600" />;
			case "softskills":
				return <SparkleIcon className="h-6 w-6 text-blue-600" />;
			default:
				return <Layers className="h-6 w-6" />;
		}
	};

	const getColorClass = () => {
		switch (type) {
			case "frontend":
				return "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400";
			case "backend":
				return "bg-stone-100 text-stone-600 dark:bg-stone-900/30 dark:text-stone-400";
			case "database":
				return "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400";
			case "devops":
				return "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400";
			default:
				return "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400";
		}
	};

	return (
		<Card className="overflow-hidden transition-all hover:shadow-lg border-border bg-card/50 backdrop-blur-sm rounded-2xl">
			<CardHeader className="pb-3">
				<div className="flex items-center gap-3">
					{getIcon()}
					<h3 className="text-xl font-bold">{title}</h3>
				</div>
			</CardHeader>
			<CardContent>
				<TechCarousel
					technologies={technologies}
					colorClass={getColorClass()}
				/>
			</CardContent>
		</Card>
	);
}
