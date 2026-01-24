import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AdminHeader } from "@/components/admin/admin-header";
import { formatDistanceToNow } from "date-fns";

// Force dynamic rendering to always fetch fresh data
export const dynamic = "force-dynamic";

export default async function MessagesPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/admin/login");
  }

  const messages = await prisma.message.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-background">
      <AdminHeader user={session.user} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Messages</h1>
          <p className="text-muted-foreground">
            All messages from your contact form
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Inbox</CardTitle>
            <CardDescription>
              {messages.length} message{messages.length !== 1 ? "s" : ""} total
            </CardDescription>
          </CardHeader>
          <CardContent>
            {messages.length === 0 ? (
              <p className="text-muted-foreground text-center py-8">
                No messages yet. They will appear here when someone contacts you.
              </p>
            ) : (
              <div className="space-y-2">
                {messages.map((message) => (
                  <Link
                    key={message.id}
                    href={`/admin/messages/${message.id}`}
                    className="block p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          {!message.read && (
                            <span className="w-2 h-2 rounded-full bg-purple-600 flex-shrink-0" />
                          )}
                          <p className={`font-medium truncate ${!message.read ? "text-foreground" : "text-muted-foreground"}`}>
                            {message.name}
                          </p>
                          <span className="text-muted-foreground">·</span>
                          <p className="text-sm text-muted-foreground truncate">
                            {message.email}
                          </p>
                        </div>
                        <p className={`text-sm truncate mb-1 ${!message.read ? "font-medium" : ""}`}>
                          {message.subject}
                        </p>
                        <p className="text-sm text-muted-foreground truncate">
                          {message.message}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2 flex-shrink-0">
                        <span className="text-xs text-muted-foreground whitespace-nowrap">
                          {formatDistanceToNow(new Date(message.createdAt), { addSuffix: true })}
                        </span>
                        {!message.read && (
                          <Badge variant="secondary" className="bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                            New
                          </Badge>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
