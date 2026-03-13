"use client";
import ThemeProvider from "./components/ThemeProvider";

export default function ClientBody({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}
