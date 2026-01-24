import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect, notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AdminHeader } from "@/components/admin/admin-header";
import { MessageActions } from "@/components/admin/message-actions";
import { ArrowLeft, Mail, Calendar, User } from "lucide-react";
import { format } from "date-fns";

// Force dynamic rendering to always fetch fresh data
export const dynamic = "force-dynamic";

interface MessagePageProps {
  params: Promise<{ id: string }>;
}

export default async function MessagePage({ params }: MessagePageProps) {
  const { id } = await params;
  
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/admin/login");
  }

  const message = await prisma.message.findUnique({
    where: { id },
  });

  if (!message) {
    notFound();
  }

  // Mark as read when viewing
  if (!message.read) {
    await prisma.message.update({
      where: { id },
      data: { read: true },
    });
  }

  return (
    <div className="min-h-screen bg-background">
      <AdminHeader user={session.user} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/admin/messages">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Messages
            </Link>
          </Button>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <CardTitle className="text-2xl">{message.subject}</CardTitle>
                  {!message.read && (
                    <Badge variant="secondary" className="bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                      New
                    </Badge>
                  )}
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {message.name}
                  </div>
                  <div className="flex items-center gap-1">
                    <Mail className="h-4 w-4" />
                    <a href={`mailto:${message.email}`} className="hover:underline text-purple-600">
                      {message.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {format(new Date(message.createdAt), "PPP 'at' p")}
                  </div>
                </div>
              </div>
              <MessageActions messageId={message.id} isRead={message.read} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="prose dark:prose-invert max-w-none">
              <p className="whitespace-pre-wrap">{message.message}</p>
            </div>
            
            <div className="mt-8 pt-6 border-t">
              <Button asChild>
                <a href={`mailto:${message.email}?subject=Re: ${encodeURIComponent(message.subject)}`}>
                  <Mail className="h-4 w-4 mr-2" />
                  Reply via Email
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
