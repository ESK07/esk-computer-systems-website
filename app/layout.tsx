import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CustomCursor } from "@/components/custom-cursor"
import { BlobBackground } from "@/components/blob-background"
import { PageTransition } from "@/components/page-transition"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ESK Computer Systems - Computer Repairs & IT Support in Harare, Zimbabwe",
  description:
    "Professional computer repair, IT support, web development, and networking services in Harare, Zimbabwe. Expert hardware diagnostics, software solutions, and digital services. Remote & on-site support available.",
  generator: "v0.app",
  keywords: [
    "computer repair Harare",
    "IT support Zimbabwe",
    "web development Harare",
    "computer maintenance Zimbabwe",
    "networking Harare",
    "digital solutions Zimbabwe",
    "systems development Harare",
    "PC repair Harare",
    "laptop repair Zimbabwe",
    "IT services Harare",
  ],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        <BlobBackground />
        <CustomCursor />
        <PageTransition>{children}</PageTransition>
        <Analytics />
      </body>
    </html>
  )
}
