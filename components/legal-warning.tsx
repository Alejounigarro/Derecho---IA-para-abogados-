import { TriangleAlert } from "lucide-react"

export function LegalWarning() {
  return (
    <div
      role="note"
      className="flex items-start gap-3 rounded-lg border border-warning-border bg-warning px-4 py-3 text-warning-foreground"
    >
      <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
      <p className="text-pretty text-sm leading-relaxed">
        <span className="font-semibold">ADVERTENCIA:</span> Esta herramienta es un ejercicio académico
        del proyecto ArrendaIA (Pontificia Universidad Javeriana) que no constituye asesoría legal ni
        sustituye la consulta con un abogado.
      </p>
    </div>
  )
}
