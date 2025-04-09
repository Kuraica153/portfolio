import { Github, Instagram, Linkedin, Mail, Zap } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export const ContactSection = () => {
	return (
		<section id="contact" className="py-20">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<div className="inline-block px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-medium mb-2">
						Get In Touch
					</div>
					<h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Reach out if you need a developer or just want to talk about
						semicolons
					</p>
				</div>

				<div className="flex flex-col md:flex-row gap-10 max-w-4xl mx-auto">
					<div className="md:w-1/2">
						<ContactForm />
					</div>
					<div className="md:w-1/2">
						<div className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border h-full">
							<h3 className="font-bold text-2xl mb-6 text-foreground">
								Other Ways to Reach Me
							</h3>
							<div className="space-y-6">
								<div className="flex items-center">
									<div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-4">
										<Mail className="h-5 w-5 text-purple-600" />
									</div>
									<a
										href="mailto:kuraica.h.christopher@gmail.com"
										target="_blank"
										className="text-purple-600 hover:underline"
									>
										kuraica.h.christopher@gmail.com
									</a>
								</div>
								<div className="flex items-center">
									<div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-4">
										<Linkedin className="h-5 w-5 text-purple-600" />
									</div>
									<a
										href="https://linkedin.com/in/kuraica"
										target="_blank"
										className="text-purple-600 hover:underline"
									>
										linkedin.com/in/kuraica
									</a>
								</div>
								<div className="flex items-center">
									<div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-4">
										<Github className="h-5 w-5 text-purple-600" />
									</div>
									<a
										href="https://github.com/kuraica153"
										target="_blank"
										className="text-purple-600 hover:underline"
									>
										github.com/kuraica153
									</a>
								</div>
								<div className="flex items-center">
									<div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-4">
										<Instagram className="h-5 w-5 text-purple-600" />
									</div>
									<a
										href="https://instagram.com/kuraica15"
										target="_blank"
										className="text-purple-600 hover:underline"
									>
										instagram.com/kuraica15
									</a>
								</div>
							</div>

							<div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
								<h4 className="font-bold text-lg mb-2 flex items-center">
									<Zap className="h-5 w-5 text-yellow-500 mr-2" />
									Fun Fact
								</h4>
								<p className="text-muted-foreground">
									I once fixed a critical bug while sleepwalking. My
									subconscious writes better code than I do.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
