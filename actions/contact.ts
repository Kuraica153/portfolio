"use server";

import { prisma } from "@/lib/prisma";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required").max(200),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000),
});

export type ContactFormState = {
  success: boolean;
  message: string;
  timestamp: number;
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
  values?: {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  };
};

export async function submitContactForm(
  prevState: ContactFormState | null,
  formData: FormData
): Promise<ContactFormState> {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  const validatedFields = contactFormSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Please fix the errors below.",
      timestamp: Date.now(),
      errors: validatedFields.error.flatten().fieldErrors,
      values: {
        name: rawData.name as string,
        email: rawData.email as string,
        subject: rawData.subject as string,
        message: rawData.message as string,
      },
    };
  }

  try {
    console.log("Creating message with data:", validatedFields.data);
    
    const newMessage = await prisma.message.create({
      data: {
        name: validatedFields.data.name,
        email: validatedFields.data.email,
        subject: validatedFields.data.subject,
        message: validatedFields.data.message,
      },
    });

    console.log("Message created successfully:", newMessage.id);

    return {
      success: true,
      message: "Your message has been sent successfully!",
      timestamp: Date.now(),
    };
  } catch (error) {
    console.error("Failed to save contact message:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
      timestamp: Date.now(),
    };
  }
}
