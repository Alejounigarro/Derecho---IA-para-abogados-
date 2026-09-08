import { AppHeader } from "@/components/app-header"
import { ChatPanel } from "@/components/chat-panel"
import { LegalWarning } from "@/components/legal-warning"

export default function HomePage() {
  return (
    <div className="flex min-h-svh flex-col">
      <AppHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-8">
        <div className="flex flex-col gap-6">
          <section aria-label="Descripción">
            <h2 className="text-balance font-serif text-xl font-bold leading-snug text-foreground">
              Consulta sobre el arrendamiento de vivienda urbana en Colombia
            </h2>
            <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
              Pensado para arrendadores y arrendatarios sin formación jurídica. Formula tu pregunta en
              lenguaje cotidiano sobre incrementos del canon, terminación del contrato, preavisos,
              indemnizaciones y reclamaciones.
            </p>
          </section>

          <LegalWarning />

          <ChatPanel />
        </div>
      </main>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto max-w-3xl px-6 py-4">
          <p className="text-pretty text-xs leading-relaxed text-muted-foreground">
            Proyecto ArrendaIA · Pontificia Universidad Javeriana · Ejercicio académico
          </p>
        </div>
      </footer>
    </div>
  )
}
