import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProjectCardProps {
	title: string;
	description: string;
	tags: string[];
	image: StaticImageData | string;
	githubUrl?: string;
	liveUrl?: string;
}

export function ProjectCard({
	title,
	description,
	tags,
	image,
	githubUrl,
	liveUrl,
}: ProjectCardProps) {
	return (
		<Card className="overflow-hidden transition-all hover:shadow-lg border-border bg-card/50 backdrop-blur-sm rounded-2xl">
			<div className="relative h-48 w-full overflow-hidden">
				<Image
					src={image || "/placeholder.svg"}
					alt={title}
					fill
					className="object-cover transition-transform hover:scale-105"
				/>
			</div>
			<CardHeader>
				<h3 className="text-xl font-bold">{title}</h3>
			</CardHeader>
			<CardContent>
				<p className="text-muted-foreground mb-4">{description}</p>
				<div className="flex flex-wrap gap-2">
					{tags.map((tag) => (
						<Badge
							key={tag}
							variant="outline"
							className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
						>
							{tag}
						</Badge>
					))}
				</div>
			</CardContent>
			{(githubUrl || liveUrl) && (
				<CardFooter className="flex gap-4">
					{githubUrl && (
						<Link
							href={githubUrl}
							className="flex items-center text-sm text-purple-600 hover:text-purple-800"
						>
							<Github className="mr-1 h-4 w-4" /> Code
						</Link>
					)}
					{liveUrl && (
						<Link
							href={liveUrl}
							className="flex items-center text-sm text-purple-600 hover:text-purple-800"
						>
							<ExternalLink className="mr-1 h-4 w-4" /> Live Demo
						</Link>
					)}
				</CardFooter>
			)}
		</Card>
	);
}
