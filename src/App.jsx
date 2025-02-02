import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Formulario from "./Pages/Fromulario"; 
import ServicesPage from "./Pages/ServicesPage"; 
import Login from "./Pages/Login"; 
import Register from "./Pages/Register"; 
import LandingPage from "./Pages/LandingPage"; 
import EmprendedorForm from "./components/EmprendedorForm";
import FormEmpresaNavi from "./components/FormEmpresaNavi";
import Mvp1 from "./components/mvp1";
import { Comunicacion1 } from "./components/Comunicacion1";
import { Talento1 } from "./components/Talento1";
import { MVP2 } from "./components/MVP2";
//import FormNavigation from "./components/FormNavigation";
//import { Adminpage } from "./Pages/Adminpage";

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

        {/* Ruta Formulario Empresa */}
        <Route path="/form-empresa" element={<FormEmpresaNavi />}/>

        {/* Ruta Formulario Emprendedor */}
        <Route path="/form-emprendedor" element={<EmprendedorForm />}/>

        {/* Rutas de admin */}
        {/*<Route path="/admin" element={<Adminpage />} /> */}

        {/* Rutas de mvp1 */}
        <Route path="/mvp1" element={<Mvp1 />} /> 

        {/* Rutas de mvp1 */}
        <Route path="/mvp2" element={<MVP2 />} /> 

        {/* Rutas de talento1 */}
        <Route path="/talento1" element={<Talento1 />} /> 


        {/* Rutas de comunicacion1*/}
        <Route path="/comunicacion1" element={<Comunicacion1 />} /> 
        
        {/* Ruta 404: Página no encontrada */}
        <Route path="*" element={<div>Página no encontrada - 404</div>} /> 
      </Routes>
    </Router>
  );
}

export default App;
