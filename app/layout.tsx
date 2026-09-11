import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "LLD Arena",
    template: "%s | LLD Arena",
  },
  description:
    "Practice real-world Low-Level Design problems, submit your designs, and improve through structured feedback.",
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