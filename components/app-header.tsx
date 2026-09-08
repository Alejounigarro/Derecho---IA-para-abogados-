import { Scale } from "lucide-react"

export function AppHeader() {
  return (
    <header className="border-b border-border bg-card">
      <div className="mx-auto flex max-w-3xl items-center gap-4 px-6 py-6">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <Scale className="h-6 w-6" aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <h1 className="font-serif text-2xl font-bold leading-tight tracking-tight text-primary">
            ArrendaIA
          </h1>
          <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
            Tu asistente inteligente para el arrendamiento de vivienda
          </p>
        </div>
      </div>
    </header>
  )
}
