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
        {/* Ruta para el registro */}
        <Route path="/registro" element={<Register />} />

        {/* Ruta para el login */}
        <Route path="/login" element={<Login />} />

        {/* Ruta para la Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Ruta para el Formulario */}
        <Route path="/formulario" element={<Formulario />} />

        {/* Ruta para la página de servicios */}
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
