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
	AWSIcon,
	AzureIcon,
	CICDIcon,
	GCPIcon,
	RabbitMQIcon,
	JiraIcon,
	TrelloIcon,
	NotionIcon,
	SlackIcon,
	ClickupIcon,
	JavascriptIcon,
	TypescriptIcon,
	PythonIcon,
	JavaIcon,
	SqlIcon,
	PHPIcon,
	CIcon,
	HTMLIcon,
	ProblemSolvingIcon,
	CriticalThinkingIcon,
} from "@/components/icons";

import {
	Braces,
	Brush,
	Clock,
	Cloud,
	CloudCog,
	Crown,
	GitBranch,
	HandshakeIcon,
	HashIcon as Html,
	MessageCircle,
	Plug,
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
	{ name: "CI/CD", icon: <CICDIcon /> },
	{ name: "AWS", icon: <AWSIcon /> },
	{ name: "Azure", icon: <AzureIcon /> },
	{ name: "GCP", icon: <GCPIcon /> },
	{ name: "RabbitMQ", icon: <RabbitMQIcon /> },
	{ name: "Jira", icon: <JiraIcon /> },
	{ name: "Trello", icon: <TrelloIcon /> },
	{ name: "Notion", icon: <NotionIcon /> },
	{ name: "Slack", icon: <SlackIcon /> },
	{ name: "ClickUp", icon: <ClickupIcon /> },
];

export const languages = [
	{ name: "Javascript", icon: <JavascriptIcon /> },
	{ name: "Typescript", icon: <TypescriptIcon /> },
	{ name: "Python", icon: <PythonIcon /> },
	{ name: "Java", icon: <JavaIcon /> },
	{ name: "SQL", icon: <SqlIcon /> },
	{ name: "PHP", icon: <PHPIcon /> },
	{ name: "C / C++", icon: <CIcon /> },
	{ name: "HTML", icon: <HTMLIcon /> },
];

export const softskills = [
	{ name: "Communication", icon: <MessageCircle className="h-5 w-5" /> },
	{ name: "Teamwork", icon: <HandshakeIcon className="h-5 w-5" /> },
	{ name: "Problem Solving", icon: <ProblemSolvingIcon /> },
	{ name: "Time Management", icon: <Clock className="h-5 w-5" /> },
	{ name: "Adaptability", icon: <Plug className="h-5 w-5" /> },
	{ name: "Creativity", icon: <Brush className="h-5 w-5" /> },
	{ name: "Leadership", icon: <Crown className="h-5 w-5" /> },
	{ name: "Critical Thinking", icon: <CriticalThinkingIcon /> },
];
