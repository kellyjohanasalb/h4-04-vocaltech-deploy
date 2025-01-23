import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Formulario from "./Pages/Fromulario";
import LandingPage from "./Pages/LandingPage"; 
import Login from "../client/src/Pages/Login/index"
import Resgistro from "../client/src/modules/auth/pages/Registronuevo"

function App() {
  return (
    <Router>
      <Routes>
         {/* Ruta para el registro */}
         <Route path="/regitro" element={<Resgistro />} />

         {/* Ruta para el login */}
         <Route path="/login" element={<Login />} />

        {/* Ruta para la Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Ruta para el Formulario */}
        <Route path="/formulario" element={<Formulario />} />
      </Routes>
    </Router>
  );
}

export default App;
