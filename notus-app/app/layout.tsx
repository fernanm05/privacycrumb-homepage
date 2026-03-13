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
  title: "PrivacyCrumb — Cookie Consent & Privacy Compliance Made Simple",
  description: "An all-in-one cookie compliance platform that helps businesses stay GDPR, CCPA, and LGPD compliant. Scan cookies, manage consent, and generate policies effortlessly.",
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
