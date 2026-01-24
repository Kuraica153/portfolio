"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { revalidatePath } from "next/cache";

async function getSession() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return session;
}

export async function getMessages() {
  const session = await getSession();
  
  if (!session) {
    throw new Error("Unauthorized");
  }

  const messages = await prisma.message.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return messages;
}

export async function getMessage(id: string) {
  const session = await getSession();
  
  if (!session) {
    throw new Error("Unauthorized");
  }

  const message = await prisma.message.findUnique({
    where: { id },
  });

  return message;
}

export async function markMessageAsRead(id: string) {
  const session = await getSession();
  
  if (!session) {
    throw new Error("Unauthorized");
  }

  await prisma.message.update({
    where: { id },
    data: { read: true },
  });

  revalidatePath("/admin/messages");
}

export async function markMessageAsUnread(id: string) {
  const session = await getSession();
  
  if (!session) {
    throw new Error("Unauthorized");
  }

  await prisma.message.update({
    where: { id },
    data: { read: false },
  });

  revalidatePath("/admin/messages");
}

export async function deleteMessage(id: string) {
  const session = await getSession();
  
  if (!session) {
    throw new Error("Unauthorized");
  }

  await prisma.message.delete({
    where: { id },
  });

  revalidatePath("/admin/messages");
}

export async function getUnreadCount() {
  const session = await getSession();
  
  if (!session) {
    return 0;
  }

  const count = await prisma.message.count({
    where: { read: false },
  });

  return count;
}
