import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/components/AuthProvider";

export const metadata: Metadata = {
  title: "Aktivitus - Iform",
  description: "Personligt anpassat kostprogram",
  icons: {
    icon: "/images/aktivitus-blue-favicon.png",
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




