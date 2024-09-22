import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar, { SidebarItem } from "@/components/Layout/Sidebar";
import "./globals.css";
import { BarChart3, LayoutDashboard, Settings } from "lucide-react";
import { getSession } from "@/lib/dal";
import { useEffect } from "react";
import { cookies } from "next/headers";
import EmployeeSidebar from "@/components/Layout/Sidebar/employee-sidebar";
export const metadata: Metadata = {
  title: {
    default: "Projeto Teste",
    template: "%s | Gustavo",
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isLogged = getSession();
  return (
    <html lang="pt-BR">
      <body>
        <AppRouterCacheProvider>
          <main className="App">
            {isLogged && <EmployeeSidebar />}
            <div className="w-full">{children}</div>
          </main>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
