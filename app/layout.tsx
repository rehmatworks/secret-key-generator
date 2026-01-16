import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Secret Key Generator | Django, FastAPI, JWT & More",
  description:
    "Free online secret key generator for Django, FastAPI, JWT, Flask, Laravel, Rails, and more. Generate cryptographically secure keys with customizable length and characters.",
  keywords:
    "secret key generator, django secret generator online, fastapi secret key, jwt secret generator, app secret generator online, api key generator, secure key generator, laravel key generator, rails secret generator",
  openGraph: {
    title: "Secret Key Generator | Django, FastAPI, JWT & More",
    description:
      "Generate cryptographically secure secret keys for your applications. Support for Django, FastAPI, JWT, Flask, and custom configurations.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Secret Key Generator",
    description: "Generate secure secret keys for Django, FastAPI, JWT and more.",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f8f8" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
