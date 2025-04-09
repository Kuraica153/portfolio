import {
	FastapiIcon,
	NodeIcon,
	NextjsIcon,
	ReactIcon,
	TailwindIcon,
	ShadcnIcon,
	AngularIcon,
	BootstrapIcon,
	SpringbootIcon,
	FeatherjsIcon,
	DjangoIcon,
	LaravelIcon,
	DockerIcon,
	ExpressIcon,
	PostgresqlIcon,
	MysqlIcon,
	SqliteIcon,
	MsqlIcon,
	MongodbIcon,
	FirebaseIcon,
	SupabaseIcon,
} from "@/components/icons";
import {
	Braces,
	Cloud,
	Cog,
	GitBranch,
	HashIcon as Html,
	ServerCrash,
	Table,
	TableProperties,
} from "lucide-react";

export const frontend = [
	{ name: "Next.js", icon: <NextjsIcon /> },
	{ name: "React", icon: <ReactIcon /> },
	{
		name: "Tailwind CSS",
		icon: <TailwindIcon />,
	},
	{ name: "Shadcn", icon: <ShadcnIcon /> },
	{ name: "Angular", icon: <AngularIcon /> },
	{
		name: "Bootstrap",
		icon: <BootstrapIcon />,
	},
];

export const backend = [
	{ name: "Node.js", icon: <NodeIcon /> },
	{
		name: "Express",
		icon: <ExpressIcon />,
	},
	{ name: "FastApi", icon: <FastapiIcon /> },
	{ name: "Spring boot", icon: <SpringbootIcon /> },
	{ name: "Feather.js", icon: <FeatherjsIcon /> },
	{ name: "Django", icon: <DjangoIcon /> },
	{ name: "Laravel", icon: <LaravelIcon /> },
];

export const database = [
	{ name: "PostgreSQL", icon: <PostgresqlIcon /> },
	{ name: "MySQL", icon: <MysqlIcon /> },
	{ name: "SQLite", icon: <SqliteIcon /> },
	{ name: "SQLServer", icon: <MsqlIcon /> },
	{
		name: "MongoDB",
		icon: <MongodbIcon />,
	},
	{ name: "Firebase", icon: <FirebaseIcon /> },
	{ name: "Supabase", icon: <SupabaseIcon /> },
];

export const devops = [
	{ name: "Git", icon: <GitBranch className="h-5 w-5" /> },
	{ name: "Docker", icon: <DockerIcon /> },
	{ name: "CI/CD", icon: <Cog className="h-5 w-5" /> },
	{ name: "AWS", icon: <Cloud className="h-5 w-5" /> },
	{ name: "Azure", icon: <Cloud className="h-5 w-5" /> },
	{ name: "GCP", icon: <Cloud className="h-5 w-5" /> },
	{ name: "RabbitMQ", icon: <Cloud className="h-5 w-5" /> },
	{ name: "Jira", icon: <Cloud className="h-5 w-5" /> },
	{ name: "Trello", icon: <Cloud className="h-5 w-5" /> },
	{ name: "Notion", icon: <Cloud className="h-5 w-5" /> },
	{ name: "Slack", icon: <Cloud className="h-5 w-5" /> },
	{ name: "ClickUp", icon: <Cloud className="h-5 w-5" /> },
];

export const languages = [
	{ name: "Javascript", icon: <Braces className="h-5 w-5" /> },
	{ name: "Typescript", icon: <Braces className="h-5 w-5" /> },
	{ name: "Python", icon: <Braces className="h-5 w-5" /> },
	{ name: "Java", icon: <Braces className="h-5 w-5" /> },
	{ name: "SQL", icon: <Braces className="h-5 w-5" /> },
	{ name: "PHP", icon: <Braces className="h-5 w-5" /> },
	{ name: "C++", icon: <Braces className="h-5 w-5" /> },
	{ name: "HTML", icon: <Html className="h-5 w-5" /> },
];

export const softskills = [
	{ name: "Communication", icon: <Braces className="h-5 w-5" /> },
	{ name: "Teamwork", icon: <Braces className="h-5 w-5" /> },
	{ name: "Problem Solving", icon: <Braces className="h-5 w-5" /> },
	{ name: "Time Management", icon: <Braces className="h-5 w-5" /> },
	{ name: "Adaptability", icon: <Braces className="h-5 w-5" /> },
	{ name: "Creativity", icon: <Braces className="h-5 w-5" /> },
	{ name: "Leadership", icon: <Braces className="h-5 w-5" /> },
	{ name: "Critical Thinking", icon: <Braces className="h-5 w-5" /> },
	{ name: "Collaboration", icon: <Braces className="h-5 w-5" /> },
	{ name: "Conflict Resolution", icon: <Braces className="h-5 w-5" /> },
	{ name: "Negotiation", icon: <Braces className="h-5 w-5" /> },
	{ name: "Emotional Intelligence", icon: <Braces className="h-5 w-5" /> },
];
