

/* export default function FormularioTerminado() {
  return (
    <div>FormularioTerminado</div>
  )
} */

import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import manos from "../assets/icons/High five representing team success.png";
import Navbar from "./Navbar";

const FormularioEnviado = () => {
  return (
    <>
      {/* Navbar fijo en la parte superior */}
      <header className="fixed top-0 left-0 z-50 w-full p-4 bg-white shadow-md">
        <Navbar />
      </header>

      {/* Contenedor principal con padding-top para evitar que se esconda detrás del navbar */}
      <div className="flex flex-col items-center justify-center w-full max-w-3xl min-h-screen p-6 pt-20 mx-auto text-center bg-white">
        <h1 className="text-4xl font-bold leading-tight text-center text-gray-900">
          ¡Tu formulario ha sido enviado con éxito!
        </h1>
        <p className="max-w-lg px-4 mt-4 text-lg text-gray-700 md:px-0">
          Revisaremos tus respuestas y te enviaremos un diagnóstico personalizado a tu correo y WhatsApp.
        </p>
        <Link
          to="/"
          className="flex items-center px-6 py-3 mt-6 text-sm text-white transition-all rounded-full shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 md:text-base"
        >
          Continuar explorando VocalTech <FaArrowRight className="ml-2" />
        </Link>
        <div className="flex justify-center mt-8">
          <img
            src={manos}
            alt="High five"
            className="max-w-[200px] max-h-[200px] w-full h-auto drop-shadow-lg"
          />
        </div>
      </div>
    </>
  );
};

export default FormularioEnviado;

  
  

