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
  metadataBase: new URL("https://drchavhanmultispecialitydentalclinic.com"),
  title: "Dr. Chavhan's Multispeciality Dental Clinic — Aundh, Pune",
  description: "Dr. Chavhan's Multispeciality Dental Clinic in Aundh, Pune. Advanced, painless & affordable dental care for the entire family. Call: +91 89758 89746 / 8983821993.",
  keywords: ["Dental Clinic Aundh", "Dr Chavhan Dental", "Dentist in Aundh Pune", "Root Canal Treatment Aundh", "Dental Implants Pune"],
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Dr. Chavhan's Multispeciality Dental Clinic",
    description: "Advanced, painless & affordable dental care in Aundh, Pune. Book your appointment now! Call: +91 89758 89746 / 8983821993.",
    url: "https://drchavhanmultispecialitydentalclinic.com",
    siteName: "Dr. Chavhan's Multispeciality Dental Clinic",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Chavhan's Multispeciality Dental Clinic Signboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Chavhan's Multispeciality Dental Clinic",
    description: "Advanced, painless & affordable dental care in Aundh, Pune. Call: +91 89758 89746",
    images: ["/og-image.jpg"],
  },
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
