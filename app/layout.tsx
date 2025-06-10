import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Abdelaziz Merzoug - Portfolio",
  description: "Étudiant développeur passionné par l'IA, le développement web et la cybersécurité",
  keywords: ["développeur", "IA", "cybersécurité", "Next.js", "portfolio"],
  authors: [{ name: "Abdelaziz Merzoug" }],
  openGraph: {
    title: "Abdelaziz Merzoug - Portfolio",
    description: "Étudiant développeur passionné par l'IA, le développement web et la cybersécurité",
    url: "https://abdelaziz-portfolio.vercel.app",
    siteName: "Portfolio Abdelaziz",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdelaziz Merzoug - Portfolio",
    description: "Étudiant développeur passionné par l'IA, le développement web et la cybersécurité",
    images: ["/og-image.png"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
