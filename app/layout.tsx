import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jin — the Fun Lover",
  description:
    "Hej, I'm Jin — a fun lover based in Göteborg. Say hello, share an idea, or invite me to something fun.",
  applicationName: "Jin",
  appleWebApp: { title: "Jin", capable: true, statusBarStyle: "default" },
};

export const viewport: Viewport = {
  themeColor: "#f0603c",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
