"use client";

import { useActionState, useId } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle } from "lucide-react";
import { submitContactForm, type ContactFormState } from "@/actions/contact";

export function ContactForm() {
	const formId = useId();
	const [state, formAction, isPending] = useActionState<ContactFormState | null, FormData>(
		submitContactForm,
		null
	);

	// Generate a unique key based on timestamp to force re-render with preserved values on error
	const formKey = state?.timestamp ? `${formId}-${state.timestamp}` : formId;

	if (state?.success) {
		return (
			<div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border text-center h-full flex flex-col items-center justify-center">
				<div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6">
					<CheckCircle className="h-8 w-8 text-green-600" />
				</div>
				<h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
				<p className="text-muted-foreground mb-6">
					Thanks for reaching out! I'll get back to you as soon as possible.
				</p>
				<Button
					onClick={() => window.location.reload()}
					variant="outline"
				>
					Send Another Message
				</Button>
			</div>
		);
	}

	return (
		<form
			key={formKey}
			action={formAction}
			className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border"
		>
			<div className="space-y-6">
				{state?.message && !state.success && (
					<div className="p-3 rounded-md bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm">
						{state.message}
					</div>
				)}
				<div>
					<label htmlFor="name" className="block text-sm font-medium mb-2">
						Name
					</label>
					<Input
						id="name"
						name="name"
						placeholder="Your name"
						required
						defaultValue={state?.values?.name || ""}
						className="bg-background/50 border-border focus-visible:ring-purple-500"
					/>
					{state?.errors?.name && (
						<p className="text-red-500 text-sm mt-1">{state.errors.name[0]}</p>
					)}
				</div>
				<div>
					<label htmlFor="email" className="block text-sm font-medium mb-2">
						Email
					</label>
					<Input
						id="email"
						name="email"
						type="email"
						placeholder="your.email@example.com"
						required
						defaultValue={state?.values?.email || ""}
						className="bg-background/50 border-border focus-visible:ring-purple-500"
					/>
					{state?.errors?.email && (
						<p className="text-red-500 text-sm mt-1">{state.errors.email[0]}</p>
					)}
				</div>
				<div>
					<label htmlFor="subject" className="block text-sm font-medium mb-2">
						Subject
					</label>
					<Input
						id="subject"
						name="subject"
						placeholder="What's this about?"
						required
						defaultValue={state?.values?.subject || ""}
						className="bg-background/50 border-border focus-visible:ring-purple-500"
					/>
					{state?.errors?.subject && (
						<p className="text-red-500 text-sm mt-1">{state.errors.subject[0]}</p>
					)}
				</div>
				<div>
					<label htmlFor="message" className="block text-sm font-medium mb-2">
						Message
					</label>
					<Textarea
						id="message"
						name="message"
						placeholder="Tell me about your project, job opportunity, or favorite programming joke..."
						rows={5}
						required
						defaultValue={state?.values?.message || ""}
						className="bg-background/50 border-border focus-visible:ring-purple-500"
					/>
					{state?.errors?.message && (
						<p className="text-red-500 text-sm mt-1">{state.errors.message[0]}</p>
					)}
				</div>
				<Button
					type="submit"
					className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition-opacity"
					disabled={isPending}
				>
					{isPending ? (
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
