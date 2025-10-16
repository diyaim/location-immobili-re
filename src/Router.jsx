//configuration du routage 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//importer les fichier 
import Layout from "./Layouts.jsx";
import Accueil from './pages/Accueil.jsx'
import Apropos from './pages/Apropos.jsx'
import FicheLogement from './pages/FicheLogement.jsx'
import NotFound from './pages/NotFound.jsx'

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
         <Route element={<Layout />}>
         <Route path="/" element={<Accueil />} />
         <Route path="/a-propos" element={<Apropos />} />
         <Route path="/logement" element={<FicheLogement />} />
         <Route path="*" element={<NotFound />} /> {/* 404 */}
         </Route>
      </Routes>
    </Router>
 
)
}