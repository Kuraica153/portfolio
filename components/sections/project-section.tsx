import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import kaiberai from "@/public/kaiber-ai.png";
import mixedinkey from "@/public/mixedinkey.png";
import onloop from "@/public/onloop.png";
import heritagecookbook from "@/public/heritage-cookbook.png";
import portfolio from "@/public/portfolio.png";

export const ProjectSection = () => {
	return (
		<section id="projects" className="py-20">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<div className="inline-block px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-medium mb-2">
						Portfolio
					</div>
					<h2 className="text-4xl font-bold mb-4">My Digital Masterpieces</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Projects that survived my debugging sessions
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					<ProjectCard
						title="Kaiber AI"
						description="An AI-powered app that generates stunning images from text prompts. It uses advanced machine learning algorithms to create unique and visually appealing artwork."
						tags={[
							"React",
							"Node.js",
							"Express",
							"MongoDB",
							"AWS",
							"Betterstack",
							"Typescript",
							"Tanstack Query",
						]}
						image={kaiberai}
						liveUrl="https://kaiber.ai/"
					/>
					<ProjectCard
						title="Mixed in key"
						description="A web page promoting a music software that helps DJs and producers create harmonic mixes. The page is designed to be visually appealing and user-friendly, with a focus on showcasing the software's features and benefits."
						tags={["Wordpress", "MySQL", "Bootstrap", "PHP"]}
						image={mixedinkey}
						liveUrl="https://mixedinkey.com/"
					/>
					<ProjectCard
						title="Onloop"
						description="A web platform that help to keep track of the health condition of child cancer survivors and study the impact of their treatment on their health. The platform is designed to be user-friendly and accessible, with a focus on providing reminders of their upcoming screening tests."
						tags={[
							"Wordpress",
							"MySQL",
							"Node.js",
							"Express",
							"JavaScript",
							"PHP",
							"Azure",
						]}
						image={onloop}
						liveUrl="https://dev.onloop.ca/"
					/>
					<ProjectCard
						title="Heritage cookbook"
						description="A web platform that allows users to create and share their own cookbooks, preserving family recipes and traditions. The platform is designed to be user-friendly and visually appealing, with a focus on showcasing the beauty of home-cooked meals."
						tags={[
							"React",
							"MongoDB",
							"Node.js",
							"Feather.js",
							"JavaScript",
							"Docker",
						]}
						image={heritagecookbook}
						liveUrl="https://heritagecookbook.com/"
					/>
					<ProjectCard
						title="Portfolio"
						description="My personal portfolio website, showcasing my skills, projects, and experience. The website is designed to be visually appealing and user-friendly, with a focus on highlighting my work and greate sense of humor."
						tags={["Next.js", "Tailwind CSS", "Typescript", "Shadcn"]}
						image={portfolio}
						liveUrl="https://kuraica.com"
						githubUrl="https://github.com/kuraica153/portfolio"
					/>
				</div>

				{/* <div className="text-center mt-12">
					<Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition-opacity">
						See More Projects <ArrowRight className="ml-2 h-4 w-4" />
					</Button>
				</div> */}
			</div>
		</section>
	);
};
