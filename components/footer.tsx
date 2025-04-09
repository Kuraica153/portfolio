import { Code, Github, Instagram, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
	return (
		<footer className="border-t border-border py-10">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-4 md:mb-0">
						<span className="inline-block">{"<"}</span>
						Christopher_Kuraica
						<span className="inline-block">{">"}</span>
					</div>
					<div className="flex gap-6">
						<a
							href="mailto:kuraica.h.christopher@gmail.com"
							className="text-muted-foreground hover:text-purple-600 transition-colors"
						>
							<Mail className="h-5 w-5" />
						</a>
						<a
							href="https://linkedin.com/in/kuraica"
							target="_blank"
							className="text-muted-foreground hover:text-purple-600 transition-colors"
						>
							<Linkedin className="h-5 w-5" />
						</a>
						<a
							href="https://github.com/kuraica153"
							target="_blank"
							className="text-muted-foreground hover:text-purple-600 transition-colors"
						>
							<Github className="h-5 w-5" />
						</a>
						<a
							href="https://www.instagram.com/kuraica/"
							target="_blank"
							className="text-muted-foreground hover:text-purple-600 transition-colors"
						>
							<Instagram className="h-5 w-5" />
						</a>
						<a
							href="#"
							className="text-muted-foreground hover:text-purple-600 transition-colors"
						>
							<Code className="h-5 w-5" />
						</a>
					</div>
				</div>
				<div className="text-center mt-6 text-muted-foreground">
					<p>
						© {new Date().getFullYear()} kuraica.com. All rights reserved. Made
						with ☕ and questionable life choices.
					</p>
				</div>
			</div>
		</footer>
	);
};
