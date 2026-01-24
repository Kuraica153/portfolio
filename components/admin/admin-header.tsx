"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LayoutDashboard, Mail, LogOut, User } from "lucide-react";

interface AdminHeaderProps {
  user: {
    id: string;
    name: string;
    email: string;
    image?: string | null;
  };
}

export function AdminHeader({ user }: AdminHeaderProps) {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push("/admin/login");
    router.refresh();
  };

  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <header className="border-b bg-card">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/admin" className="font-bold text-xl">
              Admin
            </Link>
            <nav className="hidden md:flex items-center gap-4">
              <Button variant="ghost" asChild>
                <Link href="/admin">
                  <LayoutDashboard className="h-4 w-4 mr-2" />
                  Dashboard
                </Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/admin/messages">
                  <Mail className="h-4 w-4 mr-2" />
                  Messages
                </Link>
              </Button>
            </nav>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={user.image || undefined} alt={user.name} />
                  <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuLabel>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild className="md:hidden">
                <Link href="/admin">
                  <LayoutDashboard className="h-4 w-4 mr-2" />
                  Dashboard
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="md:hidden">
                <Link href="/admin/messages">
                  <Mail className="h-4 w-4 mr-2" />
                  Messages
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="md:hidden" />
              <DropdownMenuItem onClick={handleSignOut}>
                <LogOut className="h-4 w-4 mr-2" />
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
