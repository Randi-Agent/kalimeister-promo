import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://kalimeister.com"),
  title: {
    default: "Kali Meister | Tarot Readings & Spiritual Counseling",
    template: "%s | Kali Meister",
  },
  description:
    "Transformative tarot, oracle, and Lenormand readings with Kali Meister. Spiritual counseling and channeling sessions. Chattanooga, TN and virtual worldwide.",
  keywords: ["tarot reading", "oracle reading", "spiritual counseling", "Lenormand", "channeling", "Chattanooga"],
  openGraph: {
    type: "website",
    siteName: "Kali Meister",
    title: "Kali Meister | Tarot Readings & Spiritual Counseling",
    description: "Transformative tarot, oracle, and Lenormand readings. Virtual sessions available worldwide.",
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag("js",new Date());gtag("config","G-XXXXXXXXXX");`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0f0a1a] text-purple-100">
        <Nav />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
