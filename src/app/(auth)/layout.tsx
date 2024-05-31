import type { Metadata } from "next";
import "@/app/globals.css";

import {
  ClerkProvider
} from '@clerk/nextjs'


export const metadata: Metadata = {
  title: "Login Budget Buddy",
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

        {children}
        </ClerkProvider>
        
        </body>
    </html>
  );
}
