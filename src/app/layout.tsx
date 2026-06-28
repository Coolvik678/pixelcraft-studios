import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Chavhan's Multispeciality Dental Clinic — 5.0★ Rated Care in Aundh, Pune",
  description: "Experience precision multispeciality dental treatments in Aundh, Pune led by expert hands (Dr. Guru, BDS, MDS). Advanced digital diagnostics, orthodontic aligners, implants & 100% sterilization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
