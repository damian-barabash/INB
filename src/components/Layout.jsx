import { useEffect } from 'react'
import { Outlet, useLocation, ScrollRestoration } from 'react-router-dom'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import ScrollProgress from './ScrollProgress.jsx'
import { useApp } from '../lib/store.jsx'
import { track } from '../lib/analytics.js'

export default function Layout() {
  const { editing } = useApp()
  const loc = useLocation()

  useEffect(() => { document.body.classList.toggle('editing', editing) }, [editing])
  useEffect(() => { window.scrollTo(0, 0) }, [loc.pathname])
  useEffect(() => { if (!editing) track(loc.pathname) }, [loc.pathname, editing])

  return (
    <>
      <ScrollProgress />
      <Nav />
      <main><Outlet /></main>
      <Footer />
    </>
  )
}
