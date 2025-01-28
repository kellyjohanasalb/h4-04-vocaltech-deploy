import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Formulario from "./Pages/Fromulario"; 
import ServicesPage from "./Pages/ServicesPage"; 
import Login from "./Pages/Login"; 
import Register from "./Pages/Register"; 
import LandingPage from "./Pages/LandingPage"; 

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas principales */}
        <Route path="/" element={<LandingPage />} /> 
        
        {/* Rutas de autenticación */}
        <Route path="/registro" element={<Register />} /> 
        <Route path="/login" element={<Login />} /> 
        
        {/* Rutas de servicios */}
        <Route path="/services" element={<ServicesPage />} /> 
        
        {/* Rutas de formularios */}
        <Route path="/formularioinicio" element={<Formulario />} /> 
        
        {/* Ruta 404: Página no encontrada */}
        <Route path="*" element={<div>Página no encontrada - 404</div>} /> 
      </Routes>
    </Router>
  );
}

export default App;
