import type { Metadata } from "next";
import { Inter, DM_Serif_Display, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  weight: "400",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prince Raj | Blockchain & AI Systems Engineer",
  description:
    "Architecting autonomous systems at the intersection of AI and Blockchain",
  openGraph: {
    title: "Prince Raj | Blockchain & AI Systems Engineer",
    description:
      "Architecting autonomous systems at the intersection of AI and Blockchain",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${dmSerif.variable} ${ibmPlexMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
