// configuration du routage
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import des pages & layout
import Layout from "./Layouts.jsx";
import Accueil from "./pages/Accueil.jsx";
import Apropos from "./pages/Apropos.jsx";
import FicheLogement from "./pages/FicheLogement.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Accueil />} /> 
          <Route path="a-propos" element={<Apropos />} />
          <Route path="logement/:id" element={<FicheLogement />} />
          {/* le path * fonctionne si jamais url ne correspond à rien */}
          <Route path="*" element={<NotFound/>} /> 
        </Route>
      </Routes>
    </Router>
  );
}
