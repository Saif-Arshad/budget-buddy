import type { Metadata } from "next";
import "@/app/globals.css";
import  { Toaster } from 'react-hot-toast';
import {
  ClerkProvider
} from '@clerk/nextjs'

import {Providers} from '@/store/ReduxProvider'


export const metadata: Metadata = {
  title: "Budget Buddy",
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
            <Toaster
            position="top-left"
            />
        {children}
        </Providers>
        </ClerkProvider>
        
        </body>
    </html>
  );
}