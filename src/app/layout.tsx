import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Nipashi Gift Store – Coz Your Loved Ones Deserve the Best",
  description:
    "Nipashi Gift Store in Mangaluru – personalized gifts, custom keychains, photo frames, mugs, cushions, lamps, name boards, and calendars. Coz your loved ones deserve the best.",
  keywords: [
    "Nipashi Gift Store",
    "Gifts Mangaluru",
    "Personalized Gifts",
    "Custom Keychains",
    "Photo Frames Mangalore",
    "Customized Mugs",
    "Name Boards",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-off-white text-text font-sans antialiased min-h-screen flex flex-col" suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
