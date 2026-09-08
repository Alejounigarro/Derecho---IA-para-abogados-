import type { Metadata } from "next"
import { Inter, Libre_Baskerville } from "next/font/google"
import type { ReactNode } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif-display",
  display: "swap",
})

export const metadata: Metadata = {
  title: "ArrendaIA — Tu asistente inteligente para el arrendamiento de vivienda",
  description:
    "Asistente académico para consultas sobre arrendamiento de vivienda urbana en Colombia: incrementos del canon, terminación del contrato, preavisos, indemnizaciones y reclamaciones.",
  generator: "v0.app",
}

export const viewport = {
  themeColor: "#1f2a44",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${libreBaskerville.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
