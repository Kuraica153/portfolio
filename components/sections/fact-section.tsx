export const FactSection = () => {
	return (
		<section className="py-20">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<div className="inline-block px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-medium mb-2">
						The Real Me
					</div>
					<h2 className="text-4xl font-bold mb-4">Developer Confessions</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Things I'd never admit in a serious interview
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
					<div className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border hover:shadow-md transition-all">
						<div className="text-purple-600 text-4xl mb-4">☕</div>
						<h3 className="font-bold text-xl mb-2">Coffee Consumption</h3>
						<p className="text-muted-foreground">
							My blood type is now officially "Cold Brew+"
						</p>
					</div>
					<div className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border hover:shadow-md transition-all">
						<div className="text-purple-600 text-4xl mb-4">🐛</div>
						<h3 className="font-bold text-xl mb-2">Bug Naming</h3>
						<p className="text-muted-foreground">
							I name particularly stubborn bugs after my childhood enemies
						</p>
					</div>
					<div className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border hover:shadow-md transition-all">
						<div className="text-purple-600 text-4xl mb-4">🔍</div>
						<h3 className="font-bold text-xl mb-2">Search History</h3>
						<p className="text-muted-foreground">
							"How to center a div" appears at least weekly
						</p>
					</div>

					<div className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border hover:shadow-md transition-all">
						<div className="text-purple-600 text-4xl mb-4">💾</div>
						<h3 className="font-bold text-xl mb-2">Git Commits</h3>
						<p className="text-muted-foreground">
							My commit messages get increasingly desperate as the day goes on
						</p>
					</div>
					<div className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border hover:shadow-md transition-all">
						<div className="text-purple-600 text-4xl mb-4">🐥</div>
						<h3 className="font-bold text-xl mb-2">Rubber Duck</h3>
						<p className="text-muted-foreground">
							My rubber duck has heard things no therapist should ever have to
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
