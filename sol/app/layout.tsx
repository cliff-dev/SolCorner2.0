import DeployButton from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import { Providers } from './providers';
import Link from "next/link";
import "./globals.css";
import ConditionalNavbar from '@/components/ConditionalNavbar';
import ConditionalFooter from '@/components/ConditionalFooter';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Solcorner",
  description: "Buy and sell everything using Solana blockchain",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <Providers> 
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main className="min-h-screen flex flex-col items-center">
              <div className="flex-1 w-full flex flex-col gap-20 items-center">
               
                <ConditionalNavbar />
                
               
               
                <div className="flex flex-col gap-20 max-w-5xl p-5">
                  {children}
                </div>

                
                <ConditionalFooter />
              </div>
            </main>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
