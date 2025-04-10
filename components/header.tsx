import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, Moon, Sun } from "lucide-react";
import { SheetContent, SheetTrigger, Sheet } from "./ui/sheet";
import { useTheme } from "next-themes";

export const Header = ({ activeSection }: { activeSection: string }) => {
	const { setTheme, theme } = useTheme();

	const handleThemeChange = () => {
		const newTheme: string = theme === "dark" ? "light" : "dark";
		setTheme(newTheme);
	};

	return (
		<header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
			<div className="container mx-auto py-4 px-4 flex justify-between items-center">
				<div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
					<span className="inline-block">{"<"}</span>
					Christopher_Kuraica
					<span className="inline-block">{">"}</span>
				</div>

				<nav className="hidden md:flex gap-8">
					<Link
						href="#home"
						className={`transition-colors ${
							activeSection === "home"
								? "text-purple-600"
								: "text-muted-foreground hover:text-foreground"
						}`}
					>
						Home
					</Link>
					<Link
						href="#projects"
						className={`transition-colors ${
							activeSection === "projects"
								? "text-purple-600"
								: "text-muted-foreground hover:text-foreground"
						}`}
					>
						Projects
					</Link>
					<Link
						href="#skills"
						className={`transition-colors ${
							activeSection === "skills"
								? "text-purple-600"
								: "text-muted-foreground hover:text-foreground"
						}`}
					>
						Skills
					</Link>
					<Link
						href="#contact"
						className={`transition-colors ${
							activeSection === "contact"
								? "text-purple-600"
								: "text-muted-foreground hover:text-foreground"
						}`}
					>
						Contact
					</Link>
				</nav>

				<div className="flex items-center gap-4">
					<Button
						variant="ghost"
						size="icon"
						onClick={handleThemeChange}
						aria-label="Toggle theme"
					>
						{theme === "dark" ? (
							<Sun className="h-5 w-5" />
						) : (
							<Moon className="h-5 w-5" />
						)}
					</Button>

					<div className="md:hidden">
						<Sheet>
							<SheetTrigger asChild>
								<Button variant="ghost" size="icon">
									<Menu className="h-5 w-5" />
								</Button>
							</SheetTrigger>
							<SheetContent>
								<div className="flex flex-col gap-6 mt-10">
									<Link href="#home" className="text-lg font-medium">
										Home
									</Link>
									<Link href="#projects" className="text-lg font-medium">
										Projects
									</Link>
									<Link href="#skills" className="text-lg font-medium">
										Skills
									</Link>
									<Link href="#contact" className="text-lg font-medium">
										Contact
									</Link>
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</header>
	);
};
