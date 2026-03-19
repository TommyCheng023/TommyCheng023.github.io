import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Xinyang Cheng",
  description: "Modern portfolio skeleton for Xinyang Cheng.",
  icons: {
    icon: "/legacy/images/cxy.png",
    shortcut: "/legacy/images/cxy.png",
    apple: "/legacy/images/cxy.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
