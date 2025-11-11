import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/components/AuthProvider";

export const metadata: Metadata = {
  title: "iForm - Kostprogram",
  description: "Personligt anpassat kostprogram",
  icons: {
    icon: "/images/Aktivitus-Blue.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}




