import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clayton Sanudi | Software Engineer in Zimbabwe",
  description:
    "Clayton Sanudi is a software engineer based in Zimbabwe, specializing in full-stack development, backend systems, and APIs. Available for freelance and full-time roles.",
  keywords: ["software engineer Zimbabwe", "developer Zimbabwe", "Clayton Sanudi"],
  openGraph: {
    title: "Clayton Sanudi | Software Engineer in Zimbabwe",
    description: "Full-stack software engineer based in Zimbabwe.",
    url: "https://clayton-sanudi.vercel.app",
    siteName: "Clayton Sanudi",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${inter.variable}`}
      >
        {children}
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Clayton Sanudi",
      jobTitle: "Software Engineer",
      email: "sanudiclayton9@gmail.com",
      address: { "@type": "PostalAddress", addressCountry: "Zimbabwe" },
      url: "https:// clayton-sanudi.vercel.app",
    }),
  }}
/>
      </body>
    </html>
  );
}
