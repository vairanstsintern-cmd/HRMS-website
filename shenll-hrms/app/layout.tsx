import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shenll HRMS | AI-Powered HR Management Platform",
  description:
    "Manage HR, payroll, attendance, performance, projects and employee operations with Shenll HRMS — a flexible, AI-powered workforce management platform.",
  keywords:
    "HRMS, HR software, payroll software, attendance management, AI HR, HR platform, employee management, workforce management, Shenll",
  authors: [{ name: "Shenll Technology Solutions Pvt. Ltd." }],
  creator: "Shenll Technology Solutions Pvt. Ltd.",
  publisher: "Shenll Technology Solutions Pvt. Ltd.",
  metadataBase: new URL("https://shenllhrms.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://shenllhrms.com",
    siteName: "Shenll HRMS",
    title: "Shenll HRMS | AI-Powered HR Management Platform",
    description:
      "Manage HR, payroll, attendance, performance, projects and employee operations with Shenll HRMS — a flexible, AI-powered workforce management platform.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shenll HRMS - AI-Powered HR Management Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shenll HRMS | AI-Powered HR Management Platform",
    description:
      "Manage HR, payroll, attendance, performance, projects and employee operations with Shenll HRMS.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://shenllhrms.com/#organization",
      name: "Shenll Technology Solutions Pvt. Ltd.",
      url: "https://shenllhrms.com",
      logo: "https://shenllhrms.com/logo.svg",
      contactPoint: {
        "@type": "ContactPoint",
        email: "info@shenllhrms.com",
        contactType: "customer support",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://shenllhrms.com/#website",
      url: "https://shenllhrms.com",
      name: "Shenll HRMS",
      publisher: {
        "@id": "https://shenllhrms.com/#organization",
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Shenll HRMS",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, iOS, Android",
      description:
        "AI-powered HR management platform for modern teams. Manage HR, payroll, attendance, performance, projects and more.",
      offers: {
        "@type": "Offer",
        url: "https://shenllhrms.com/#pricing",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${plusJakartaSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
