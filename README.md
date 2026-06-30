# INB — INBI Sp. z o.o.

Redesign strony brokera ubezpieczeniowego **INBI** (inbi.pl). React + Vite + React Three Fiber, backend Supabase, deploy na GitHub Pages.

## Stack
- **Frontend:** React 18 + Vite, React Router (BrowserRouter, base `/inb/`), React Three Fiber (hero 3D), animacje na IntersectionObserver.
- **Backend:** Supabase `xqcoebgbvwbflqedhmza` (Postgres + Edge Functions + Storage).
- **Języki:** PL (domyślny) + EN. Treści w `src/lib/content.js` (fallback), nadpisywane z tabeli `content` w bazie.
- **Hosting:** GitHub Pages (`damian-barabash/inb`), workflow `.github/workflows/deploy.yml`.

## Skrypty
```bash
npm install
npm run dev       # dev server
npm run build     # produkcja → dist/
npm run preview   # podgląd dist (base /inb/)
```

## Panel administracyjny
`/admin`. Pierwszy admin: **Dmytrii / Qazxplmn_12**.
- **Edytor strony** — wizualna edycja każdej strony (klik w tekst, zmiana zdjęć z auto-konwersją do WebP), PL/EN.
- **Zgłoszenia** — formularz kontaktowy z witryny (statusy, notatki).
- **Analityka** — odsłony, unikalni odwiedzający, top strony, wykres dzienny.
- **Administratorzy** — tworzenie kolejnych adminów z uprawnieniami (w tym prawem do tworzenia adminów).

## Backend (Supabase)
- Tabele: `admins`, `admin_sessions`, `content`, `images`, `submissions`, `page_views`.
- Storage bucket `media` (publiczny, WebP).
- Edge Functions: `admin-auth` (login/sesje), `admin-api` (akcje admina, token-gated), `public-api` (formularz + analityka).
- RLS: `content`/`images` — public read; reszta tylko przez Edge (service role).

## Deploy
Push na `main` → GitHub Actions buduje i publikuje na Pages.
Po włączeniu Pages w repo (Source: GitHub Actions) strona dostępna pod `https://damian-barabash.github.io/inb/`.
Docelowo: podpięcie domeny `inbi.pl` (CNAME + zmiana `base` na `/`).
