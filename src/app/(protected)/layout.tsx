import type { Metadata } from "next";
import "@/app/globals.css";
import AdminSideBar from "@/components/shared/SideBar";
import {
  ClerkProvider
} from '@clerk/nextjs'
import DashboardNavBar from "@/components/shared/DashboardNavBar";
import {Providers} from '@/store/ReduxProvider'



export const metadata: Metadata = {
  title: "Dashboard | Budget Buddy",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <ClerkProvider>
        <Providers>

    <AdminSideBar/>
    <div className="sm:ml-64">
      <DashboardNavBar/>
        {children}
</div>
</Providers>

        </ClerkProvider>
        
        </body>
    </html>
  );
}
