import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Sidebar } from "@/components";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lik Hang",
  description: "My Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body>
          <main>{children}</main>
        </body>
      </ThemeProvider>
    </html>
  );
}
