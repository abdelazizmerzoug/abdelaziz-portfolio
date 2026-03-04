import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f9fa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
}

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://abdelaziz-portfolio-ebwqj5eux-abdelaziz-merzougs-projects.vercel.app"),
  title: "Abdelaziz Merzoug | Full-Stack Developer, AI & Cybersecurity Specialist",
  description: "Full-stack developer specializing in AI, web development, and cybersecurity. Explore projects built with Next.js, React, and modern technologies.",
  keywords: ["developer", "full-stack developer", "AI specialist", "web developer", "cybersecurity", "Next.js", "React", "TypeScript", "portfolio", "Abdelaziz Merzoug"],
  authors: [{ name: "Abdelaziz Merzoug", url: "https://github.com/abdelazizmerzoug" }],
  creator: "Abdelaziz Merzoug",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
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
  openGraph: {
    title: "Abdelaziz Merzoug | Full-Stack Developer & AI Specialist",
    description: "Full-stack developer specializing in AI, web development, and cybersecurity. View my latest projects and expertise.",
    url: "https://abdelaziz-portfolio-ebwqj5eux-abdelaziz-merzougs-projects.vercel.app",
    siteName: "Abdelaziz Merzoug Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abdelaziz Merzoug - Full-Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdelaziz Merzoug | Full-Stack Developer & AI Specialist",
    description: "Full-stack developer specializing in AI, web development, and cybersecurity.",
    images: ["/og-image.png"],
    creator: "@abdelaziz_dev",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={geist.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
