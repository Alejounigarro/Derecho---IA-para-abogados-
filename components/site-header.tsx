import { Scale } from 'lucide-react'

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-card">
      <div className="mx-auto flex max-w-3xl items-center gap-3 px-4 py-5">
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground"
          aria-hidden="true"
        >
          <Scale className="h-6 w-6" />
        </span>
        <div className="flex flex-col">
          <h1 className="font-serif text-2xl font-semibold leading-tight text-foreground">
            ArrendaIA
          </h1>
          <p className="text-sm leading-snug text-muted-foreground text-pretty">
            Tu asistente inteligente para el arrendamiento de vivienda
          </p>
        </div>
      </div>
    </header>
  )
}
