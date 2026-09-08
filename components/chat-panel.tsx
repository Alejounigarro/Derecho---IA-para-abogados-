"use client"

import { useRef, useState, type FormEvent, type KeyboardEvent } from "react"
import { Scale, Send, User } from "lucide-react"

type Role = "user" | "assistant"

interface Message {
  id: string
  role: Role
  content: string
}

const TOPICS = [
  { label: "Incrementos del canon", query: "¿Cómo funciona el incremento del canon de arrendamiento?" },
  { label: "Terminación del contrato", query: "¿Cuáles son las causales de terminación del contrato?" },
  { label: "Preavisos", query: "¿Qué plazos de preaviso debo respetar?" },
  { label: "Indemnizaciones", query: "¿En qué casos aplica una indemnización?" },
  { label: "Reclamaciones", query: "¿Cómo puedo presentar una reclamación?" },
]

export function ChatPanel() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isSending, setIsSending] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  async function submitQuery(text: string) {
    const trimmed = text.trim()
    if (!trimmed || isSending) return

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmed,
    }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsSending(true)

    // Punto de integración con el backend (LangChain + RAG + Chroma + OpenRouter).
    // Aquí se reemplazará esta respuesta de demostración por la consulta real al corpus.
    await new Promise((resolve) => setTimeout(resolve, 450))

    const assistantMessage: Message = {
      id: crypto.randomUUID(),
      role: "assistant",
      content:
        "Interfaz en modo demostración. Aún no hay backend conectado, por lo que no se genera contenido jurídico. Cuando se conecte el asistente (LangChain, RAG, Chroma y OpenRouter), la respuesta se elaborará únicamente a partir del corpus normativo del proyecto.",
    }
    setMessages((prev) => [...prev, assistantMessage])
    setIsSending(false)
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    void submitQuery(input)
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.nativeEvent.isComposing || event.keyCode === 229) return
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault()
      void submitQuery(input)
    }
  }

  const isEmpty = messages.length === 0

  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-border bg-card">
      <div className="flex flex-col gap-4 border-b border-border px-5 py-4">
        <p className="text-sm font-medium text-foreground">
          Escribe tu consulta o elige un tema frecuente
        </p>
        <ul className="flex flex-wrap gap-2">
          {TOPICS.map((topic) => (
            <li key={topic.label}>
              <button
                type="button"
                onClick={() => void submitQuery(topic.query)}
                disabled={isSending}
                className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary hover:text-primary disabled:opacity-50"
              >
                {topic.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="min-h-[18rem] flex-1 space-y-5 overflow-y-auto px-5 py-6"
        aria-live="polite"
        aria-label="Conversación con ArrendaIA"
      >
        {isEmpty ? (
          <div className="flex h-full flex-col items-center justify-center gap-3 py-10 text-center">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-muted text-muted-foreground">
              <Scale className="h-5 w-5" aria-hidden="true" />
            </div>
            <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
              Plantea tu situación de arrendamiento en lenguaje sencillo. Puedes preguntar sobre
              incrementos del canon, terminación del contrato, preavisos, indemnizaciones o
              reclamaciones.
            </p>
          </div>
        ) : (
          messages.map((message) => <MessageBubble key={message.id} message={message} />)
        )}

        {isSending ? (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="inline-flex gap-1">
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground" />
            </span>
            Procesando consulta…
          </div>
        ) : null}
      </div>

      <form onSubmit={handleSubmit} className="border-t border-border bg-card px-5 py-4">
        <div className="flex flex-col gap-3">
          <label htmlFor="consulta" className="sr-only">
            Escribe tu consulta
          </label>
          <textarea
            id="consulta"
            ref={textareaRef}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={handleKeyDown}
            rows={3}
            placeholder="Ejemplo: Llevo un año en el apartamento y el arrendador quiere subir el canon un 15%. ¿Qué dice la ley?"
            className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm leading-relaxed text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20"
          />
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs text-muted-foreground">Enter para enviar · Shift + Enter para nueva línea</span>
            <button
              type="submit"
              disabled={isSending || input.trim() === ""}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              Consultar
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

function MessageBubble({ message }: { message: Message }) {
  const isUser = message.role === "user"

  return (
    <div className={`flex gap-3 ${isUser ? "flex-row-reverse" : "flex-row"}`}>
      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
          isUser ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"
        }`}
        aria-hidden="true"
      >
        {isUser ? <User className="h-4 w-4" /> : <Scale className="h-4 w-4" />}
      </div>
      <div
        className={`max-w-[80%] rounded-xl px-4 py-3 text-sm leading-relaxed ${
          isUser
            ? "bg-accent/25 text-foreground"
            : "border border-border bg-background text-foreground"
        }`}
      >
        <p className="sr-only">{isUser ? "Tú:" : "ArrendaIA:"}</p>
        <p className="text-pretty">{message.content}</p>
      </div>
    </div>
  )
}
