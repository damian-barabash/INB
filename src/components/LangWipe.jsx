import { useApp } from '../lib/store.jsx'

// Orange wipe radiating from the logo (top-left), then fades — on language switch.
export default function LangWipe() {
  const { wipe, lang } = useApp()
  if (!wipe) return null
  return (
    <div className={`langwipe langwipe--${wipe}`} aria-hidden>
      <span className="langwipe__badge">{lang.toUpperCase()}</span>
    </div>
  )
}
