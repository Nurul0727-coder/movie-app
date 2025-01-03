
import { Header } from "@/components/header";
import { Footer } from "@/components/Footer";
import "./globals.css";
import { Geist_Mono } from "next/font/google";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header /> 
        <main>{children}</main> 
        <Footer /> 
      </body>
    </html>
  );
}
