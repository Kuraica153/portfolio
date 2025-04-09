"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle } from "lucide-react";

export function ContactForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate form submission
		setTimeout(() => {
			setIsSubmitting(false);
			setIsSubmitted(true);
		}, 1500);
	};

	if (isSubmitted) {
		return (
			<div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border text-center h-full flex flex-col items-center justify-center">
				<div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6">
					<CheckCircle className="h-8 w-8 text-green-600" />
				</div>
				<h3 className="text-2xl font-bold mb-2">
					{/* Message Sent! */}
					Just kidding!
				</h3>
				<p className="text-muted-foreground mb-6">
					The backend wasn't in the scope of this iteration. But feel free to
					reach me through email or any of the other contacts provided in the
					aside section.
					{/* I'll get back to you faster than I debug production issues. */}
				</p>
				<Button onClick={() => setIsSubmitted(false)} variant="outline">
					Send Another Message
				</Button>
			</div>
		);
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border"
		>
			<div className="space-y-6">
				<div>
					<label htmlFor="name" className="block text-sm font-medium mb-2">
						Name
					</label>
					<Input
						id="name"
						placeholder="Your name"
						required
						className="bg-background/50 border-border focus-visible:ring-purple-500"
					/>
				</div>
				<div>
					<label htmlFor="email" className="block text-sm font-medium mb-2">
						Email
					</label>
					<Input
						id="email"
						type="email"
						placeholder="your.email@example.com"
						required
						className="bg-background/50 border-border focus-visible:ring-purple-500"
					/>
				</div>
				<div>
					<label htmlFor="subject" className="block text-sm font-medium mb-2">
						Subject
					</label>
					<Input
						id="subject"
						placeholder="What's this about?"
						required
						className="bg-background/50 border-border focus-visible:ring-purple-500"
					/>
				</div>
				<div>
					<label htmlFor="message" className="block text-sm font-medium mb-2">
						Message
					</label>
					<Textarea
						id="message"
						placeholder="Tell me about your project, job opportunity, or favorite programming joke..."
						rows={5}
						required
						className="bg-background/50 border-border focus-visible:ring-purple-500"
					/>
				</div>
				<Button
					type="submit"
					className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition-opacity"
					disabled={isSubmitting}
				>
					{isSubmitting ? (
						<>
							Sending... <span className="ml-2 animate-spin">⚙️</span>
						</>
					) : (
						<>
							Send Message <Send className="ml-2 h-4 w-4" />
						</>
					)}
				</Button>
			</div>
		</form>
	);
}
