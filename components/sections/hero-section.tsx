import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import image from "@/public/image.png";

export const HeroSection = () => {
	const handleDownloadResume = () => {
		// Open cv in a new tab
		window.open(
			"https://drive.google.com/file/d/128PxC0xrhuN2ZUdvC7RMM7PElR5qiAtX/view?usp=sharing",
			"_blank"
		);
	};

	return (
		<section id="home" className="pt-32 pb-20 px-4">
			<div className="container mx-auto">
				<div className="flex flex-col md:flex-row items-center gap-10">
					<div className="md:w-1/2 space-y-6">
						<div className="inline-block px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-medium mb-2">
							Full Stack Developer
						</div>
						<h1 className="text-5xl md:text-6xl font-bold mb-4">
							I turn{" "}
							<span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
								coffee
							</span>{" "}
							into{" "}
							<span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500">
								code
							</span>
						</h1>
						<p className="text-xl text-muted-foreground">
							Full stack developer by day, debugging ninja by night. I make
							computers do the thing with the stuff.
						</p>
						<div className="flex gap-4 pt-4">
							<Button
								className="bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition-opacity"
								onClick={() => {
									window.location.href = "#projects";
								}}
							>
								View Projects <ArrowRight className="ml-2 h-4 w-4" />
							</Button>
							<Button variant="outline" onClick={handleDownloadResume}>
								Download Resume
							</Button>
						</div>
					</div>
					<div className="md:w-1/2 relative mt-10 md:mt-0">
						<div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
							<div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 blur-3xl opacity-20 animate-pulse"></div>
							<div className="absolute inset-0 flex items-center justify-center">
								<div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 relative overflow-hidden">
									<div className="absolute inset-0 flex items-center justify-center text-white text-9xl font-bold opacity-80">
										<Image
											src={image}
											alt="Just me"
											className="rounded-full object-cover w-full h-full"
										/>
									</div>
									<div className="absolute bottom-0 w-full bg-black/30 backdrop-blur-sm p-5 text-center text-white">
										Professional Googler
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
