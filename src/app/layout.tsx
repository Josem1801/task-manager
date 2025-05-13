import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";

import { ReduxProvider } from "@/shared/providers/store.provider";
import ThemeProvider from "@/shared/providers/theme.provider";
import ThemeRegistry from "@/shared/providers/theme.registry";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Task Manager",
  description: "Organize your tasks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ReduxProvider>
          <ThemeRegistry>
            <ThemeProvider>{children}</ThemeProvider>
          </ThemeRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}
