import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";



export const metadata: Metadata = {
  title:{
    template: "Shopcart online store",
    default: "Shopcart online store",
  },
  description:"Shopcart online store ,Your one stop shop all your needs"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-poppins antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
