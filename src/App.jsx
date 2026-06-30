import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Wladze from './pages/Wladze.jsx'
import Doswiadczenie from './pages/Doswiadczenie.jsx'
import Oferta from './pages/Oferta.jsx'
import Kontakt from './pages/Kontakt.jsx'
import Privacy from './pages/Privacy.jsx'
import Admin from './admin/Admin.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/admin/*" element={<Admin />} />
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="o-nas" element={<About />} />
        <Route path="wladze" element={<Wladze />} />
        <Route path="doswiadczenie" element={<Doswiadczenie />} />
        <Route path="oferta" element={<Oferta />} />
        <Route path="kontakt" element={<Kontakt />} />
        <Route path="polityka-prywatnosci" element={<Privacy />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
