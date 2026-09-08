import type { Metadata, Viewport } from 'next'
import { Inter, Lora } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ArrendaIA — Tu asistente inteligente para el arrendamiento de vivienda',
  description:
    'Asistente académico para arrendadores y arrendatarios de vivienda urbana en Colombia. Consulta sobre incrementos del canon, terminación de contrato, preavisos, indemnizaciones y reclamaciones.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#1e2a4a',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${lora.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
