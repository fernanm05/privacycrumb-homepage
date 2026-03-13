import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "PrivacyCrumb — Build and Manage AI-Driven Agentic Workflows",
  description: "Empower your technical teams to create, simulate and manage AI-driven workflows visually. PrivacyCrumb provides an intuitive platform for developing and testing agentic systems.",
  icons: {
    icon: "/Privacy-new-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-white dark:bg-neutral-950 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        <ClientBody>
          {children}
        </ClientBody>
      </body>
    </html>
  );
}
