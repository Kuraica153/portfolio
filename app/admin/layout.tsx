import { ThemeProvider } from "next-themes";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <div className="min-h-screen bg-background">
        {children}
      </div>
    </ThemeProvider>
  );
}
