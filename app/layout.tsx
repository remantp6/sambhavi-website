import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from '../components/common/NavBar'
import Footer from '../components/common/Footer'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: {
    default: "Sambhavi | Healthcare Nutrition",
    template: "%s - Sambhavi | Healthcare Nutrition"
  },
  description: "Sambhavi provides nutritious products for a healthier lifestyle."
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <ToastContainer position="top-right"/>
        <NavBar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
