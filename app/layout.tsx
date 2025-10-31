import type React from "react"
import type { Metadata } from "next"
import { Poppins, Roboto_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
})

export const metadata: Metadata = {
  title: "Prashanth - Malware Analyst & Reverse Engineer",
  description:
    "Portfolio of SAKAPURAM PRASHANTH, Cyber-Physical Systems student at VIT Chennai, specializing in malware analysis and reverse engineering.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${poppins.className} antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
