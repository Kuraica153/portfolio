import { SkillCard } from "@/components/skill-card";
import {
	frontend,
	backend,
	database,
	devops,
	languages,
	softskills,
} from "@/utils/skills/technologies";

export const SkillSection = () => {
	return (
		<section id="skills" className="py-20">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<div className="inline-block px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-medium mb-2">
						Expertise
					</div>
					<h2 className="text-4xl font-bold mb-4">Tech Superpowers</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Skills I've acquired through countless Stack Overflow visits
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
					<SkillCard
						title="Frontend Crafting"
						type="frontend"
						technologies={frontend}
					/>
					<SkillCard
						title="Backend Magic"
						type="backend"
						technologies={backend}
					/>
					<SkillCard
						title="Database Wizardry"
						type="database"
						technologies={database}
					/>
					<SkillCard
						title="DevOps & Tools"
						type="devops"
						technologies={devops}
					/>
					<SkillCard
						title="Ancient Languages"
						type="languages"
						technologies={languages}
					/>
					<SkillCard
						title="Soft Skills"
						type="softskills"
						technologies={softskills}
					/>
				</div>
			</div>
		</section>
	);
};
